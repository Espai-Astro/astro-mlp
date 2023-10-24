/* empty css                               */import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot } from '../astro_78163e4f.mjs';
import 'clsx';
import { motion } from 'framer-motion';

const avatar = {"src":"/astro-mlp/_astro/avatar.a0c974d2.jpeg","width":218,"height":231,"format":"jpg"};

const animacioNav = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15
    }
  },
  hidden: {
    opacity: 0
  }
};
const animacioElementNav = {
  visible: {
    opacity: 1,
    x: 0
  },
  hidden: { opacity: 0, x: -100 }
};

const baseUrl = "/astro-mlp";

const Nav = () => {
  const [clicat, setClicat] = useState(false);
  const srcAvatar = avatar.src;
  return /* @__PURE__ */ jsxs("nav", { className: "bg-neutral-200 rounded-b-2xl border-t-4 border-t-black relative py-12 px-8 mb-20 flex justify-between items-center font-medium titol", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: baseUrl, children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "rounded-full w-12 md:w-16 xl:w-24 border-2 border-black  hover:scale-110",
        src: srcAvatar,
        alt: "avatar"
      }
    ) }) }),
    /* @__PURE__ */ jsx("h1", { className: "absolute top-13 right-1/2 translate-x-1/2 text-2xl font-bold", children: "Hua" }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        onClick: () => setClicat(!clicat),
        className: "lg:hidden space-y-1.5 cursor-pointer z-20",
        children: [
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: {
                rotateZ: clicat ? 45 : 0,
                y: clicat ? 8 : 0
              },
              className: "block h-0.5 w-8 bg-black"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: { width: clicat ? 0 : 24 },
              className: "block h-0.5 w-6 bg-black"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: {
                rotateZ: clicat ? -45 : 0,
                y: clicat ? -8 : 0,
                width: clicat ? 32 : 16
              },
              className: "block h-0.5 w-4 bg-black"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col items-end gap-x-8 gap-y-3 text-sm", children: [
      /* @__PURE__ */ jsx("li", { className: "duration-200 hover:font-bold hover:scale-110", children: /* @__PURE__ */ jsx("a", { href: baseUrl, children: "Inici" }) }),
      /* @__PURE__ */ jsx("li", { className: "duration-200 hover:font-bold hover:scale-110", children: /* @__PURE__ */ jsx("a", { href: `${baseUrl}/biografia`, children: "Biografia" }) }),
      /* @__PURE__ */ jsx("li", { className: "duration-200 hover:font-bold hover:scale-110", children: /* @__PURE__ */ jsx("a", { href: `${baseUrl}/galeria`, children: "Galeria" }) })
    ] }) }),
    clicat && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 h-fit w-full bg-zinc-200 rounded-b-2xl px-8 pt-12 pb-20 z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-9", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: baseUrl, children: /* @__PURE__ */ jsx(
        "img",
        {
          className: "rounded-full border-2 border-black w-12 md:w-16 xl:w-24 hover:scale-110",
          src: srcAvatar,
          alt: "avatar"
        }
      ) }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
        motion.ul,
        {
          variants: animacioNav,
          animate: "visible",
          initial: "hidden",
          className: "flex flex-col gap-24 text-lg ",
          children: [
            /* @__PURE__ */ jsx(
              motion.li,
              {
                variants: animacioElementNav,
                className: "duration-200 hover:font-bold hover:scale-110",
                children: /* @__PURE__ */ jsx("a", { href: baseUrl, children: "Inici" })
              }
            ),
            /* @__PURE__ */ jsx(
              motion.li,
              {
                variants: animacioElementNav,
                className: "duration-200 hover:font-bold hover:scale-110",
                children: /* @__PURE__ */ jsx("a", { href: `${baseUrl}/biografia`, children: "Biografia" })
              }
            ),
            /* @__PURE__ */ jsx(
              motion.li,
              {
                variants: animacioElementNav,
                className: "duration-200 hover:font-bold hover:scale-110",
                children: /* @__PURE__ */ jsx("a", { href: `${baseUrl}/galeria`, children: "Galeria" })
              }
            )
          ]
        }
      ) })
    ] }) })
  ] });
};

const art1 = {"src":"/astro-mlp/_astro/art1.cf7364c0.jpg","width":383,"height":383,"format":"jpg"};

