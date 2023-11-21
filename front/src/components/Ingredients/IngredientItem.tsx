import { FaTrash } from "react-icons/fa6";

interface Ingredient {
    id: string;
    text: string;
    quantity: string;
}

interface IngredientItemProps {
    ingredient: Ingredient;
    removeIngredient: (id: string) => void;
}

const IngredientItem: React.FC<IngredientItemProps> = ({ ingredient, removeIngredient }) => {
    const handleDelete = () => {
        removeIngredient(ingredient.id);
    };

    return (
        <li className='d-flex justify-content-between align-items-center ps-3 my-2 rounded ingredient-item'>
            {ingredient.quantity + ' '}
            {ingredient.text}
            <button
                type='button'
                title='Delete this item'
                className='btn secondary-btn'
                onClick={handleDelete}
            >
                <FaTrash />
            </button>
        </li>
    );
};

export default IngredientItem;