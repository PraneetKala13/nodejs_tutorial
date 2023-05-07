A word of warning here:

While automated testing can help prevent a lot of security risks it is only some assistance.
You HAVE to make sure yourself that you write secure code!

Did you notice the SQL injection vulnerability in the application?
ESLint and Semgrep didn't.

Start the application again with
`node src/app.js`{{exec}}.
Then try logging in with the username `admin';--` and any password.

Can you fix it?