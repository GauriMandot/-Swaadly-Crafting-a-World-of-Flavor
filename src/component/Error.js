import { useRouteError } from "react-router-dom";

const Error=()=>{

    const err=useRouteError();
    console.log(err);

    return (
        <div id='error-div'>
            <h1>OOPS!</h1>
            <h2>{err.status}-{err.statusText}</h2>
        </div>
    );
}

export default Error;