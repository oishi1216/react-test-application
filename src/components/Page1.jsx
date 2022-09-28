import { Link, Outlet } from "react-router-dom"

export const Page1 = () => {
    return(
        <div>
            <h1>Page1ページです</h1>
            <Link to="Page1DetailA">DetailA</Link>
            <br />
            <Link to="Page1DetailB">DetailB</Link>
            <Outlet />
        </div>
    )
}