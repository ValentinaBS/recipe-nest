import { type Dispatch, type SetStateAction } from 'react';

export default function IngredientItem({
    ingredient,
    setIngredients,
}: {
    ingredient: {
        id: `${string}-${string}-${string}-${string}-${string}`;
        text: string;
    };
    setIngredients: Dispatch<
        SetStateAction<
            {
                id: `${string}-${string}-${string}-${string}-${string}`;
                text: string;
            }[]
        >
    >;
}): JSX.Element {

    const handleDelete = () => {
        setIngredients((ingredients) =>
            ingredients.filter((i) => i.id !== ingredient.id)
        );
    };

    return (
        <li className='d-flex justify-content-between align-items-center ps-3 my-2 rounded ingredient-item'>
            {ingredient.text}
            <button
                type='button'
                title='Delete this item'
                className='btn secondary-btn'
                onClick={handleDelete}
            >
                ✖
            </button>
        </li>
    );
}