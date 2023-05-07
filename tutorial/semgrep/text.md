Semgrep is a free, open-source static analysis tool for finding security vulnerabilities and bugs in source code. It is designed to be easy to use and fast, with support for many programming languages and frameworks.

It can be easily run in a docker container and you can use it in addition to ESLint to perform more security checks.

```plain
docker run --rm -v "${PWD}:/src" returntocorp/semgrep semgrep --config=auto
```{{exec}}

In our case it doesn't find any warnings or errors.