In this step, it is necessary to install the Performance Node Package Manager (PNPM).

NPM is a command-line tool that helps Node.js developers easily install, manage, and share packages of code for their projects. It simplifies the process of managing dependencies and sharing code, making it a crucial tool for Node.js development.

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