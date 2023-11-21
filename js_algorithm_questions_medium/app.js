// let dizi = new Array(10);

// let input = (n) => {
//     for (let i=0; i<10; i++){
//     n[i]= prompt();
//     }
//     return n;
// }

// let eleman = +prompt('istenen kaçıncı indis: ');
// input(dizi);
// console.log(dizi);
// console.log(`İstenen indis: ${eleman}`+' Sonuc: '+ dizi[eleman]);

//////////////////////////////////////////////////////////////////////////////////////

// function zarAtma() {
//     let dizi = new Array(2);
    
//     for(let i=0; i<2; i++){
//         dizi[i] = Math.trunc(Math.random()*10);
//         if(dizi[i]>6)  dizi[i]-=6;
//     }
    
//     dizi.sort((a,b)=>a-b);
//     return dizi;
    
// }

// let metin = (x) => {
//     if(x==1) console.log('one') ;
//     if(x==2) console.log('two');
//     if(x==3) console.log('three');
//     if(x==4) console.log('four');
//     if(x==5) console.log('five');
//     if(x==6) console.log('six');
    
// }

// console.log(zarAtma().map((sayi)=> metin(sayi)))

//////////////////////////////////////////////////////////////////////////////////////

// let dizi = 'javaScript-coding ChAllenge';

// dizi= dizi.replaceAll('-','');
// dizi= dizi.replaceAll(' ','');
// dizi= dizi.replace(/challenge/i,'Challenge');
// dizi=dizi.replace(/coding/i,'Coding');

// console.log(dizi);

//////////////////////////////////////////////////////////////////////////////////////

let mail = prompt('Mail adresinizi giriniz: ');
let mail2=mail;
mail= mail
.toLowerCase()
.split('')
.sort();
console.log(mail,typeof mail);

let control = '+_.@0123456789abcdefghijklmnopqrstuwvxyz';
control = control
.split('')
.sort();
console.log(control, typeof control);

let gecerli=0;


for ( let i=0; i<mail.length;i++){
    for( let k =0; k<=control.length;k++){

        if(mail[i] == control[k]) { i++ ; k=0}
        else if ( k==control.length){ console.log(`${mail[i]} elementinden dolayı geçersiz mail adresi.`); gecerli+=1}
    }
}

if(mail[0]=='@') {
    console.log('invalid mail');
    gecerli+=1;
}; // İLK ELEMENT @ İŞARETİ OLAMAZ.

let atSayac=0;
for (let i=0;i<mail.length;i++){ // 2 TANE @ İŞARETİ OLAMAZ.
    if(mail[i] =='@') atSayac+=1;
}
if(atSayac >1)  {
    console.log('invalid mail');
    gecerli+=1;}

let sonIndex = mail.includes('.co') && mail.includes('.com');// .COM İLE BİTİYOR MU ?
if (sonIndex ==0)  {
    console.log('invalid mail');
    gecerli+=1;}

if(gecerli==0) console.log('gecerli mail adresi');



