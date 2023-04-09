import ProductTable from '@/views/ProductsView/Table';
import TableForm from '@/views/ProductsView/TableForm';
import ProductToolbar from '@/views/ProductsView/Toolbar';

const ProductsView = () => {
  return (
    <div className='space-y-10 lg:space-y-16'>
      <ProductToolbar />
      <div className='flex flex-col-reverse gap-x-32 gap-y-8 lg:flex-row'>
        <ProductTable />
        <TableForm />
      </div>
    </div>
  );
};

export default ProductsView;
