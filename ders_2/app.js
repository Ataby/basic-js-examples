console.log('APP JS IS RUNNING');

// function greeting(){
//     let name=prompt('isminiz: ');

//     if(name){
//         let greeting= 'merhaba'+ ' ' + name;
//         alert(greeting);
//     }else {
//         alert( 'merhaba dostum');
//     }
// }

// function addingParag(){
//     let newParag= document.createElement('p');
//     document.body.appendChild(newParag);
// }

////////////////////////////////////////////////////////////////////////////////////////

const myCar = {
    brand: 'mercedes',
    year: 2019,
    model: "E200",
    color: 'white'
}
console.log(myCar);

myCar.color='black';
 console.log(myCar);

 myCar.color= 'lightgray';
 console.log(myCar);

 myCar.sunRoof = false;
 console.log(myCar);

 myCar.age = function(){
    let yil = prompt('şu anki yılı giriniz: ');
    alert('Arabanızın yaşı : '+ (yil - this.year));
 }
//  CONST DEĞİŞKENİ, OBJE VE ARRAY OLURSA İÇİNDEKİ DEĞERLER DEĞİŞEBİLR.







////////////////////////////////////////////////////////////////////////////////////////

// const a=5;
// console.log(a)
// {
//     a = 4;
//     console.log(a);
// }
// console.log(a);

//////////////////////////////////////////////////////

// console.log(typeof 0);
// console.log(typeof 6.28);
// console.log(typeof 'merhaba');
// console.log((9<12));
// console.log(typeof (1>3));

//////////////////////////////////////////////////////

// console.log('ikinci örnek:');

// let b = +prompt('bir rakam yazınız:');
// // PROMPT ÖNÜNE ARTI İŞARETİ KONURSA NUMBER DEĞİŞKENİ OLACAĞINI İFADE EDİYOR.
// console.log(b, typeof b);


//////////////////////////////////////////////////////

// let x;
// do{
//     x = prompt('rakam giriniz: ');
// }while (isNaN(x));

// console.log('sayının karesi: ', x*x);

//////////////////////////////////////////////////////

// let k=0.1+0.2;
// let m=1_000_000; //ALTTAN TİRE OKUNMAYI KOLAYLAŞTIRIYOR. EKRANA BASILMIYOR.
// console.log(k);
// console.log(+k.toFixed(4));
// console.log({k});
// console.log(m);

//////////////////////////////////////////////////////

// let name=('muhammed'+ 'atabay');
// let Name=('muhammed','atabay','öğrenci');
// let quote=('bu cümle \"alıntı cümlesidir\" desem yanlış olmaz.');
// console.log(name);
// console.log(Name);
// console.log(quote);


//////////////////////////////////////////////////////

// let name = 'deniz';
// console.log('merhaba ${name}');
// console.log('merhaba $name');

// console.log('2+3= ${2+3}');
// console.log('merhaba',name);


//////////////////////////////////////////////////////

// let n="";
// let m=" ";
// console.log(Boolean(n));
// console.log(Boolean(m));

//////////////////////////////////////////////////////

