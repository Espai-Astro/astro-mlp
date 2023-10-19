import avatar from '../assets/img/avatar.jpeg';
import { motion } from 'framer-motion';
import { animacioNav, animacioElementNav } from '../lib/utils/animacionsNav';
import { useMediaQuery } from '.././lib/hooks/useMediaQuery';
import { useState } from 'react';

const Nav = () => {
  const [clicat, setClicat] = useState<boolean>(false);
  const srcAvatar: string = avatar.src;
  const maxmd: boolean = useMediaQuery('(max-width: 1024px)');

  return (
    <nav className='bg-neutral-200 rounded-b-2xl border-t-4 border-t-black relative py-12 px-8 mb-20 flex justify-between items-center font-medium titol'>
      <div>
        <a href='/'>
          <img
            className='rounded-full w-12 md:w-16 xl:w-24'
            src={srcAvatar}
            alt='avatar'
          />
        </a>
      </div>
      <h1 className='absolute top-13 right-1/2 translate-x-1/2 text-2xl font-bold'>
        Hua
      </h1>

      {/* Hamburguesa */}
      {maxmd && (
        <div
          onClick={() => setClicat(!clicat)}
          className='space-y-1.5 cursor-pointer z-30'>
          <motion.span
            animate={{
              rotateZ: clicat ? 45 : 0,
              y: clicat ? 8 : 0,
            }}
            className='block h-0.5 w-8 bg-black'></motion.span>
          <motion.span
            animate={{ width: clicat ? 0 : 24 }}
            className='block h-0.5 w-6 bg-black'></motion.span>
          <motion.span
            animate={{
              rotateZ: clicat ? -45 : 0,
              y: clicat ? -8 : 0,
              width: clicat ? 32 : 16,
            }}
            className='block h-0.5 w-4 bg-black'></motion.span>
        </div>
      )}

      {/* Menu > LG */}
      {!maxmd && (
        <ul className='flex flex-col items-end gap-x-8 gap-y-3 text-sm'>
          <li className='duration-200 hover:font-bold hover:scale-110'>
            <a href='/'>Inici</a>
          </li>
          <li className='duration-200 hover:font-bold hover:scale-110'>
            <a href='/galeria'>Galeria</a>
          </li>
          <li className='duration-200 hover:font-bold hover:scale-110'>
            <a href='/contacte'>Contacte</a>
          </li>
        </ul>
      )}

      {/* Menu < LG */}
      {maxmd && clicat && (
        <div className='absolute inset-0 h-fit w-full bg-zinc-200 rounded-b-2xl px-8 py-12 z-20'>
          <div className='flex flex-col'>
            <div>
              <a href='/'>
                <img
                  className='rounded-full border-2 border-black w-12 md:w-16 xl:w-24'
                  src={srcAvatar}
                  alt='avatar'
                />
              </a>
            </div>
            <div>
              <motion.ul
                variants={animacioNav}
                animate='visible'
                initial='hidden'
                className='flex flex-col gap-24 text-lg '>
                <motion.li
                  variants={animacioElementNav}
                  className='duration-200 hover:font-bold hover:scale-110'>
                  <a href='/'>Inici</a>
                </motion.li>
                <motion.li
                  variants={animacioElementNav}
                  className='duration-200 hover:font-bold hover:scale-110'>
                  <a href='/galeria'>Galeria</a>
                </motion.li>
                <motion.li
                  variants={animacioElementNav}
                  className='duration-200 hover:font-bold hover:scale-110'>
                  <a href='/contacte'>Contacte</a>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
