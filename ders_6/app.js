// function name (parameter1, paramaeter2){
//     // operations

//     return something; or not return statement
// }

// let name = function(par1,par2){
//     // operations
    
//     return something; or not return statement
    
// }

// let name = (par1,par2) => {
//     // operations
    
//     return something; or not return statement
    
// }

// FUNCTION DECLERATION TYPES AS ABOVE

const yasHesap = (dogum) => new Date().getFullYear() - dogum;
console.log(yasHesap(2005));

const selam =() => alert(`Herkese selamlar`);
console.log(selam());

const üsAl =(taban,üs) => taban ** üs;
console.log(üsAl(2,8));

const tekCift =(sayi) => sayi%2 ? "tek" : "cift";
console.log(tekCift(269));

const hacim = (r,h) =>Math.PI * r * r * h;
console.log(`Silindirin hacmi: ${hacim(5,4)}`);