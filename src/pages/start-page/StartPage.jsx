import React from "react";
import TempMenu from "../../components/temp-menu/TempMenu";
import './StartPage.css';

const StartPage = () => {
    return (
        <div className="wrapper">
            <TempMenu />
            <hr></hr>

            <h3>
                Greetings
            </h3>
            <h4> 
                start
                app description 
                and disclaimer if necessary.
            </h4>
            <p style={{width:'80%', margin: 'auto'}}>
                some text * some text * 
                some text * some text * 
                some text * some text * 
                some text * some text * 
                some text * 
            </p>
            <br></br>
            <p style={{width:'80%', margin: 'auto'}}>
                some text * some text * 
                some text * some text * 
                some text * some text * 
                some text * some text * 
                some text * 
            </p>

        </div>
    )
}

export default StartPage