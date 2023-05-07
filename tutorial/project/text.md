Next go to the /app directory:

`cd app`{{exec}}

You can find an example application and use the editor to see the app.js file.

Now you can use PNPM to install all the dependencies that are listed in the *package.json* file.
`pnpm install`{{exec}}

After that you should be able to run the application with
`node src/app.js`{{exec}}

You can see the webpage it runs [here]({{TRAFFIC_HOST1_3000}}).

The project however is not a git repository yet. So run
```
git init
```{{exec interrupt}}

If you would add all files now this would include the node_modules. To make sure these stay out of your commit create a new .gitignore file and list node_modules:
```
echo "node_modules" > .gitignore
```{{exec}}

To commit the changes you will need the password you set for your GPG key.
```
git add .
git commit -m "Initial commit"
```{{exec}}
