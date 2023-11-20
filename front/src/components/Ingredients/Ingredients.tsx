import React from 'react';
import IngredientItem from './IngredientItem'
import { FaPlus } from "react-icons/fa6";
import { Field, ErrorMessage, useFormikContext } from 'formik';

interface Ingredient {
    id: `${string}-${string}-${string}-${string}-${string}`; 
    text: string;
    quantity: string;
}

export const Ingredients: React.FC = () => {
    const formikContext = useFormikContext<any>();

    const removeIngredient = (id: string) => {
        if (formikContext.values.ingredients.length > 1) {
            const updatedIngredients = formikContext.values.ingredients.filter((ingredient: Ingredient) => ingredient.id !== id);
            formikContext.setFieldValue('ingredients', updatedIngredients);
        }
    };

    const addIngredient = () => {
        const newIngredientText = formikContext.values.newIngredientText;
        const newIngredientQuantity = formikContext.values.newIngredientQuantity;

        if (!newIngredientText || !newIngredientQuantity) return;

        formikContext.setFieldValue('ingredients', [
            ...formikContext.values.ingredients,
            {
                id: crypto.randomUUID(),
                text: newIngredientText,
                quantity: newIngredientQuantity,
            },
        ]);

        formikContext.setFieldValue('newIngredientText', '');
        formikContext.setFieldValue('newIngredientQuantity', '');
    };

    return (
        <>
            <ul className='d-flex flex-column gap-3 ps-0 overflow-hidden'>
                {formikContext.values.ingredients.map((ingredient: Ingredient) => (
                    <IngredientItem key={ingredient.id} ingredient={ingredient} removeIngredient={removeIngredient} />
                ))}
            </ul>
            <div className='d-flex flex-column flex-md-row gap-3 mt-4'>
                <div className='d-flex gap-3 w-100'>
                    <Field
                        name='newIngredientQuantity'
                        type='text'
                        placeholder='3 kg...'
                        className='form-control quantity-input'
                        value={formikContext.values.newIngredientQuantity || ''}
                    />
                    <ErrorMessage name='newIngredientQuantity' component='div' className='text-danger' />
                    <Field
                        name='newIngredientText'
                        type='text'
                        placeholder='Add a new ingredient...'
                        className='form-control'
                        value={formikContext.values.newIngredientText || ''}
                    />
                    <ErrorMessage name='newIngredientText' component='div' className='text-danger' />
                </div>
                <button
                    type='button'
                    title='Add a new ingredient'
                    className='btn primary-btn d-flex align-items-center justify-content-center gap-2 add-ingredient-button'
                    onClick={addIngredient}
                >
                    <FaPlus />
                    Add Ingredient
                </button>
            </div>
        </>
    );
};
