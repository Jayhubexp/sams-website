# Samuel's portfolio

React portfolio built with Vite and Tailwind CSS.

## Local development

Use Node.js 22.12+ or 24+. Node 24 LTS is recommended.

```sh
npm ci
npm run dev
```

## Verification

```sh
npm audit
npm run build
```

Commit package.json and package-lock.json together. Use npm ci to reproduce the audited dependency tree.

Tailwind 4 runs through @tailwindcss/postcss. Its CSS entry is src/index.css. The retained tailwind.config.js belongs to the earlier design and is not loaded by the current Tailwind 4 build.

The current application starts in src/main.jsx and renders src/App.jsx. The earlier page/component implementations, including src/samuel's-portfolio, are retained as historical source references. Their unused Relume UI dependencies have been removed: these packages pulled a bundled npm CLI and vulnerable transitive dependencies into the site. The current application does not import these historical templates. Reusing them requires migrating their Relume components first.
