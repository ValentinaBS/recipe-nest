import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Filters from '../../components/Filters/Filters';
// import RecipeCard from '../../components/RecipeCard/RecipeCard';

export const Search = () => {
    return (
        <>
            <Breadcrumb className='m-4 m-md-5 mb-2'>
                <Breadcrumb.Item className='nav-link' href="#">
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    Search
                </Breadcrumb.Item>
            </Breadcrumb>
            <section className="mb-5 mt-4 pt-4 pt-md-5 mx-2 mx-md-4 d-flex column-gap-3 border-top">
                <Filters display=' d-none d-lg-block'/>
                {/* <RecipeCard />  */}
            </section>
        </>
    )
}
