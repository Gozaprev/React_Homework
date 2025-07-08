import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

export default function DashboardHome() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data))
            .catch(() => setError('Failed to fetch products'))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div>
            <h2>Products</h2>
            <ProductList products={products} />
        </div>
    );
}

