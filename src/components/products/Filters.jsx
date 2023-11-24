import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import FormRange from "../FormRange";
import FormCheckbox from "../FormCheckbox";
import { useState } from "react";

const Filters = () => {
    const { categories, companies } = useLoaderData().meta
    const [{ search, category, company, order, price, shipping }] = useState(useLoaderData().params)

    return (
        <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
            {/* SEARCH */}
            <FormInput label="search product" name="search" type="search" size="input-sm" defaultValue={search || ''} />
            {/* CATEGORIES */}
            <FormSelect label="select category" name="category" list={categories} defaultValue={category || 'all'} size="select-sm" />
            {/* COMPANIES */}
            <FormSelect label="select company" name="company" list={companies} defaultValue={company || 'all'} size="select-sm" />
            {/* ORDER */}
            <FormSelect label="sort by" name="order" list={['a-z', 'z-a', 'high', 'low']} defaultValue={order || 'a-z'} size="select-sm" />
            {/* PRICE */}
            <FormRange label="select price" name="price" size="range-sm" defaultValue={price || '1000000'} />
            {/* FREE SHIPPING */}
            <FormCheckbox label="free shipping" name="shipping" defaultValue={shipping === 'on' || false} size="checkbox-sm" />
            {/* BUTTONS */}
            <button type="submit" className="btn btn-primary btn-sm uppercase">
                search
            </button>
            <Link to='/products' className="btn btn-accent btn-sm uppercase">reset</Link>
        </Form>
    )
}
export default Filters