const Koa = require("koa");
const Router = require("@koa/router");
const serve = require("koa-static");
const session = require("koa-session");
const bodyParser = require("koa-bodyparser");
const views = require("koa-views");
const path = require("path");
const sqlite = require("better-sqlite3");

const app = new Koa();
const router = new Router();

// Initialize the session middleware
app.keys = ["secret"];
app.use(session(app));

// Initialize the body parser middleware
app.use(bodyParser())

// Initialize the views middleware with the EJS engine
app.use(
  views(`${__dirname}/views`, {
    map: {
      html: "pug",
    },
  })
);

// Initialize the SQLite database
const db = sqlite(path.join(__dirname, "database.sqlite"));

db.exec("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)");

// Insert a record into the users table
const stmt = db.prepare("INSERT INTO users (username, password) VALUES (?, ?)");
//Set admin password to 123456
stmt.run("admin", "password123");

// Define the login route
router.get("/login", async (ctx, next) => {
  await ctx.render("login");
});

// Define the authentication route
router.post("/auth", async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const user = db
    .prepare("SELECT * FROM users WHERE username = ?")
    .get(username);

  if (user && user.password === password) {
    ctx.session.user = user;
    ctx.redirect("/dashboard");
  } else {
    ctx.redirect("/login");
  }
});

// Define the dashboard route
router.get("/dashboard", async (ctx, next) => {
  const { user } = ctx.session;
  if (!user) {
    ctx.redirect("/login");
    return;
  }
  await ctx.render("dashboard", { user });
});

// Serve static files
app.use(serve(path.join(__dirname, "public")));

// Use the router middleware
app.use(router.routes());

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
