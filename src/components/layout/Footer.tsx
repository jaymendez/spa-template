import Button from '@/components/buttons/Button';

const Footer = () => {
  return (
    <div className='bg-light-gray mt-60 w-full'>
      <div className='container relative flex flex-col gap-x-14 px-14 lg:flex-row'>
        <div className='bg-img-light top-20 -mb-20 aspect-square w-full max-w-[550px] -translate-y-20 self-center lg:mb-0'>
          <div></div>
        </div>
        <div className='max-w-xl space-y-5 self-center py-10 lg:py-4'>
          <div className='text-3xl font-semibold sm:text-5xl lg:text-6xl'>
            Lorem ipsum dolor sit consectetur
          </div>
          <div className='text-mid-gray text-base lg:text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vel sapien vitae purus finibus accumsan.
          </div>
          <Button className='' variant='dark'>
            Call to Action
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
