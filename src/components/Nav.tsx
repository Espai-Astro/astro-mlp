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
    <nav className='relative py-12 mx-8 md:mx-12 mb-20 flex justify-between items-center font-medium titol '>
      <div>
        <img
          className='rounded-full border-2 border-black w-12 md:w-16 xl:w-24'
          src={srcAvatar}
          alt='avatar'
        />
      </div>
      <h1 className='absolute top-13 right-1/2 translate-x-1/2 text-xl font-bold'>
        <a href='/'>Hua</a>
      </h1>
      <div className='absolute bottom-0 right-1/2 translate-x-1/2 h-1 w-2/3 bg-neutral-800 rounded-xl '></div>

      {/* Hamburguesa */}
      {maxmd && (
        <div
          onClick={() => setClicat(!clicat)}
          className='space-y-1.5 cursor-pointer z-50'>
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
        <ul className='flex flex-col items-end gap-x-8 gap-y-4 text-xs'>
          <li>
            <a href='/'>Inici</a>
          </li>
          <li>
            <a href='/galeria'>Galeria</a>
          </li>
          <li>
            <a href='/contacte'>Contacte</a>
          </li>
        </ul>
      )}

      {/* Menu < LG */}
      {maxmd && clicat && (
        <div className='fixed top-0 left-0 w-screen h-auto bg-white pt-16 pb-24 flex justify-center items-center z-40'>
          <motion.ul
            variants={animacioNav}
            animate='visible'
            initial='hidden'
            className='flex flex-col justify-center items-center gap-24 text-lg '>
            <motion.li variants={animacioElementNav}>
              <a href='/'>Inici</a>
            </motion.li>
            <motion.li variants={animacioElementNav}>
              <a href='/galeria'>Galeria</a>
            </motion.li>
            <motion.li variants={animacioElementNav}>
              <a href='/contacte'>Contacte</a>
            </motion.li>
          </motion.ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
