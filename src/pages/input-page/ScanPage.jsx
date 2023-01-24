import React from "react";
import './ScanPage.css';
import CodeInput from '../../components/code-input/CodeInput';

const ScanPage = () => {
    return (
        <div className="wrapper">
            <div className="scan-preview">
                empty
                <hr></hr>
                SCAN CODE
                <div className="scan">
                    scan
                </div>
            </div>
            <div className="result-preview">
                OR INPUT MANUALLY:
                <CodeInput />
            </div>
        </div>
    )
}

export default ScanPage