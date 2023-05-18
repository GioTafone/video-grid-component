import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const videos = [
    { id: "I8ACAPIzG1g", category: "0,50€" },
    { id: "wq_4hrzkk8U", category: "1€" },
    { id: "LGruHeX9x7M", category: "2€" },
    { id: "EH87LE_WeT4", category: "3€" },
    { id: "4uShfcY7zqM", category: "5€" },
    { id: "TAye0hZmzao", category: "10€" },
    { id: "A3zSCvf0EPg", category: "25€" },
    { id: "fHKrCs1rFRI", category: "0,50€" },
    { id: "RPUu-nig_XE", category: "1€" },
    { id: "CAQQv7gFZfc", category: "2€" },
    { id: "HrFJxv8n3t8", category: "3€" },
    { id: "evFyCqdLx2c", category: "5€" },
    { id: "ncaRynHtc", category: "10€" },
    { id: "r6Vzoj3re8k", category: "25€" },
    { id: "2DcH5MP3PgE", category: "0,50€" },
    { id: "cYoV8en5O4U", category: "1€" },
    { id: "JM89MVM", category: "2€" },
    { id: "e6ZtmXxStMY", category: "3€" },
    { id: "HPzgGW6Cfsk", category: "5€" },
    { id: "zGdjf9wzHOI", category: "10€" },
    { id: "RSd8f5780GM", category: "25€" },
    { id: "2h2B4faU", category: "0,50€" },
    { id: "JhHMJCUmq28", category: "1€" },
    { id: "9P6rdqiybaw", category: "2€" },
    { id: "QqsLTNkzvaY", category: "3€" },
    { id: "vFNgd3pitAI", category: "5€" },
    { id: "EwncyLyTXQ4", category: "10€" },
    { id: "GldRtyEqPt8", category: "25€" },
    { id: "lcYPL3s2Mmw", category: "0,50€" },
  ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App videos={videos}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
