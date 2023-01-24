import React from "react";

import { Link } from "react-router-dom";


const TempMenu = () => {
    return(
        <div>
            <Link to={'/'}>
                start 
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to={'/input'}>
                scan
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to={'/result'}>
                results
            </Link>
        </div>
    )
}

export default TempMenu