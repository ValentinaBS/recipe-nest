import React from 'react';
import IngredientItem from './IngredientItem'
import { FaPlus } from "react-icons/fa6";
import { Field, ErrorMessage, useFormikContext } from 'formik';
import { Ingredient } from '../../types/ingredient';

export const Ingredients: React.FC = () => {
    const formikContext = useFormikContext<any>();

    const removeIngredient = (id: string) => {
            const updatedIngredients = formikContext.values.ingredients
            .filter((ingredient: Ingredient) => ingredient.id !== id);
    
            formikContext.setFieldValue('ingredients', updatedIngredients);
    };

    const addIngredient = () => {
        const newIngredientText = formikContext.values.newIngredientText;
        const newIngredientQuantity = formikContext.values.newIngredientQuantity;
        const newIngredientUnit = formikContext.values.newIngredientUnit;

        if (!newIngredientText || !newIngredientQuantity || !newIngredientUnit) return;

        formikContext.setFieldValue('ingredients', [
            ...formikContext.values.ingredients,
            {
                id: crypto.randomUUID(),
                text: newIngredientText,
                quantity: newIngredientQuantity,
                unit: newIngredientUnit,
            },
        ]);

        formikContext.setFieldValue('newIngredientText', '');
        formikContext.setFieldValue('newIngredientQuantity', '');
        formikContext.setFieldValue('newIngredientUnit', '');
    };

    return (
        <>
            <ul className='d-flex flex-column gap-3 ps-0 overflow-hidden'>
                {formikContext.values.ingredients.map((ingredient: Ingredient) => (
                    <IngredientItem key={ingredient.id} ingredient={ingredient} removeIngredient={removeIngredient} />
                ))}
            </ul>
            <div className='d-flex flex-column flex-md-row gap-3 mt-4 justify-content-between'>
                <div className='d-flex flex-column flex-md-row gap-3'>
                    <div className='d-flex gap-2'>
                        <Field
                            name='newIngredientQuantity'
                            type='text'
                            placeholder='3'
                            className='form-control quantity-ingredient-input'
                            value={formikContext.values.newIngredientQuantity || ''}
                        />

                        <Field
                            as='select'
                            name='newIngredientUnit'
                            className='form-select unit-ingredient-input'
                            value={formikContext.values.newIngredientUnit || ''}
                        >
                            <option value='' disabled>- Select unit -</option>
                            <optgroup label="Volume measurements">
                                <option value='tsp'>Teaspoon (tsp)</option>
                                <option value='tbsp'>Tablespoon (tbsp)</option>
                                <option value='fl oz'>Fluid ounce (fl oz)</option>
                                <option value='c'>Cup (c)</option>
                                <option value='pt'>Pint (pt)</option>
                                <option value='qt'>Quart (qt)</option>
                                <option value='gal'>Gallon (gal)</option>
                            </optgroup>
                            <optgroup label="Weight measurements">
                                <option value='oz'>Ounce (oz)</option>
                                <option value='lb'>Pound (lb)</option>
                                <option value='g'>Gram (g)</option>
                                <option value='kg'>Kilogram (kg)</option>
                            </optgroup>
                            <optgroup label="Other measurements">
                                <option value='pinch'>Pinch</option>
                                <option value='dash'>Dash</option>
                                <option value='drop'>Drop</option>
                                <option value='sprig'>Sprig</option>
                                <option value='slice'>Slice</option>
                                <option value='piece'>Piece</option>
                                <option value='unit'>Unit</option>
                            </optgroup>
                        </Field>
                    </div>
                    <Field
                        name='newIngredientText'
                        type='text'
                        placeholder='Add a new ingredient...'
                        className='form-control title-ingredient-input'
                        value={formikContext.values.newIngredientText || ''}
                    />

                </div>
                <button
                    type='button'
                    title='Add a new ingredient'
                    className='btn primary-btn d-flex align-items-center justify-content-center gap-2'
                    onClick={addIngredient}
                >
                    <FaPlus />
                    <span className='d-md-none'>Add Ingredient</span>
                </button>
            </div>
            <ErrorMessage name='newIngredientQuantity' component='div' className='text-danger' />
            <ErrorMessage name='newIngredientUnit' component='div' className='text-danger' />
            <ErrorMessage name='newIngredientText' component='div' className='text-danger' />
        </>
    );
};
