import { OrdersList, PaginationContainer, SectionTitle } from "../components"
import { useLoaderData } from "react-router-dom"

const Orders = () => {
    const { meta } = useLoaderData()

    if (meta.pagination.total < 1) {
        return <SectionTitle text="Please make an order" />
    }

    return (
        <>
            <SectionTitle text="Your Orders" />
            <OrdersList> </OrdersList>
            <PaginationContainer />

        </>
    )
}
export default Orders