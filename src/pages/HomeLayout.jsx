import { Outlet, useNavigation } from "react-router-dom"
import { Header, Loading, Navbar } from "../components"

const HomeLayout = () => {
    const { state } = useNavigation()
    return <>
        <Header />
        <Navbar />
        {state === "loading" ? <Loading /> : <section className="align-element py-20">
            <Outlet />
        </section>}
    </>

}
export default HomeLayout