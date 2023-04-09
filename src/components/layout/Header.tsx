import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton, useMediaQuery } from '@mui/material';
import { useState } from 'react';

import CustomButton from '@/components/buttons/Button';
import HeaderLink from '@/components/layout/HeaderLink';
import MobileDrawer from '@/components/layout/MobileDrawer';

import { HEADER_LINKS } from '@/constant/headerLinks';

export default function Header() {
  const isTablet = useMediaQuery('(max-width: 981px)');
  const [isDrawerOpen, toggleDrawer] = useState(false);

  return (
    <header className='sticky top-0 z-50 mb-16 bg-white py-6'>
      <div className='align-center flex justify-between'>
        <div>
          <img src='/images/logo.png' alt='' />
        </div>
        {isTablet ? (
          <IconButton onClick={() => toggleDrawer(true)}>
            <ReorderIcon />
          </IconButton>
        ) : (
          <>
            <nav className='flex items-center justify-center gap-10 md:gap-20'>
              {HEADER_LINKS.map((item) => (
                <HeaderLink key={item.name} {...item} />
              ))}
            </nav>
            <CustomButton variant='dark'>Call to Action</CustomButton>
          </>
        )}
      </div>
      {isDrawerOpen && (
        <MobileDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      )}
    </header>
  );
}
