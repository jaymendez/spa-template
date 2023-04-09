import SearchField from '@/views/ProductsView/SearchField';

const ProductToolbar = () => (
  <div className='flex flex-col items-center gap-x-28 gap-y-4 lg:flex-row'>
    <div className='text-5xl font-bold'>Products</div>
    <SearchField type='toolbar' />
  </div>
);

export default ProductToolbar;
