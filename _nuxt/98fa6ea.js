(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{320:function(e,t,r){var content=r(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(112).default)("e2aa96c2",content,!0,{sourceMap:!1})},321:function(e,t,r){"use strict";r(320)},322:function(e,t,r){var d=r(111)(!1);d.push([e.i,"#photos[data-v-6de09020]{display:grid;grid-template-columns:repeat(auto-fit,minmax(420px,1fr));grid-gap:.6rem;gap:.6rem;margin:.3rem;padding:.3rem;border:1px solid rgba(47,45,45,.397);border-radius:8px;overflow:hidden}.single-image-container[data-v-6de09020]{display:flex;flex-direction:column;width:100%}.image[data-v-6de09020]{height:auto}.src[data-v-6de09020]{display:table;margin:0 auto;color:#eee;height:1.8rem}.src-content[data-v-6de09020]{display:table-cell;vertical-align:middle;padding:.25rem 2.5rem;margin:.1rem}.srcTag[data-v-6de09020]{color:#ccc}.description[data-v-6de09020]{padding:.25rem 2.5rem;font-size:1.1rem;display:table-cell;vertical-align:middle}img.wider[data-v-6de09020]{aspect-ratio:16/9}img.higher[data-v-6de09020],img.wider[data-v-6de09020]{-o-object-fit:cover;object-fit:cover}img.higher[data-v-6de09020]{aspect-ratio:9/16}img.quad[data-v-6de09020]{aspect-ratio:1/1;-o-object-fit:cover;object-fit:cover}",""]),e.exports=d},324:function(e,t,r){"use strict";r.r(t);var d=r(2).a.extend({name:"ImageComponent",props:{image:{type:Object,required:!0},minWidth:{type:String,required:!1,default:"420px"}},computed:{},mounted:function(){var p=document.getElementById("photos");null!==p&&(p.style.gridTemplateColumns="repeat(auto-fit, minmax(".concat(this.minWidth,", 1fr))"));for(var e=document.querySelectorAll("[data-higher-wide]"),i=0;i<e.length;i++){var t=e[i],r=t.getAttribute("data-higher-wide");"true"===r?t.classList.add("higher"):"quad"===r||"square"===r?t.classList.add("quad"):"other"===r?t.classList.add("other"):t.classList.add("wider")}},methods:{getDateString:function(){return null==this.image.uploadDate?"":"("+this.image.uploadDate.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})+")"}}}),n=(r(321),r(55)),component=Object(n.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container card"},[r("div",{staticClass:"src"},[r("p",{staticClass:"description"},[e._v("\n      "+e._s(e.image.description)+"\n    ")])]),e._v(" "),r("div",{attrs:{id:"photos"}},e._l(e.image.url,(function(t,d){return r("div",{key:d,staticClass:"single-image-container"},[r("a",{attrs:{href:t}},[r("img",{staticClass:"image",attrs:{src:t,alt:"image.alt",height:e.image.height,"data-higher-wide":e.image.dataHigherWide}})])])})),0),e._v(" "),r("div",{staticClass:"src"},[r("span",{staticClass:"src-content"},[r("span",[r("span",{staticClass:"srcTag"},[e._v(" Source: ")]),e._v(" "),r("a",{staticClass:"nuxt-link-small",attrs:{href:e.image.pageSource||e.image.url[0]}},[e._v(e._s(e.image.displaySource||e.image.url[0]))]),e._v(" "),r("span",{staticClass:"srcTag"},[e._v(e._s(e.getDateString()))])])])])])}),[],!1,null,"6de09020",null);t.default=component.exports}}]);