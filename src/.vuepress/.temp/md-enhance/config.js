import { defineClientConfig } from "@vuepress/client";
import ChartJS from "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-shared@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "/data/data/com.termux/files/home/docs/node_modules/.pnpm/reveal.js@4.6.1/node_modules/reveal.js/dist/reveal.css";
import Presentation from "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import { injectRevealConfig } from "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Playground from "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/data/data/com.termux/files/home/docs/node_modules/.pnpm/katex@0.16.8/node_modules/katex/dist/katex.min.css";
import "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";
import { injectVuePlaygroundConfig } from "/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    injectRevealConfig(app);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    injectVuePlaygroundConfig(app);
    app.component("VuePlayground", defineAsyncComponent(() => import("/data/data/com.termux/files/home/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.237_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
  },
  setup: () => {

  }
});
