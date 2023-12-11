
//DIS KAYNAKLARDAN VERI GETIRMEK ICIN KULLANILAN ARABIRIMDIR.

//AG ISTEKLERI YAPMAMIZI VE CEVAPLARI YONETEBİLMEMIZE OLANAK SAGLAR.

//JS ORTAMINDA EN COK KULLANILAN ASENKRON ISLEMDIR.

//FETCH(), VERI GETIRMEK ISTEDIGIMIZ KAYNAGIN YOLUNU GOSTEREN ZORUNLU PARAMETRESI VARDIR. VE BU ISTEGIN CEVABINI GOSTEREN PROMISE YAPISI OLUSTURUR.

//API= APPLICATION PROGRAM INTERFACE => ARKA TARAFTA CALISAN, KULLANICI ARAYUZU OLMAYAN KOD GRUBU. AYNI ZAMANDA SERVER'DAKI VERILER BU API'LER SAYESINDE DEGISIK FARKLI CLIENT'LARA ULASIYOR. 

//MUSTERI(CLIENT) -> GARSON(API) -> MUTFAK(SERVER) MANTIGI

//HTTP PROTOKOLLERI UZERINDEN FARKLI METHODLARLA (GET,PUT,POST,PATCH,DELETE) VERI ALMA GONDERME SILME EKLEME VS YAPILIR.

// document.querySelector(".btn1").addEventListener("click",getTextFile );

// function getTextFile(){
//     fetch("someText.txt").then((response)=>{
//         console.log(response.text);

// })
// }

/////////////////////////////////////////////////////////////////////////////

// let userData;
// //1-2 SANIYE SONRA CEVAP GELINCE "THEN" ILE YAKALAYIP, JSON FORMATINA GETIRIP
// fetch("https://api.github.com/users") 
// //FETCH API MICROTASK KUYRUGUNA GIDER PROMISE GIBI

// .then((res)=>{
//     console.log(res);

//     if(!res.ok){ //FALSE MU DEGIL MI KONTROL
//         throw new Error("something went wrong"); 
//         // BU SATIRA ISLEM GELIRSE DIREK CATCH KISMINA ATLAR KALAN "THEN"LER IPTAL OLUR
//     }
//     return res.json();
// }) //SONUCU AL, SONRAKINE AKTAR
// .then((data)=> (userData=data))
// .catch(()=> console.log(" wrong"));
// //SERVER'DAN DONUS VARSA FETCH ISTEGI BASARISIZ SAYILMAZ. HATA KODU DONUSU OLSA BILE

// console.log(userData); //UNDEFINED DONDURUR CUNKU CLG'DEN SONRA FETCH CALISMAYA BASLIYOR ASYNC YAPIDA OLDUGU ICIN.
// const userDiv = document.querySelector(".users");


////////////////////////////////////////////////////////////////////////////

let userData;
//1-2 SANIYE SONRA CEVAP GELINCE "THEN" ILE YAKALAYIP, JSON FORMATINA GETIRIP
fetch("https://api.github.com/users") 
//FETCH API MICROTASK KUYRUGUNA GIDER PROMISE GIBI

.then((res)=>{
    console.log(res);

    if(!res.ok){ //FALSE MU DEGIL MI KONTROL
        throw new Error("something went wrong"); 
        // BU SATIRA ISLEM GELIRSE DIREK CATCH KISMINA ATLAR KALAN "THEN"LER IPTAL OLUR
    }
    return res.json();
}) //SONUCU AL, SONRAKINE AKTAR
.then((data)=>updateDOM (data))
.catch(()=> console.log(" wrong"));
//SERVER'DAN DONUS VARSA FETCH ISTEGI BASARISIZ SAYILMAZ. HATA KODU DONUSU OLSA BILE

const updateDOM =((users)=>{
    console.log(users);
    const usersDiv = document.querySelector(".users");

    users.forEach((user)=>{
        console.log(user);
        const {login, avatar_url, following_url}=user;
        usersDiv.innerHTML +=   `<h4> Users login: ${login}</h4>
        <img src="${avatar_url}" width=300px" alt="" /> `;
    })
})

