import Link from 'next/link';

type HeaderLinkProps = {
  link: string;
  name: string;
};

const HeaderLink = ({ link, name }: HeaderLinkProps) => {
  return (
    <Link href={link} passHref className='capitalize'>
      {name}
    </Link>
  );
};

export default HeaderLink;
