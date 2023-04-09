import useProductStore from '@/stores/useProductStore';

type SearchFieldProps = {
  type: 'toolbar' | 'table';
};

const SearchField = ({ type }: SearchFieldProps) => {
  const { searchQuery, setSearchQuery } = useProductStore((state) => ({
    searchQuery: state.searchQuery,
    setSearchQuery: state.setSearchQuery,
  }));

  return (
    <input
      className={`w-full rounded border border-black px-3 py-3.5 lg:max-w-[250px] ${
        type === 'table' ? 'block lg:hidden' : 'hidden lg:block'
      }`}
      placeholder='Search for keywords...'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchField;
