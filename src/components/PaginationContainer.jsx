import { useLoaderData, useLocation, useNavigate } from "react-router-dom"


const PaginationContainer = () => {
    const { meta: { pagination: { pageCount, page } } } = useLoaderData();
    const pages = [...Array(pageCount).keys()].map(i => i + 1);

    const { search, pathname } = useLocation();
    const navigate = useNavigate();

    const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set('page', pageNumber);
        navigate(`${pathname}?${searchParams.toString()}`);
    }

    if (pageCount < 2) return null;

    return (
        <div className="mt-16 flex justify-end">
            <div className="join">
                <button className="btn btn-xs sm:btn-md join-item" onClick={() => {
                    let prevPage = page - 1;
                    prevPage === 0 ? '' : handlePageChange(prevPage)
                }}>
                    Prev
                </button>
                {pages.map((item) => {
                    return <button key={item} className={`btn btn-xs sm:btn-md border-none join-item ${item === page ? 'bg-base-300 border-base-300' : ''}`} onClick={() => {
                        page === item ? '' : handlePageChange(item)
                    }}>{item}</button>
                })}
                <button className="btn btn-xs sm:btn-md join-item" onClick={() => {
                    let nextPage = page + 1;
                    nextPage === pageCount + 1 ? '' : handlePageChange(nextPage)
                }}>
                    Next
                </button>
            </div>
        </div>
    )
}
export default PaginationContainer

