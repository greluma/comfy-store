import { useState } from "react"
import ProductsGrid from "../ProductsGrid"
import ProductsList from "../productsList"
import { useLoaderData } from "react-router-dom";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
    const [layout, setLayout] = useState('grid');
    const { meta } = useLoaderData();

    const total = meta?.pagination?.total

    const toggleView = () => {
        layout === 'grid' ? setLayout('list') : setLayout('grid');
    };

    const setActiveStyles = (pattern) => {
        return `text-xl btn btn-circle btn-sm ${layout === pattern ? 'btn-primary text-primary-content' : 'btn-ghost text-base-content'}`
    }

    return (
        <>
            {/* HEADER */}
            <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
                <h4 className="font-medium text-md">{total ? `${total} ${total === 1 ? 'Product' : 'Products'}` : 'Total No Available'}</h4>
                <div className="flex gap-x-4">
                    <button type="button" onClick={toggleView} className={setActiveStyles('grid')}>
                        <BsFillGridFill />
                    </button>
                    <button type="button" onClick={toggleView} className={setActiveStyles('list')}>
                        <BsList />
                    </button>
                </div>
            </div>
            {/* PRODUCTS */}
            <div>
                {total === 0 ? <h5 className="text-2xl mt-16">Sorry, no products matched your search...</h5> : (layout === 'grid' ? <ProductsGrid /> : <ProductsList />)}
            </div>
        </>
    );
};
export default ProductsContainer