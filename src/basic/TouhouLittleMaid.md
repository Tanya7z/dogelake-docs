
这是一个自研模组，发布帖：https://www.minebbs.com/resources/touhou-little-maid.6662/edit

### 一、总览

#### 东方Project

东方 Project 是日本同人社团上海爱丽丝幻乐团制作的一系列同人作品，系列以清版弹幕射击游戏为主。

Touhou 百科：https://en.touhouwiki.net/wiki/Touhou_Wiki

#### 女仆妖精

<span>&#8195;</span>这个模组添加了一种怪物，怪物的掉落物是重要的合成材料。

<img style="margin-left:21px" src=https://www.minebbs.com/attachments/fairy-jpg.53111>

<span>&#8195;</span>在任意群系的夜晚生成，会以弹幕攻击玩家。

#### Power 道具

<span>&#8195;</span>Power 道具是本模组重要的资源，通过杀死女仆妖精来获取。能够用于祭坛合成。

<span>&#8195;</span>也可以在沙漠神殿的箱子里找到得点道具，砸在地上可以爆出大量P点。

<span>&#8195;</span>当你手持御币时，在物品栏上方就能看到 power 值。Power 值最大为 5，超过此数值不再增长。

<img style="margin-left:21px" src=https://www.minebbs.com/attachments/power-jpg.53112>



#### 御币与弹幕

<span>&#8195;</span>御币是一个普通的远程武器。可以射出弹幕。

<span>&#8195;</span>潜行状态下与任意方块交互，即可切换弹种。同时会收到当前弹种的提示。

<span>&#8195;</span>因技术限制，由合成台制作的御币需要先对方块使用一下才能激活。

<img style="margin-left:21px" src=https://www.minebbs.com/attachments/craft_gohei-jpg.53033>

<span>&#8195;</span>御币还是构建多方块祭坛的重要工具。

#### 多方块祭坛

<span>&#8195;</span>祭坛是本模组用于合成所必需的多方块结构。祭坛的合成表可以在下文查询，合成同时还需要玩家的power值。

<img style="margin-left:21px" src=https://www.minebbs.com/attachments/altar_0-jpg.53118>

<span>&#8195;</span>使用御币右击第四层中间偏左的红色羊毛正面，能够构建祭坛。

<img style="margin-left:21px" src=https://www.minebbs.com/attachments/altar-jpg.53031>

<span>&#8195;</span>你可以右击六个橡木柱子的顶端来放置物品。在柱子下跳起捡回物品。当物品完全放置且玩家的 Power 值足够，祭坛就能触发合成。

因为缺少 Power 而导致的合成中断，在获取足够 Power 以后，重新放置任意材料可以重新触发合成。

<span>&#8195;</span>无需担心忘记取下材料，在祭坛上的物品是不会自动消失的。

#### 祭坛合成表

目前仅有少量合成表被加入，如有需要，可以使用最后一章介绍的方法添加自定义的合成。

+ 御币：木棍×3 + 纸×3 + P点×0.15

更为廉价的御币合成方式。

+ 修复御币：御币 + 纸×2 + P点×0.10

因为御币必须带上无限附魔，无法使用经验修补修复，这里提供了一种没有经验惩罚的修复模式。

+ 召唤雷电：烈焰粉×3 + 火药×3 + P点×0.20

轰！



### 测试弹幕

<span>&#8195;</span>你可以召唤一个测试用妖精女仆，然后用命名牌将其命名为“thlm:debug<n>”使其发射特殊的测试版弹幕。目前，<n>可以为以下值：

0：太阳弹；

<img style="margin-left:21px" src=https://www.minebbs.com/attachments/debug_0-jpg.53113>

1：40发一组的自机狙，设有一定的偏移；

<img style="margin-left:21px" src=https://www.minebbs.com/attachments/debug_1-jpg.53114>

2：多层扇形弹；

<img style="margin-left:21px" src=https://www.minebbs.com/attachments/debug_2-jpg.53115>

3：短促高火力星弹

<img style="margin-left:21px" src=https://www.minebbs.com/attachments/debug_3-jpg.53116>



### 自定义

#### 祭坛合成表

<span>&#8195;</span>祭坛的合成表在行为包的 "scripts/recipes" 目录下定义。要添加一个新的合成表，只需要参照如下说明添加与修改文件：

1. 创建定义文件：在recipe目录下新建一个js文件，建议复制已有的文件，可以避免一些未知的错误。如"craft_hakurei_gohei.js"

2. 定义材料与产物

   材料在"ingredients"对象内指定，包括"tag"与"item"两种类型。为"tag"时，符合此tag的所有物品均可被识别为合成材料；为"item"时，物品的名称与定义一致才会被识别。

   消耗P点量由"power"指定，可以是0到5的任意两位小数。

   产物在"output"对象内指定，为"minecraft:item"时，代表产生物品，物品的类型由"id"指定，数量由"Count"指定，附魔由"Enchantments"指定

3. 更新导入接口

   打开recipes目录下的index.js，加入一行代码。<name>可以是任意没有被其它合成表使用的名称，<file_name>则是第一步创建的文件的名称。

   ``` import {recipe as <name>} from "./craft/<file_name>" ```



   在"recipeList"数组中新增一项：<name>。

4. 定义物品标签（可选）

   物品标签是代表多个物品的一个名称，打开文件"tag_define.js"，照着已有的定义添加即可。

#### 弹幕

<span>&#8195;</span>为御币增加新弹幕种类 <命名符号> 需要添加和修改的文件：

BP

+ entities：复制 danmaku_basic_pellet.json，修改文件名和标识符，名称格式为"thlmd:danmaku_basic_<命名符号>"

+ items：复制 hakurei_gohei_pellet.json，修改文件名和标识符，名称、ammunition，格式为"hakurei_gohei_<命名符号>"；修改"minecraft:projectile"属性下的弹幕名称，格式为"thlmd:danmaku_basic_<命名符号>"

+ scripts/entities/danmaku/main.js：在DanmakuTypes新增spellcard标识符及对应<命名符号>

+ scripts/recipes/tag_define.js：在"thlm:gohei" 补充物品标识符。格式为 "hakurei_gohei_<命名符号>"

RP

+ models/entity/damaku_basic.json 在文件内追加弹幕的模型，格式为"hakurei_gohei_<命名符号>"

+ attachables：复制 hakurei_gohei_pellet.json，修改文件名、标识符

+ entity：复制damaku_basic_pellet.json，修改文件名、标识符、texture和geometry，标识符格式为"geometry.danmaku_basic_<命名符号>"

+ textures/entity：补充弹幕材质。

+ texts/en_us 和 zh_CN：暂无。



未完待续......

