import { useNavigate } from "react-router-dom";

const Button = (props) => {
    const navigate = useNavigate();

    const handleCLick = () => {
        navigate(`${props.link}`)
    }

    return (
    <>
        {
            !props.linkButton ?
            <>
            <button className={`btn btn-outline-${props.color} nav-space`} >{props.name}</button>
            </>:
            <>
            <button className={`btn btn-outline-${props.color} nav-space`} onClick={handleCLick}>{props.name}</button>
            </>
        }
    </>
    );
};

export default Button;