const art2 = {"src":"/astro-mlp/_astro/art2.d35422d0.jpg","width":383,"height":383,"format":"jpg"};

const art3 = {"src":"/astro-mlp/_astro/art3.a59ed8b2.jpg","width":383,"height":383,"format":"jpg"};

const art4 = {"src":"/astro-mlp/_astro/art4.8bbad7fd.jpg","width":383,"height":383,"format":"jpg"};

const art5 = {"src":"/astro-mlp/_astro/art5.c07de546.jpg","width":3750,"height":5684,"format":"jpg"};

const art6 = {"src":"/astro-mlp/_astro/art6.fa870c56.jpg","width":6000,"height":4000,"format":"jpg"};

const art7 = {"src":"/astro-mlp/_astro/art7.aa3651e5.jpg","width":3468,"height":3468,"format":"jpg"};

const art8 = {"src":"/astro-mlp/_astro/art8.a4c33edb.jpeg","width":300,"height":200,"format":"jpg"};

const bio1 = {"src":"/astro-mlp/_astro/bio1.97136696.jpg","width":500,"height":333,"format":"jpg"};

const bio2 = {"src":"/astro-mlp/_astro/bio2.7d879255.jpg","width":500,"height":333,"format":"jpg"};

const bio3 = {"src":"/astro-mlp/_astro/bio3.ca2578f9.jpg","width":500,"height":333,"format":"jpg"};

const bio4 = {"src":"/astro-mlp/_astro/bio4.d101d933.jpg","width":500,"height":333,"format":"jpg"};

const bio5 = {"src":"/astro-mlp/_astro/bio5.55338f4b.jpg","width":500,"height":333,"format":"jpg"};

const bio6 = {"src":"/astro-mlp/_astro/bio6.bd7d5622.jpg","width":500,"height":333,"format":"jpg"};

const bio7 = {"src":"/astro-mlp/_astro/bio7.6bac7b4c.jpg","width":500,"height":333,"format":"jpg"};

const bio8 = {"src":"/astro-mlp/_astro/bio8.f7941256.jpg","width":500,"height":333,"format":"jpg"};

const bio9 = {"src":"/astro-mlp/_astro/bio9.ca066fe9.jpg","width":500,"height":333,"format":"jpg"};

const bio10 = {"src":"/astro-mlp/_astro/bio10.34637287.jpg","width":500,"height":333,"format":"jpg"};

const bio11 = {"src":"/astro-mlp/_astro/bio11.d0735efd.jpg","width":500,"height":334,"format":"jpg"};

const bio12 = {"src":"/astro-mlp/_astro/bio12.734424e2.jpg","width":500,"height":334,"format":"jpg"};

const retrat = {"src":"/astro-mlp/_astro/main-portrait.0f431764.jpg","width":476,"height":632,"format":"jpg"};

const x = {"src":"/astro-mlp/_astro/twitter.65060a86.png","width":25,"height":25,"format":"png"};

const youtube = {"src":"/astro-mlp/_astro/youtube.c75182c1.png","width":25,"height":25,"format":"png"};

const trass = {"src":"/astro-mlp/_astro/paint.09207e70.svg","width":661,"height":583,"format":"svg"};

const gargot = {"src":"/astro-mlp/_astro/scribble.d43257b3.svg","width":369,"height":12,"format":"svg"};

const fletxa = {"src":"/astro-mlp/_astro/arrow-up.a95f9921.svg","width":24,"height":24,"format":"svg"};

