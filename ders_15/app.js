// SYNC AND ASYNC PROGRAMMING
// JS => ASYNC & SINGLETHREAD

//ASENKRON PROG. => ASIL THREAD'DEN BAĞIMSIZ OLARAK ARKA PLANDA ÇALIŞMAYA IZIN VEREN TEKNIKDIR.

//MultiThreading => Bir işlemde aynı anda birden fazla kod parçasının çalıştırılmasıdır.Bize MultiTasking sağlar. Çünkü bir görevi yaparken aynı anda başka bir görevi de yaparak zaman kazandırır .

//API=> iki sistem arasında etkileşimin gerçekleştiği bir yerdir.
//API=> iki uygulamanın birbirleriyle dolaylı olarak etkileşimde bulunabileceği bir yerdir

//Async programlama, uygulamaların performanslarının artırır.
//API'den veya veritabaından verı çekme,giriş-çıkış işlemleri, dosya okuma-yazma islemleri gibi zaman alan kodlarda async programlama çok önemlidir.


////////////////////////////////////////////////////////////////////////////////


// const bekle =(waiting)=>{
//       const start = new Date().getTime();
//       while (new Date().getTime()< (start + waiting)){;}
// }
// // KODLAR NORMALDE SENKRON CALISIR.

// console.log('hello');
// console.time("timer")
// bekle(3000);
// //BLOCKING CODE!!
// console.timeEnd("timer");
// console.log('time is up');


////////////////////////////////////////////////////////////////////////////////

//ASENKRON (setTimeout)

// console.log('timeout basladı');

// setTimeout(()=>{
//       // KOD ÇALIŞMAYA BAŞLADIKTAN SONRA ARKAYA ATILIR VE ALT SATIRDAKI KODDAN DEVAM EDER.
//       console.log('async function');
// },2000);

// setTimeout(()=>{
//       console.log('async function_2');
// },1999);//MILISANIYE DAHA DUSUK OLDUGU ICIN BURASI ONCE GELIR.

// console.log('timeout bitti');


////////////////////////////////////////////////////////////////////////////////


// setTimeout(()=>{
//       console.log('setTimeout' ,'tek sefer çalışır.');
// },0) //0 MS SONRA BU ISLEMI YAP.

// setTimeout(()=>{
//       console.log('setInterval','periyodik aralıklarla çalışır.');
// },10) //10 MS SONRA BU ISLEMI YAP.

// setTimeout(()=>{
//       console.log('setInterval durdurmak ıcın clearInterval kullanılır.');
//       console.log('Fakat durdurma işlemini, çalışan periyodik fonk. ile eşlemek gerekir. ')
// },11)

// let counter =0;
// console.log('Timer started')
// let stopId = setInterval(()=>{
//       console.log(`Bu sayı artarak devam ediyor : `,++counter);

//       if(counter>12){
//             clearInterval(stopId);
//             console.log('timer stopped');
//       };
// },100)


//////////////////////////////////////////////////////////////////////////////////

//BIRBIRINE BAGLI ASYNC YAPILARIN KODLAMASI NESTED ILE YAPILIR FAKAT TAVSIYE EDILMEZ. 
//CALLBACK HELL(nested ve bırbırıne baglı callback'ler)

setTimeout(()=>{
      console.log('+: Hi');
      setTimeout(()=>{
            console.log('-: Hello');
            setTimeout(()=>{
                  console.log('+: How are you ?');
                  setTimeout(()=>{
                        console.log('-: Fine and you ?')
                  },1000)
            },1000)
      },1000)
},1000)