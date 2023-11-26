 // DESTRUCTURING OBJECTS

//  const cars = {
//     car1:{
//     brand:'Mercedes E200',
//     model:'2018',
//     engine: '1598',
//     power:'180',
//     km:'68.000',
//     color:'metalic gray'},
    
//     car2:{
//     brand:'BMW F30',
//     model:'2017',
//     engine: '1598',
//     power:'170',
//     km:'88.000',
//     color:'snow white'},

//     car3:{
//         brand:'Ford Fiesta',
//         model:'2017',
//         engine: '1398',
//         power:'90',
//         km:'88.000',
//         color:'purple'}    
//  }

// const name =cars.car1.brand;
// console.log(name);
// // const power= cars["power"];
// // let {model,brand,km}=car1; //TEK OBJECT OLSAYDI BOYLE AÇILIRDI

// //DESTRUCTURE
// console.log(cars);
// const {car1,car2}=cars;

// const {engine,power,km}=car1;
// // const {engine,power,km}=car2; //BU SATIR HATA VERIYOR ÇÜNKÜ AYNI DEGISKENLER ÜST SATIRDA TANIMLANDI
// console.log(engine,power,km);

// const {name: c1Name, model:c1Model}=car1;
// const {name: c2Name, model:c2Model}=car2;

//*******************SECOND EXAMPLE************************ */

// const cars =[
//     {
//         brand:'Mercedes E200',
//         model:'2018',
//         engine: '1598',
//         power:'180',
//         km:'68.000',
//         color:'metalic gray'},
        
//     {
//         brand:'BMW F30',
//         model:'2017',
//         engine: '1598',
//         power:'170',
//         km:'88.000',
//         color:'snow white'},
    
//     {
//         brand:'Ford Fiesta',
//         model:'2017',
//         engine: '1398',
//         power:'90',
//         km:'88.000',
//         color:'purple'}
// ]


// cars.forEach((p)=> { //KLASIK YONTEM ILE OBJECT ELEMANLARI GORUNTULEME
//     console.log('brand: ',p.brand);
//     console.log('model: ',p.model);
//     console.log('engine: ',p.engine);
// })


// cars.forEach((p)=> { //DESTRUCTRING ILE OBJECT ELEMANLARI GORUNTULEME
//     const {brand,engine,power}= p
//     console.log(brand,'|',engine,'cc |',power,'hp');
// })


//////////////////////////////////////////////////////////////////////////////////////


// const getInfo =()=>{
//     return {
//         model: 'IPhone 13 Pro',
//         storage: '128 Gb',
//         warranty:'1.5 years',
//         battery: '96%'
//     }//RETURN'U OBJECT OLAN BIR FONKSIYON
//     //FONSIYONUN DONDURDUĞU OBJECT DOĞRUDAN DESTRUCTURE YAPILABILIR.
// }
// console.log(getInfo()); // FONKSIYONUN RETURN DEĞERI, SABIT BIR DEGER OLDUGU ICIN PARAMETRE EKLENSE BILE AYNI SONUCU VERIR.

// const  {model,battery} = getInfo(); 
// console.log('Model: ',model,'\nBattery: ',battery);
// //BU IKI PARAMETRE, DEGISKENE ATANDI. YANI BELIRLI KEYS'IN BELIRLI VALUE'LARI ATANDI. BASKA KEYS'LERIN AYNI VALUE'LARI BU DEGISKENE ATANAMAZ.



//////////////////////////////////////////////////////////////////////////


// let calc = ({model,storage})=> console.log(model,storage); 
// calc({model:'Samsung S23+',storage:'256GB'});
// //FONKSIYONUN PARAMETRESI, DESTRUCTURE YAPILMIŞ BIR OBJECT'TIR.

// calc = ({model,storage})=> console.log(model,battery); 
// calc({model:'Samsung S23+',storage:'256GB'});
// //DESTRUCTURE YAPILMAMIŞ BIR OBJECT DONDURULEMEZ. CUNKU 'BATTERY' KEYS'I , PARAMETREDE VERILMEDI



///////////////////////////////////////////////////////////////////////////////
 

// //DESTRUCTURE ARRAY
// const names =['Ahmet','Sefa','Fatma','Yeşim','Taha'];

