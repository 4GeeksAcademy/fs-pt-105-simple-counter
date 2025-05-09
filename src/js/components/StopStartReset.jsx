import React from "react";


export const StopStartReset = (props) => {
	const {onStart ,onStop, onReset} = props;
	return (
		<div className="buttons">
			<button onClick={onStop} className="btn btn-danger">Stop</button>
			<button onClick={onStart} className="btn btn-success mx-2">Start</button>
			<button onClick={onReset} className="btn btn-warning">Reset</button>
		</div>
	);
};

