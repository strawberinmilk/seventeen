# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

### eslint

```
yarn add -D eslint eslint-plugin-vue @vue/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
@eslint/create-config@0.4.6  
Ok to proceed? (y) y  
√ How would you like to use ESLint? · style  
√ What type of modules does your project use? · esm  
√ Which framework does your project use? · vue  
√ Does your project use TypeScript? · No / Yes  
√ Where does your code run? · browser  
√ How would you like to define a style for your project? · guide  
√ Which style guide do you want to follow? · standard-with-typescript  
√ What format do you want your config file to be in? · JavaScript  
Checking peerDependencies of eslint-config-standard-with-typescript@latest
The config that you've selected requires the following dependencies:

eslint-plugin-vue@latest eslint-config-standard-with-typescript@latest @typescript-eslint/eslint-plugin@^6.4.0 eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 || ^16.0.0 eslint-plugin-promise@^6.0.0 typescript@\*  
√ Would you like to install them now? · No / Yes  
√ Which package manager do you want to use? · yarn

### prettier

yarn add -D prettier eslint-plugin-prettier @vue/eslint-config-prettier
