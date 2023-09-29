import { reveal, revealMarkdown, revealHighlight, revealMath, revealSearch, revealNotes, revealZoom } from "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export const useReveal = () => [reveal(), revealMarkdown(), revealHighlight(), revealMath(), revealSearch(), revealNotes(), revealZoom()];
