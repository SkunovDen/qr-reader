import React from "react";
import './ResultPage.css';
import CodeInput from '../../components/code-input/CodeInput';
import TempMenu from "../../components/temp-menu/TempMenu";


const ResultPage = () => {
    return (
        <div className="wrapper">
            <TempMenu />
            <hr></hr>

            <h3>
                Results for code 
            </h3>
            
            <CodeInput />
            
            <br></br>

            <h4> 
                Some results:
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

export default ResultPage