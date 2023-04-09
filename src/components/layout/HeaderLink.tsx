import Link from 'next/link';
import { useRouter } from 'next/router';

type HeaderLinkProps = {
  link: string;
  name: string;
};

const HeaderLink = ({ link, name }: HeaderLinkProps) => {
  const router = useRouter();

  const selected = router.asPath === link;

  return (
    <Link
      href={link}
      passHref
      className={`capitalize ${
        selected && 'font-bold underline underline-offset-8'
      }`}
    >
      {name}
    </Link>
  );
};

export default HeaderLink;
