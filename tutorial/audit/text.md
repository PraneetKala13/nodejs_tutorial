# Identify vulnerabilities in packages

PNPM includes a built-in audit tool that can be used to scan installed packages for vulnerabilities. To run an audit, simply run the following command:

```plain
pnpm audit
```{{exec}}

This will scan all installed packages and provide a report of any known vulnerabilities along with suggested fixes.