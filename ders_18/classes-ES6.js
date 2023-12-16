//JS, DINAMIKTIR, SINGLE THREAD'DIR, INTERPRETER DILDIR, YUKSEK SEVIYELIDIR, PROTOTYPE VE OOP BASE DILDIR.
//JS, CLASS TABANLI BIR DIL DEGILDIR, PROTOTYPE TABANLI BIR DILDIR. YAYGIN KULLANIM CLASS TABANLI OLDUGU ICIN SYNTAX'I ONA BENZETMISTIR.
// PROTOTYPE TABANLI DILLERDE HEDEF BELLEGI ETKIN KULLANMAKTIR. DEGISKEN VE OBJELERI TEKRARLAMAYA GEREK KALMAZ.
//FONKSIYONLAR ALT PROGRAMLARDIR, METHODLAR BIR CLASS VEYA OBJEYE AIT FONKSIYONLARDIR.


////------------------- INHERITANCE(ES6)-------------------------

//PARENT CLASS'IN DEGISKEN VE FONKSIYONELLIGI "EXTENDS" KEYWORD ILE CHILD CLASS'A GECMEKTEDIR. 

class kitap {
    constructor(title,author,year){
        this.baslik = title;
        this.yazar=author;
        this.yil=year;
        this.getTitle = function(){
            return this.baslik;
            // BU ALANDA YAZILAN METHOD BUTUN INSTANCE'LARIN BELLEGINDE TEK TEK YER KAPLAR.
        }
    }
    getAge(){
        return new Date().getFullYear() - this.yil;
    }
    getSummary (){
        return  `${this.baslik} was written by ${this.yazar} in ${this.yil}.`;
    }
}

const kitap1 = new kitap("Yemek Yemeyi Öğrenmek","Perihan ATA","Aralık 2023");
console.log(kitap1.getSummary());
console.log(kitap1.getTitle());

//SUB-CLASS TANIMLAMASI (INHERITANCE)
class magazine extends kitap {
    constructor(title,author,year,month){
        super(title,author,year);
        this.ay = month;
}
}

const mag1 = new magazine("TopCar","Hamilton",2019,"May");
console.log(`${mag1.baslik} dergisi ${mag1.getAge()} yaşında !`);
