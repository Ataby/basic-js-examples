// const arabalar = new Array("bmw", "audi", "chrysler", "mini","Mercedes E200");
// let arabam = arabalar[arabalar.length-1];
// arabam = arabalar.at(-1); // AT EKLENTİSİ, İNDİSTEKİ ELEMANI ÇEVİRİR.

// console.log('almak istediğim araba',arabam);
// console.log(arabalar,typeof arabalar, arabalar.length);

// ////////////////////////////////////////////////////////////////////////////////////

// const bosArray = new Array(20);
// console.log(bosArray);

// const veriler = Array.of(2,3,4,5);
// console.log(veriler);

// veriler[veriler.length-1]+=3;
// console.log(veriler);

// const yeniDizi=new Array(veriler,arabalar,"Bunlar başka arabalar");
// console.log(yeniDizi);

// const merc = ('İstediğim araba: '+yeniDizi[1][4]);
// console.log(merc);

// const azalan= yeniDizi[0][3] -1;
// console.log(azalan, yeniDizi[0]);
// console.log(veriler);

////////////////////////////////////////////////////////////////////////////////////

// let arabalar = new Array("BMW", "Audi", "Chrysler", "Mini","Mercedes E200");
// console.log(arabalar);

//  const silinen = arabalar.pop();// POP, SONDAKİ ELEMENTİ SİLER.
//  console.log('Listeden silinen araba: ',silinen);
 
//  const eklenen = arabalar.push('Volkswagen');// PUSH, LİSTENİN SONUNA EKLER.
//  console.log('Eklenen arabanın listedeki indisi: ', eklenen);
//  console.log(arabalar[1].toUpperCase());
 
//  const basaEklenen = arabalar.unshift('Tesla'); // UNSHİFT, LİSTENİN BAŞINA EKLER.
//  console.log(arabalar);
 
//  arabalar = arabalar.sort(); // HARF SIRALAMASI
//  console.log('Sıralanmış liste: ',arabalar);
 
//  const ilkEleman = arabalar.shift(); //İLK ELEMANI SİLER.
//  console.log('Listede ilk silinen eleman ',ilkEleman);
//  console.log('yeni liste: ',arabalar);
 
//  arabalar.splice(1,1,'Passat'); //1.indis elemanını sil, bunu ekle.
//  arabalar.splice(4,0,'Toyota','Honda');//4.indis elemanını silmeden önce bunu ekle.
//  console.log(arabalar.reverse());
 
//  const age = new Array(2,23,345,435,56,234,24,21,3,5456,7,6);
//  age.sort((a,b)=> a-b); // BÜYÜKTEN KÜÇÜĞE SIRALAMA
//  console.log(age);
 
//  const doldur = new Array(2,3,4,5,6,7,8);
//  doldur.fill(7,4,5); // BELİRLİ İNDİSLER ARASINU ŞUNUNLA DOLDUR.
//  console.log(doldur);
 
 ////////////////////////////////////////////////////////////////////////////////////
 
//  const sayilar = [2,5,3,'2','üc',2,'bes',7];
// console.log(sayilar.includes('5'));
// console.log(sayilar.includes(5)); // ARAMA YAPAR.
// console.log(sayilar.indexOf(2));
// console.log(sayilar.lastIndexOf(2));

// const birlesmis = sayilar.join('-'); //ARALARINA BU İŞARETTEN KOYARAK BİRLEŞTİR.
// console.log('Birleşmiş hali: ' ,birlesmis);
// console.log('Önceki hali: ',sayilar);

// const stringYapma = sayilar.toString();
// console.log(stringYapma);


////////////////////////////////////////////////////////////////////////////////////

// let arabalar = new Array("BMW", "Audi", "Chrysler", "Mini","Mercedes E200");
// let garaj1= arabalar.slice(0,2); //LİSTEYİ BÖL. START DAHİL; END DAHİL DEĞİL.
// let garaj2= arabalar.splice(2,1,'Toyota'); // 2. İNDİSİ SİL, YERİNE BUNU YAZ.
// let garaj3= arabalar.slice(2); //2. İNDİSTEN İTİBAREN LİSTEYİ BÖL

// console.log(garaj1);
// console.log(garaj3);
// console.log(garaj1.concat(garaj3));


////////////////////////////////////////////////////////////////////////////////////

let age=[12,14,15,23,25,27,31,32];
let check = age.every((yas)=> yas>=18); //TÜM ELEMANLARI BELİRLENEN KRİTERLE SORGULAR.
let check2 = age.some((yas)=> yas>30); //KRİTERE UYAN 1 KİŞİ VARSA TRUE YAZAR.

// check // TRUE VEYA FALSE DÖNDÜRÜR.
// ? console.log('Herkes 18 yaşından büyüktür')
// : console.log('Herkes yetişkin değildir')

// check2
// ? console.log('Grupta Y kuşağı bireyler vardır')
// : console.log('Grupta herkes Z kuşağıdır.');

let cocuk = age.find((x)=>x<18); // KOŞULU SAĞLAYAN İLK ELEMENT
let cocukSira = age.findIndex((x)=>x<18); //KOŞULU SAĞLAYAN İLK ELEMENT İNDİSİ
let sonCocuk = age.findLast((x)=>x<18);
let sonCocukSira = age.findLastIndex((x)=>x<18);

console.log('Listedeki reşit olmayan ilk kişinin yaşı: ',cocuk);
console.log('Listedeki reşit olmayan ilk kişinin sırası: ',cocukSira+1);
console.log('Son çocuğun yaşı: ',sonCocuk);
console.log('Son çocuğun sırası: ',sonCocukSira+1);

////////////////////////////////////////////////////////////////////////////////////

 
