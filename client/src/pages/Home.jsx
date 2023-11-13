import { useSelector } from 'react-redux';
import Product from '../features/Product/Product/Product';

export default function Home() {
  const { products } = useSelector((store) => store.product);

  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
