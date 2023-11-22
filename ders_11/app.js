// const araba = new Object();
// araba.marka='mercedes e200';
// araba.motor= 1.6;
// araba.class= 'e segment';
// araba.lpg = false;
// araba.model = 2018;

// console.log(araba.model, typeof araba.model);
// console.log(araba['model']);
// console.log(araba['lpg'], typeof araba.lpg);

// const key = "marka";
// console.log(araba[key], typeof araba.marka);
// // KÖŞELİ PARANTEZ İLE DEĞİŞKEN GİBİ KULLANABİLİRİZ.

//////////////////////////////////////////////////////////////////////////////////////

// function Araba (sınıf,marka,model,motor){ // OBJECT KALIBI OLUŞTURULDU
//     this.class = sınıf;
//     this.brand=marka;
//     this.model=model;
//     this.engine = motor;
//     this.expertise = ['tumKapılar' , 'kaput', 'tavan', 'bagaj'];
// }

// const arabam = new Araba('OTOMOBIL','MERCEDES E200','2018','1.6','OnKapılar','kaput','tavan','bagaj');
// console.log(arabam);
// arabam['expertise'].forEach((l) => console.log(l));
// arabam.kazaSayisi = 4;
// arabam.aylikMasraf = 3500;
// arabam['aylikMasraf']*=1.1;
// console.log(arabam.aylikMasraf.toFixed(3));

// const yeniAraba = arabam; // Object=>.create() .assign() .spread() slice() .concat()
// //SIĞ KOPYALAMA = İKİ AYRI DEĞİŞKEN, HEAP'TEKİ AYNI VERİ GRUBUNU İŞARET EDER
// //JS'DE ÇOĞU METHOD SIĞ COPY YAPAR. DEEP COPY İÇİN STRİNGİFY VE PARSE KULLANILMALIDIR.
// yeniAraba.marka ='BMW';
// console.log(araba);

// let deepCopyArabam = JSON.parse(JSON.stringify(arabam));
// console.log(deepCopyArabam);


//////////////////////////////////////////////////////////////////////////////////////

// const person = {
//     name:'Necati Kaya',
//     dob: 1997,
//     job: 'medicine doctor',
//     from: 'samsun',
//     salary: 45000,
    
//     calcAge: function (){
//         return new Date().getFullYear() - this.dob;
//     },
    
//     summary :function() { //ARROW FUNC İÇİNDE THİS METHODU KULLANILMAZ
//         //console.log(this); //window
//         return `${this.name} is ${this.calcAge()} years old`;
//     }
// }

// console.log(person.calcAge());
// console.log(person.summary());

//////////////////////////////////////////////////////////////////////////////////////

const family = { //NESTED OBJECT YAPISI AZ KULLANILIR
    person1:{ //OBJECT KLASLARI İTERABLE DEĞİLDİR ÇÜNKÜ SIRALI DEĞİLDİR. KEYWORD İLE ERİŞİLİR.
        name:'muhammed',
        surname:'atabay',
        gender: 'erkek',
        job :'developer',
        drivingLic: true,
        dob: 'Ağustos 2000'
    },
    
    person2:{
        name:'nursima',
        surname:'atabay',
        job :'dentist',
        gender:'kadın',
        drivingLic: true,
        dob: 'Nisan 2000'
    },
    
    person3:{
        name:'ahmet',
        surname:'atabay',
        job:'öğrenci',
        gender:'erkek',
        drivingLic: false,
        dob: 'unknown 2026'
    }
};
// console.log(family); //{person1: {…}, person2: {…}}
// console.log('Kadının mesleği: ',family.person2.job)

// for (let person in family){
//     console.log(person); //kişi1, kişi2, kişi3...
//     console.log(family[person]);//kişi1'in özellikleri, kişi2'nin özellikleri...
// }

//OBJECT'LERİN KEY VE VALUE'LARINI OKUMAK İÇİN BUİLT-IN METOTLAR VARDIR. BU METODLAR, OBJECT VALUE'LARINI ARRAY OLARAK ÇEVİRİR.

 for (let kisi of Object.keys(family)){ 
    //OBJECT İTERABLE OLMADIĞI ALT OBJECT'LER BU ŞEKİLDE YAZILIR.
    console.log(kisi);//
 }
 console.log('************************************');

 for( let kisi of Object.values(family)){ 
    //FAMİLY OBJECT'INDE TÜM OBJECT'LERDEN BELİRLİ BİR DEĞERİ  ALMA
    console.log(kisi.job);
 }

 for (let [key,value] of Object.entries(family)){
    //ANA OBJECT'TEN HER ŞEYE İSTENİLEN HER DEĞERE ERİŞİM
    console.log(`Kişi: ${value.name} ${value.surname} || DrivingLicense: ${value.drivingLic}`);
 }

console.log('************************************');
console.log(Object.keys(family), typeof Object.keys(family)); 
//SADECE KEY'LERİ DÖNDÜRÜR

Object.keys(family).forEach((p)=>console.log(p, typeof p));
Object.values(family).forEach((p)=> console.log(p.name));
Object.values(family).forEach((p)=> 
p.job == 'developer' && console.log(p.dob)
);
//FOR.EACh SADECE DİZİ İLE ÇALIŞIR

// console.log(Object.values(family));//SADECE İÇERİDEKİ VALUE'LARI DÖNDÜRÜR
// console.log(Object.entries(family));//VALUE+KEY DÖNDÜRÜR.