<<<<<<< HEAD
# Operation STEINER-GATE

Initial monorepo scaffold for Operation STEINER-GATE.

This repository will contain:
- `apps/divergence-meter` (NestJS backend)
- `apps/reading-steiner` (Expo frontend)
- `libs/shared-types` (shared TypeScript interfaces)

Local setup (run on your machine):

1. Install prerequisites: Git and Node.js (recommended >= 18).
2. From the repo root, initialize git and scaffold NX:

```bash
# initialize git
git init -b main

# scaffold NX workspace in the current directory (non-interactive)
npx create-nx-workspace@latest . --preset=empty --interactive=false --packageManager=npm

# install dependencies
npm install
```

Or, to create the workspace in a new folder named `steiner-gate`:

```bash
npx create-nx-workspace@latest steiner-gate --preset=empty --interactive=false --packageManager=npm
```

After that, generate apps/libs:

```bash
# example generators (run after installing relevant Nx plugins)
npx nx g @nrwl/nest:app divergence-meter
npx nx g @nrwl/expo:app reading-steiner
npx nx g @nrwl/workspace:lib shared-types

# commit scaffold
git add .
git commit -m "chore: initialize NX monorepo scaffold"
```

Notes:
- I attempted to run `git init` in the environment but `git` is not available here; please run the commands above on your machine.
- Next I can scaffold minimal project files here (package.json, nx.json, tsconfig) so you can run `npm install` locally to finish setup—tell me if you want me to proceed.
=======
# steins-gate-initiative
>>>>>>> d218454d44af751d045c5c43930ab881d217bed1
