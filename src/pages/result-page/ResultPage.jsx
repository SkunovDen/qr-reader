import React from "react";
import './ResultPage.css';
import CodeInput from '../../components/code-input/CodeInput';


const ResultPage = () => {
    return (
        <div className="wrapper">
            empty
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