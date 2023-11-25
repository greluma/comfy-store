import { Link } from "react-router-dom"
import { CartItemsList, CartTotals, SectionTitle } from "../components"
import { useSelector } from "react-redux"

const Cart = () => {
    // TODO user
    const user = 'null';
    const numItemsInCart = useSelector(state => state.cartState.numItemsInCart);

    if (numItemsInCart === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-96">
                <SectionTitle text="Your cart is empty"></SectionTitle>
                <Link to="/products" className="text-blue-500 underline mt-8 text-2xl">Continue Shopping</Link>
            </div>
        )
    }

    return (
        <>
            <SectionTitle text="Shopping cart" />
            <div className="grid mt-12 gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <CartItemsList />
                </div>
                <div className="lg:col-span-4 lg:pl-4">
                    <CartTotals />
                    {user ? <Link to={'/checkout'} className="btn btn-primary mt-8 btn-block capitalize">proceed to checkout</Link> : <Link to={'/login'} className="btn btn-primary mt-8  btn-block capitalize">please login</Link>}
                </div>
            </div>
        </>
    )
}
export default Cart