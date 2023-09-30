<template><div><h1 id="信息栏" tabindex="-1"><a class="header-anchor" href="#信息栏" aria-hidden="true">#</a> 信息栏</h1>
<p>与其他基岩服务器一样，东方犬明湖的ui界面也有一个位置用来显示服务器内的各种信息。</p>
<p>但是我们的稍有些不同，我把他称作**“信息栏”**  。毫无疑问，这也是通过计分板来实现的，但使用了自定义ui去除了不必要的标题与分数。</p>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>第一个版本只有一行，只占一个角落。</p>
</div>
<h2 id="开启与关闭" tabindex="-1"><a class="header-anchor" href="#开启与关闭" aria-hidden="true">#</a> 开启与关闭</h2>
<p>使用<code v-pre>/siderbar true | false</code>开启或关闭信息栏。</p>
<h2 id="死亡坐标" tabindex="-1"><a class="header-anchor" href="#死亡坐标" aria-hidden="true">#</a> 死亡坐标</h2>
<p>玩家死亡后的坐标会记录在此处。当服务器重启后会丢失这项数据，或是你还未死亡过，都会显示“undefined”。</p>
<h2 id="未来添加的功能" tabindex="-1"><a class="header-anchor" href="#未来添加的功能" aria-hidden="true">#</a> 未来添加的功能</h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 群系显示</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 世界时间</label></li>
</ul>
</div></template>


