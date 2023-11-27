import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);
import { useLoaderData } from "react-router-dom";

const OrdersList = () => {
    const { data, meta } = useLoaderData()
    // console.log(data);
    // console.log(meta);

    return (
        <div className="mt-8">
            <h4 className="mb-4 capitalize">total orders : {meta.pagination.total}</h4>
            <div className="overflow-x-auto">
                <table className="table table-zebra text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Product</th>
                            <th>Cost</th>
                            <th className="hidden sm:block">Date</th>
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody>
                        {data.map((item) => {
                            const { id, attributes: { name, address, numItemsInCart, orderTotal, createdAt } } = item
                            // console.log(name, address, numItemsInCart, orderTotal, createdAt);
                            const date = day(createdAt).format("hh:mma - MMM Do, YYYY");
                            return <tr key={id}>
                                <td>{name}</td>
                                <td>{address}</td>
                                <td>{numItemsInCart}</td>
                                <td>{orderTotal}</td>
                                <td className="hidden sm:block">{date}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default OrdersList