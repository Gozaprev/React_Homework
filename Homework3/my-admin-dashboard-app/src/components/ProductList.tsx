import { Link } from 'react-router-dom';


interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
}

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                {products.map((p: Product) => (
                    <tr key={p.id}>
                        <td>{p.title}</td>
                        <td>${p.price}</td>
                        <td>{p.category}</td>
                        <td>
                            <Link to={`/products/${p.id}`}>View</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

