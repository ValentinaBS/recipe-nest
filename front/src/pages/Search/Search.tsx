import Filters from '../../components/Filters/Filters';
import RecipeCardContainer from '../../components/RecipeCard/RecipeCardContainer';

export const Search = () => {
    return (
        <>
            <section className="mb-5 mt-3 pt-4 pt-md-5 mx-2 mx-md-4 d-flex column-gap-3">
                <Filters display=' d-none d-lg-block' />
                <RecipeCardContainer title='Search your ideal recipe!' />
            </section>
        </>
    )
}
