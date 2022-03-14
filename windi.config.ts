import { defineConfig } from 'windicss/helpers';
import { preset } from 'twin.arco';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  darkMode: 'class',
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next/**/*'],
  },
  presets: [preset()],
  plugins: [
    typography({
      dark: true,
    }),
  ],
  safelist: ['relative'],
});
