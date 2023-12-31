import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  outExtension: 'js',
  preflight: true,
  include: ['./app/**/*.{ts,tsx,js,jsx}'],
  exclude: [],
  outdir: 'styled-system',
  jsxFramework: 'react',
  theme: {
    extend: {
      tokens: {
        fonts: {
          murecho: { value: 'Murecho Variable, sans-serif' },
        },
      },
    },
  },
  globalCss: {
    'html, body': {
      backgroundColor: 'neutral.100',
      color: 'neutral.800',
      fontFamily: 'murecho',
    },
  },
})
