import { Filters, PaginationContainer, ProductsContainer } from "../components"

const Products = () => {
    return (
        <section>
            <Filters />
            <ProductsContainer />
            <PaginationContainer />
        </section>
    )
}
export default Products