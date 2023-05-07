Maybe one could add a script here that actually greps the distinct licenses. This lists all packages:

```plain
pnpm licenses | grep -i "GPL\|Apache"
```{{exec}}