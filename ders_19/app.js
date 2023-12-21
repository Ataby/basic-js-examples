// import kareAlma, {WHW,artis,azalis,sayac,toplama} from "./module.js";
import  {default as kareAlma, WHW,artis,azalis,sayac,toplama} from "./module.js";

console.log("Kare alma (4): ",kareAlma(4));
artis(4);
artis(2)
azalis(6);
azalis();
console.log('azalma sonucu: ',azalis());
//sayac=29; // MODULE ICINDEKILER DISARIDAN DEGISTIRILEMEZ.

import selamla from "./module_2.js";
//DEFAULT FONKSIYONU ISTEDIGIMIZ ISIMLE CAGIRABILIRIZ CUNKU 1 TANE DEFAULT KABUL EDILIYOR.
selamla();