// JS DATA TYPES 

    // 1)PRIMITIVE ( İLKEL VERİ TİPLERİ) 
        // : NULL, UNDEFINED, BOOLEN, NUMBER, SYMBOL, STRING, BIGINT
        
        // SADECE DEĞER TUTARLAR.PROPERTY VEYA METHOD'LARI OLMAZ. ANCAK JS OTOMATİK OLARAK PRİMİTİVE STRİNGLER İÇİN OBJECT WRAPPER OLUŞTURUR. BÖYLECE STRING NESNELERİNE AİT OLAN FONKSİYONLAR VE ÖZELLİKLERİ PRİMİTİVE STRİNGLER İLE KULLANILABİLİR HALE GELİR.


    // 2) NON-PRIMITIVE ( İLKEL OLMAYAN)
        // OBJECT (KOMPLEX VERİ YAPILARI)

        // VERİ,FONK,.. TUTARLAR

const str1="clarusway";
const str2="hellö";
const str3="füll-stack";
const str4=new String("hello fs");
const str5= "ALL CAPITAL LETTERS";
const str6= "all capital letters"

console.log(str1 , typeof str1);

console.log(str4);
console.log(typeof str4);
console.log(str5.toLowerCase());

let str7 = str2.concat(' ',str3,' path');
str7 =str7.toLocaleUpperCase();
console.log(str7);
// CONCATINATION = STRINGLERİ BİRLEŞTİRME

const esitMi=(strX , strY) => {
    return strX.toLocaleUpperCase() === strY.toLocaleUpperCase() ? `${strX} ile ${strY} eşittir` :` ${strX} ile ${strY} farklıdır.`;
};

console.log(esitMi("merhaba","MeRhAbA"));
console.log(esitMi("merhaba","'MeRhA"));




