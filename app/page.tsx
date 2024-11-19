import ProductGrid from '@/components/product-grid';
import { products } from '@/lib/data';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Featured Products</h1>
      <ProductGrid products={products} />
    </main>
  );
}