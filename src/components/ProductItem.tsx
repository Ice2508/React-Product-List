


interface ProductItemProps {
  product: string;
  index: number;
  deleteProduct: (index: number) => void;
}

export default function ProductItem({ product, index, deleteProduct}: ProductItemProps) {
	return (
     <li className="product-item">
      {product}
      <button className="product-delete" onClick={() => deleteProduct(index)}>&times;</button>
    </li>
	);
}