import {useEffect, useState} from 'react';
import {makeServer} from '../mocks/server';

export const useProduct = () => {
  const [listProducts, setListProducts] = useState([]);
  const [isServerLoaded, setServerLoaded] = useState(false);

  const fetchProducts = async () => {
    const response = await fetch('/api/products');
    const data = await response.json();
    setListProducts(data || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!isServerLoaded) {
      makeServer();
      setServerLoaded(true);
    }
  }, [isServerLoaded]);

  return [listProducts];
};
