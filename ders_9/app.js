let dizi = [-5,15,22,-4,45,8];

const neg =[];
const pos =[];

const ayirma = (n) => {
    // for ( let i =0; i<dizi.length; i++){
    //     if( n[i]<0){
    //         neg.push(n[i]);
    //     }else if (n[i]>0){
    //         pos.push(n[i]);
    //     }

    // }

    for (let i in dizi){
        if(dizi[i]<0){
            neg.push(dizi[i]);
        } else if (dizi[i]>=0) {
            pos.push(dizi[i]);
        }
    }

}
ayirma(dizi);
console.log(pos);
console.log(neg);
////////////////////////////////////////////////////////////////////////////

const isimler = new Array('Ahmet','Safa','Kemal','Ayhan','Melike','Nursima')
const soyIsimler = new Array('Kaya','Çomaklı','Taş','Parlak','Yılmaz','Atabay');

const birlestir = (a,b) => {
    let isimSoyisim = [];

    for ( let i in isimler){
        isimSoyisim[i] = isimler[i].concat(soyIsimler[i],' ');
    }
    return isimSoyisim;
}

console.log(birlestir(isimler,soyIsimler));
//////////////////////////////////////////////////////////////////////////////////


