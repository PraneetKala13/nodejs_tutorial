Another problem that can arise during development is commiting secrets to the codebase.

To prevent your keys, passwords and secrets showing up in a public repository you can use different tools.
Three popular ones are GitGuardian, GitLeaks and Trufflehog.

To use GitGuardian an account is required. The other two can be run without one.
You can compare the results of these two:
GitLeaks
```plain
docker run -v "${PWD}:/path" zricethezav/gitleaks:latest detect --source="/path" -v
```{{exec}}
Trufflehog
```plain
docker run --rm -v "${PWD}:/repo" trufflesecurity/trufflehog filesystem /repo/src
```{{exec}}
