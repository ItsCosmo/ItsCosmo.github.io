# ItsCosmo.github.io
Github Pages for kleimeyer.com

1. Checkout branch *pages*

```
git checkout pages
```

2. Make changes to the site in dev mode

```
npm run dev
```

3. Commit changes and push to *pages* branch

```
git commit -a
git push
```

4. Deploy the changes to Github Pages (branch *pages-dist*)

```
npm run build
./deploy.sh
```


