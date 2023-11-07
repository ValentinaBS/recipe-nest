import React from 'react'
import Comments from '../../components/Comments/Comments'
import './recipe.css'

const Recipe: React.FC = () => {
    return (
        <div className='mx-auto my-5 recipe-container'>
            <Comments />
        </div>
    )
}

export default Recipe