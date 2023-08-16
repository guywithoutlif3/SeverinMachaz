import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AnimatedCursor from "react-animated-cursor"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <meta name="viewport"></meta>
    <AnimatedCursor
      innerSize={16}
      outerSize={22}
      outerAlpha={0.4}
      innerScale={0.5}
      outerScale={2}
      color='	255,	178,	71'
      innerStyle={{
        zIndex: 10001,
        mixBlendMode: 'exclusion'
      }}
      outerStyle={{
        zIndex: 10001,
        
      }} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
