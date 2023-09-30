import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as a,d as e}from"./app-50a3260f.js";const n={},o=e('<h1 id="死亡掉落机制" tabindex="-1"><a class="header-anchor" href="#死亡掉落机制" aria-hidden="true">#</a> 死亡掉落机制</h1><p>在我们的服务器中，死亡会掉落物品，但是也有不掉落物品的方式。<br> 在<a href="">商店</a>使用<a href="">节操</a>购买 <strong><a href="">「魂符」</a></strong> 并放在背包里。死亡后不会掉落物品，但会消耗一个魂符。即死亡不掉落。<br> 　　<br> 在服务器使用 <strong>「魂符」</strong> 之前，商店售卖的消耗物为 <strong><a href="">史蒂夫头颅</a></strong> 。在更新为 <strong>「魂符」</strong> 之后仍可以正常使用 <strong>史蒂夫头颅</strong>。</p><h2 id="物品掉落机制" tabindex="-1"><a class="header-anchor" href="#物品掉落机制" aria-hidden="true">#</a> 物品掉落机制</h2><p>如果在服务器里查看世界设置，你会发现死亡不掉落是开着的。原因是“死亡掉落”的效果实际上是通过 <strong>插件扣除物品与经验</strong> 实现的，其扣除机制与原版稍有不同。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>死亡的玩家会掉落价值为 <strong>“经验等级×7”</strong> 经验值的经验球，且总价值最大为100点（足够从0级升级到7级），其余的经验值会遗失。</p></div><h2 id="掉落物品还原" tabindex="-1"><a class="header-anchor" href="#掉落物品还原" aria-hidden="true">#</a> 掉落物品还原</h2><p>服务器自研插件的“Deathlog”功能，可以记录下每个玩家死亡的掉落物品，如果是因为 <strong>服务器Bug</strong> 或 <strong>非正常因素</strong> 死亡，可以找到管理员申诉并找回掉落物。</p>',7),s=[o];function h(i,c){return t(),a("div",null,s)}const g=r(n,[["render",h],["__file","死亡掉落机制.html.vue"]]);export{g as default};
