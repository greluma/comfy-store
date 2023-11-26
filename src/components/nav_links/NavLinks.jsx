import { NavLink } from "react-router-dom";
import links from "./links"
import { useSelector } from "react-redux";

const NavLinks = () => {
    const user = useSelector(state => state.userState.user)
    return (
        <>
            {links.map(item => {
                const { id, url, text } = item;
                if ((url === 'checkout' || url === 'orders') && !user) return null;
                return <li key={id}>
                    <NavLink to={url} className='capitalize m-1'>{text}</NavLink>
                </li>
            })}
        </>
    )
}
export default NavLinks