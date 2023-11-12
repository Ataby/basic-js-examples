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

let fahr = +prompt(`fahrenheit seviyesi: `);
let fahrToCelc = ( 5*(fahr-32)/9);
alert (`${fahr} fahreheit = ${fahrToCelc} derece \n`);

let celc = +prompt(`celcius seviyesi: `);
let celcToFahr = ((9/5*celc) - 32);
alert (`${celc} derece = ${celcToFahr} fahrenheit \n`);