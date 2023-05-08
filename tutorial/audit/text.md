# Identify vulnerabilities in packages

Keeping your dependencies up to date is one of the best things you can do when it comes to security.
While an attacker of course can try to find vulnerabilities in your application, it is much easier to scan for known
vulnerabilities in packages you might be using.

PNPM includes a built-in audit tool that can be used to scan installed packages for vulnerabilities. To run an audit, simply run the following command:

```plain
pnpm audit
```{{exec}}

This will scan all installed packages and provide a report of any known vulnerabilities along with suggested fixes.

As you can see the project uses a vulnerable version of the csv-parse package. This vulnerability has long been fixed and you can either
update the dependency manually or use 
```
pnpm audit --fix
```{{exec}}

This fixes the version in the package.json. You can then run
```
pnpm install
```{{exec}}
again to install the updated package.

In production you should use a tool like [renovate](https://github.com/renovatebot/renovate) to automatically create pull requests to your repo for version updates.