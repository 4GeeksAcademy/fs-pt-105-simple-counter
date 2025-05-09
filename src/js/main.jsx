import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'
import '../styles/seconds-counter.css';
import { SecondsCounter } from './components/SecondsCounter.jsx'
import { StopStartReset } from './components/StopStartReset.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

let counter = 0;
let idNumber;
const start = () => {
  if(!idNumber){
    idNumber = setInterval(() => {
      counter++;
      render();
    }, 1000);
  };
};

const stop = () =>{
  clearInterval(idNumber);
  idNumber = null;
};

const reset = () => {
  stop();
  counter = 0;
  render();
}


const render = () => {
  root.render(
    <>
      <SecondsCounter seconds={counter} />
      <StopStartReset 
        onStart = {start}
        onStop = {stop}
        onReset = {reset}
      />
    </>
  );
};
start();

