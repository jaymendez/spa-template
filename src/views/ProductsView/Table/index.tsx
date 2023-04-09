import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Fuse from 'fuse.js';
import { useMemo } from 'react';

import Button from '@/components/buttons/Button';

import useProductStore from '@/stores/useProductStore';

import SearchField from '@/views/ProductsView/SearchField';

const fuseOptions = {
  keys: ['name'],
  shouldSort: true,
  findAllMatches: true,
};

const ProductTable = () => {
  const { products, setActiveProduct, deleteProduct, searchQuery } =
    useProductStore((state) => ({
      setActiveProduct: state.setActiveProduct,
      deleteProduct: state.deleteProduct,
      searchQuery: state.searchQuery,
      products: state.products,
    }));

  const filteredProducts = useMemo(() => {
    const fuse = new Fuse(products, fuseOptions);
    if (searchQuery.length) {
      return fuse.search(searchQuery).map((product) => product.item);
    }
    return products;
  }, [products, searchQuery]);

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: 700, height: 'min-content' }}
      >
        <Table
          stickyHeader
          aria-label='simple table'
          sx={{
            minWidth: 550,
            '& .MuiTableCell-root': {
              borderLeft: '1px solid black',
              borderBottom: '1px solid black',
            },
            '& .MuiTableCell-head': {
              borderTop: '1px solid black',
            },
          }}
        >
          <TableHead>
            <TableRow
              sx={{
                '& th:last-child': { borderRight: '1px solid black' },
                '& > th': {
                  fontWeight: 700,
                },
              }}
            >
              <TableCell className='bg-light-gray' align='center' width='33%'>
                Name
              </TableCell>
              <TableCell className='bg-light-gray' align='center' width='33%'>
                Price
              </TableCell>
              <TableCell className='bg-light-gray' align='center' width='33%'>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  '& td:last-child': { borderRight: '1px solid black' },
                  '& > td': {
                    fontWeight: 500,
                  },
                }}
              >
                <TableCell align='center'>{row.name}</TableCell>
                <TableCell align='center'>{row.price}</TableCell>
                <TableCell align='center'>
                  <Button
                    variant='dark'
                    size='sm'
                    onClick={() => setActiveProduct(row)}
                  >
                    Edit
                  </Button>{' '}
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => deleteProduct(row.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <SearchField type='table' />
    </>
  );
};

export default ProductTable;