// const [k4,,k2,,k0] = names; //DESTRUCTURE'DA ARRAY'DEN INDIS SIRASINA GORE  ELEMAN ALINIR.
// console.log(k0,k2,k4); // BIR FONKSIYON ICINDE DEĞIŞIK TIPLERDE ELEMANLARI OLAN BIR ARRAY DONDUREBILIR (OBJECT,VALUE,BOOLEAN). ARRAY DONDUREN BIR FONKSIYONDAN ISTENILEN VERILER BU TIPLE ALINIR.


///////////////////////////////////////////////////////////////////////////////


//REST : BIR DIZI VEYA OBJECT'DEKI FILTRELEME IŞLEMINDEN ARTA KALANLARI AYRI BIR DIZIYE KOPYALAR.

const garaj = ['bmw','mercedes','audi','porsche','subaru','toyota','honda'];
const [c1,c2,c3,c4, ...restJapon] =garaj; 
// REST, SONDA OLMAK ZORUNDADIR. DIZIDE INDIS ONEMLIDIR.
console.log(restJapon);

const cars = {
        brand:'Mercedes E200',
        model:'2018',
        engine: '1598',
        power:'180',
        km:'68.000',
        color:'metalic gray'}
        
const {brand,color,...restMotor } = cars; 
//OBJECT'DE SIRA ONEMLI DEĞILDIR. KEYS'LER ONEMLIDIR. REST, SONDA OLMALIDIR.
console.log(restMotor);
        
const sumAll =(...numbers) => {return numbers.reduce((s, n) =>(s+=n),0)}
console.log(sumAll(1,2,3,4,5));
//GIRILEN SAYILARI REST ILE DIZIYE ALIP HEPSINI TOPLADI.
//KAÇ PARAMETRE OLURSA OLSUN HEPSINI TOPLAR.
        
const showName = (name,surname,...titles) =>{
    console.log(titles);
    const summary = `${name} ${surname} is ${titles.join(' and ')}`;
    console.log(summary);
}
showName('muhammed','atabay','a Muslim','software learner');
//SOYISIMDEN SONRA GELEN KELIMLERI CUMLE HALINE GETIRIYORUZ.


///////////////////////////////////////////////////////////////////////////////


//SPREAD : ITERABLE OLAN BIR OGENIN ELEMNTLERINI AÇIP YENI BIR DIZI HALINE GETIRIR.
// const vehicles =['plane','baloon','zeplin','truck'];
// const others =['bus','car','jet','suv'];

// const allVehicles =[...vehicles,...others]; //SPREAD
// console.log(allVehicles);

// const [,,,,...restVehicle]=allVehicles;//REST
// console.log(restVehicle);


////////////////////////////////////////////////////////////////////////////////////


// const redFruits =['cherry','watermelon','apple','pomegranate'];
// const yellowFr = ['banana','melon','pear'];
// const allFruits = [...yellowFr,...redFruits].sort(); //SPREAD AND SORT
// console.log(allFruits);


////////////////////////////////////////////////////////////////////////////////////

// let str = 'NE EKERSEN ONU BICERSIN';
// console.log([...str].join('-'));

// console.log(Math.max(1,2,3,5,6,9));
// let nums=[1,2,3,5,6,9];
// console.log(Math.max(...nums));

// let myNums=[1,2,3];
// let copyNums= [...myNums]; //BIR ARRAY'I EN KOLAY KOPYALAMA BICIMIDIR
// copyNums.push(101);
// let hisNums=[-1, ...copyNums,-7]; 
// //TEK ARRAY HALINE GETIRDI. SPREAD OLMASA NESTED ARRAY OLACAKTI.
// console.log(copyNums);
// console.log(hisNums);

// const myObj ={a:1, b:2, c:3};
// const herObj={ a:2, k:4, c:2};
// const copiedObj ={...myObj};//OBJECT KOPYALAMA ISLEMI
// copiedObj.c= '33';
// console.log(copiedObj);

// let combinedObj={...myObj,...herObj}; //ISLEM SIRASINDA HER.OBJ SONRA OLDUGU ICIN CAKISMALARDA ONU ALDI.
// console.log(combinedObj);
