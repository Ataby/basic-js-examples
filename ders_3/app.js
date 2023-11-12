// let name=null;

// let name2 = name ?? 'sayın müşterimiz';

// let selam =`merhaba ${name2}, bankamıza hoşgeldiniz`;
// document.write(selam);

////////////////////////////////////////////////////////////

// let var1 = +prompt('birinci kenarı giriniz: ');
// let var2 = +prompt("ikinci kenarı giriniz: ");
// let var3 = +prompt("yarıçap giriniz: ");

// let cemAlan= (Math.PI * (var3**2) );
// let cemCevre = ( 2 * Math.PI * var3);
// let dikAlan = var1 * var2;

// alert(`Dikdörtgenin Alanı : ${dikAlan} \n` +
// `Çemberin Alanı : ${cemAlan} \n` + 
// `Çemberin çevresi: ${cemCevre}`);


/////////////////////////////////////////////////////////////////////


// let fahr = +prompt(`fahrenheit seviyesi: `);
// let fahrToCelc = ( 5*(fahr-32)/9);
// alert (`${fahr} fahreheit = ${fahrToCelc} derece \n`);

// let celc = +prompt(`celcius seviyesi: `);
// let celcToFahr = ((9/5*celc) - 32);
// alert (`${celc} derece = ${celcToFahr} fahrenheit \n`);


/////////////////////////////////////////////////////////////////////

// let today = new Date();
// document.write(today);
// document.write('\n');

// document.write(`${today.getFullYear()} yılındayız.\n`);
// document.write(`\n`+`${today.getMonth()+1}. ayın ${today.getDate()}.gününden herkese iyi akşamlar.`);


/////////////////////////////////////////////////////////////////////

let array = [];
let counter=3;

while (counter!=0){
     array[counter] = +prompt(`sayı giriniz`);
    counter-=1;
}

counter=3;

if ((array[counter] % 10) == (array[counter-1]%10)){ 
    document.write(true)} 

    else if ((array[counter] % 10) == (array[counter-2]%10)){
        document.write(true)} 

    else if ((array[counter-1] % 10) == (array[counter-2]%10)){
            document.write(true)}

    else{ document.write(false)}

        
    
