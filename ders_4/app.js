// function posNeg(sayi){
//     sayi = +prompt('lütfen sayı giriniz: ');

//     if(sayi<0){alert('negatif sayi')}
//     if(sayi==0){alert('nötr sayi')}
//     if(sayi>0){alert('pozitif sayi')}
// }

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

    function islemYap (){
        let isaret = prompt(`4 işlem operatörlerinden bir tanesini sembol olarak giriniz: `);

        let s1 = +prompt(`1.sayıyı giriniz: `);
        let s2 = +prompt(`2.sayıyı giriniz: `);

        console.log(`yapmak istediğiniz ${s1} ${isaret} ${s2} = ` + (s1(isaret),s2))
    }