import { FaTrash } from "react-icons/fa6";
import { IngredientItemProps } from "../../types/ingredient";

const IngredientItem: React.FC<IngredientItemProps> = ({ ingredient, removeIngredient }) => {
    const handleDelete = () => {
        removeIngredient(ingredient.id);
    };

    return (
        <li className='d-flex justify-content-between align-items-center ps-3 my-2 rounded ingredient-item'>
            {`${ingredient.quantity} ${ingredient.unit} ${ingredient.text}`}
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