import Image from 'next/image'
import ProductCard from './components/ProductCard/ProductCard';

export default function Home() {
  // -------------------
const products = [
  // Sample product data
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    category: 'Category 1',
    image: 'https://w7.pngwing.com/pngs/339/215/png-transparent-gemstone-emerald-jewellery-gems-diamond-color-sapphire.png',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    category: 'Category 1',
    image: 'https://w7.pngwing.com/pngs/339/215/png-transparent-gemstone-emerald-jewellery-gems-diamond-color-sapphire.png',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    category: 'Category 1',
    image: 'https://w7.pngwing.com/pngs/339/215/png-transparent-gemstone-emerald-jewellery-gems-diamond-color-sapphire.png',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    category: 'Category 1',
    image: 'https://w7.pngwing.com/pngs/339/215/png-transparent-gemstone-emerald-jewellery-gems-diamond-color-sapphire.png',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    category: 'Category 1',
    image: 'https://w7.pngwing.com/pngs/339/215/png-transparent-gemstone-emerald-jewellery-gems-diamond-color-sapphire.png',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    category: 'Category 1',
    image: 'https://w7.pngwing.com/pngs/339/215/png-transparent-gemstone-emerald-jewellery-gems-diamond-color-sapphire.png',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    category: 'Category 1',
    image: 'https://w7.pngwing.com/pngs/339/215/png-transparent-gemstone-emerald-jewellery-gems-diamond-color-sapphire.png',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    category: 'Category 1',
    image: 'https://w7.pngwing.com/pngs/339/215/png-transparent-gemstone-emerald-jewellery-gems-diamond-color-sapphire.png',
  },
  
];
// ------------------
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product ={product} />
      ))}
    </div>
    </>
  )
}
