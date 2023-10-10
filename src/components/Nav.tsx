import avatar from '../assets/img/avatar.png';
import { motion } from 'framer-motion';
import { animacioNav, animacioElementNav } from '../lib/utils/animacionsNav';
import { useMediaQuery } from '.././lib/hooks/useMediaQuery';
import { useState } from 'react';

const Nav = () => {
  const [clicat, setClicat] = useState<boolean>(false);
  const srcAvatar: string = avatar.src;
  const maxXL: boolean = useMediaQuery('(max-width: 1280px)');
  console.log(maxXL);

  return (
    <nav className='relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32'>
      <svg
        className='absolute bottom-0 right-1/2 translate-x-1/2'
        width='250'
        height={4}
        viewBox='0 0 250 4'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M2 2L428 2' stroke='#282828' strokeLinecap='round' />
      </svg>
      <div>
        <img src={srcAvatar} alt='avatar' />
      </div>

      <h1 className='text-lg font-bold'>
        <a href='/'>Hua</a>
      </h1>

      {maxXL && (
        <div
          onClick={() => setClicat(!clicat)}
          className='space-y-1.5 cursor-pointer z-10'>
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

      {!maxXL && (
        <ul className='flex gap-12'>
          <li>
            <a href='/'>Inici</a>
          </li>
          <li>
            <a href='/serveis'>Serveis</a>
          </li>
          <li>
            <a href='/contacte'>Contacte</a>
          </li>
        </ul>
      )}

      {maxXL && clicat && (
        <div className='fixed top-0 left-0 w-screen h-screen bg-white flex justify-center items-center'>
          <motion.ul
            variants={animacioNav}
            animate='visible'
            initial='hidden'
            className='flex flex-col gap-24 text-lg '>
            <motion.li variants={animacioElementNav}>
              <a href='/'>Inici</a>
            </motion.li>
            <motion.li variants={animacioElementNav}>
              <a href='/serveis'>Serveis</a>
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
