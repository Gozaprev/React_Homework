import { useForm, type SubmitHandler } from 'react-hook-form';
import type { ProductData } from '../types/product';

interface ProductFormProps {
    onSubmit: SubmitHandler<ProductData>;
    defaultValues: ProductData;
    isEditing: boolean;
}

export default function ProductForm({ onSubmit, defaultValues, isEditing }: ProductFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ProductData>({
        defaultValues,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label>
                Title
                <input {...register('title', { required: 'Title is required' })} />
                {errors.title && <span style={{ color: 'red' }}>{errors.title.message}</span>}
            </label>

            <label>
                Price
                <input
                    type="number"
                    step="0.01"
                    {...register('price', {
                        required: 'Price is required',
                        min: { value: 0.01, message: 'Price must be positive' },
                        valueAsNumber: true,
                    })}
                />
                {errors.price && <span style={{ color: 'red' }}>{errors.price.message}</span>}
            </label>

            <label>
                Description
                <textarea {...register('description', { required: 'Description is required' })} />
                {errors.description && <span style={{ color: 'red' }}>{errors.description.message}</span>}
            </label>

            <label>
                Category
                <input {...register('category', { required: 'Category is required' })} />
                {errors.category && <span style={{ color: 'red' }}>{errors.category.message}</span>}
            </label>

            <label>
                Image URL
                <input
                    {...register('image', {
                        required: 'Image URL is required',
                        pattern: {
                            value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))/i,
                            message: 'Enter a valid image URL',
                        },
                    })}
                />
                {errors.image && <span style={{ color: 'red' }}>{errors.image.message}</span>}
            </label>

            <button type="submit" disabled={isSubmitting}>
                {isEditing ? 'Update' : 'Create'} Product
            </button>
        </form>
    );
}
