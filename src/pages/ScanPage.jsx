import React from "react";
import './ScanPage.css';
import './CodeInput.css';


const ScanPage = () => {
    const CodeInput = () => {
        return (
                <div className="code-input">
                    <div className="code">1</div>
                    <div className="code">1</div>
                    -
                    <div className="code">1</div>
                    <div className="code">1</div>
                    <div className="code">1</div>
                    -
                    <div className="code">1</div>
                    <div className="code">1</div>
                </div>
            )
        }

    return (
        <div className="wrapper">
            <div className="scan-preview">
                empty
                <hr></hr>
                <div className="scan">
                    scan
                </div>
            </div>
            <div className="result-preview">
                result preview
                <CodeInput />
            </div>
        </div>
    )
}

export default ScanPage