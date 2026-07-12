// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

/** Self-hosted variable fonts (src/assets/fonts, woff2 latin slices, all SIL OFL).
 *  Phase 1 style-tile stand-ins — the picked direction's face may be upgraded
 *  to a premium foundry licence (takis decision, see design.md when it lands). */
const localFont = (name, cssVariable, file, weight, stretch) => ({
  provider: fontProviders.local(),
  name,
  cssVariable,
  options: {
    variants: [
      {
        src: [`./src/assets/fonts/${file}`],
        weight,
        style: 'normal',
        ...(stretch ? { stretch } : {}),
      },
    ],
  },
});

// https://astro.build/config
export default defineConfig({
  fonts: [
    localFont('Archivo VF', '--font-archivo', 'archivo-vf.woff2', '100 900', '62% 125%'),
    localFont('Fraunces VF', '--font-fraunces', 'fraunces-vf.woff2', '100 900'),
    localFont('Bricolage Grotesque VF', '--font-bricolage', 'bricolage-vf.woff2', '200 800', '75% 100%'),
    localFont('Instrument Sans VF', '--font-instrument', 'instrument-sans-vf.woff2', '400 700', '75% 100%'),
    localFont('JetBrains Mono VF', '--font-mono', 'jetbrains-mono-vf.woff2', '100 800'),
  ],
});
