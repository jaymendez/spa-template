import { TextField } from '@mui/material';
import { FormEvent, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '@/components/buttons/Button';

import useProductStore from '@/stores/useProductStore';

const TableForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { product, setActiveProduct, addProduct, updateProduct } =
    useProductStore((state) => ({
      product: state.product,
      setActiveProduct: state.setActiveProduct,
      products: state.products,
      addProduct: state.addProduct,
      updateProduct: state.updateProduct,
    }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, price } = e.target;
    if (product?.id) {
      updateProduct({ id: product.id, name: name.value, price: price.value });
      setActiveProduct(null);
    } else {
      addProduct({ id: uuidv4(), name: name.value, price: price.value });
    }
    formRef?.current?.reset();
  };

  return (
    <div className='bg-light-gray flex flex-col items-center justify-center gap-y-10 rounded px-10 py-12 lg:max-w-md lg:flex-shrink-0 lg:self-start'>
      <div className='space-y-4 text-center'>
        <div className='text-3xl font-bold'>Header Text</div>
        <div className='text-mid-gray text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        </div>
      </div>
      <div className='w-full'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col space-y-5'
          ref={formRef}
        >
          <TextField
            key={product?.name || 'product-name'}
            name='name'
            placeholder='Name'
            defaultValue={product?.name}
            required
          />
          <TextField
            key={product?.price || 'product-price'}
            required
            type='number'
            name='price'
            placeholder='Price'
            defaultValue={product?.price}
          />
          <Button variant='dark' type='submit'>
            {product ? 'Update' : 'Create'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default TableForm;
