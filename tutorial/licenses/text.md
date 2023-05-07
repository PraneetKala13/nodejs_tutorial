PNPM has another feature: It can list all the dependencies' licenses.

This is important if you want to make sure you are not violating any license restrictions.
You can use 
```plain
pnpm licenses ls
```{{exec}}
to list all packages with their licenses.

To make the process easier you can run
```plain
pnpm licenses ls | pcregrep -o1 "^\│\s[^\│]*\│\s(.*[^\s])\s*\│" | sort | uniq
```{{exec}}

This lists all the unique licenses used. If you find any bad licenses here you can then go look for the corresponding package and use another one.