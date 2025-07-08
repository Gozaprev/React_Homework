import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

export default function ProductDetailPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        axios.get<Product>(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(() => setError('Failed to fetch product'))
            .finally(() => setLoading(false));
    }, [id]);

    const handleDelete = async () => {
        if (!window.confirm('Delete this product?')) return;
        setDeleting(true);
        try {
            await axios.delete(`https://fakestoreapi.com/products/${id}`);
            navigate('/');
        } catch {
            setError('Failed to delete product');
        } finally {
            setDeleting(false);
        }
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;
    if (!product) return null;

    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width={150} />
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p>{product.description}</p>
            <div>
                <Link to={`/products/edit/${product.id}`}>Edit</Link>
                <button onClick={handleDelete} disabled={deleting} style={{ marginLeft: 10 }}>
                    {deleting ? 'Deleting...' : 'Delete'}
                </button>
            </div>
            <Link to="/" style={{ display: 'block', marginTop: 20 }}>Back to Products</Link>
        </div>
    );
}

