const Koa = require("koa");
const Router = require("@koa/router");
const serve = require("koa-static");
const session = require("koa-session");
const bodyParser = require("koa-bodyparser");
const views = require("koa-views");
const path = require("path");
const sqlite = require("better-sqlite3");
const { parse } = require("csv-parse");
const { readFileSync, createReadStream } = require("fs");
const loadCSV = require("./load_csv");
const { readFile } = require("fs/promises");

const app = new Koa();
const router = new Router();

// Initialize the session middleware
app.keys = ["secret"];
app.use(session(app));

// Initialize the body parser middleware
app.use(bodyParser())

// Initialize the SQLite database
const db = sqlite(path.join(__dirname, "database.sqlite"));

db.exec("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)");

// Insert a record into the users table
const stmt = db.prepare("INSERT INTO users (username, password) VALUES (?, ?)");
//Set admin password to 123456
stmt.run("admin", "password123");
stmt.run("user", Math.random().toString(36).substring(7));

router.get("/", async (ctx, next) => {
  const { user } = ctx.session;
  if (!user) {
    ctx.redirect("/login");
    return;
  }
  ctx.redirect("/dashboard");
});

// Define the login route
router.get("/login", async (ctx, next) => {
  const login = await readFile(path.join(__dirname, "views/login.html"), "utf8");
  ctx.set("Content-Type", "text/html");
  ctx.body = login;
});

// Define the authentication route
router.post("/auth", async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const user = db
    .prepare(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`).get();
    
  if (user) {
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
  const dashboard = await readFile(path.join(__dirname, "views/dashboard.html"), "utf8");
  ctx.set("Content-Type", "text/html");
  ctx.body = dashboard;
});

// Serve static files
app.use(serve(path.join(__dirname, "public")));


console.log("Loading CSV...");
loadCSV().then((res) => {
  router.get("/data", async (ctx, next) => {
    const { user } = ctx.session;
    if (!user) {
      ctx.unauthorized();
      return;
    }
    ctx.body = res;
  });
  // Use the router middleware
  app.use(router.routes());
  // Start the server
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
});