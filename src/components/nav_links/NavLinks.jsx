import { NavLink } from "react-router-dom";
import links from "./links"

const NavLinks = () => {
    return (
        <>
            {links.map(item => {
                const { id, url, text } = item;
                return <li key={id}>
                    <NavLink to={url} className='capitalize m-1'>{text}</NavLink>
                </li>
            })}
        </>
    )
}
export default NavLinks