// let dizi = [-5,15,22,-4,45,8];

// const neg =[];
// const pos =[];

// const ayirma = (n) => {
//     for ( let i =0; i<dizi.length; i++){
//         if( n[i]<0){
//             neg.push(n[i]);
//         }else if (n[i]>0){
//             pos.push(n[i]);
//         }
//     }
//     console.log(pos);
//     console.log(neg);   
// }
// ayirma(dizi);

//     // for (let i in dizi){
//     //     if(dizi[i]<0){
//     //         neg.push(dizi[i]);
//     //     } else if (dizi[i]>=0) {
//     //         pos.push(dizi[i]);
//     //     }
//     // }

// // console.log(pos);
// // console.log(neg);


////////////////////////////////////////////////////////////////////////////

// const isimler = new Array('Ahmet','Safa','Kemal','Ayhan','Merve','Nursima')
// const soyIsimler = new Array('Kaya','Çomaklı','Taş','Parlak','Yılmaz','Atabay');

// const birlestir = (a,b) => {
//     let isimSoyisim = [];

//     for ( let i in isimler){
//         //isimSoyisim[i] = isimler[i].concat(soyIsimler[i],' ');
//         isimSoyisim[i] = `${isimler[i]} ${soyIsimler[i]}`;
//     }
//     return isimSoyisim;
// }

// console.log(birlestir(isimler,soyIsimler));
//////////////////////////////////////////////////////////////////////////////////

// let ogrenciler = ['ahmet','ahmet','ahmet','mehmet','fatih','samet','fatih','samet','mehmet'];
// let sayac=0;

// let ogrenciBul =(dizi,aranan)=> { 
    
//     for (let i in dizi){ 
//         //FOR_IN'DE, INDIS SAYISAL OLARAK KULLANILIR. ÖRN:0-1-2-3 
            //FOR_OF'DA INDISIN BARINDIRDIĞI DEĞER KULLANILIR ÖRN:OBJECT
//         if(dizi[i] === aranan ){sayac+=1;}        
//     }
    
//     if(!sayac) {console.log(`${aranan} isimde öğrenci bulunamamıştır.`);} 
//     else {console.log(`${aranan} isminde ${sayac} tane öğrenci bulunmuştur`);} 
    
//     //     return !sayac 
//     //     ? console.log(`${aranan} isimde öğrenci bulunamamıştır.`)
//     //     : console.log(`${aranan} isminde ${sayac} tane öğrenci bulunmuştur`);

// }
// ogrenciBul(ogrenciler,'taha');

//////////////////////////////////////////////////////////////////////////////////

// let kelimeler =['20Kasımdan','itibaren','erken','kalkmaya','niyet','ettim.'];

// let cumle = [];

//     for (let kelime of kelimeler){
//         cumle += kelime + ' ';
//     }

//     console.log(cumle);


