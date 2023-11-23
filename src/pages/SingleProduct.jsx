import { Link, useLoaderData } from "react-router-dom"
import { formatPrice, generateAmountOptions } from "../utils"
import { useState } from "react"

const SingleProduct = () => {
    const { products } = useLoaderData()
    const { image, title, price, description, colors, company } = products.attributes
    const dollarsAmount = formatPrice(price)
    const [productColor, setProductColor] = useState(colors[0])
    const [amount, setAmount] = useState(1)
    const handleAmount = (e) => {
        setAmount(parseInt(e.target.value))
    }

    return (
        <section>
            {/* BREADCRUMBS */}
            <div className="text-md breadcrumbs">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="capitalize">
                        {title}
                    </li>
                </ul>
            </div>

            {/* PRODUCTS */}
            <div className="mt-6 grid gap-y-8 lg:grid-cols-60-40 lg:gap-x-16">
                {/* IMAGE */}
                <img src={image} alt={title} className="object-cover rounded-lg lg:w-full" />
                {/* INFO */}
                <div>
                    <h1 className="capitalize text-3xl font-bold">{title}</h1>
                    <h4 className="text-xl text-neutral-content font-bold mt-2">{company}</h4>
                    <p className="mt-3 text-xl">{dollarsAmount}</p>
                    <p className="mt-6 leading-8">{description}</p>
                    {/* COLORS */}
                    <div className="mt-6">
                        <h4 className="text-md font-bold tracking-[0.09em] capitalize">colors</h4>
                        <div className="mt-2">
                            {colors.map((color) => {
                                return (
                                    <button
                                        key={color}
                                        type="button"
                                        className={`w-6 h-6 rounded-full mr-3 ${color === productColor ? "ring-1 ring-offset-1 ring-neutral-content" : ""}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => setProductColor(color)}
                                    ></button>
                                )
                            })}
                        </div>
                    </div>
                    {/* AMOUNT */}
                    <div className="form-control w-full max-w-xs mt-4">
                        <label className="label" htmlFor="amount">
                            <h4 className="text-md capitalize font-bold tracking-[0.09em]" >amount</h4>
                        </label>
                        <select id="amount" className="select select-secondary select-bordered select-md" value={amount} onChange={handleAmount}>
                            {/* {Array.from({ length: 5 }, (_, index) => {
                                return (
                                    <option key={index} value={index + 1}>{index + 1}</option>
                                )
                            })} */}
                            {generateAmountOptions(5)}
                        </select>
                    </div>
                    {/* CART BTN */}
                    <div className="mt-8 text-center w-[40%]">
                        <button className="btn btn-secondary btn-md uppercase w-full font-bold">add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleProduct