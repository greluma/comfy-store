import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import FormRange from "../FormRange";
import FormCheckbox from "../FormCheckbox";

const handleSubmit = () => {
    console.log('submit');
}

const Filters = () => {
    const { categories, companies } = useLoaderData().meta
    return (
        <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
            {/* SEARCH */}
            <FormInput label="search product" name="name" type="search" size="input-sm" />
            {/* CATEGORIES */}
            <FormSelect label="select category" name="category" list={categories} defaultValue="all" size="select-sm" />
            {/* COMPANIES */}
            <FormSelect label="select company" name="company" list={companies} defaultValue="all" size="select-sm" />
            {/* ORDER */}
            <FormSelect label="sort by" name="order" list={['a-z', 'z-a', 'high', 'low']} defaultValue="a-z" size="select-sm" />
            {/* PRICE */}
            <FormRange label="select price" name="price" size="range-sm" />
            {/* FREE SHIPPING */}
            <FormCheckbox label="free shipping" name="shipping" defaultValue="true" size="checkbox-sm" />
            {/* BUTTONS */}
            <button type="submit" className="btn btn-primary btn-sm uppercase" onClick={() => {
                handleSubmit()
            }}>
                search
            </button>
            <Link to='/products' className="btn btn-accent btn-sm uppercase">reset</Link>
        </Form>
    )
}
export default Filters