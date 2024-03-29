const app = require('express')();

const freqData = [
      {State:'AL', freq: {low: 4786, mid: 1319, high: 249}},
      {State:'AZ', freq: {low: 1101, mid: 412, high: 674}},
      {State:'CT', freq: {low: 932, mid: 2149, high: 418}},
      {State:'DE', freq: {low: 832, mid: 1152, high: 1862}},
      {State:'FL', freq: {low: 4481, mid: 3304, high: 948}},
      {State:'GA', freq: {low: 1619, mid: 167, high: 1063}},
      {State:'IA', freq: {low: 1819, mid: 247, high: 1203}},
      {State:'IL', freq: {low: 4498, mid: 3852, high: 942}},
      {State:'IN', freq: {low: 797, mid: 1849, high: 1534}},
      {State:'KS', freq: {low: 162, mid: 379, high: 471}}
];

app.get('/api/v1/frequency', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Headers", 
                  "origin, content-type, accept, authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET");
        
    res.json(freqData);
        
}).listen(3000, () => console.log('Example app listening on port 3000.'));   