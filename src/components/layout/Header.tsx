import CustomButton from '@/components/buttons/Button';
import HeaderLink from '@/components/layout/HeaderLink';

import { HEADER_LINKS } from '@/constant/headerLinks';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 mb-16 bg-white py-6'>
      <div className='align-center flex justify-between'>
        <div>
          <img src='/images/logo.png' alt='' />
        </div>
        <nav className='flex items-center justify-center gap-20'>
          {HEADER_LINKS.map((item) => (
            <HeaderLink key={item.name} {...item} />
          ))}
        </nav>
        <CustomButton variant='dark'>Call to Action</CustomButton>
      </div>
    </header>
  );
}
