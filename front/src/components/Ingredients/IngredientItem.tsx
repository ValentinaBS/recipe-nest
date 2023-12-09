import { BiTrash } from 'react-icons/bi';
import { IngredientItemProps } from "../../types/ingredient";

const IngredientItem: React.FC<IngredientItemProps> = ({ ingredient, removeIngredient }) => {
    const handleDelete = () => {
        removeIngredient(ingredient.id);
    };

    return (
        <li className='d-flex justify-content-between align-items-center ps-3 my-2 rounded ingredient-item'>
            {ingredient.text}
            <button
                type='button'
                title='Delete this item'
                className='btn secondary-btn px-2'
                onClick={handleDelete}
            >
                <BiTrash className='fs-4' />
            </button>
        </li>
    );
};

export default IngredientItem;