const textosInici = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et sit cum aperiam deserunt possimus, nisi veritatis. Voluptate ad nobis aspernatur facere, cupiditate esse? Consectetur laborum, cupiditate doloribus dignissimos ipsa eligendi quasi veritatis aliquam cumque tenetur eum earum repudiandae ea officiis reiciendis ex  facilis.",
    claus: ["amet consectetur", "quasi veritatis"]
  },
  {
    id: 2,
    text: "Nesciunt natus corrupti iste deleniti qui? Sed maiores ipsum minus voluptates fugiat commodi quia sunt sint quam temporibus. Alias culpa ipsam architecto ducimus nostrum voluptatibus itaque omnis provident, voluptatum laudantium necessitatibus minima! Quam consequuntur nesciunt unde animi!",
    claus: ["aquia sunt sint", "necessitatibus minima!"]
  },
  {
    id: 3,
    text: "Enim quidem blanditiis, accusamus vero ab animi rerum consequuntur! Consectetur placeat, codio optio officia non nesciunt dolorem est beatae animi, voluptatem labore ipsa, inventore tempora id molestiae laborum sed, eligendi explicabo? Quia vero id quo quis quidem recusandae cumque, numquam et ad tenetur ab quibusdam laboriosam sint molestias omnis quos sequi ducimus.",
    claus: ["labore ipsa", "eligendi explicabo?", "laboriosam sint molestias"]
  },
  {
    id: 4,
    text: "Enim quidem blanditiis, accusamus vero ab animi rerum consequuntur! Consectetur placeat, codio optio officia non nesciunt dolorem est beatae animi, voluptatem labore ipsa, inventore tempora id molestiae laborum sed, numquam et ad tenetur ab quibusdam laboriosam sint molestias omnis quos sequi ducimus. Nesciunt natus corrupti iste deleniti qui? Sed maiores ipsum minus voluptates fugiat commodi quia sunt sint quam temporibus. ",
    claus: ["recusandae cumque", "blanditiis"]
  }
];
const textosBiografia = [
  {
    id: 1,
    src: bio1.src,
    anys: [1980, 1985],
    titol: "Voluptates fugiat",
    text: "Enim quidem blanditiis, accusamus vero ab animi rerum consequuntur! Consectetur placeat, codio optio officia non nesciunt dolorem est beatae animi, voluptatem labore ipsa, inventore tempora id molestiae laborum sed, numquam et ad tenetur ab quibusdam laboriosam sint molestias omnis quos sequi ducimus. Nesciunt natus corrupti iste deleniti qui? Sed maiores ipsum minus voluptates fugiat commodi quia sunt sint quam temporibus. ",
    claus: ["accusamus", "voluptates fugiat"]
  },
  {
    id: 2,
    src: bio2.src,
    anys: [1986, 1999],
    titol: "Dolorem est",
    text: "Enim quidem blanditiis, accusamus vero ab animi rerum consequuntur! Consectetur placeat, codio optio officia non nesciunt dolorem est beatae animi, voluptatem labore ipsa, inventore tempora id molestiae laborum sed",
    claus: [
      "quidem blanditiis",
      "eligendi explicabo?",
      "laboriosam sint molestias"
    ]
  },
  {
    id: 3,
    src: bio3.src,
    anys: [2e3, 2002],
    titol: "Lorem quidem blanditiis",
    text: "Nesciunt natus corrupti iste deleniti qui? Sed maiores ipsum minus voluptates fugiat commodi quia sunt sint quam temporibus. Alias culpa ipsam architecto ducimus nostrum voluptatibus itaque omnis provident.",
    claus: ["Sed maiores", "Alias culpa ipsam"]
  },
  {
    id: 4,
    src: bio4.src,
    anys: [2003, 2006],
    titol: "Quidem recusandae",
    text: "Enim quidem blanditiis, accusamus vero ab animi rerum consequuntur! Consectetur placeat, codio optio officia non nesciunt dolorem est beatae animi, voluptatem labore ipsa, inventore tempora id molestiae laborum sed, eligendi explicabo? Quia vero id quo quis quidem recusandae cumque, numquam et ad tenetur ab quibusdam laboriosam sint molestias omnis quos sequi ducimus.",
    claus: [
      "ab animi rerum",
      "eligendi explicabo?",
      "laboriosam sint molestias"
    ]
  },
  {
    id: 5,
    src: bio5.src,
    anys: [2006, 2007],
    titol: "Commodi quia sunt",
    text: "Laboriosam sint molestias omnis quos sequi ducimus. Nesciunt natus corrupti iste deleniti qui? Sed maiores ipsum minus voluptates fugiat commodi quia sunt sint quam temporibus. ",
    claus: ["deleniti qui?", "temporibus"]
  },
  {
    id: 6,
    src: bio6.src,
    anys: [2008, 2011],
    titol: "Quibusdam",
    text: "Tempora id molestiae laborum sed, eligendi explicabo? Quia vero id quo quis quidem recusandae cumque, numquam et ad tenetur ab quibusdam laboriosam sint molestias omnis quos sequi ducimus.",
    claus: ["laborum sed", "laboriosam sint molestias"]
  },
  {
    id: 7,
    src: bio7.src,
    anys: [2011, 2012],
    titol: "Laborum sed",
    text: "Consectetur placeat, codio optio officia non nesciunt dolorem est beatae animi, voluptatem labore ipsa, inventore tempora id molestiae laborum sed, eligendi explicabo? Quia vero id quo quis quidem recusandae cumque, numquam et ad tenetur ab quibusdam laboriosam sint molestias omnis quos sequi ducimus.",
    claus: ["molestiae", "recusandae cumque", "numquam"]
  },
  {
    id: 8,
    src: bio8.src,
    anys: [2012, 2018],
    titol: "Consectetur placeat, codio",
    text: "Enim quidem blanditiis, accusamus vero ab animi rerum consequuntur! Consectetur placeat, codio optio officia non nesciunt dolorem est beatae animi, voluptatem labore ipsa, inventore tempora id molestiae laborum sed, eligendi explicabo? Quia vero id quo quis quidem recusandae cumque, numquam et ad tenetur ab quibusdam laboriosam sint molestias omnis quos sequi ducimus. Consectetur placeat, codio optio officia non nesciunt dolorem est beatae animi, voluptatem labore ipsa, inventore tempora id molestiae laborum sed.",
    claus: ["tempora id molestiae", "beatae animi"]
  },
  {
    id: 9,
    src: bio9.src,
    anys: [2019, 2020],
    titol: "Tenetur ab quibusdam",
    text: "Dolorem est beatae animi, voluptatem labore ipsa, inventore tempora id molestiae laborum sed, eligendi explicabo? Quia vero id quo quis quidem recusandae cumque, numquam et ad tenetur ab quibusdam laboriosam sint molestias omnis quos sequi ducimus.",
    claus: ["voluptatem", "ab quibusdam", "omnis quos"]
  },
  {
    id: 10,
    src: bio10.src,
    anys: [2021, 2022],
    titol: "Voluptates",
    text: "Quibusdam laboriosam sint molestias omnis quos sequi ducimus. Nesciunt natus corrupti iste deleniti qui? Sed maiores ipsum minus voluptates fugiat commodi quia sunt sint quam temporibus. ",
    claus: ["labore ipsa", "eligendi explicabo?", "laboriosam sint molestias"]
  },
  {
    id: 11,
    src: bio11.src,
    anys: [2022, 2023],
    titol: "Quibusdam laboriosam sint",
    text: "Quidem blanditiis, accusamus vero ab animi rerum consequuntur!. Quia vero id quo quis quidem recusandae cumque, numquam et ad tenetur ab quibusdam laboriosam sint molestias omnis quos sequi ducimus. ",
    claus: ["accusamus vero", "recusandae", "laboriosam sint molestias"]
  },
  {
    id: 12,
    src: bio12.src,
    anys: [2023, 2024],
    titol: "Recusandae",
    text: "Enim quidem blanditiis, accusamus vero ab animi rerum consequuntur! Consectetur placeat, codio optio officia non nesciunt dolorem est beatae animi, voluptatem labore ipsa, inventore tempora id molestiae laborum sed, eligendi explicabo? Quia vero id quo quis quidem recusandae cumque, numquam et ad tenetur ab quibusdam laboriosam sint molestias omnis quos sequi ducimus.",
    claus: ["dolorem", "recusandae cumque", "omnis quos"]
  }
];
const galeria = [
  {
    id: 1,
    src: art1.src,
    alt: "Forexus limitrum",
    title: "Forexus limitrum",
    any: 1980,
    mida: "100 x 100",
    tecnica: "Adobe Photoshop",
    descripcio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, repellendus.",
    descripcioLlarga: "Anim Lorem aute eiusmod culpa do nostrud ipsum aliqua aliquip elit nisi. Laboris do exercitation occaecat aliquip labore aute qui eu ex eu occaecat. Dolor Lorem eiusmod sint anim aute dolore ullamco anim occaecat sunt sunt mollit laboris. Sint nisi cupidatat qui aute labore enim sunt Lorem ex non. Laborum nostrud duis sunt duis anim cillum ipsum."
  },
  {
    id: 2,
    src: art5.src,
    alt: "Altea bonus est finumintis",
    title: "Altea bonus est finumintis",
    any: 1985,
    mida: "100 x 200",
    tecnica: "Acrílic",
    descripcio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, repellendus.",
    descripcioLlarga: "Qui consequat do nisi deserunt. Commodo velit in cillum aute est laboris culpa mollit non pariatur voluptate. Nostrud proident fugiat dolor consectetur eu quis veniam. Est velit sit eu tempor. Do et proident ullamco laboris dolore aliqua sit."
  },
  {
    id: 3,
    src: art6.src,
    alt: "Arceha nantis relimins",
    title: "Arceha nantis relimins",
    any: 1990,
    mida: "80 x 80",
    tecnica: "Témpera",
    descripcio: "Error consequuntur in minus non sunt nisi quasi. Minima dolorum.",
    descripcioLlarga: "Laborum tempor elit qui culpa amet. Voluptate voluptate do dolor ad sunt cillum. Deserunt veniam est laborum ut aliquip enim ullamco tempor magna sunt ullamco in. Do excepteur occaecat do adipisicing do culpa qui dolor. Exercitation anim ullamco dolore velit eu qui enim sit laborum. Cupidatat in eiusmod laborum et culpa enim consequat cupidatat. Deserunt nulla incididunt labore ipsum anim. Ipsum ad minim ea ut nisi eu sunt. Nostrud veniam anim officia incididunt exercitation eiusmod sint ullamco."
  },
  {
    id: 4,
    src: art2.src,
    alt: "Femina ultra sinumm munumin",
    title: "Femina ultra sinumm munumin",
    any: 1995,
    mida: "200 x 100",
    tecnica: "Acrílic",
    descripcio: "Error consequuntur in minus non sunt nisi quasi. Minima dolorum.",
    descripcioLlarga: "Sint duis laborum fugiat reprehenderit Lorem. Id enim laboris labore duis ipsum sunt incididunt quis dolor nulla eu mollit. Velit consectetur tempor tempor occaecat pariatur dolor. Enim in Lorem veniam sint in. Ex cupidatat ad non sunt eiusmod sunt irure. Officia consectetur aute qui nisi aute. Minim aliqua labore anim nisi adipisicing occaecat ut eiusmod minim. Aute id elit veniam ullamco quis ea dolore occaecat nostrud labore irure fugiat nisi. Cupidatat fugiat deserunt velit cillum anim sint eiusmod excepteur reprehenderit nisi enim. Elit mollit exercitation aute veniam dolore reprehenderit aute aliqua et. Sint occaecat ipsum enim incididunt ullamco sit. Ea velit magna fugiat consequat deserunt non qui ut adipisicing incididunt ullamco cupidatat non."
  },
  {
    id: 5,
    src: art3.src,
    alt: "Erma nentis",
    title: "Erma nentis",
    any: 2e3,
    mida: "100 x 100",
    tecnica: "Adobe Photoshop",
    descripcio: "Corrupti quia quam, voluptate sunt praesentium adipisci quasi nesciunt.",
    descripcioLlarga: "Sint ullamco irure est est qui nisi dolore aute. Anim minim nisi cillum sit aliqua qui eiusmod. Ad veniam pariatur exercitation irure consectetur. Quis ut consequat incididunt mollit et velit reprehenderit do ullamco eu ad. Aliquip sunt dolore aute incididunt. Eiusmod aliquip esse pariatur aute enim do aliquip laboris amet ad. Excepteur est magna quis pariatur elit velit tempor commodo aute irure exercitation in. Minim veniam voluptate fugiat Lorem culpa. Commodo nulla ex do duis. Labore dolore laborum voluptate commodo aliquip anim nulla proident veniam pariatur mollit qui do duis. Tempor dolor aliquip exercitation duis. Non ea cillum voluptate in dolore ex adipisicing incididunt eiusmod tempor et."
  },
  {
    id: 6,
    src: art7.src,
    alt: "Faestina burocratis",
    title: "Faestina burocratis",
    any: 2005,
    mida: "100 x 200",
    tecnica: "Llapis",
    descripcio: "Corrupti quia quam, voluptate sunt praesentium adipisci quasi nesciunt.",
    descripcioLlarga: "Sunt duis nisi enim do tempor Lorem reprehenderit mollit consectetur velit esse labore. Culpa adipisicing minim nostrud anim duis sunt magna esse amet quis. Culpa irure eiusmod qui velit exercitation ex deserunt consectetur proident velit proident esse. Aliqua irure sint sit mollit in mollit ea veniam est velit cupidatat sint qui. Sit nisi tempor laboris amet dolor fugiat velit aliquip ad. Culpa esse Lorem sint elit ullamco do incididunt tempor eu magna nostrud anim. Magna aliquip consectetur ea enim quis."
  },
  {
    id: 7,
    src: art8.src,
    alt: "Sculpturismenium ananti versus",
    title: "Sculpturismenium ananti versus",
    any: 2010,
    mida: "100 x 60",
    tecnica: "Carbonet",
    descripcio: "corrupti quia quam, voluptate sunt praesentium adipisci.",
    descripcioLlarga: "Exercitation anim culpa cillum nisi aute deserunt laborum. Fugiat aute occaecat ad quis nostrud sint sit anim ex officia cupidatat ex. Eu culpa quis aliquip quis anim consectetur. Tempor in proident est voluptate eiusmod aliqua dolore deserunt aliquip aliqua. Ipsum minim adipisicing mollit aliquip. Esse pariatur aute ullamco amet reprehenderit magna laboris labore magna et sunt ad laboris esse. Reprehenderit labore adipisicing duis in qui adipisicing velit proident ad."
  },
  {
    id: 8,
    src: art4.src,
    alt: "Tenent fastcitis modernumae",
    title: "Tenent fastcitis modernumae",
    any: 2015,
    mida: "200 x 100",
    tecnica: "Témpera",
    descripcio: "corrupti quia quam, voluptate sunt praesentium adipisci.",
    descripcioLlarga: "Sint voluptate pariatur exercitation duis aute. Adipisicing in aute amet anim id eiusmod. Pariatur occaecat quis exercitation ut anim incididunt cillum fugiat dolore reprehenderit excepteur sunt id est. Veniam qui do cupidatat amet consectetur voluptate exercitation cupidatat eu irure. Consectetur labore elit ad est dolor ea elit.Ad consectetur elit nulla nulla dolor ipsum non ea elit elit incididunt commodo reprehenderit laborum. Aliqua labore culpa aliquip ipsum do in et do cillum ad ut Lorem. Cupidatat eiusmod magna tempor commodo pariatur."
  }
];
const xxss = [
  {
    id: 1,
    nom: "X",
    src: x.src,
    alt: "X",
    title: "X"
  },
  {
    id: 2,
    nom: "Youtube",
    src: youtube.src,
    alt: "Youtube",
    title: "Youtube"
  }
];

