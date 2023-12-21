console.log('module_2 is running');
import {artis}from './module.js';

console.log(artis(100)); 
//COUNTER ONCEKI KALDIGI YERDEN DEVAM EDIYOR. YENI BIR COUNTER OLUSTURMUYOR.

export default function(){
    console.log('Selamlar');
    //DEFAULT 1 TANE FONKSIYON VAR, EXPORT EDERKEN ISIM VERILMEZ.
}