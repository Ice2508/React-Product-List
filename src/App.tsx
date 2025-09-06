import { useState, useEffect } from 'react';
import ProductItem from './components/ProductItem';
import AddForm from './components/AddForm'; 

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [products, setProducts] = useState<string[]>(() => {
  const saved = localStorage.getItem('products');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
});
  
  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
     setInputValue(e.target.value);
  }

  function onSubmitProduct(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setProducts(prevProducts => {
    const newProducts = [...prevProducts, inputValue];
    return newProducts;
  });
    setInputValue('');
  }

  function deleteProduct(index: number) {
    const newProducts = products.filter((_, i) => index !== i);
    setProducts(newProducts);
  }

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);
  
  return (
    <div className="wrap">
      <h1 className="add-title">Список товаров</h1>
        <AddForm onSubmitProduct={onSubmitProduct} inputValue={inputValue} onChangeInput={onChangeInput} />
        <ul className="product-list">
          {products.map((product, index) => {
            return <ProductItem product={product} key={index} index={index} deleteProduct={deleteProduct} />
          })}
        </ul>
    </div>
  )
}

export default App
