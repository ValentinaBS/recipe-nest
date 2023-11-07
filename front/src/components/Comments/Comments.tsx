import React from 'react';
import { BiLike, BiSolidComment, BiSolidSend } from 'react-icons/bi';

const Comments: React.FC = () => {
    return (
        <div className='p-4 card-background'>
            <div className='d-flex align-items-center gap-3'>
                <BiSolidComment className='fs-3 mb-2' />
                <h2 className='fs-3 fw-bold'>Comments</h2>
            </div>

            <div className='d-flex gap-3 my-3'>
                <img className='rounded-circle p-1 comments-img' src="https://i.imgur.com/3PnQ2EZ.png" alt="Profile picture" />
                <div>
                    <p className='mb-0 fw-bold'>JaneD123</p>
                    <p className='mb-2 text-secondary'>a few seconds ago</p>
                    <p>Such a creative recipe!</p>
                    <button className='btn d-flex gap-2 p-0 border-0'>
                        <BiLike className='fs-3' />
                        <span className='fw-bold fs-5'>3</span>
                    </button>
                </div>
            </div>

            <form className='d-flex align-items-center gap-2'>
                <img className='rounded-circle p-1 comments-img' src="https://i.imgur.com/3PnQ2EZ.png" alt="Profile picture" />
                <input className='form-control' placeholder='I liked the part where...' type="text" />
                <button className='btn primary-btn px-2' type='submit'>
                    <BiSolidSend className='fs-5' />
                </button>
            </form>
        </div>
    )
}

export default Comments