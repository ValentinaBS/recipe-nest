import { useRef, useState } from 'react';
import IngredientItem from './IngredientItem'
import { MagicMotion } from 'react-magic-motion';

export const Ingredients: React.FC = () => {
    const [ingredients, setIngredients] = useState([
        { id: crypto.randomUUID(), text: 'water', quantity: '1l' },
        { id: crypto.randomUUID(), text: 'tomatos', quantity: '3' },
    ]);

    const newIngredientInput = useRef<HTMLInputElement>(null);
    const newQuantityInput = useRef<HTMLInputElement>(null);

    const addIngredient = () => {
        if (!newIngredientInput.current?.value || !newQuantityInput.current?.value) return;

        setIngredients([
            ...ingredients,
            {
                id: crypto.randomUUID(),
                text: newIngredientInput.current.value,
                quantity: newQuantityInput.current.value,
            },
        ]);

        newIngredientInput.current.value = '';
        newQuantityInput.current.value = '';
    };

    return (
        <MagicMotion>
            <div>
                <ul className='d-flex flex-column gap-3 ps-0 overflow-hidden'>
                    {ingredients.map((ingredient) => (
                        <IngredientItem
                            key={ingredient.id}
                            ingredient={ingredient}
                            setIngredients={setIngredients}
                        />
                    ))}
                </ul>
                <div className='d-flex flex-column flex-md-row gap-3 mt-4'>
                    <div className='d-flex gap-3 w-100'>
                        <input
                            ref={newQuantityInput}
                            type='text'
                            placeholder='3 kg...'
                            className='form-control quantity-input'
                        />

                        <input
                            ref={newIngredientInput}
                            type='text'
                            placeholder='Add a new ingredient...'
                            className='form-control'
                        />
                    </div>

                    <button
                        type='button'
                        title='Add a new ingredient'
                        className='btn primary-btn d-flex align-items-center justify-content-center gap-2 add-ingredient-button'
                        onClick={addIngredient}
                    >
                        <span>+</span>
                        Add Ingredient
                    </button>
                </div>
            </div>
        </MagicMotion>
    )
}
