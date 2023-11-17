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
    
// };

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

function fibonacci(n){
    let array=[n];
    array[0]=1;
    array[1]=1;

    for(let i=2; i<=n; i++ ){
        array[i]=array[i-1] + array[i-2];
    }
    return array[n-1];
}

const n = +prompt('Dizi uzunluğu: ');
console.log(`Fibonacci(${n}) = ${fibonacci(n)}`);