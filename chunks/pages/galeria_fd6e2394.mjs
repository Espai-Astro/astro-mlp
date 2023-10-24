/* empty css                               */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent } from '../astro_78163e4f.mjs';
import 'clsx';
import { a as galeria, g as gargot, $ as $$Layout } from './_id__1e98cbcd.mjs';
import 'html-escaper';
import 'react/jsx-runtime';
import 'react';
import 'framer-motion';

const $$Astro$2 = createAstro("https://espai-astro.github.io");
const $$Galeria$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Galeria$1;
  const srcGargot = gargot.src;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-9 items-center px-6"><div class="flex flex-col gap-14"><div class="flex flex-col lg:flex-row lg:gap-3"><h1 class="titol">Galeria</h1><img${addAttribute(srcGargot, "src")} alt="gargot"></div><div class="flex flex-col gap-6 p-6 mb-10 first-letter border-zinc-200 border-4 rounded-xl"><p class="first-letter">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim
        minima at necessitatibus accusantium quia. Suscipit magni quia et ipsam.
        Inventore sed consequatur, quos omnis magni sint cum ab eligendi at
        numquam natus excepturi consectetur quibusdam, dolorum aut fugiat rem
        doloremque.
</p><p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor odio sed
        est enim consequatur dolorum vero cupiditate dignissimos corporis
        adipisci! Recusandae illum enim unde voluptates ipsam ratione voluptate
        tempore, dicta incidunt explicabo ut consequuntur in at doloremque minus
        cum corporis praesentium? Autem doloribus asperiores, inventore quia ad
        sunt expedita unde ab velit, laudantium aut, sint deleniti ex ut itaque
        eos impedit repellendus quos recusandae? Dolore cupiditate sunt, sed qui
        saepe, magnam enim voluptatibus iste consequuntur sequi nobis molestias
        porro ut. Dicta unde ratione iusto, laboriosam quae tempore error
        commodi doloremque eveniet molestiae adipisci nulla sit impedit
        veritatis dolorem maxime totam.
</p></div><div class="grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-x-16 sm:gap-y-20 grid">${galeria.map((art) => renderTemplate`${renderComponent($$result, "GaleriaArt", $$GaleriaArt, { "art": art })}`)}</div></div><a href="/" class="w-full lg:w-1/4"><button class="w-full border-2 rounded-xl border-zinc-200 hover:bg-zinc-200 focus:border-neutral-800 py-1 font-semibold text-sm">Tornar a Inici</button></a></div>`;
}, "/home/jordi/Documents/ASTRO/astro-mlp/src/components/galeria/Galeria.astro", void 0);

const $$Astro$1 = createAstro("https://espai-astro.github.io");
const $$GaleriaArt = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GaleriaArt;
  const { id, src, alt, title, descripcio } = Astro2.props.art;
  return renderTemplate`${maybeRenderHead()}<div class="group"><div class="relative"><a${addAttribute(`/targeta/art${id}`, "href")}><img class="relative z-10 w-full mx-auto rounded-2xl transition-all duration-300 group-hover:-translate-x-3"${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(title, "title")}></a><div class="absolute left-0 top-0 w-full h-full bg-zinc-200 rounded-2xl group-hover:rounded-xl transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-4"></div></div><div class="px-2 py-4 transition-all duration-300 group-hover:translate-y-3 group-hover:translate-x-2"><p class="font-semibold text-red-500 uppercase">${title}</p><p class="transition-all duration-1000 opacity-0 group-hover:opacity-100 px-2 text-sm">${descripcio}</p></div></div>`;
}, "/home/jordi/Documents/ASTRO/astro-mlp/src/components/galeria/GaleriaArt.astro", void 0);

const $$Astro = createAstro("https://espai-astro.github.io");
const $$Galeria = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Galeria;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titol": "Galeria-Astro-MLP" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "GaleriaC", $$Galeria$1, {})}` })}`;
}, "/home/jordi/Documents/ASTRO/astro-mlp/src/pages/galeria.astro", void 0);

const $$file = "/home/jordi/Documents/ASTRO/astro-mlp/src/pages/galeria.astro";
const $$url = "/astro-mlp/galeria";

export { $$Galeria as default, $$file as file, $$url as url };
