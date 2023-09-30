const nt="ENTRIES",V="KEYS",T="VALUES",F="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===F)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==F).join("")}value(){return E(this._path).node.get(F)}result(){switch(this._type){case T:return this.value();case V:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],ot=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return W(e,t,s,n,i,1,o,""),n},W=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const l of e.keys())if(l===F){const a=o[d-1];a<=s&&n.set(r,[e.get(l),a])}else{let a=u;for(let h=0;h<l.length;++h,++a){const m=l[h],p=i*a,f=p-i;let c=o[p];const g=Math.max(0,a-s-1),_=Math.min(i-1,a+s);for(let y=g;y<_;++y){const b=m!==t[y],z=o[f+y]+ +b,A=o[f+y+1]+1,w=o[p+y]+1,L=o[p+y+1]=Math.min(z,A,w);L<c&&(c=L)}if(c>s)continue t}W(e.get(l),t,s,n,o,a,i,r+l)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==F&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ut(this._tree,t)}entries(){return new D(this,nt)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return ot(this._tree,t,s)}get(t){const s=I(this._tree,t);return s!==void 0?s.get(F):void 0}has(t){const s=I(this._tree,t);return s!==void 0&&s.has(F)}keys(){return new D(this,V)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,M(this._tree,t).set(F,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=M(this._tree,t);return n.set(F,s(n.get(F))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=M(this._tree,t);let o=n.get(F);return o===void 0&&n.set(F,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==F&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},I=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==F&&t.startsWith(s))return I(e.get(s),t.slice(s.length))},M=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==F&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const l=new Map;l.set(u.slice(r),d),e.set(t.slice(n,n+r),l),e.delete(u),e=l}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ut=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(F),s.size===0)R(n);else if(s.size===1){const[o,u]=s.entries().next().value;$(n,o,u)}}},R=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)R(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==F&&$(e.slice(0,-1),n,o)}},$=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],it=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},rt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,S="or",q="and",ct="and_not",lt=(e,t)=>{e.includes(t)||e.push(t)},P=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},G=({score:e},{score:t})=>t-e,ht=()=>new Map,k=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},N=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,dt={[S]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),P(n.terms,u)}}return e},[q]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);P(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[ct]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},at=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},ft=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},gt=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,ht),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},mt={k:1.2,b:.7,d:.5},pt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(rt),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof(console==null?void 0:console[e])=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:S,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:mt},Ft={combineWith:q,prefix:(e,t,s)=>t===s.length-1},_t={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},yt={..._t,...U},Y=(e,t=S)=>{if(e.length===0)return new Map;const s=t.toLowerCase();return e.reduce(dt[s])||new Map},B=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const l of Object.keys(u)){const a=u[l],h=e._fieldIds[l],m=o.get(h);if(m==null)continue;let p=m.size;const f=e._avgFieldLength[h];for(const c of m.keys()){if(!e._documentIds.has(c)){gt(e,h,c,s),p-=1;continue}const g=i?i(e._documentIds.get(c),s,e._storedFields.get(c)):1;if(!g)continue;const _=m.get(c),y=e._fieldLength.get(c)[h],b=at(_,p,e._documentCount,y,f,r),z=n*a*g*b,A=d.get(c);if(A){A.score+=z,lt(A.terms,t);const w=N(A.match,s);w?w.push(l):A.match[s]=[l]}else d.set(c,{score:z,terms:[t],match:{[s]:[l]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((c,g)=>({...c,[g]:N(n.boost,g)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:l,prefix:a}={...J.weights,...i},h=e._index.get(t.term),m=B(e,t.term,t.term,1,h,o,u,d);let p,f;if(t.prefix&&(p=e._index.atPrefix(t.term)),t.fuzzy){const c=t.fuzzy===!0?.2:t.fuzzy,g=c<1?Math.min(r,Math.round(t.term.length*c)):c;g&&(f=e._index.fuzzyGet(t.term,g))}if(p)for(const[c,g]of p){const _=c.length-t.term.length;if(!_)continue;f==null||f.delete(c);const y=a*c.length/(c.length+.3*_);B(e,t.term,c,y,g,o,u,d,m)}if(f)for(const c of f.keys()){const[g,_]=f.get(c);if(!_)continue;const y=l*c.length/(c.length+_);B(e,t.term,c,y,g,o,u,d,m)}return m},X=(e,t,s={})=>{if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(m=>X(e,m,a));return Y(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,l=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(ft(i)).map(a=>At(e,a,i));return Y(l,i.combineWith)},K=(e,t,s={})=>{const n=X(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const l=r.length,a={id:e._documentIds.get(u),score:i*l,terms:Object.keys(d),match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return o.sort(G),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of K(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(G),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if((t==null?void 0:t.fields)==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?yt:t.autoVacuum;this._options={...pt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...Ft,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:l},a)=>{if(l!==1&&l!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=k(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=k(u),h._avgFieldLength=i,h._storedFields=k(r),h._dirtCount=d||0,h._index=new C;for(const[m,p]of h._documentIds)h._idToShortId.set(p,m);for(const[m,p]of e){const f=new Map;for(const c of Object.keys(p)){let g=p[c];l===1&&(g=g.ds),f.set(parseInt(c,10),k(g))}h._index.set(m,f)}return h},Q=Object.entries,wt=Object.fromEntries,j=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(l,a=!1)=>{let h="";i===0?h=l.length>20?`… ${l.slice(-20)}`:l:a?h=l.length+i>100?`${l.slice(0,100-i)}… `:l:h=l.length>20?`${l.slice(0,20)} … ${l.slice(-20)}`:l,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const l=d+n.length;if(r(e.slice(u,d)),u=l,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},Z=/[\u4e00-\u9fa5]/g,tt=(e={})=>({fuzzy:.2,prefix:!0,processTerm:t=>{const s=t.match(Z)||[],n=t.replace(Z,"").toLowerCase();return n?[n,...s]:[...s]},...e}),xt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),kt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),et=(e,t,s={})=>{const n={};return K(t,e,tt({boost:{h:2,t:1,c:4},...s})).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),l=u.includes("#"),[a,h]=u.split(/[#@]/),m=i.sort((f,c)=>f.length-c.length).filter((f,c)=>i.slice(c+1).every(g=>!g.includes(f))),{contents:p}=n[a]??={title:"",contents:[]};if(d)p.push([{type:"customField",key:a,index:h,display:m.map(f=>o.c.map(c=>j(c,f))).flat().filter(f=>f!==null)},r]);else{const f=m.map(c=>j(o.h,c)).filter(c=>c!==null);if(f.length&&p.push([{type:l?"heading":"title",key:a,...l&&{anchor:h},display:f},r]),"t"in o)for(const c of o.t){const g=m.map(_=>j(c,_)).filter(_=>_!==null);g.length&&p.push([{type:"text",key:a,...l&&{anchor:h},display:g},r])}}}),Q(n).sort(([,o],[,u])=>"max"==="total"?xt(o,u):kt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=it(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},st=(e,t,s={})=>Ct(t,e,tt(s)).map(({suggestion:n})=>n),v=wt(Q(JSON.parse("{\"/\":{\"documentCount\":51,\"nextId\":51,\"documentIds\":{\"0\":\"v-8daa1a0e\",\"1\":\"v-8daa1a0e#🔗link\",\"2\":\"v-41364ac0\",\"3\":\"v-41364ac0#开启与关闭\",\"4\":\"v-41364ac0#死亡坐标\",\"5\":\"v-41364ac0#未来添加的功能\",\"6\":\"v-2a098836\",\"7\":\"v-2a098836#物品掉落机制\",\"8\":\"v-2a098836#掉落物品还原\",\"9\":\"v-6892a1d4\",\"10\":\"v-6892a1d4#重要调整\",\"11\":\"v-6892a1d4#一般调整\",\"12\":\"v-6892a1d4#技术性调整\",\"13\":\"v-6892a1d4#规则调整\",\"14\":\"v-2fd5eafc\",\"15\":\"v-369552b6\",\"16\":\"v-369552b6#功能列表\",\"17\":\"v-369552b6#合作社领地等级\",\"18\":\"v-369552b6#社员权限及默认权限组\",\"19\":\"v-369552b6#文字材料\",\"20\":\"v-262b5bd6\",\"21\":\"v-262b5bd6#辉夜的时间陷阱\",\"22\":\"v-262b5bd6#组织方案\",\"23\":\"v-262b5bd6#游戏规则\",\"24\":\"v-262b5bd6#获取时间的事件\",\"25\":\"v-262b5bd6#丢失时间的事件\",\"26\":\"v-262b5bd6#boss设计-弹幕、符卡及阶段\",\"27\":\"v-262b5bd6#参考材料\",\"28\":\"v-262b5bd6#近现代史\",\"29\":\"v-23ddb4c8\",\"30\":\"v-23ddb4c8#任务列表\",\"31\":\"v-23ddb4c8#【建筑师的任务】\",\"32\":\"v-23ddb4c8#【农户的任务】\",\"33\":\"v-23ddb4c8#【牧师的任务】\",\"34\":\"v-23ddb4c8#【火焰猫磷的任务】【日常】\",\"35\":\"v-23ddb4c8#【常世神的任务】【单次】\",\"36\":\"v-23ddb4c8#【上白泽慧音的任务】【单次】\",\"37\":\"v-23ddb4c8#兑换列表\",\"38\":\"v-c0b54504\",\"39\":\"v-27c49a32\",\"40\":\"v-4f734a63\",\"41\":\"v-4f734a63#东方女仆be\",\"42\":\"v-4f734a63#演示\",\"43\":\"v-24544408\",\"44\":\"v-d72a4774\",\"45\":\"v-d72a4774#🎉-首先-欢迎您阅读本文档。\",\"46\":\"v-d72a4774#📄-文档站从7个篇目进行介绍。\",\"47\":\"v-d72a4774#🔨-欢迎参与建设文档站\",\"48\":\"v-7664c5fa\",\"49\":\"v-01301096\",\"50\":\"v-14c0e823\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[2],\"1\":[1,1],\"2\":[1,12],\"3\":[1,6],\"4\":[1,6],\"5\":[1,3],\"6\":[1,16],\"7\":[1,16],\"8\":[1,11],\"9\":[2,3],\"10\":[1,51],\"11\":[1,20],\"12\":[1,16],\"13\":[1,2],\"14\":[1,11],\"15\":[1,7],\"16\":[1,27],\"17\":[1,32],\"18\":[1,12],\"19\":[1,4],\"20\":[1],\"21\":[1],\"22\":[1,32],\"23\":[1,5],\"24\":[2,3],\"25\":[2,11],\"26\":[4,16],\"27\":[1,9],\"28\":[1,5],\"29\":[1,9],\"30\":[1,14],\"31\":[2,16],\"32\":[2,16],\"33\":[2,18],\"34\":[3,5],\"35\":[3,7],\"36\":[3,7],\"37\":[1,21],\"38\":[1],\"39\":[1],\"40\":[1],\"41\":[1],\"42\":[1],\"43\":[1],\"44\":[1],\"45\":[4,4],\"46\":[3,21],\"47\":[2,6],\"48\":[1],\"49\":[1],\"50\":[1]},\"averageFieldLength\":[1.4313725490196079,12.37938596491228],\"storedFields\":{\"0\":{\"h\":\"东方犬明湖 文档站\"},\"1\":{\"h\":\"🔗Link\",\"t\":[\"常世卫星地图天界卫星地图\"]},\"2\":{\"h\":\"信息栏\",\"t\":[\"与其他基岩服务器一样，东方犬明湖的ui界面也有一个位置用来显示服务器内的各种信息。\",\"但是我们的稍有些不同，我把他称作**“信息栏”** 。毫无疑问，这也是通过计分板来实现的，但使用了自定义ui去除了不必要的标题与分数。\",\"注\",\"第一个版本只有一行，只占一个角落。\"]},\"3\":{\"h\":\"开启与关闭\",\"t\":[\"使用/siderbar true | false开启或关闭信息栏。\"]},\"4\":{\"h\":\"死亡坐标\",\"t\":[\"玩家死亡后的坐标会记录在此处。当服务器重启后会丢失这项数据，或是你还未死亡过，都会显示“undefined”。\"]},\"5\":{\"h\":\"未来添加的功能\",\"t\":[\" 群系显示\",\" 世界时间\"]},\"6\":{\"h\":\"死亡掉落机制\",\"t\":[\"在我们的服务器中，死亡会掉落物品，但是也有不掉落物品的方式。 在商店使用节操购买 「魂符」 并放在背包里。死亡后不会掉落物品，但会消耗一个魂符。即死亡不掉落。 在服务器使用 「魂符」 之前，商店售卖的消耗物为 史蒂夫头颅 。在更新为 「魂符」 之后仍可以正常使用 史蒂夫头颅。\"]},\"7\":{\"h\":\"物品掉落机制\",\"t\":[\"如果在服务器里查看世界设置，你会发现死亡不掉落是开着的。原因是“死亡掉落”的效果实际上是通过 插件扣除物品与经验 实现的，其扣除机制与原版稍有不同。\",\"相关信息\",\"死亡的玩家会掉落价值为 “经验等级×7” 经验值的经验球，且总价值最大为100点（足够从0级升级到7级），其余的经验值会遗失。\"]},\"8\":{\"h\":\"掉落物品还原\",\"t\":[\"服务器自研插件的“Deathlog”功能，可以记录下每个玩家死亡的掉落物品，如果是因为 服务器Bug 或 非正常因素 死亡，可以找到管理员申诉并找回掉落物。\"]},\"9\":{\"h\":\"1.21更新计划\",\"t\":[\"下次大量集中更新得明年了，那时候就是为1.21更新\"]},\"10\":{\"h\":\"重要调整\",\"t\":[\" 升级服务端版本（废话\",\" 恢复QQ机器人\",\" 改进行为日志，添加查询功能。\",\" 恢复生存飞行（区域飞行）。\",\" 整理创造建筑。指定创造建筑区域，所有区域外的创造建筑（除出生点）都需要在醒目处贴牌，并归档到频道。生存建筑（无论数量多少）附近的创造建筑必须有存在的理由，理由仅限“活动”、“必要且只能由创造模式实现的功能”，不包含“装饰”。\",\" 功德榜：立牌，或以皮肤添加实体，列出有较大贡献的玩家和管理。\",\" 推行新货币，只能通过任务获得。价值更高，可以买到更多数量和种类的物品，也可以兑换成普通货币。\",\" 假人：每个玩家可以同时部署一个，一次耗费1000节操，10个小时后自动下线。为了避免影响正常游玩，在线玩家可以一键下线所有假人，若假人中途被下线，按剩余时间返还节操。\",\" 公会：主要是团体背包，以及公会免费领地。\",\" 提高资源区的矿物刷新概率。\",\" 基于人体姿态估计的实时动画生成。\",\" 带白名单的火焰保护\",\" 限制易造成卡顿的设施的建造，已建造的设施仅保留一部分，均匀分布后设为公用。\",\" 改进型行为日志：可以查询，对容器的更改或破坏均会被记录具体的物品内容\"]},\"11\":{\"h\":\"一般调整\",\"t\":[\" 整理频道，每个子频道都应该有一个置顶贴，帮助了解频道。\",\" 整理群文件，把过时的文件归档并清除\",\" 统计Tag及对应用途\",\" 增加OP菜单：使用木剑调出，仅OP可用，可直接传送地标点\",\" 整理指引坐标：重复坐标保留其中之一，官方坐标按由北向南排列。\",\" 在港口城瓜地修建田间小屋用于挂机。\",\" 跨服传送改为真指令。\",\" 整理音乐盒，舍弃太乱的，提前流畅的。\",\" 菜单补充tpa\"]},\"12\":{\"h\":\"技术性调整\",\"t\":[\" 枢纽端改为NodeJS 或Python编写。\",\" 增加两种半透明方块，一种是绿色，另一种是红色，均可以被其它方块覆盖、无法被选中且破坏后不掉落任何物品。将会用于生产建筑小帮手的预览复制和填充结构，有材料显示绿色，无材料显示红色。此外，考虑加入“定位档案”，在完成粘贴的定位后，可以保存定位信息便于大型工程的建造。\"]},\"13\":{\"h\":\"规则调整\",\"t\":[\"等待更新处理记录..\"]},\"14\":{\"h\":\"7z的画饼\",\"t\":[\"不再将出生点设置在樱花岛，把出生点放在6000格以外的陆地。\",\"重新制作常世地图，地图上的元素主要以群落为主。\",\"帮助制作模组：东方女仆BE\",\"帮助画饼：合作社，任务系统等。\",\"添加自助自定义地图画功能。\"]},\"15\":{\"h\":\"合作社\",\"t\":[\"合作社是由多名玩家共同建设的一种组织。\",\"玩家可以选择在社区生产，也可以单独从事生产或商业活动。\",\"作为一种破除了封建制度的组织，同时也肩负着帮助人们远离封建思想之毒害的任务。（封建思想之毒害可参考鲁迅的十大批判）\"]},\"16\":{\"h\":\"功能列表\",\"t\":[\"大会代表：负责合作社各项管理事务，社员每增加10人，就要增设一个大会代表。合作社的日常事务均由大会代表投票执行；\",\"集体经济：由社员大会决定支出，收入与支出记录全体成员可见；\",\"集体商店：可由多人补货，所得计入集体经济；\",\"集体仓库：全部社员均可以；\",\"生产资料公有制：工具、矿车等生产资料，所有社员均可以使用。物品形式的生产资料不可以放进箱子也无法被丢出。社员下线或死亡时会自动从个人背包转移到集体仓库；实体形式的生产资料带有特殊标签，可以被破坏，玩家下线时会自动消失并回到集体仓库。\",\"权限组：使用经济、商店、仓库、生产工具等公共资源的权限\"]},\"17\":{\"h\":\"合作社领地等级\",\"t\":[\"合作社领地是免费的，根据其内部的建筑或设施建设情况，由管理员创建、评级和扩增，也可以使用集体经济扩增。领地等级影响合作社自身的评级。\",\"〇级：存在于虚无。创建合作社时自动获取的评级；\",\"一级：获得基本的领地权限保护，基础面积为8192。确定领地位置、建造不少于2个合作社建筑，（建筑总面积/2）大于225即可得到此评级；\",\"二级：领地基础面积上升到16609。建造不少于8个合作社建筑，且（建筑总面积/8）大于625 即可获得此评级；\",\"三级：领地基础面积上升到33218，获得领地内飞行权限，并解锁下一块合作社领地。建造不少于16个合作社建筑，且（建筑总面积/16）大于625 即可获得此评级；\",\"规格外：创造模式，由管理员创建\"]},\"18\":{\"h\":\"社员权限及默认权限组\",\"t\":[\"组名\",\"仓库\",\"商店\",\"投票\",\"领地\",\"生产资料\",\"权限管理\",\"访客\",\"×\",\"×\",\"×\",\"×\",\"×\",\"×\",\"一级成员\",\"社员大会\",\"√\",\"√\",\"√\",\"√\",\"√\",\"√\"]},\"19\":{\"h\":\"文字材料\",\"t\":[\"帮助玩家使用合作社这一功能，包含如下文件：\",\"给大会代表的信\",\"成员加入时的默认文本\"]},\"20\":{\"h\":\"整活方案\"},\"21\":{\"h\":\"辉夜的时间陷阱\"},\"22\":{\"h\":\"组织方案\",\"t\":[\"设单人赛季，期间可以参加单人或组队模式，每个赛季只有第一次通关有奖励；另设置多人赛季，比如一个假期或半个假期，期间可以参加对抗模式。\",\"在地图上划定比赛区域，设有独立的背包（技术跟进：wheat manager 多背包）。\",\"一切尝试从外界进入区域的实体都会被弹开，一切尝试逃离区域的实体都会被吸回。\",\"可以通过菜单传送到比赛区域，为了避免传送过程中发生意外，刚被传送的玩家会被设为观察者模式，在移动后才会切回生存模式并更换背包。\",\"屏幕中间会显示自己的时间。\",\"传送回区域外时，暂停个人的时间流逝并等待十秒。\",\"时间耗尽，被传送回进入比赛区域前的位置且不可再次进入。\",\"通关、挑战失败或赛季结束，身上和末影箱内的所有物品被集中到三个箱子，在回到比赛区域外时可以通过指令或菜单获取。\",\"奖励：蓬莱之药，提供50次死亡不掉落；一号栏称号：没想好\"]},\"23\":{\"h\":\"游戏规则\",\"t\":[\"通关条件：杀死藤原妹红。 初始时间：10分钟。\"]},\"24\":{\"h\":\"获取时间的事件：\",\"t\":[\"击败玩家 +5分钟\",\"消耗矿物\"]},\"25\":{\"h\":\"丢失时间的事件：\",\"t\":[\"时间流动；\",\"被杀死 -5分钟\",\"玩家可以组队，若队员时间耗尽，其它队员可以给予时间进行复活。\",\"最终得分=(生存时间+杀死生物200+(若游戏通关后没死亡)存活时间3))*全部难度倍率之积+获得成就的额外分数\"]},\"26\":{\"h\":\"boss设计（弹幕、符卡及阶段）\",\"t\":[\"注意弹幕不能打自己。\",\"齐射「超高速火羽射流」（自机狙，激光） 召唤四个火焰漩涡，索敌时，缓慢转向目标位置，瞄准完成后锁定方向，亮度增大一段时间后，四个漩涡同时发射火焰，火焰造成单次伤害，消失后立即开始下一轮瞄准，发射三次后，漩涡消失。\"]},\"27\":{\"h\":\"参考材料\",\"t\":[\"java版 https://www.mcbbs.net/thread-1390183-1-1.html\"]},\"28\":{\"h\":\"近现代史\",\"t\":[\"以近现代重要历史事件为象征策划活动。 可以套用传统闯关地图的模式，模拟扫黑除恶行动。\",\"大概会考完研开始做。\"]},\"29\":{\"h\":\"新手指引计划\",\"t\":[\" 首次放下箱子：提示锁箱子方法和圈地方法\",\" 设置新手村，位于6000格以外的地方，新进入的玩家可以选择在新手村做任务或直接进入樱花岛\",\" 考虑到在港口城干活几分钟就能毕业，需要完成任务才能获得港口城的权限\",\" 在每个地标传送点附近立牌介绍周边建筑\"]},\"30\":{\"h\":\"任务列表\",\"t\":[\"完成任务可以获取任务点，换取特殊物品和权限。\",\"任务要求提交的物品的数量还有待在实践中调整。\",\"分为单次任务和循环任务，单次任务只能接取一次，循环任务定期刷新，根据刷新频率可分为：日常、周常、月度、季度、年度。\",\"目前任务要求和奖励的设置并未经过测试。\"]},\"31\":{\"h\":\"【建筑师的任务】\",\"t\":[\"[普通 | 日常] 石料储备 目标：提交所有由「石头」制作的建筑方块共8组，同种类的方块最多只能提交1组 清单：石头、石砖、石砖台阶、石砖半砖、 奖励：5任务点\"]},\"32\":{\"h\":\"【农户的任务】\",\"t\":[\"[普通 | 日常] 粮食储备 目标：提交「农作物」共8组，同种类的农作物最多只能提交3组 清单：小麦、胡萝卜、土豆、 奖励：5任务点\"]},\"33\":{\"h\":\"【牧师的任务】\",\"t\":[\"[普通 | 日常] 暴徒清算 目标：消灭「怪物」共50个，同种类的怪物最多算10个。 清单：僵尸、骷髅、苦力怕、蜘蛛、末影人、 奖励：5任务点\"]},\"34\":{\"h\":\"【火焰猫磷的任务】【日常】\",\"t\":[\"灼热地狱正缺乏燃料。 目标：提交腐肉×64 奖励：任务点×3\"]},\"35\":{\"h\":\"【常世神的任务】【单次】\",\"t\":[\"目标：提交所有类型的「花」各64株 奖励：花农套装、20任务点\"]},\"36\":{\"h\":\"【上白泽慧音的任务】【单次】\",\"t\":[\"目标：提交所有类型的「树苗」各2组 奖励：植树套装、20任务点\"]},\"37\":{\"h\":\"兑换列表\",\"t\":[\"飞行权限（6000格以内）：3任务点/小时 头颅：6任务点/个\",\"快速捡尸：传送回上一个死亡点并停留一段时间，而后返回，期间免疫一切伤害 —— 18任务点/次\",\"快速定位：快速定位到附近的结构或群系，若定位失败，不扣除任务点。不同结构或群系的价格和搜索范围也不同，具体如下：\",\"古城：1000格以内，18任务点\"]},\"38\":{\"h\":\"方块\"},\"39\":{\"h\":\"武器\"},\"40\":{\"h\":\"道具\"},\"41\":{\"h\":\"东方女仆BE\"},\"42\":{\"h\":\"演示\"},\"43\":{\"h\":\"食物\"},\"44\":{\"h\":\"\"},\"45\":{\"h\":\"🎉 首先，欢迎您阅读本文档。\",\"t\":[\"此文档站可以为您介绍东方犬明湖服务器的各种玩法，解答您在服务器所遇到的各种疑问，亦是为服务器管理成员提供一个便利的查询平台。\"]},\"46\":{\"h\":\"📄 文档站从7个篇目进行介绍。\",\"t\":[\"基础篇：介绍服务器的主要机制与玩法。\",\"指令篇：使用指令是在服务器中必不可少的一项技能，了解服务器所有的指令，使用各种功能。\",\"世界篇：介绍服务器存档的关键建筑与区域划分。\",\"物品篇：了解除原版以外的、服务器特有的物品使用方法。\",\"实体篇：了解除原版以外的、服务器特有的实体。\",\"模组篇：直接了解服务器的模组列表。\",\"插件篇：服务器使用LiteLoaderBDS插件加载端，为服务器提供了便利的功能，但玩家也需要了解部分插件的用法。同时提供了方便管理使用插件的教程。\"]},\"47\":{\"h\":\"🔨 欢迎参与建设文档站\",\"t\":[\"如果您在阅读的过程中发现内容的谬误，或是想参与编辑文档，可以直接在Github界面编辑。\",\"接下来，您可以点击导航栏或搜索进行查询。\"]},\"48\":{\"h\":\"Basic\"},\"49\":{\"h\":\"Blueprint\"},\"50\":{\"h\":\"Item\"}},\"dirtCount\":0,\"index\":[[\"item\",{\"0\":{\"50\":1}}],[\"blueprint\",{\"0\":{\"49\":1}}],[\"basic\",{\"0\":{\"48\":1}}],[\"boss设计\",{\"0\":{\"26\":1}}],[\"您可以点击导航栏或搜索进行查询\",{\"1\":{\"47\":1}}],[\"接下来\",{\"1\":{\"47\":1}}],[\"欢迎参与建设文档站\",{\"0\":{\"47\":1}}],[\"欢迎您阅读本文档\",{\"0\":{\"45\":1}}],[\"为服务器提供了便利的功能\",{\"1\":{\"46\":1}}],[\"为了避免传送过程中发生意外\",{\"1\":{\"22\":1}}],[\"为了避免影响正常游玩\",{\"1\":{\"10\":1}}],[\"插件篇\",{\"1\":{\"46\":1}}],[\"插件扣除物品与经验\",{\"1\":{\"7\":1}}],[\"直接了解服务器的模组列表\",{\"1\":{\"46\":1}}],[\"模组篇\",{\"1\":{\"46\":1}}],[\"模拟扫黑除恶行动\",{\"1\":{\"28\":1}}],[\"了解除原版以外的\",{\"1\":{\"46\":2}}],[\"了解服务器所有的指令\",{\"1\":{\"46\":1}}],[\"介绍服务器存档的关键建筑与区域划分\",{\"1\":{\"46\":1}}],[\"介绍服务器的主要机制与玩法\",{\"1\":{\"46\":1}}],[\"世界篇\",{\"1\":{\"46\":1}}],[\"世界时间\",{\"1\":{\"5\":1}}],[\"指令篇\",{\"1\":{\"46\":1}}],[\"指定创造建筑区域\",{\"1\":{\"10\":1}}],[\"🔨\",{\"0\":{\"47\":1}}],[\"📄\",{\"0\":{\"46\":1}}],[\"🔗link\",{\"0\":{\"1\":1}}],[\"亦是为服务器管理成员提供一个便利的查询平台\",{\"1\":{\"45\":1}}],[\"解答您在服务器所遇到的各种疑问\",{\"1\":{\"45\":1}}],[\"此文档站可以为您介绍东方犬明湖服务器的各种玩法\",{\"1\":{\"45\":1}}],[\"此外\",{\"1\":{\"12\":1}}],[\"首先\",{\"0\":{\"45\":1}}],[\"首次放下箱子\",{\"1\":{\"29\":1}}],[\"🎉\",{\"0\":{\"45\":1}}],[\"食物\",{\"0\":{\"43\":1}}],[\"演示\",{\"0\":{\"42\":1}}],[\"道具\",{\"0\":{\"40\":1}}],[\"武器\",{\"0\":{\"39\":1}}],[\"方块\",{\"0\":{\"38\":1}}],[\"古城\",{\"1\":{\"37\":1}}],[\"具体如下\",{\"1\":{\"37\":1}}],[\"快速定位到附近的结构或群系\",{\"1\":{\"37\":1}}],[\"快速定位\",{\"1\":{\"37\":1}}],[\"快速捡尸\",{\"1\":{\"37\":1}}],[\"次\",{\"1\":{\"37\":1}}],[\"期间免疫一切伤害\",{\"1\":{\"37\":1}}],[\"期间可以参加对抗模式\",{\"1\":{\"22\":1}}],[\"期间可以参加单人或组队模式\",{\"1\":{\"22\":1}}],[\"而后返回\",{\"1\":{\"37\":1}}],[\"传送回上一个死亡点并停留一段时间\",{\"1\":{\"37\":1}}],[\"传送回区域外时\",{\"1\":{\"22\":1}}],[\"个\",{\"1\":{\"37\":1}}],[\"6任务点\",{\"1\":{\"37\":1}}],[\"6000格以内\",{\"1\":{\"37\":1}}],[\"头颅\",{\"1\":{\"37\":1}}],[\"小时\",{\"1\":{\"37\":1}}],[\"小麦\",{\"1\":{\"32\":1}}],[\"3任务点\",{\"1\":{\"37\":1}}],[\"飞行权限\",{\"1\":{\"37\":1}}],[\"兑换列表\",{\"0\":{\"37\":1}}],[\"植树套装\",{\"1\":{\"36\":1}}],[\"各2组\",{\"1\":{\"36\":1}}],[\"各64株\",{\"1\":{\"35\":1}}],[\"树苗\",{\"1\":{\"36\":1}}],[\"上白泽慧音的任务\",{\"0\":{\"36\":1}}],[\"花农套装\",{\"1\":{\"35\":1}}],[\"花\",{\"1\":{\"35\":1}}],[\"单次\",{\"0\":{\"35\":1,\"36\":1}}],[\"单次任务只能接取一次\",{\"1\":{\"30\":1}}],[\"常世神的任务\",{\"0\":{\"35\":1}}],[\"常世卫星地图天界卫星地图\",{\"1\":{\"1\":1}}],[\"灼热地狱正缺乏燃料\",{\"1\":{\"34\":1}}],[\"火焰猫磷的任务\",{\"0\":{\"34\":1}}],[\"火焰造成单次伤害\",{\"1\":{\"26\":1}}],[\"末影人\",{\"1\":{\"33\":1}}],[\"蜘蛛\",{\"1\":{\"33\":1}}],[\"苦力怕\",{\"1\":{\"33\":1}}],[\"骷髅\",{\"1\":{\"33\":1}}],[\"僵尸\",{\"1\":{\"33\":1}}],[\"共50个\",{\"1\":{\"33\":1}}],[\"共8组\",{\"1\":{\"32\":1}}],[\"怪物\",{\"1\":{\"33\":1}}],[\"暴徒清算\",{\"1\":{\"33\":1}}],[\"牧师的任务\",{\"0\":{\"33\":1}}],[\"土豆\",{\"1\":{\"32\":1}}],[\"胡萝卜\",{\"1\":{\"32\":1}}],[\"农作物\",{\"1\":{\"32\":1}}],[\"农户的任务\",{\"0\":{\"32\":1}}],[\"粮食储备\",{\"1\":{\"32\":1}}],[\"5任务点\",{\"1\":{\"31\":1,\"32\":1,\"33\":1}}],[\"5分钟\",{\"1\":{\"25\":1}}],[\"清单\",{\"1\":{\"31\":1,\"32\":1,\"33\":1}}],[\"同时提供了方便管理使用插件的教程\",{\"1\":{\"46\":1}}],[\"同时也肩负着帮助人们远离封建思想之毒害的任务\",{\"1\":{\"15\":1}}],[\"同种类的怪物最多算10个\",{\"1\":{\"33\":1}}],[\"同种类的农作物最多只能提交3组\",{\"1\":{\"32\":1}}],[\"同种类的方块最多只能提交1组\",{\"1\":{\"31\":1}}],[\"制作的建筑方块共8组\",{\"1\":{\"31\":1}}],[\"石砖半砖\",{\"1\":{\"31\":1}}],[\"石砖台阶\",{\"1\":{\"31\":1}}],[\"石砖\",{\"1\":{\"31\":1}}],[\"石头\",{\"1\":{\"31\":2}}],[\"石料储备\",{\"1\":{\"31\":1}}],[\"目标\",{\"1\":{\"31\":1,\"32\":1,\"33\":1,\"34\":1,\"35\":1,\"36\":1}}],[\"目前任务要求和奖励的设置并未经过测试\",{\"1\":{\"30\":1}}],[\"普通\",{\"1\":{\"31\":1,\"32\":1,\"33\":1}}],[\"年度\",{\"1\":{\"30\":1}}],[\"季度\",{\"1\":{\"30\":1}}],[\"月度\",{\"1\":{\"30\":1}}],[\"周常\",{\"1\":{\"30\":1}}],[\"日常\",{\"0\":{\"34\":1},\"1\":{\"30\":1,\"31\":1,\"32\":1,\"33\":1}}],[\"根据刷新频率可分为\",{\"1\":{\"30\":1}}],[\"根据其内部的建筑或设施建设情况\",{\"1\":{\"17\":1}}],[\"循环任务定期刷新\",{\"1\":{\"30\":1}}],[\"分为单次任务和循环任务\",{\"1\":{\"30\":1}}],[\"换取特殊物品和权限\",{\"1\":{\"30\":1}}],[\"完成任务可以获取任务点\",{\"1\":{\"30\":1}}],[\"任务点×3\",{\"1\":{\"34\":1}}],[\"任务要求提交的物品的数量还有待在实践中调整\",{\"1\":{\"30\":1}}],[\"任务列表\",{\"0\":{\"30\":1}}],[\"任务系统等\",{\"1\":{\"14\":1}}],[\"需要完成任务才能获得港口城的权限\",{\"1\":{\"29\":1}}],[\"考虑到在港口城干活几分钟就能毕业\",{\"1\":{\"29\":1}}],[\"考虑加入\",{\"1\":{\"12\":1}}],[\"新进入的玩家可以选择在新手村做任务或直接进入樱花岛\",{\"1\":{\"29\":1}}],[\"新手指引计划\",{\"0\":{\"29\":1}}],[\"位于6000格以外的地方\",{\"1\":{\"29\":1}}],[\"以近现代重要历史事件为象征策划活动\",{\"1\":{\"28\":1}}],[\"以及公会免费领地\",{\"1\":{\"10\":1}}],[\"近现代史\",{\"0\":{\"28\":1}}],[\"html\",{\"1\":{\"27\":1}}],[\"https\",{\"1\":{\"27\":1}}],[\"thread\",{\"1\":{\"27\":1}}],[\"true\",{\"1\":{\"3\":1}}],[\"net\",{\"1\":{\"27\":1}}],[\"mcbbs\",{\"1\":{\"27\":1}}],[\"manager\",{\"1\":{\"22\":1}}],[\"www\",{\"1\":{\"27\":1}}],[\"wheat\",{\"1\":{\"22\":1}}],[\"java版\",{\"1\":{\"27\":1}}],[\"参考材料\",{\"0\":{\"27\":1}}],[\"漩涡消失\",{\"1\":{\"26\":1}}],[\"发射三次后\",{\"1\":{\"26\":1}}],[\"消灭\",{\"1\":{\"33\":1}}],[\"消失后立即开始下一轮瞄准\",{\"1\":{\"26\":1}}],[\"消耗矿物\",{\"1\":{\"24\":1}}],[\"四个漩涡同时发射火焰\",{\"1\":{\"26\":1}}],[\"亮度增大一段时间后\",{\"1\":{\"26\":1}}],[\"瞄准完成后锁定方向\",{\"1\":{\"26\":1}}],[\"缓慢转向目标位置\",{\"1\":{\"26\":1}}],[\"索敌时\",{\"1\":{\"26\":1}}],[\"召唤四个火焰漩涡\",{\"1\":{\"26\":1}}],[\"激光\",{\"1\":{\"26\":1}}],[\"自机狙\",{\"1\":{\"26\":1}}],[\"超高速火羽射流\",{\"1\":{\"26\":1}}],[\"齐射\",{\"1\":{\"26\":1}}],[\"符卡及阶段\",{\"0\":{\"26\":1}}],[\"弹幕\",{\"0\":{\"26\":1}}],[\"全部难度倍率之积+获得成就的额外分数\",{\"1\":{\"25\":1}}],[\"全部社员均可以\",{\"1\":{\"16\":1}}],[\"存活时间3\",{\"1\":{\"25\":1}}],[\"存在于虚无\",{\"1\":{\"17\":1}}],[\"最终得分=\",{\"1\":{\"25\":1}}],[\"若定位失败\",{\"1\":{\"37\":1}}],[\"若游戏通关后没死亡\",{\"1\":{\"25\":1}}],[\"若队员时间耗尽\",{\"1\":{\"25\":1}}],[\"若假人中途被下线\",{\"1\":{\"10\":1}}],[\"被杀死\",{\"1\":{\"25\":1}}],[\"被传送回进入比赛区域前的位置且不可再次进入\",{\"1\":{\"22\":1}}],[\"时间流动\",{\"1\":{\"25\":1}}],[\"时间耗尽\",{\"1\":{\"22\":1}}],[\"丢失时间的事件\",{\"0\":{\"25\":1}}],[\"+5分钟\",{\"1\":{\"24\":1}}],[\"击败玩家\",{\"1\":{\"24\":1}}],[\"获取时间的事件\",{\"0\":{\"24\":1}}],[\"获得领地内飞行权限\",{\"1\":{\"17\":1}}],[\"获得基本的领地权限保护\",{\"1\":{\"17\":1}}],[\"初始时间\",{\"1\":{\"23\":1}}],[\"杀死藤原妹红\",{\"1\":{\"23\":1}}],[\"游戏规则\",{\"0\":{\"23\":1}}],[\"没想好\",{\"1\":{\"22\":1}}],[\"蓬莱之药\",{\"1\":{\"22\":1}}],[\"奖励\",{\"1\":{\"22\":1,\"31\":1,\"32\":1,\"33\":1,\"34\":1,\"35\":1,\"36\":1}}],[\"身上和末影箱内的所有物品被集中到三个箱子\",{\"1\":{\"22\":1}}],[\"挑战失败或赛季结束\",{\"1\":{\"22\":1}}],[\"通关条件\",{\"1\":{\"23\":1}}],[\"通关\",{\"1\":{\"22\":1}}],[\"暂停个人的时间流逝并等待十秒\",{\"1\":{\"22\":1}}],[\"屏幕中间会显示自己的时间\",{\"1\":{\"22\":1}}],[\"刚被传送的玩家会被设为观察者模式\",{\"1\":{\"22\":1}}],[\"多背包\",{\"1\":{\"22\":1}}],[\"技术跟进\",{\"1\":{\"22\":1}}],[\"技术性调整\",{\"0\":{\"12\":1}}],[\"设置新手村\",{\"1\":{\"29\":1}}],[\"设有独立的背包\",{\"1\":{\"22\":1}}],[\"设单人赛季\",{\"1\":{\"22\":1}}],[\"比如一个假期或半个假期\",{\"1\":{\"22\":1}}],[\"另设置多人赛季\",{\"1\":{\"22\":1}}],[\"另一种是红色\",{\"1\":{\"12\":1}}],[\"组织方案\",{\"0\":{\"22\":1}}],[\"组名\",{\"1\":{\"18\":1}}],[\"辉夜的时间陷阱\",{\"0\":{\"21\":1}}],[\"整活方案\",{\"0\":{\"20\":1}}],[\"整理音乐盒\",{\"1\":{\"11\":1}}],[\"整理指引坐标\",{\"1\":{\"11\":1}}],[\"整理群文件\",{\"1\":{\"11\":1}}],[\"整理频道\",{\"1\":{\"11\":1}}],[\"整理创造建筑\",{\"1\":{\"10\":1}}],[\"成员加入时的默认文本\",{\"1\":{\"19\":1}}],[\"给大会代表的信\",{\"1\":{\"19\":1}}],[\"包含如下文件\",{\"1\":{\"19\":1}}],[\"文字材料\",{\"0\":{\"19\":1}}],[\"文档站从7个篇目进行介绍\",{\"0\":{\"46\":1}}],[\"文档站\",{\"0\":{\"0\":1}}],[\"√\",{\"1\":{\"18\":6}}],[\"×\",{\"1\":{\"18\":6}}],[\"访客\",{\"1\":{\"18\":1}}],[\"权限管理\",{\"1\":{\"18\":1}}],[\"权限组\",{\"1\":{\"16\":1}}],[\"投票\",{\"1\":{\"18\":1}}],[\"创造模式\",{\"1\":{\"17\":1}}],[\"创建合作社时自动获取的评级\",{\"1\":{\"17\":1}}],[\"规格外\",{\"1\":{\"17\":1}}],[\"规则调整\",{\"0\":{\"13\":1}}],[\"三级\",{\"1\":{\"17\":1}}],[\"即可获得此评级\",{\"1\":{\"17\":2}}],[\"即死亡不掉落\",{\"1\":{\"6\":1}}],[\"8\",{\"1\":{\"17\":1}}],[\"且\",{\"1\":{\"17\":2}}],[\"且总价值最大为100点\",{\"1\":{\"7\":1}}],[\"领地\",{\"1\":{\"18\":1}}],[\"领地基础面积上升到33218\",{\"1\":{\"17\":1}}],[\"领地基础面积上升到16609\",{\"1\":{\"17\":1}}],[\"领地等级影响合作社自身的评级\",{\"1\":{\"17\":1}}],[\"二级\",{\"1\":{\"17\":1}}],[\"大概会考完研开始做\",{\"1\":{\"28\":1}}],[\"大于625\",{\"1\":{\"17\":2}}],[\"大于225即可得到此评级\",{\"1\":{\"17\":1}}],[\"大会代表\",{\"1\":{\"16\":1}}],[\"20任务点\",{\"1\":{\"35\":1,\"36\":1}}],[\"2\",{\"1\":{\"17\":1}}],[\"21更新\",{\"1\":{\"9\":1}}],[\"21更新计划\",{\"0\":{\"9\":1}}],[\"建筑师的任务\",{\"0\":{\"31\":1}}],[\"建筑总面积\",{\"1\":{\"17\":3}}],[\"建造不少于16个合作社建筑\",{\"1\":{\"17\":1}}],[\"建造不少于8个合作社建筑\",{\"1\":{\"17\":1}}],[\"建造不少于2个合作社建筑\",{\"1\":{\"17\":1}}],[\"确定领地位置\",{\"1\":{\"17\":1}}],[\"基础篇\",{\"1\":{\"46\":1}}],[\"基础面积为8192\",{\"1\":{\"17\":1}}],[\"基于人体姿态估计的实时动画生成\",{\"1\":{\"10\":1}}],[\"〇级\",{\"1\":{\"17\":1}}],[\"评级和扩增\",{\"1\":{\"17\":1}}],[\"由管理员创建\",{\"1\":{\"17\":2}}],[\"由社员大会决定支出\",{\"1\":{\"16\":1}}],[\"仓库\",{\"1\":{\"16\":1,\"18\":1}}],[\"商店\",{\"1\":{\"16\":1,\"18\":1}}],[\"商店售卖的消耗物为\",{\"1\":{\"6\":1}}],[\"实体篇\",{\"1\":{\"46\":1}}],[\"实体形式的生产资料带有特殊标签\",{\"1\":{\"16\":1}}],[\"实现的\",{\"1\":{\"7\":1}}],[\"社员大会\",{\"1\":{\"18\":1}}],[\"社员权限及默认权限组\",{\"0\":{\"18\":1}}],[\"社员下线或死亡时会自动从个人背包转移到集体仓库\",{\"1\":{\"16\":1}}],[\"社员每增加10人\",{\"1\":{\"16\":1}}],[\"物品篇\",{\"1\":{\"46\":1}}],[\"物品形式的生产资料不可以放进箱子也无法被丢出\",{\"1\":{\"16\":1}}],[\"物品掉落机制\",{\"0\":{\"7\":1}}],[\"矿车等生产资料\",{\"1\":{\"16\":1}}],[\"工具\",{\"1\":{\"16\":1}}],[\"生存时间+杀死生物200+\",{\"1\":{\"25\":1}}],[\"生存建筑\",{\"1\":{\"10\":1}}],[\"生产资料\",{\"1\":{\"18\":1}}],[\"生产资料公有制\",{\"1\":{\"16\":1}}],[\"生产工具等公共资源的权限\",{\"1\":{\"16\":1}}],[\"所有社员均可以使用\",{\"1\":{\"16\":1}}],[\"所有区域外的创造建筑\",{\"1\":{\"10\":1}}],[\"所得计入集体经济\",{\"1\":{\"16\":1}}],[\"集体仓库\",{\"1\":{\"16\":1}}],[\"集体商店\",{\"1\":{\"16\":1}}],[\"集体经济\",{\"1\":{\"16\":1}}],[\"收入与支出记录全体成员可见\",{\"1\":{\"16\":1}}],[\"就要增设一个大会代表\",{\"1\":{\"16\":1}}],[\"负责合作社各项管理事务\",{\"1\":{\"16\":1}}],[\"封建思想之毒害可参考鲁迅的十大批判\",{\"1\":{\"15\":1}}],[\"作为一种破除了封建制度的组织\",{\"1\":{\"15\":1}}],[\"也可以使用集体经济扩增\",{\"1\":{\"17\":1}}],[\"也可以单独从事生产或商业活动\",{\"1\":{\"15\":1}}],[\"也可以兑换成普通货币\",{\"1\":{\"10\":1}}],[\"玩家可以组队\",{\"1\":{\"25\":1}}],[\"玩家可以选择在社区生产\",{\"1\":{\"15\":1}}],[\"玩家下线时会自动消失并回到集体仓库\",{\"1\":{\"16\":1}}],[\"玩家死亡后的坐标会记录在此处\",{\"1\":{\"4\":1}}],[\"添加自助自定义地图画功能\",{\"1\":{\"14\":1}}],[\"添加查询功能\",{\"1\":{\"10\":1}}],[\"合作社领地是免费的\",{\"1\":{\"17\":1}}],[\"合作社领地等级\",{\"0\":{\"17\":1}}],[\"合作社的日常事务均由大会代表投票执行\",{\"1\":{\"16\":1}}],[\"合作社是由多名玩家共同建设的一种组织\",{\"1\":{\"15\":1}}],[\"合作社\",{\"0\":{\"15\":1},\"1\":{\"14\":1}}],[\"东方女仆be\",{\"0\":{\"41\":1},\"1\":{\"14\":1}}],[\"东方犬明湖的ui界面也有一个位置用来显示服务器内的各种信息\",{\"1\":{\"2\":1}}],[\"东方犬明湖\",{\"0\":{\"0\":1}}],[\"帮助玩家使用合作社这一功能\",{\"1\":{\"19\":1}}],[\"帮助画饼\",{\"1\":{\"14\":1}}],[\"帮助制作模组\",{\"1\":{\"14\":1}}],[\"帮助了解频道\",{\"1\":{\"11\":1}}],[\"地图上的元素主要以群落为主\",{\"1\":{\"14\":1}}],[\"把出生点放在6000格以外的陆地\",{\"1\":{\"14\":1}}],[\"把过时的文件归档并清除\",{\"1\":{\"11\":1}}],[\"不同结构或群系的价格和搜索范围也不同\",{\"1\":{\"37\":1}}],[\"不扣除任务点\",{\"1\":{\"37\":1}}],[\"不再将出生点设置在樱花岛\",{\"1\":{\"14\":1}}],[\"不包含\",{\"1\":{\"10\":1}}],[\"7z的画饼\",{\"0\":{\"14\":1}}],[\"等待更新处理记录\",{\"1\":{\"13\":1}}],[\"定位档案\",{\"1\":{\"12\":1}}],[\"有材料显示绿色\",{\"1\":{\"12\":1}}],[\"将会用于生产建筑小帮手的预览复制和填充结构\",{\"1\":{\"12\":1}}],[\"无材料显示红色\",{\"1\":{\"12\":1}}],[\"无法被选中且破坏后不掉落任何物品\",{\"1\":{\"12\":1}}],[\"无论数量多少\",{\"1\":{\"10\":1}}],[\"均可以被其它方块覆盖\",{\"1\":{\"12\":1}}],[\"均匀分布后设为公用\",{\"1\":{\"10\":1}}],[\"增加两种半透明方块\",{\"1\":{\"12\":1}}],[\"增加op菜单\",{\"1\":{\"11\":1}}],[\"枢纽端改为nodejs\",{\"1\":{\"12\":1}}],[\"菜单补充tpa\",{\"1\":{\"11\":1}}],[\"提交所有类型的\",{\"1\":{\"35\":1,\"36\":1}}],[\"提交所有由\",{\"1\":{\"31\":1}}],[\"提交腐肉×64\",{\"1\":{\"34\":1}}],[\"提交\",{\"1\":{\"32\":1}}],[\"提示锁箱子方法和圈地方法\",{\"1\":{\"29\":1}}],[\"提供50次死亡不掉落\",{\"1\":{\"22\":1}}],[\"提前流畅的\",{\"1\":{\"11\":1}}],[\"提高资源区的矿物刷新概率\",{\"1\":{\"10\":1}}],[\"舍弃太乱的\",{\"1\":{\"11\":1}}],[\"跨服传送改为真指令\",{\"1\":{\"11\":1}}],[\"官方坐标按由北向南排列\",{\"1\":{\"11\":1}}],[\"重新制作常世地图\",{\"1\":{\"14\":1}}],[\"重复坐标保留其中之一\",{\"1\":{\"11\":1}}],[\"重要调整\",{\"0\":{\"10\":1}}],[\"可由多人补货\",{\"1\":{\"16\":1}}],[\"可直接传送地标点\",{\"1\":{\"11\":1}}],[\"可以直接在github界面编辑\",{\"1\":{\"47\":1}}],[\"可以套用传统闯关地图的模式\",{\"1\":{\"28\":1}}],[\"可以通过菜单传送到比赛区域\",{\"1\":{\"22\":1}}],[\"可以被破坏\",{\"1\":{\"16\":1}}],[\"可以保存定位信息便于大型工程的建造\",{\"1\":{\"12\":1}}],[\"可以查询\",{\"1\":{\"10\":1}}],[\"可以买到更多数量和种类的物品\",{\"1\":{\"10\":1}}],[\"可以找到管理员申诉并找回掉落物\",{\"1\":{\"8\":1}}],[\"可以记录下每个玩家死亡的掉落物品\",{\"1\":{\"8\":1}}],[\"仅op可用\",{\"1\":{\"11\":1}}],[\"统计tag及对应用途\",{\"1\":{\"11\":1}}],[\"每个赛季只有第一次通关有奖励\",{\"1\":{\"22\":1}}],[\"每个子频道都应该有一个置顶贴\",{\"1\":{\"11\":1}}],[\"每个玩家可以同时部署一个\",{\"1\":{\"10\":1}}],[\"一号栏称号\",{\"1\":{\"22\":1}}],[\"一切尝试逃离区域的实体都会被吸回\",{\"1\":{\"22\":1}}],[\"一切尝试从外界进入区域的实体都会被弹开\",{\"1\":{\"22\":1}}],[\"一级成员\",{\"1\":{\"18\":1}}],[\"一级\",{\"1\":{\"17\":1}}],[\"一种是绿色\",{\"1\":{\"12\":1}}],[\"一般调整\",{\"0\":{\"11\":1}}],[\"一次耗费1000节操\",{\"1\":{\"10\":1}}],[\"对容器的更改或破坏均会被记录具体的物品内容\",{\"1\":{\"10\":1}}],[\"改进型行为日志\",{\"1\":{\"10\":1}}],[\"改进行为日志\",{\"1\":{\"10\":1}}],[\"已建造的设施仅保留一部分\",{\"1\":{\"10\":1}}],[\"限制易造成卡顿的设施的建造\",{\"1\":{\"10\":1}}],[\"带白名单的火焰保护\",{\"1\":{\"10\":1}}],[\"主要是团体背包\",{\"1\":{\"10\":1}}],[\"公会\",{\"1\":{\"10\":1}}],[\"按剩余时间返还节操\",{\"1\":{\"10\":1}}],[\"假人\",{\"1\":{\"10\":1}}],[\"价值更高\",{\"1\":{\"10\":1}}],[\"只能通过任务获得\",{\"1\":{\"10\":1}}],[\"只占一个角落\",{\"1\":{\"2\":1}}],[\"推行新货币\",{\"1\":{\"10\":1}}],[\"列出有较大贡献的玩家和管理\",{\"1\":{\"10\":1}}],[\"立牌\",{\"1\":{\"10\":1}}],[\"功德榜\",{\"1\":{\"10\":1}}],[\"功能列表\",{\"0\":{\"16\":1}}],[\"功能\",{\"1\":{\"8\":1}}],[\"装饰\",{\"1\":{\"10\":1}}],[\"必要且只能由创造模式实现的功能\",{\"1\":{\"10\":1}}],[\"活动\",{\"1\":{\"10\":1}}],[\"理由仅限\",{\"1\":{\"10\":1}}],[\"附近的创造建筑必须有存在的理由\",{\"1\":{\"10\":1}}],[\"并解锁下一块合作社领地\",{\"1\":{\"17\":1}}],[\"并归档到频道\",{\"1\":{\"10\":1}}],[\"并放在背包里\",{\"1\":{\"6\":1}}],[\"都需要在醒目处贴牌\",{\"1\":{\"10\":1}}],[\"都会显示\",{\"1\":{\"4\":1}}],[\"除出生点\",{\"1\":{\"10\":1}}],[\"区域飞行\",{\"1\":{\"10\":1}}],[\"恢复生存飞行\",{\"1\":{\"10\":1}}],[\"恢复qq机器人\",{\"1\":{\"10\":1}}],[\"废话\",{\"1\":{\"10\":1}}],[\"升级服务端版本\",{\"1\":{\"10\":1}}],[\"那时候就是为1\",{\"1\":{\"9\":1}}],[\"下次大量集中更新得明年了\",{\"1\":{\"9\":1}}],[\"18任务点\",{\"1\":{\"37\":2}}],[\"1390183\",{\"1\":{\"27\":1}}],[\"1000格以内\",{\"1\":{\"37\":1}}],[\"10分钟\",{\"1\":{\"23\":1}}],[\"10个小时后自动下线\",{\"1\":{\"10\":1}}],[\"16\",{\"1\":{\"17\":1}}],[\"1\",{\"0\":{\"9\":1},\"1\":{\"27\":2}}],[\"非正常因素\",{\"1\":{\"8\":1}}],[\"或是想参与编辑文档\",{\"1\":{\"47\":1}}],[\"或是你还未死亡过\",{\"1\":{\"4\":1}}],[\"或python编写\",{\"1\":{\"12\":1}}],[\"或以皮肤添加实体\",{\"1\":{\"10\":1}}],[\"或\",{\"1\":{\"8\":1}}],[\"服务器使用liteloaderbds插件加载端\",{\"1\":{\"46\":1}}],[\"服务器特有的实体\",{\"1\":{\"46\":1}}],[\"服务器特有的物品使用方法\",{\"1\":{\"46\":1}}],[\"服务器bug\",{\"1\":{\"8\":1}}],[\"服务器自研插件的\",{\"1\":{\"8\":1}}],[\"如果您在阅读的过程中发现内容的谬误\",{\"1\":{\"47\":1}}],[\"如果是因为\",{\"1\":{\"8\":1}}],[\"如果在服务器里查看世界设置\",{\"1\":{\"7\":1}}],[\"deathlog\",{\"1\":{\"8\":1}}],[\"掉落物品还原\",{\"0\":{\"8\":1}}],[\"其它队员可以给予时间进行复活\",{\"1\":{\"25\":1}}],[\"其余的经验值会遗失\",{\"1\":{\"7\":1}}],[\"其扣除机制与原版稍有不同\",{\"1\":{\"7\":1}}],[\"足够从0级升级到7级\",{\"1\":{\"7\":1}}],[\"经验值的经验球\",{\"1\":{\"7\":1}}],[\"经验等级×7\",{\"1\":{\"7\":1}}],[\"相关信息\",{\"1\":{\"7\":1}}],[\"的效果实际上是通过\",{\"1\":{\"7\":1}}],[\"原因是\",{\"1\":{\"7\":1}}],[\"你会发现死亡不掉落是开着的\",{\"1\":{\"7\":1}}],[\"之后仍可以正常使用\",{\"1\":{\"6\":1}}],[\"之前\",{\"1\":{\"6\":1}}],[\"史蒂夫头颅\",{\"1\":{\"6\":2}}],[\"魂符\",{\"1\":{\"6\":3}}],[\"在每个地标传送点附近立牌介绍周边建筑\",{\"1\":{\"29\":1}}],[\"在回到比赛区域外时可以通过指令或菜单获取\",{\"1\":{\"22\":1}}],[\"在移动后才会切回生存模式并更换背包\",{\"1\":{\"22\":1}}],[\"在地图上划定比赛区域\",{\"1\":{\"22\":1}}],[\"在完成粘贴的定位后\",{\"1\":{\"12\":1}}],[\"在港口城瓜地修建田间小屋用于挂机\",{\"1\":{\"11\":1}}],[\"在线玩家可以一键下线所有假人\",{\"1\":{\"10\":1}}],[\"在更新为\",{\"1\":{\"6\":1}}],[\"在服务器使用\",{\"1\":{\"6\":1}}],[\"在商店使用节操购买\",{\"1\":{\"6\":1}}],[\"在我们的服务器中\",{\"1\":{\"6\":1}}],[\"死亡\",{\"1\":{\"8\":1}}],[\"死亡的玩家会掉落价值为\",{\"1\":{\"7\":1}}],[\"死亡掉落\",{\"1\":{\"7\":1}}],[\"死亡掉落机制\",{\"0\":{\"6\":1}}],[\"死亡后不会掉落物品\",{\"1\":{\"6\":1}}],[\"死亡会掉落物品\",{\"1\":{\"6\":1}}],[\"死亡坐标\",{\"0\":{\"4\":1}}],[\"群系显示\",{\"1\":{\"5\":1}}],[\"未来添加的功能\",{\"0\":{\"5\":1}}],[\"undefined\",{\"1\":{\"4\":1}}],[\"当服务器重启后会丢失这项数据\",{\"1\":{\"4\":1}}],[\"false开启或关闭信息栏\",{\"1\":{\"3\":1}}],[\"|\",{\"1\":{\"3\":1,\"31\":1,\"32\":1,\"33\":1}}],[\"siderbar\",{\"1\":{\"3\":1}}],[\"使用各种功能\",{\"1\":{\"46\":1}}],[\"使用指令是在服务器中必不可少的一项技能\",{\"1\":{\"46\":1}}],[\"使用经济\",{\"1\":{\"16\":1}}],[\"使用木剑调出\",{\"1\":{\"11\":1}}],[\"使用\",{\"1\":{\"3\":1}}],[\"开启与关闭\",{\"0\":{\"3\":1}}],[\"第一个版本只有一行\",{\"1\":{\"2\":1}}],[\"注意弹幕不能打自己\",{\"1\":{\"26\":1}}],[\"注\",{\"1\":{\"2\":1}}],[\"但玩家也需要了解部分插件的用法\",{\"1\":{\"46\":1}}],[\"但会消耗一个魂符\",{\"1\":{\"6\":1}}],[\"但是也有不掉落物品的方式\",{\"1\":{\"6\":1}}],[\"但是我们的稍有些不同\",{\"1\":{\"2\":1}}],[\"但使用了自定义ui去除了不必要的标题与分数\",{\"1\":{\"2\":1}}],[\"这也是通过计分板来实现的\",{\"1\":{\"2\":1}}],[\"毫无疑问\",{\"1\":{\"2\":1}}],[\"我把他称作\",{\"1\":{\"2\":1}}],[\"与其他基岩服务器一样\",{\"1\":{\"2\":1}}],[\"信息栏\",{\"0\":{\"2\":1},\"1\":{\"2\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n}})=>{e==="suggest"?self.postMessage(st(t,v[s],n)):e==="search"?self.postMessage(et(t,v[s],n)):self.postMessage({suggestions:st(t,v[s],n),results:et(t,v[s],n)})};
//# sourceMappingURL=index.js.map