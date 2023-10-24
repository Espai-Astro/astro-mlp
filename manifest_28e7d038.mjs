import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_78163e4f.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"function o(t,e=0,s,n,i=\"\"){return new Promise(m=>{let c=document.getElementById(t),a=Math.abs(Math.floor(n/s));console.log(\"Inicia -->\",t,\"amb pasTemps de\",a,\"ms\");const r=()=>setTimeout(()=>{e<s?(e++,c.innerText=e.toString()+i,r()):(c.innerText=s.toString()+i,m(),console.log(\"Resolta -->\",t))},a);e<s&&r()})}async function f(){const t=[o(\"mostres\",0,85,2e3),o(\"valoracions\",0,350,2e3,\"k\"),o(\"comentaris\",0,325,2e3)];await Promise.allSettled(t)}f();function d(){const t=document.querySelector(\"#textosInici\"),e=document.querySelector(\"#separadorInici\"),s=document.querySelector(\"#dadesInici\");t&&e&&s&&e.setAttribute(\"d\",`M0 0 V${t.offsetHeight} H${t.offsetWidth} v${s.offsetHeight}`);const n=e.getTotalLength();e.style.strokeDasharray=n.toString(),e.style.strokeDashoffset=n.toString()}window.addEventListener(\"DOMContentLoaded\",d);window.addEventListener(\"resize\",d);\n"}],"styles":[{"type":"external","src":"/astro-mlp/_astro/biografia.b22f4f24.css"},{"type":"inline","content":"#separadorInici[data-astro-cid-uns5no55]{animation:pintarSeparador 1s forwards 1s ease-out}@keyframes pintarSeparador{to{stroke-dashoffset:0}}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/astro-mlp/_astro/biografia.b22f4f24.css"}],"routeData":{"route":"/biografia","type":"page","pattern":"^\\/biografia\\/?$","segments":[[{"content":"biografia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/biografia.astro","pathname":"/biografia","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/astro-mlp/_astro/biografia.b22f4f24.css"}],"routeData":{"route":"/galeria","type":"page","pattern":"^\\/galeria\\/?$","segments":[[{"content":"galeria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/galeria.astro","pathname":"/galeria","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/astro-mlp/_astro/biografia.b22f4f24.css"}],"routeData":{"route":"/targeta/[id]","type":"page","pattern":"^\\/targeta\\/([^/]+?)\\/?$","segments":[[{"content":"targeta","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/targeta/[id].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://espai-astro.github.io","base":"/astro-mlp","compressHTML":true,"componentMetadata":[["/home/jordi/Documents/ASTRO/astro-mlp/src/pages/biografia.astro",{"propagation":"none","containsHead":true}],["/home/jordi/Documents/ASTRO/astro-mlp/src/pages/galeria.astro",{"propagation":"none","containsHead":true}],["/home/jordi/Documents/ASTRO/astro-mlp/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/jordi/Documents/ASTRO/astro-mlp/src/pages/targeta/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/biografia@_@astro":"pages/biografia.astro.mjs","\u0000@astro-page:src/pages/galeria@_@astro":"pages/galeria.astro.mjs","\u0000@astro-page:src/pages/targeta/[id]@_@astro":"pages/targeta/_id_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/biografia.astro":"chunks/pages/biografia_ecb33c88.mjs","/src/pages/galeria.astro":"chunks/pages/galeria_b66be288.mjs","/src/pages/index.astro":"chunks/pages/index_8fd385e4.mjs","\u0000@astrojs-manifest":"manifest_28e7d038.mjs","/home/jordi/Documents/ASTRO/astro-mlp/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3769332a.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.929d7b8e.js","@astrojs/react/client.js":"_astro/client.4ae814ea.js","/home/jordi/Documents/ASTRO/astro-mlp/src/components/index":"_astro/index.f44477b2.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
