
//PROMISE => ASENKRON BIR ISLEMIN BASARIYLA BITIP BITMEDIGINI GOSTEREN BIR OBJECT YAPISIDIR.
//
//PENDING => ILK STATE, BASARILI VEYA BASARISIZ OLMAYAN
//FULFILLED => ISLEMIN BASARIYLA TAMAMLANMASI
//REJECTED => ISLEMIN BASARIYLA TAMAMLANMAMASI

//1-) PROMISE YAPISI OBJECT OLDUGU ICIN "new Promise()" CONSTRUCTOR'I ILE YENI BIR PROMISE NESNESI OLUSTURULUR.
//2-) CONSTRUCTOR'A ASIL ISLEMLERI YAPMASI ICIN "executor" FONKSIYONU VERILIR. BU FONKSIYONUN 2 PARAMETRESI VARDIR : "resolve , reject" FONKSIYONLARI
//3-) BASARILI TAMAMLANIRSA RESOLVE FONK. CALISIR.
//4-) BASARISIZ TAMAMLANIRSA REJECT FONK. CALISIR.

// const myPromise = new Promise((resolve,reject)=>{
//     const myNum = Math.floor(Math.random()*5);
//     const data = {a:1,b:2,c:3};

//     if(myNum){
//         console.log('DATA FETCHED');
//         resolve(data); // BASARILI ISE BU FONK. CALISTIR
//     }else {
//         reject(new Error("DATA MISSED "));//BASSARISIZ ISE BU FONK. CALISTIR.
//     }

// });

// myPromise
// .then((res)=> console.log(res))
// .catch((err)=>console.log(err));