const $$Astro$3 = createAstro("https://espai-astro.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const xarxes = xxss;
  return renderTemplate`${maybeRenderHead()}<div class="bg-stone-200 rounded-t-2xl border-b-4 border-black pt-8 pb-6 px-10 mt-20 flex flex-col xl:flex-row gap-9"><div class="xl:w-1/4 flex flex-col sm:flex-row xl:flex-col gap-2 sm:gap-9 xl:gap-2"><h3 class="tracking-wider text-lg font-thin text-red-500"><span class="trackind-widest text-2xl uppercase">Hua</span> Ling Huangai
</h3><div><a href="#" class="block font-bold underline sm:pt-2 pb-1 xl:pt-0 text-sm">hualing@hualing-artwork.com</a><ul class="flex gap-2">${xarxes.map(({ src, alt, title }) => renderTemplate`<li><a href="#"><img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(title, "title")}></a></li>`)}</ul></div></div><p class="w-full self-end leading-5 xl:pt-10 text-sm italic">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsum
    tempore. Magni laboriosam vero aperiam non, ullam ut hic dolor saepe
    eligendi accusantium quasi! Delectus quod saepe cumque, consequuntur ea
    dignissimos possimus sed quos harum laborum quas ex rerum odio.
    Voluptatibus, omnis. &nbsp;- &nbsp;<span class="text-red-500 font-bold">Hua Ling &copy;2020</span></p></div>`;
}, "/home/jordi/Documents/ASTRO/astro-mlp/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://espai-astro.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { titol } = Astro2.props;
  const fletxaAmunt = fletxa.src;
  console.info("C\xE0rrega Layout -->", titol);
  return renderTemplate`<html lang="ca"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/1553263.png"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${titol}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Karla&family=Merriweather+Sans&display=swap" rel="stylesheet">${renderHead()}</head><body class="bg-neutral-300"><div class="container mx-auto my-4 px-4 xl:px-12 text-neutral-800"><header id="inici">${renderComponent($$result, "Nav", Nav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/jordi/Documents/ASTRO/astro-mlp/src/components/index", "client:component-export": "Nav" })}</header><main>${renderSlot($$result, $$slots["default"])}</main><footer>${renderComponent($$result, "Footer", $$Footer, {})}</footer><div class="sticky bottom-6 mr-2 flex place-content-end z-20"><a${addAttribute("#inici", "href")}><button class="p-1 bg-zinc-600 rounded-full opacity-80"><img${addAttribute(fletxaAmunt, "src")} alt="fletxa amunt"></button></a></div></div></body></html>`;
}, "/home/jordi/Documents/ASTRO/astro-mlp/src/layouts/Layout.astro", void 0);

