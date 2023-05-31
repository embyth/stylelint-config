// eslint-disable-next-line import/no-extraneous-dependencies
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['./src/index', { input: './src/scss', name: 'scss' }],
  outDir: 'dist/',
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});
