import { defineConfig } from 'vite';

const repository = process.env.GITHUB_REPOSITORY?.split('/').at(-1);

export default defineConfig({
  base: repository ? '/' + repository + '/' : '/portfolio/',
});
