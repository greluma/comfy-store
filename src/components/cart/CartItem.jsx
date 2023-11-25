import { useDispatch } from "react-redux"
import { editItem, removeItem } from "../../feactures/cart/cartSlice"
import { formatPrice, generateAmountOptions } from "../../utils"


const CartItem = (item) => {
    const { cartID, title, price, image, company, productColor, amount } = item;
    const dispatch = useDispatch();
    return (
        <article className="mb-12 flex flex-col gap-y-4 sm:flex-row  flex-wrap border-b border-base-300 pb-6 last:border-b-0">
            {/* IMAGE */}
            <img src={image} alt={title} className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover" />
            {/* INFO */}
            <div className="sm:ml-16 sm:w-48">
                {/* TITLE */}
                <h3 className="capitalize font-medium">{title}</h3>
                {/* COMPANY */}
                <h4 className="capitalize text-sm mt-4">{company}</h4>
                {/* COLOR */}
                <p className="mt-2 text-sm capitalize flex items-center gap-x-2 ">
                    color :
                    <span className="badge badge-sm" style={{ backgroundColor: productColor }}></span>
                </p>
            </div>
            <div className="sm:ml-24">
                {/* AMOUNT */}
                <div className="form-control max-w-xs">
                    <label className="label p-0 " htmlFor="amount">
                        <span className="label-text">Amount</span>
                    </label>
                    <select id="amount" defaultValue={amount} onChange={() => {
                        dispatch(editItem({ cartID, amount: parseInt(event.target.value) }))
                    }} className="mt-2 select select-base select-bordered select-xs w-[50%] min-w-fit">
                        {generateAmountOptions(5)}
                    </select>
                </div>
                {/* REMOVE */}
                <button className="mt-4 link link-primary link-hover text-sm" onClick={() => {
                    dispatch(removeItem({ cartID }))

                }}>REMOVE</button>
            </div>
            {/* PRICE */}
            <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
        </article>
    )
}
export default CartItem