const obtenirTextBiografia = (any, textosBiografia) => {
  const textBiografia = textosBiografia.find(
    (textBiografia2) => textBiografia2.anys[0] <= any && textBiografia2.anys[1] >= any
  );
  return textBiografia;
};

const $$Astro$1 = createAstro("https://espai-astro.github.io");
const $$TargetaArt = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TargetaArt;
  const { idArt } = Astro2.props;
  const targeta = galeria[idArt];
  const { src, alt, title, any, mida, tecnica, descripcio, descripcioLlarga } = targeta;
  const textBiografiaTargeta = obtenirTextBiografia(any, textosBiografia);
  const { anys: anysPeriode, titol: titolPeriode } = textBiografiaTargeta;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-14 lg:gap-20 py-8 lg:py-16 px-8 lg:px-24 border-2 rounded-xl border-zinc-200"><div class="flex flex-col gap-6 lg:gap-3"><div class="flex flex-col lg:flex-row gap-3 items-baseline"><p class="text-red-500 text-3xl uppercase">${title}</p><span class="text-xl font-thin"> (${any})</span></div><p>${descripcio}</p></div><div><img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(title, "title")} class="w-full rounded-xl"></div><div class="flex flex-col lg:flex-row gap-6 lg:gap-0 lg:justify-evenly"><ul class="lg:w-4/12 flex flex-col gap-1 font-light leading-relaxed"><li><span class="font-thin uppercase text-red-500 mr-2">Mida:</span>${mida}</li><li><span class="font-thin uppercase text-red-500 mr-2">Tècnica:</span>${tecnica}</li><li class="flex flex-wrap gap-2"><span class="font-thin uppercase text-red-500"> Periode artístic:</span><div class="flex gap-2"><span>${titolPeriode}</span><span>(${anysPeriode[0]} - ${anysPeriode[1]})</span></div></li></ul><div class="lg:w-7/12"><p class="text-justify"><span class="font-thin uppercase text-red-500 mr-2">Descripció:</span>${descripcioLlarga}</p></div></div><a${addAttribute(`${baseUrl}/galeria`, "href")}><button class="w-full border-2 rounded-xl border-zinc-200 hover:bg-zinc-200 focus:border-neutral-800 py-1">Tornar a Galeria</button></a></div>`;
}, "/home/jordi/Documents/ASTRO/astro-mlp/src/components/targeta/TargetaArt.astro", void 0);

const $$Astro = createAstro("https://espai-astro.github.io");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id: paramId } = Astro2.params;
  const idArt = Number(paramId?.substring(3)) - 1;
  console.log("idArt -->", idArt);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titol": `Targeta Art${idArt + 1}` }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "TargetaArt", $$TargetaArt, { "idArt": idArt })}` })}`;
}, "/home/jordi/Documents/ASTRO/astro-mlp/src/pages/targeta/[id].astro", void 0);

const $$file = "/home/jordi/Documents/ASTRO/astro-mlp/src/pages/targeta/[id].astro";
const $$url = "/astro-mlp/targeta/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _, galeria as a, baseUrl as b, textosInici as c, trass as d, gargot as g, retrat as r, textosBiografia as t };
