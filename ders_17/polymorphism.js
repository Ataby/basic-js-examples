// POLYMORPHISM

class kitap {
    constructor(title,author,year){
        this.baslik = title;
        this.yazar=author;
        this.yil=year;
        //BU DEGISKENLER ARKA PLANDA "VAR" DEGISKENIYLE TURETILIR.
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

//SUB-CLASS TANIMLAMASI (INHERITANCE)
class magazine extends kitap {
    constructor(title,author,year,month){
        super(title,author,year);//SUPER HER ZAMAN PARENT'I GOSTERIR.
        this.ay = month;
    }
    getSummary (){
        return  `${this.baslik} was written by ${this.yazar} in ${this.ay}${ this.yil}.`;
        //PARENT CLASS'DAN ALDIGI GETSUMMARY FONKSIYONUNU EZER VE BUNU CALISTIRIR.(OVERRIDED MULAKATLARDA %70 SORULUR)
    }
    getSummaryParent(){
        return super.getSummary();//OVERRIDE FONKSIYONUN PARENTINI BU SEKILDE ALABILIRIZ.
    }

}

const mag1 = new magazine("TopCar","Hamilton",2019,"May");
console.log(`${mag1.baslik} dergisi ${mag1.getAge()} yaşında !`);
console.log(mag1.getSummary());
