// JS DATA TYPES 

    // 1)PRIMITIVE ( İLKEL VERİ TİPLERİ) 
        // : NULL, UNDEFINED, BOOLEN, NUMBER, SYMBOL, STRING, BIGINT
        
        // SADECE DEĞER TUTARLAR.PROPERTY VEYA METHOD'LARI OLMAZ. ANCAK JS OTOMATİK OLARAK PRİMİTİVE STRİNGLER İÇİN OBJECT WRAPPER OLUŞTURUR. BÖYLECE STRING NESNELERİNE AİT OLAN FONKSİYONLAR VE ÖZELLİKLERİ PRİMİTİVE STRİNGLER İLE KULLANILABİLİR HALE GELİR.


    // 2) NON-PRIMITIVE ( İLKEL OLMAYAN)
        // OBJECT (KOMPLEX VERİ YAPILARI)

        // VERİ,FONK,.. TUTARLAR

// const str1="clarusway";
// const str2="hellö";
// const str3="füll-stack";
// const str4=new String("hello fs");
// const str5= "ALL CAPITAL LETTERS";
// const str6= "all capital letters"

// console.log(str1 , typeof str1);

// console.log(str4);
// console.log(typeof str4);
// console.log(str5.toLowerCase());

// let str7 = str2.concat(' ',str3,' path');
// str7 =str7.toLocaleUpperCase();
// console.log(str7);
// // CONCATINATION = STRINGLERİ BİRLEŞTİRME

// const esitMi=(strX , strY) => {
//     return strX.toLocaleUpperCase() === strY.toLocaleUpperCase() ? `${strX} ile ${strY} eşittir` :` ${strX} ile ${strY} farklıdır.`;
// };

// console.log(esitMi("merhaba","MeRhAbA"));
// console.log(esitMi("merhaba","'MeRhA"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const a = 'réservé'; // With accents, lowercase
// const b = 'RESERVE'; // No accents, uppercase

// console.log(a.localeCompare(b));
// // Expected output: 1
// console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// // Expected output: 0

// // BASE:    a=æ, a=A
// // ACCENT:  a!=æ, a=A
// // CASE:    a=æ, a!=A

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const str8='uzun bir string';
// console.log(str8.charAt());
// console.log(str8.charAt(6));
// console.log( str8.length);
// console.log(str8.charAt(str8.length-1));
//EN SON ELEMAN YAZDIRILDI.
// CHARAT() ,İNDİSTEKİ ELEMANI YAZDIRIR.


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const word = "1234 Imagine, takes you from point A to everywhere."
// console.log(word.includes('from'));
// console.log(word.toLowerCase().includes('takes'));
// console.log(word.includes('Imagine' , 6)); //6.indisten sonra ara ? 
// console.log(word.indexOf('you'));
// //ISTENEN KELİMEYİ STRİNG'DE BULMA


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const buyukHarf = /[A-Za-z]/; //BU ARALIĞIN DIŞINDA KAÇ ELEMAN VAR?
// const nokta = /[.]/; //BUNUN HARİCİNDE KAÇ ELEMAN VAR ?
// const virgul = /[,]/;//BUNUN HARİCİNDE KAÇ ELEMAN VAR ?
// console.log(word.search(buyukHarf));
// console.log(word.search(nokta));
// console.log(word.search(virgul));
// // REGEX SUMMARY 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let word2 = 'sen gülünce güller açar gül pembe';
// console.log(word2.startsWith('gülünce'));
// console.log(word2.startsWith('gülünce',4)); //4.karakter bununla mı başlıyor?
// console.log(word2.endsWith('mbe'));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let word3 = 'Hizli yürümek yürümek için spor kamyon kamyon almalıyım';
// word3= word3.replace('yürümek','gitmek'); //replace sadece ilk bulduğunu değiştiriyor.
// word3= word3.replace(/kamyon/gi,'araba');// regex 'gi' hepsini değiştiriyor.
// //word3= word3.replaceAll('kamyon','araba');
// console.log(word3);

// word3 = word3.replace(/HIZLI/i, 'Daha hızlı'); // /HIZLI/i büyük harf insensitive;
// console.log(word3);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let veysel = '    uzun ince bir yoldayim, gidiyorum gunduz gece';
veysel = veysel.trimStart(); //BAŞINDAKİ BOŞLUĞU SİLER.
let bolunmus= veysel.slice(22,41); //22-41 ARASINI AL
let kelime = veysel.split(' '); // BOŞLUĞA GÖRE KELİMELERİ AYIRIP ARRAY YAPAR.
let harf= veysel.split(""); //HARF HARF AYIRIR.
let iHarfi = veysel.split('i'); //İ HARFİNE GÖRE AYIRDIM.
console.log(veysel);
console.log(bolunmus);
console.log(kelime); 
console.log(kelime.length);
console.log(harf);
console.log(iHarfi);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

