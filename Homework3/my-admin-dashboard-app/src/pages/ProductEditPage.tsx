import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm, type SubmitHandler } from 'react-hook-form';

interface ProductData {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export default function ProductEditPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // react-hook-form setup
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ProductData>();

    // Fetch product data on mount and populate form
    useEffect(() => {
        if (!id) {
            setError('Product ID is missing');
            setLoading(false);
            return;
        }

        setLoading(true);
        axios.get<ProductData>(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                reset(response.data); // prefill with fetched data
                setError(null);
            })
            .catch(() => setError('Failed to fetch product data'))
            .finally(() => setLoading(false));
    }, [id, reset]);

    // Form submission handler
    const handleUpdate: SubmitHandler<ProductData> = async (data) => {
        try {
            await axios.put(`https://fakestoreapi.com/products/${id}`, data);
            navigate(`/products/${id}`);
        } catch {
            setError('Failed to update product');
        }
    };

    if (loading) return <p>Loading product data...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit(handleUpdate)} noValidate>
                <div>
                    <label>Title</label><br />
                    <input
                        {...register('title', { required: 'Title is required' })}
                        type="text"
                    />
                    {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
                </div>

                <div>
                    <label>Price</label><br />
                    <input
                        {...register('price', {
                            required: 'Price is required',
                            valueAsNumber: true,
                            min: { value: 0.01, message: 'Price must be positive' }
                        })}
                        type="number"
                        step="0.01"
                    />
                    {errors.price && <p style={{ color: 'red' }}>{errors.price.message}</p>}
                </div>

                <div>
                    <label>Description</label><br />
                    <textarea
                        {...register('description', { required: 'Description is required' })}
                    />
                    {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
                </div>

                <div>
                    <label>Category</label><br />
                    <input
                        {...register('category', { required: 'Category is required' })}
                        type="text"
                    />
                    {errors.category && <p style={{ color: 'red' }}>{errors.category.message}</p>}
                </div>

                <div>
                    <label>Image URL</label><br />
                    <input
                        {...register('image', {
                            required: 'Image URL is required',
                            pattern: {
                                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))/i,
                                message: 'Enter a valid image URL'
                            }
                        })}
                        type="url"
                    />
                    {errors.image && <p style={{ color: 'red' }}>{errors.image.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Updating...' : 'Update Product'}
                </button>
            </form>
        </div>
    );
}
