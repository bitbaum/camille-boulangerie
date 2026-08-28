import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

// ESLint 9 flat config, matching the fleet's Next 16 apps. The old Next 14
// setup could not run `next lint` at all — its CI said so out loud and skipped
// the gate. The upgrade is what makes lint real here.
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
