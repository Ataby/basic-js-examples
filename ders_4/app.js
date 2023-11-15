// function posNeg(sayi){
//     sayi = +prompt('lütfen sayı giriniz: ');

//     if(sayi<0){alert('negatif sayi')}
//     if(sayi==0){alert('nötr sayi')}
//     if(sayi>0){alert('pozitif sayi')}
// }

///////////////////////////////////////////////////////////////////////////////

// function hizBelirleme(){
//     let hiz = +prompt('hızınız giriniz: ');
//     let sonuc = hiz >=140 ? 'hız sınırını aştınız' : (hiz >=90 ? 'normal hızda gidiyorsunuz' : 'yavaş gidiyorsunuz, hızlanın');
//     console.log(sonuc);
// }

///////////////////////////////////////////////////////////////////////////////

function tekCift(){
    let sayi = +prompt('Tek veya çift sayı belirleme: ');
    let sonuc = (sayi%2 == 0 ? 'Çift sayıdır' : 'Tek sayıdır');
    console.log(sonuc);
}
///////////////////////////////////////////////////////////////////////////////

// function buyukSayi(){
    //     const a1 = +prompt(`ilk sayıyı giriniz:`);
    //     const a2 = +prompt(`ikinci sayıyı giriniz:`);
    //     const a3 = +prompt(`ucuncu sayıyı giriniz:`);
    
    //     let b=1;
    
    //     if(b> a1){ b = b}
    //     else if ( b<a1){ b = a1}

    //     if(b> a2){ b = b}
    //     else if ( b<a2){ b = a2}

    //     if(b> a3){ b = b}
    //     else if ( b<a3){ b = a3}

    //     console.log(`en buyuk sayi ${b}`);
    
// }
    ///////////////////////////////////////////////////////////////////////////////
    
    // function islemYap (){
    //     let isaret = prompt(`4 işlem operatörlerinden bir tanesini sembol olarak giriniz: `);
        
    //     let s1 = +prompt(`1.sayıyı giriniz: `);
    //     let s2 = +prompt(`2.sayıyı giriniz: `);
        
    //     console.log(`yapmak istediğiniz ${s1} ${isaret} ${s2} = ` + (s1(isaret),s2))
    // }

    ///////////////////////////////////////////////////////////////////////////////
    
    // function askerlik(){
    //     const yas=23;
    //     const cinsiyet = 'erkek';
    //     const saglik = true;
        
    //     const sart = saglik && (yas >18) && (cinsiyet == 'erkek');
        
    //     if( sart){
    //         console.log('askerliğe uygundur');
    //     }else { console.log('askerliğe uygun değildir');}
    // }
    
    ///////////////////////////////////////////////////////////////////////////////
 
function haftaGun(){   
let gun = +prompt('haftanın kaçıncı günü ?')

switch(gun){
    case 1 : gun = 'pazartesi';break;
    case 2 : gun = 'sali';break;
    case 3 : gun = 'çarşamba';break;
    case 4 : gun = 'perşembe';break;
    case 5 : gun = 'cuma';break;
    case 6 : gun = 'cumartesi';break;
    case 7 : gun = 'pazar';break;
    default: alert('Haftanın 7 günü vardı');break;
}
console.log(gun)
}


