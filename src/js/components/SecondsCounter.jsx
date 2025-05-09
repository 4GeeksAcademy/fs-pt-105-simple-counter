import React from "react";


export const SecondsCounter = (props) => {
    const { seconds } = props;
    const paddedSeconds = seconds.toString().padStart(6, '0');
    const digits = paddedSeconds.split('');

    return (
        <div className="container text-center"> 
            <div className="row"> 
                <div className="col clock-icon"> 
                    <p><i className="fa-solid fa-clock"></i></p>
                </div>
                {digits.map((digit) => (
                    <div className="col"> 
                        <p>{digit}</p> 
                    </div>
                ))}
            </div>
        </div>
    );
};