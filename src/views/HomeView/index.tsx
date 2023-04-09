import MainSection from '@/views/HomeView/MainSection';
import SubSection from '@/views/HomeView/SubSection';

type Props = {};

const HomeView = (props: Props) => {
  return (
    <div>
      <MainSection />
      <SubSection />
    </div>
  );
};

export default HomeView;
