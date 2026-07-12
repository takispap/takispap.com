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
    // takis's Fontshare/free shortlist (2026-07-12) — /tiles/fonts specimen page
    localFont('Epilogue VF', '--font-epilogue', 'epilogue-vf.woff2', '100 900'),
    localFont('Sora VF', '--font-sora', 'sora-vf.woff2', '100 800'),
    localFont('Spline Sans VF', '--font-spline', 'spline-sans-vf.woff2', '300 700'),
    localFont('Plus Jakarta Sans VF', '--font-jakarta', 'plus-jakarta-vf.woff2', '200 800'),
    localFont('Outfit VF', '--font-outfit', 'outfit-vf.woff2', '100 900'),
    localFont('Poppins VF', '--font-poppins', 'poppins-vf.woff2', '100 900'),
    localFont('General Sans VF', '--font-general', 'general-sans-vf.woff2', '200 700'),
  ],
});
