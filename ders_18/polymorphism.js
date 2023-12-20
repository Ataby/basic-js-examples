// POLYMORPHISM

class kitap {
    constructor(title,author,year){
        this.baslik = title;
        this.yazar=author;
        this.yil=year;
        //BU DEGISKENLER ARKA PLANDA "VAR" DEGISKENIYLE TURETILIR.
        this.getTitle = function(){
        return this.baslik;
        // BU ALANDA YAZILAN METHOD, BUTUN INSTANCE'LARIN BELLEGINDE TEK TEK YER KAPLAR.
        }
    }
    //BU KISIMDAN ASAGISI PROTOTYPE ALANIDIR. FONKSIYONLAR BU ALANA YAZILIR KI BELLEKTE YER TUTMASIN
    getAge(){
        return new Date().getFullYear() - this.yil;
    }
    getSummary (){
        return  `${this.baslik} was written by ${this.yazar} in ${this.yil}. `;
    }
    setPrice(price){
        const taxRate = 1.08;
        this.price= (price * taxRate).toFixed(2);
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
    setPrice(price,taxRate){
        // const taxRate = 1.08;
        this.price= (price * taxRate).toFixed(2);
        //AYNI METHOD'U FARKLI PARAMETRELERLE YUKLEMEK => OVERLOADING (PARENT-CHILD ILISKISI)
    }

}

const mag1 = new magazine("TopCar","Hamilton",2019,"May");
console.log(`${mag1.baslik} dergisi ${mag1.getAge()} yaşında !`);
console.log(mag1.getSummary());
mag1.setPrice(50,1.12);
console.log(mag1);

const kit1 = new kitap("Simyacı","Paulo Coelho",1988);
kit1.setPrice(23);
console.log(kit1);

//OVERLOADING'IN BASKA TANIMLANMA SEKLI
/*
FUNCTION X (INTEGER A, INTEGER B){
    RETURN A + B;
}

FUNCTION X(STRING A, STRING B){
    RETURN A+B;
}

X(1,2);
X("1","2");
*/