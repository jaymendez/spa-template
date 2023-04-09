import TitleDescription from '@/views/HomeView/SubSection/TitleDescription';

const SubSection = () => {
  return (
    <div className='mt-40 w-full'>
      <div className='flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start'>
        <div className='flex-shrink-0'>
          <TitleDescription />
        </div>
        <div className='bg-img-light aspect-square w-full max-w-[500px] self-center lg:self-auto' />
        <div className='flex-shrink-0 lg:self-end'>
          <TitleDescription />
        </div>
      </div>
    </div>
  );
};

export default SubSection;
