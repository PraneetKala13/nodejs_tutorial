If you take a look at the code in the app.js file you might notice that it is not exactly written in a good style.

ESLint is a tool that helps JavaScript developers write better code by finding and fixing common mistakes, enforcing consistent style, and preventing potential errors and security issues. Using ESLint can improve code quality and catch errors early, making it a valuable tool for any JavaScript developer.

The required packages to use ESLint have already been installed since they are marked as DevDependencies in the package.json.

You can take a look at the .eslintrc.json. It contains the configuration for ESLint, defining for example what style guide to use.
Especially important is line 8 where the security plugin is loaded. It includes rules for static application security testing.

To run it you can use
`pnpm eslint .`{{exec}}

As you can see the project contains many errors and warnings. You can fix some of them
`pnpm eslint --fix .`{{exec}}

Some remain to be fixed manually however. These should be unnecessary variable declarations and some (security) warnings. Can you fix all of them?

After you fixed them commit your changes by running
```
git commit -am "Fixing eslint warnings"
```{{exec}}

You can use 
```
git log --show-signature
```{{exec}}
to see the signed commit.