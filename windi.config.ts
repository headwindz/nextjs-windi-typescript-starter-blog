import { defineConfig } from 'windicss/helpers';
import { preset } from 'twin.arco';

export default defineConfig({
  darkMode: 'class',
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next/**/*'],
  },
  presets: [preset()],
  plugins: [require('windicss/plugin/typography')],
});
