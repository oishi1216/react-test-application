import { useLocation, useNavigate } from "react-router-dom"

export const Page1DetailA = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    console.log(state);
    const onClickPage1 = () => navigate("/Page1");
    const onClickBack = () => navigate(-1);

    return(
        <div>
            <h1>Page1DetailAページです</h1>
            <button onClick={onClickPage1}>Page1に戻る</button>
            <button onClick={onClickBack}>前のページに戻る</button>
        </div>
    )
}