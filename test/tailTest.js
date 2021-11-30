const assertEqual = require('../assertEqual');
const tail = require('../head');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3); 