// function rastgele(){

//     for ( let i=1; i<=10 ; i++){
//         const sayi = Math.round(Math.random() * 10);
//         console.log(sayi);

//         // Math.floor()= en yakın alt tamsayı;
//         // Math.ceil()= en yakın üst tamsayı;
//         // Math.round()= en yakın  tamsayı;
//         // Math.trunc()= kesirlinin tam kısmı ;
//         // Math.random()= 0-1 arasında random sayı;

//         // JS, INTERPRETER BİR DİLDİR.
            //Compiler bir programı bütün olarak alır ve çevirirken; Interpreter programı satır satır çevirir.Compiler’da, bir hata oluştuduğunda, çeviri işlemi durur ve hata giderildikten sonra bütün program yeniden çeviri işlemine tabii tutulur. Interpreter, bunun tam aksine olarak, eğer bir hata meydana geldiğinde, o anki çeviriyi engeller ve hata giderildiğine çeviriyi kaldığı yerden devam ettirir. Bu yüzden debug işlemi daha kolaydır.Compiler’da, Interpreter’e kıyasla hata bulma daha zordur.
        
//     }
// };

////////////////////////////////////////////////////////////////////////////

// function asal(){
//     let sayi= +prompt('Asal sayı kontrol: ');
//     let bolen=2;
    
//     while(bolen!=sayi){
//         if(sayi - bolen ==1){console.log('asaldır.');}
//         if(sayi%bolen ==0){console.log('asal değildir'); break;}       bolen +=1;        
//     }
// }

////////////////////////////////////////////////////////////////////////////


function notGiris(){
    // func tion notGirisi(puan = ''){ EĞER İNPUT GİRİLMEZSE NULL ATANSIN.}

    let puan= +prompt('0-100 arasında bir puan giriniz: ');
    
    while(puan <0){ 
        alert('Uygun aralıkta puan giriniz.');
        puan= +prompt('0-100 arasında bir puan giriniz: ');}
        
        while(puan>100){ 
            alert('Uygun aralıkta puan giriniz.');
            puan= +prompt('0-100 arasında bir puan giriniz: ');}
        }
        
////////////////////////////////////////////////////////////////////////////