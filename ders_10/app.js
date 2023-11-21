// let arabalar = ['Toyota', 'Honda', 'VW Golf', 'VW Polo']

// arabalar.forEach(listele);

// function listele(x){ console.log(x);}

//////////////////////////////////////////////////////////////////////////////////////

// let arabalar = ['Toyota', 'Honda', 'VW Golf', 'VW Polo']
// let fiyatlar = [ 12,24,34,45,75,87,34,456];

// arabalar.forEach((k)=> console.log(k)); //FOR_EACH'İN RETURN'U YOKTUR. 

// let toplam = 0;
// fiyatlar.forEach((price,index,arr)=>{ 
//     arr[index]=Math.round(price*1.1).toFixed(2);
//     toplam+=price;
//     console.log(`Yeni zamlı fiyalar: ${arr}`);
// })

// fiyatlar.forEach((fiyat,index) => {
//     toplam=toplam+fiyat;
//     console.log(`${index}.toplamda sonuç: ${toplam}`);
// })

//////////////////////////////////////////////////////////////////////////////////////

// const rakamlar=[2,3,4,5,6,7,8,9];

// const katla = rakamlar.map((k)=> k*5); //RETURN'Ü OLAN FOR_EACH FONKSİYONU
// console.log('orjinal dizi: ',rakamlar); 
// console.log('katlanmış dizi: ',katla);

//////////////////////////////////////////////////////////////////////////////////////

// let isimler = ["mustafa","ahmet","sıla","şeyma","betül","cihan"];
// let büyükHarf = isimler.map((isim,i,arr)=> isim.toLocaleUpperCase());
// let kucukHarf = isimler.map((isim,i,arr)=> arr[i].toLowerCase());

// console.log(büyükHarf); //MAP'İN İÇİNDE SÜSLÜ PARANTEZ AÇILIRSA RETURN YAZILMALI
// console.log(kucukHarf);

//////////////////////////////////////////////////////////////////////////////////////

// let fiyatTL =[100,150,100,50,80,70];
// let fiyatDolar = fiyatTL.map((k)=>+(k/28.6).toFixed(2));//STRING SONUCU NUMBER YAPILDI
// let fiyatEuro = fiyatTL.map((i)=>+(i/30.6).toPrecision(2)); // ÜST SATIRIN AYNISI
// let ucuzDolar = fiyatDolar.filter((x)=>x<=3);
// let ucuzEuro = fiyatEuro.filter((i)=>i<=3);
// let tlZamlı = fiyatTL.map((f) =>(f<=100) ? f*=1.1 : f*=1.15);

// console.log('TL Fiyat listesi: ',fiyatTL);
// console.log('Dolar fiyat listesi: ',fiyatDolar);
// console.log('Euro fiyat Listesi: ',fiyatEuro);
// console.log('3$ ve altındaki ürünler: ',ucuzDolar);
// console.log('3£ ve altındaki ürünler: ',ucuzEuro);
// console.log('Zamlı TL fiyat listesi: ',tlZamlı.map((k)=> +k.toFixed(2)));

//////////////////////////////////////////////////////////////////////////////////////

let maaslar = [5500,8800,9000,6700,10000,6500,7250];
//7300 DEN YUKARI OLANLARA %12 ZAM, DİĞERLERİNE %16 ZAM

let maasDusuk = maaslar
.filter((k)=>k<7300)
.sort((a,b)=>a-b)
.map((x)=>Math.trunc(x*1.16));

let maasYuksek = maaslar
.filter((k)=>k>7300)
.sort((a,b)=>a-b)
.map((k)=> Math.trunc(k*1.12));

let yeniMaaslar = maasDusuk.concat(maasYuksek);

console.log(maaslar.sort((a,b)=>a-b));
console.log(yeniMaaslar);

//////////////////////////////////////////////////////////////////////////////////////

let maaslar = [5500,8800,9000,6700,10000,6500,7250];

let sum=0;
let toplam =maaslar.reduce((acc,val)=> acc+val ,0); 
//TOPLAMA İÇİN ACC BAŞLANGIÇ DEĞERİ SIFIR VERİLİR. ÇARPMA İŞLEMİ İÇİN 1 VERİLİR.
maaslar.forEach((maas) => (sum+=maas));
console.log('toplam maaşlar: ',sum);
console.log('toplam maaşlar: ',toplam);

let toplamZam = maaslar
.filter((x)=>x<7300)
.map((x)=>x*=0.1)
.reduce((acc,x)=> acc+x,0);
console.log('toplam zam miktarı: ',toplamZam)