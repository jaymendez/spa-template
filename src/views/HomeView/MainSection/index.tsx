import Button from '@/components/buttons/Button';

const MainSection = () => {
  return (
    <div className='mt-20 w-full'>
      <div className='container relative flex flex-col-reverse gap-x-5 lg:flex-row lg:justify-between'>
        <div className='max-w-lg space-y-5 self-center py-10 lg:py-4'>
          <div className='text-3xl font-semibold sm:text-5xl lg:text-7xl'>
            Lorem ipsum dolor sit amet consectetur
          </div>
          <div className='text-mid-gray text-base lg:text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus.
          </div>
          <div className='flex gap-2'>
            <Button variant='dark'>Call to Action</Button>
            <Button variant='outline'>See Workspace</Button>
          </div>
        </div>
        <div className='relative aspect-[550/500] w-full max-w-[550px] self-center lg:self-auto'>
          <div className='bg-img-light absolute bottom-0 left-0 aspect-square w-[81%] max-w-[450px]' />
          <div className='bg-img-dark absolute right-0 top-0 aspect-square w-[41%]' />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
