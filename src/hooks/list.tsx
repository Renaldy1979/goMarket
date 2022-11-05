import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { api } from '../services/api';

type ListProviderProps = {
  children: ReactNode;
};

type ListProps = {
  id: string;
  name: string;
  dateShopping: string;
  markets: {
    name: string;
    img: string;
    adrress: string;
  };
  totalValue: number;
  totalItems: number;
};

type ProductsProps = {
  productId: string;
  productName: string;
  productUnity: string;
  productType: string;
  productImg: string;
};

type ListContextData = {
  lists: ListProps[];
  products: ProductsProps[];
  fetchLists: () => void;
  fetchProducts: () => void;
  isLoading: boolean;
  removeList: (id: string) => void;
};
const ListContext = createContext<ListContextData>({} as ListContextData);

function ListProvider({ children }: ListProviderProps) {
  const [lists, setLists] = useState<ListProps[]>([]);
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProducts() {
    console.log('carregou o state products');
    try {
      setIsLoading(true);
      setProducts([]);
      const response = await api.get<ProductsProps[]>(`/products/`);
      const { data } = response;
      setProducts([...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  async function fetchLists() {
    console.log('carregou o state list');
    try {
      setIsLoading(true);
      setLists([]);
      const response = await api.get<ListProps[]>(`/lists`);
      const { data } = response;
      setLists([...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const removeList = useCallback(async (id: string) => {
    console.log('função removeList do hook list');
    try {
      await api.delete(`/lists/${id}`);
      fetchLists();
      console.log(`Lista apagada ${id}`);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const value = useMemo(
    () => ({
      lists,
      products,
      fetchLists,
      fetchProducts,
      isLoading,
      removeList,
    }),
    [isLoading, lists, products, removeList],
  );

  // useEffect(() => {
  //   fetchLists();
  // }, []);

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
}

function useList() {
  const context = useContext(ListContext);
  return context;
}
export { ListProvider, useList };
