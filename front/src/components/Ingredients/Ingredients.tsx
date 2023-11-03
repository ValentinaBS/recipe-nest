import { useRef, useState } from 'react';
import IngredientItem  from './IngredientItem'
import { MagicMotion } from 'react-magic-motion';

export const Ingredients: React.FC = () => {
    const [ingredients, setIngredients] = useState([
        { id: crypto.randomUUID(), text: '1l water' },
        { id: crypto.randomUUID(), text: '3 tomatoes' },
    ]);

    const newIngredientInput = useRef<HTMLInputElement>(null);

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
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className='d-flex flex-column flex-md-row gap-3 mt-4'
                >
                    <input
                        ref={newIngredientInput}
                        type='text'
                        placeholder='Add a new ingredient...'
                        className='form-control'
                    />

                    <button
                        type='submit'
                        title='Add a new ingredient'
                        className='btn primary-btn col-12 col-md-4'
                        onClick={(e) => {
                            e.preventDefault()
                            if (!newIngredientInput.current?.value) return;
                            setIngredients([
                                ...ingredients,
                                {
                                    id: crypto.randomUUID(),
                                    text: newIngredientInput.current.value,
                                },
                            ]);
                            newIngredientInput.current.value = '';
                        }}
                    >
                        ＋ Add Ingredient
                    </button>
                </form>
            </div>
        </MagicMotion>
    )
}
