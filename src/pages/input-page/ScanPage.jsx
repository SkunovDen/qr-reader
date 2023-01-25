import React from "react";
import './ScanPage.css';
import CodeInput from '../../components/code-input/CodeInput';
import TempMenu from "../../components/temp-menu/TempMenu";

const ScanPage = () => {
    return (
    <div className="wrapper">
            <div className="scan-preview">
                <TempMenu />
                <hr></hr>
                SCAN CODE
                <div className="scan">
                    scan
                </div>
            </div>
            <div className="result-preview">
                OR INPUT MANUALLY:
                <div style={{display : 'block', margin: '20px'}}>
                <input type={'text'}></input>
                </div>
                <CodeInput />
            </div>
        </div>
    )
}

export default ScanPage