import i from "files-pipe/dist/lib/deepmerge.js";
import n from "./options/index.js";
var s=(o={})=>{for(const t in o)Object.prototype.hasOwnProperty.call(o,t)&&o[t]===!0&&(o[t]=n[t]);const e=i(n,o),r=new Set;if(typeof e.path<"u"&&(e.path instanceof Array||e.path instanceof Set))for(const t of e.path)r.add(t);return{name:"astro-convert",hooks:{"astro:build:done":async({dir:t})=>{r.size||r.add(t)}}}};export { s as default };

