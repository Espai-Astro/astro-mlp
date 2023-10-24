import 'react/jsx-runtime';
/* empty css                               */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, e as renderComponent } from '../astro_78163e4f.mjs';
import 'clsx';
import { c as textosInici, r as retrat, d as trass, $ as $$Layout } from './_id__d1202ee2.mjs';
/* empty css                           */import 'html-escaper';
import 'react';
import 'framer-motion';

const $$Astro$5 = createAstro("https://espai-astro.github.io");
const $$DadesInici = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$DadesInici;
  return renderTemplate`${maybeRenderHead()}<div id="dadesInici" class="p-4 pt-8 flex items-center justify-center gap-3 md:gap-12 font-thin"><div class="text-center"><h2 class="text-xl sm:text-2xl">Mostres</h2><span id="mostres" class="sm:text-2xl font-bold">0</span></div><div class="text-center"><h2 class="text-xl sm:text-2xl">Valoracions</h2><span id="valoracions" class="sm:text-2xl font-bold">0</span></div><div class="text-center"><h2 class="text-xl sm:text-xl">Comentaris</h2><span id="comentaris" class="sm:text-2xl font-bold">0</span></div></div>`;
}, "/home/jordi/Documents/ASTRO/astro-mlp/src/components/inici/DadesInici.astro", void 0);

const $$Astro$4 = createAstro("https://espai-astro.github.io");
const $$ImatgeInici = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ImatgeInici;
  const { srcRetrat, srcTra\u00E7 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-md"><figure class="flex flex-col gap-16 sm:gap-20"><div class="relative"><img${addAttribute(srcRetrat, "src")} alt="Retrat de na Hua" title="Retrat de na Hua" class="rounded-xl"><div class="absolute -bottom-1/4 right-1/2 translate-x-1/2 w-11/12"><img${addAttribute(srcTra\u00E7, "src")} alt="Traç" title="Traç"></div></div><figcaption class="text-xs px-4 leading-loose first-letter">Repellendus optio nemo illum voluptates a fugiat quidem perferendis. Ab nihil pariatur esse odit, accusamus accusantium sed. Recusandae repellat amet, ducimus illo, aperiam enim similique quam veniam ea ut tenetur officiis regulator!</figcaption></figure></div>`;
}, "/home/jordi/Documents/ASTRO/astro-mlp/src/components/inici/ImatgeInici.astro", void 0);

const $$Astro$3 = createAstro("https://espai-astro.github.io");
const $$TextosInici = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TextosInici;
  const { textosInici, classesClaus } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="textosInici" class="p-4 pb-8 sm:px-10 sm:text-lg flex flex-col gap-6">${textosInici.map(({ text, claus }, index) => {
    if (claus && claus.length > 0) {
      claus.filter((clau) => text.includes(clau)).forEach((clau) => {
        const htmlClau = ` <span class='${classesClaus}'>${clau}</span> `;
        text = text.replace(clau, htmlClau);
      });
      if (index === 0)
        return renderTemplate`<p class="first-letter">${unescapeHTML(text)}</p>`;
      return renderTemplate`<p class="leading-relaxed">${unescapeHTML(text)}</p>`;
    }
    return renderTemplate`<p class="leading-relaxed">${text}</p>`;
  })}</div>`;
}, "/home/jordi/Documents/ASTRO/astro-mlp/src/components/inici/TextosInici.astro", void 0);

const $$Astro$2 = createAstro("https://espai-astro.github.io");
const $$Inici = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Inici;
  const srcRetrat = retrat.src;
  const srcTra\u00E7 = trass.src;
  const classesClaus = "font-bold text-red-500";
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center justify-center gap-12 px-4 md:px-12 lg:px-20"><h1 class="px-2 text-3xl sm:text-4xl lg:text-5xl lg:text-center">
Entra a l'encantador <span class="font-bold uppercase text-red-500 text-2xl sm:text-3xl lg:text-4xl">món digital</span> de na Hua
</h1><div class="flex flex-col xl:flex-row gap-3"><div class="relative xl:flex-auto xl:w-2/3">${renderComponent($$result, "SeparadorInici", $$SeparadorInici, {})}${renderComponent($$result, "TextosInici", $$TextosInici, { "textosInici": textosInici, "classesClaus": classesClaus })}${renderComponent($$result, "DadesInici", $$DadesInici, {})}<!-- <TextosInici
        client:load
        textosInici={textosInici}
        classesClaus={classesClaus}
      /> --></div><div class="xl:flex-auto xl:w-1/2 flex flex-col items-center justify-center px-6">${renderComponent($$result, "ImatgeInici", $$ImatgeInici, { "srcRetrat": srcRetrat, "srcTra\xE7": srcTra\u00E7 })}</div></div></div>
...`;
}, "/home/jordi/Documents/ASTRO/astro-mlp/src/components/inici/Inici.astro", void 0);

const $$Astro$1 = createAstro("https://espai-astro.github.io");
const $$SeparadorInici = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SeparadorInici;
  return renderTemplate`${maybeRenderHead()}<svg class="absolute overflow-visible" data-astro-cid-uns5no55><defs data-astro-cid-uns5no55><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" data-astro-cid-uns5no55><stop offset="0%"${addAttribute({ stopColor: "#DC3A2B", stopOpacity: 1 }, "style")} data-astro-cid-uns5no55></stop><stop offset="100%"${addAttribute({ stopColor: "#E18510", stopOpacity: 1 }, "style")} data-astro-cid-uns5no55></stop></linearGradient></defs><path id="separadorInici" fill="none" stroke="url(#gradient)" stroke-width="4" stroke-linecap="round" data-astro-cid-uns5no55></path></svg>`;
}, "/home/jordi/Documents/ASTRO/astro-mlp/src/components/inici/SeparadorInici.astro", void 0);

const $$Astro = createAstro("https://espai-astro.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titol": "Inici-Astro-MLP" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Inici", $$Inici, {})}` })}`;
}, "/home/jordi/Documents/ASTRO/astro-mlp/src/pages/index.astro", void 0);

const $$file = "/home/jordi/Documents/ASTRO/astro-mlp/src/pages/index.astro";
const $$url = "/astro-mlp";

export { $$Index as default, $$file as file, $$url as url };
