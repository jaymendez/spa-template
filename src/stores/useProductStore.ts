import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface IProduct {
  id: string;
  name: string;
  price: string;
}

interface IProductStore {
  searchQuery: string;
  product?: IProduct | null;
  products: IProduct[];
  setActiveProduct: (product: IProduct | null) => void;
  addProduct: (product: IProduct) => void;
  updateProduct: (product: IProduct) => void;
  deleteProduct: (id: string) => void;
  setProducts: (products: IProduct[]) => void;
  setSearchQuery: (query: string) => void;
}

const initialState = {
  searchQuery: '',
  product: null,
  products: [],
};

let store = (set): IProductStore => ({
  ...initialState,
  setActiveProduct: (product) => set({ product }),
  setProducts: (products) => set({ products }),
  addProduct: (product) => {
    set((state: IProductStore) => ({ products: [...state.products, product] }));
  },
  updateProduct: (product) =>
    set((state: IProductStore) => {
      const updatedProducts = [...state.products];
      const index = updatedProducts.findIndex(
        (item: IProduct) => item.id === product.id
      );
      if (index !== -1) {
        updatedProducts.splice(index, 1, product);
      }
      return { products: updatedProducts };
    }),
  deleteProduct: (id) =>
    set((state: IProductStore) => {
      const updatedProducts = state.products.filter(
        (item: IProduct) => item.id !== id
      );
      return { products: updatedProducts };
    }),
  setSearchQuery: (query) => set({ searchQuery: query }),
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
store = devtools(store);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
store = persist(store, { name: 'productStore' });

const useProductStore = create<IProductStore>(store);

export default useProductStore;
