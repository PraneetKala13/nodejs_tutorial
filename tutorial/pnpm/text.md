To work with node.js at some point you will have to install packages.

To do so there are three major package managers available:
- npm
- yarn
- pnpm

They are command-line tools that help Node.js developers easily install, manage, and share packages of code for their projects.

A detailed comparison can be found [here](https://blog.logrocket.com/javascript-package-managers-compared/).
As you will see PNPM (Performant Node Package Manager) has many advantages over npm and while yarn 2 is still not very widely adopted PNPM might be the best solution.

To install PNPM you can use the following commands:

```
curl -fsSL https://get.pnpm.io/install.sh | sh -
source /root/.bashrc
```{{exec}}

You can check the installation with
```plain
pnpm -v
```{{exec}}

Node.js is already preinstalled. You can make sure it is working with
```plain
node -v
```{{exec}}