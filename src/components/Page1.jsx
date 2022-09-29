import { Link, Outlet, useNavigate } from "react-router-dom"

export const Page1 = () => {
    const arr = [...Array(100).keys()];
    const navigate = useNavigate();
    const onClickDetailA = () => navigate("Page1DetailA", {state: arr});
    return(
        <div>
            <h1>Page1ページです</h1>
            <Link to={"Page1DetailA"} state={arr}>DetailA</Link>
            <br />
            <Link to="Page1DetailB">DetailB</Link>
            <br />
            <button onClick={onClickDetailA}>DetailA</button>
            <Outlet />
        </div>
    )
}