import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm, type SubmitHandler } from 'react-hook-form';

interface ProductData {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export default function ProductCreatePage() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ProductData>();

    const handleCreate: SubmitHandler<ProductData> = async (data) => {
        try {
            await axios.post('https://fakestoreapi.com/products', data);
            navigate('/');
        } catch (error) {
            alert('Failed to create product');
        }
    };

    return (
        <div>
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit(handleCreate)} noValidate>
                <div>
                    <label>Title</label><br />
                    <input {...register('title', { required: 'Title is required' })} />
                    {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
                </div>

                <div>
                    <label>Price</label><br />
                    <input
                        type="number"
                        step="0.01"
                        {...register('price', {
                            required: 'Price is required',
                            valueAsNumber: true,
                            min: { value: 0.01, message: 'Price must be positive' }
                        })}
                    />
                    {errors.price && <p style={{ color: 'red' }}>{errors.price.message}</p>}
                </div>

                <div>
                    <label>Description</label><br />
                    <textarea {...register('description', { required: 'Description is required' })} />
                    {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
                </div>

                <div>
                    <label>Category</label><br />
                    <input {...register('category', { required: 'Category is required' })} />
                    {errors.category && <p style={{ color: 'red' }}>{errors.category.message}</p>}
                </div>

                <div>
                    <label>Image URL</label><br />
                    <input
                        type="url"
                        {...register('image', {
                            required: 'Image URL is required',
                            pattern: {
                                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))/i,
                                message: 'Enter a valid image URL'
                            }
                        })}
                    />
                    {errors.image && <p style={{ color: 'red' }}>{errors.image.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Creating...' : 'Create Product'}
                </button>
            </form>
        </div>
    );
}
