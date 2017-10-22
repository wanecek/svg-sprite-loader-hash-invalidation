# Vnvalidation of sprite hash

The purpose of this repository is to provide a simplified and reproducible example of where the hash of the sprite is invalidated, even if the source does not change.

## Setting up the project

Requires `node` and `npm` to be installed and added to your PATH.

```bash
npm install
```

## Reproducing the issue

Build the project twice, and take note of the differences in the two hashes.

```bash
npm run build && npm run build
```

I've found that importing less than 6 symbols seriously diminishes the rate at which chunks are invalidated, but does however not completely dispell the issue. To try this, comment out one (or more) of the imports in `src/main.js`.