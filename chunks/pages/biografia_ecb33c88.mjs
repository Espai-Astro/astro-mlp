/* empty css                               */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent, u as unescapeHTML } from '../astro_78163e4f.mjs';
import 'clsx';
import { t as textosBiografia, b as baseUrl, g as gargot, $ as $$Layout } from './_id__d1202ee2.mjs';
import 'html-escaper';
import 'react/jsx-runtime';
import 'react';
import 'framer-motion';

const $$Astro$2 = createAstro("https://espai-astro.github.io");
const $$Biografia$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Biografia$1;
  const mida = textosBiografia.length;
  const srcGargot = gargot.src;
  const classesClaus = "font-bold text-red-500";
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-16 items-center px-6"><div class="flex flex-col gap-14"><div class="flex flex-col lg:flex-row lg:gap-3"><h1 class="titol">Biografia</h1><img${addAttribute(srcGargot, "src")} class="ombra" alt="gargot"></div><div class="flex flex-col gap-16 py-4 px-8 lg:py-12 lg:px-20 border-zinc-200 rounded-xl border-2">${textosBiografia.map((textBiografia, index) => renderTemplate`${renderComponent($$result, "TextBiografia", $$TextBiografia, { "textBiografia": textBiografia, "mida": mida, "index": index, "classesClaus": classesClaus })}`)}</div></div><a${addAttribute(baseUrl, "href")} class="w-full lg:w-1/4"><button class="w-full border-2 rounded-xl border-zinc-200 hover:bg-zinc-200 focus:border-neutral-800 py-1">Tornar a Inici</button></a></div>`;
}, "/home/jordi/Documents/ASTRO/astro-mlp/src/components/biografia/Biografia.astro", void 0);

const $$Astro$1 = createAstro("https://espai-astro.github.io");
const $$TextBiografia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TextBiografia;
  let {
    textBiografia: { src, anys, titol, text, claus },
    classesClaus,
    index,
    mida
  } = Astro2.props;
  if (claus && claus.length > 0) {
    claus.filter((clau) => text.includes(clau)).forEach((clau) => {
      const htmlClau = `<span class='${classesClaus}'>${clau}</span>`;
      text = text.replace(clau, htmlClau);
    });
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-9"><div class="flex flex-col sm:flex-row gap-1 sm:gap-4 items-baseline"><span class="italic text-2xl">${titol}</span><span class="text-red-500 text-md">
(${anys[0]} - ${anys[1]})
</span></div><div class="lg:flex lg:flex-row lg:gap-9"><img${addAttribute(src, "src")}${addAttribute(`Imatge ${titol}`, "alt")}${addAttribute(`Imatge ${titol}`, "title")}${addAttribute(`object-contain h-60 pb-4 lg:px-0 mx-auto lg:float-none ${index % 2 === 0 ? "lg:order-1 sm:float-right sm:pl-8 sm:pr-2" : "lg:order-0 sm:float-left sm:pl-2 sm:pr-8"}`, "class")}><p class="w-full pt-2 break-words first-letter text-md">${unescapeHTML(text)}</p></div>${index !== mida - 1 && renderTemplate`<div class="border-2 rounded-xl bg-zinc-200 w-1/2 mx-auto"></div>`}</div>`;
}, "/home/jordi/Documents/ASTRO/astro-mlp/src/components/biografia/TextBiografia.astro", void 0);

const $$Astro = createAstro("https://espai-astro.github.io");
const $$Biografia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Biografia;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titol": "Biografia-Astro-MLP" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "BiografiaC", $$Biografia$1, {})}` })}`;
}, "/home/jordi/Documents/ASTRO/astro-mlp/src/pages/biografia.astro", void 0);

const $$file = "/home/jordi/Documents/ASTRO/astro-mlp/src/pages/biografia.astro";
const $$url = "/astro-mlp/biografia";

export { $$Biografia as default, $$file as file, $$url as url };
