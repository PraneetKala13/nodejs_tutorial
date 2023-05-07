

```plain
docker run -v "${PWD}:/path" zricethezav/gitleaks:latest detect --source="/path" -v
```{{exec}}
```plain
docker run --rm -v "${PWD}:/repo" trufflesecurity/trufflehog filesystem /repo/src
```{{exec}}
