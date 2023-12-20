/*
ENCAPSULATION, OOP'NIN TEMEL UNSURLARINDANDIR.
BIR CLASS ICINDEKI DURUMU CLASS DISINDAN IZINSIZ ERISIMLERE KAPATMAK ICIN KULLANILIR.

ENCAPSULATION, PRIVATE DEGISKEN VE PRIVATE METOTLAR ILE YAPILIR.
PRIVATE OGELERI BELIRTMEK ICIN '#' (HASH) KULLANILIR.

PRIVATE'LARA DOGRUDAN ERISILMEZ. ERISMEK ICIN CLASS ICINDE PUBLIC ERISIMLI GETTER VE SETTER METOTLAR KULLANILIR.

PRIVATE'LARA CLASS DISINDAN ERISILMEZ. ANCAK CLASS ICINDEKI DIGER METOTLARLA ERISILIR.

PARENT PRIVATE OLAN BIT METOT, CHILD'DA KULLANILAMAZ.

ENCAPSULATION => CLASS'TAKI METOD VEYA DEGISKENI ERISILEMEZ KILIF ICINE ALMAKTIR

*/

class kitap {
    #id = "2508";// PRIVATE DEGISKEN TANIMLAMA

    static counter=0;//HER YENI KITAP OLUSTURULDUGUNDA SAYACI ARTIR.
    //STATIC DEGISKEN CLASS'A YAPISIP SADECE CLASS TARAFINDAN KONTROL EDILIR.
    //INSTANCE'LARDAN BAGIMSIZDIR, TUM CLASS'LARDA VARDIR VE ANA CLASS'DAN KONTROL EDILIR.

    constructor(title,author,year){
        this.baslik = title;
        this.yazar=author;
        this.yil=year;
        //BU DEGISKENLER ARKA PLANDA "VAR" DEGISKENIYLE TURETILIR.
        this.getTitle = function(){
        return this.baslik;
        // BU ALANDA YAZILAN METHOD, BUTUN INSTANCE'LARIN BELLEGINDE TEK TEK YER KAPLAR.
        }

        kitap.counter++;//HER YENI KITAP OLUSTURULDUGUNDA SAYACI ARTIR.
    }
    getID(){
        //CLASS IICNDE PUBLIC METOTLAR YARDIMIYLA PRIVATE'LAR ALINABILIR.
        //BU DURUMA GETTER DENIR.
        return this.#id;
    }
    setID(){ //SETTER ILE PRIVATE DEGER DEGISTIRME
        return this.#id * 1.5;
    }
    #computeAge(){
        return new Date().getFullYear()-this.yil;
    }
    getSummary (){
        return  `${this.baslik} was written by ${this.yazar} in ${this.yil}. So its a ${this.#computeAge()} years old book`;
    }
    static compareAge(k1,k2){
        return `Books age diffirence: ${k1.yil - k2.yil}`;
    }

}
const kit1 = new kitap ("Masallar","Ömer Aslan","2012");
console.log(kit1.baslik);
console.log(kit1.setID());
console.log(kit1.getSummary());
//console.log(kit1.#computeAge()); 
//PRIVATE METOTLAR, CLASS DISINDAN KULLANILAMAZ, DEGISTIRILEMEZ,OKUNAMAZ.
//kit1.#id ="2509";  

const kit4 = new kitap ("Masa","Ömer Aslan","2022");
const kit2 = new kitap ("Masall","Ömer Aslan","1992");
const kit3 = new kitap ("Masal","Ömer Aslan","1982");

console.log(kitap.counter);//STATIC METOT CAGRILMASI
console.log (kitap.compareAge(kit2,kit4));