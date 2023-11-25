// JSON => JAVASCRİPT OBJECT NOTATION

const team =[
    {name:'jason', surname:'adams',job:'developer',age:'30'}, 
    {name:'mary', surname:'cure',job:'chemist',age:'28'},
    {name:'san ', surname:'croise',job:'pilot',age:'38'}]

    console.log(team);
    console.log(team[2]);
    console.log(team[2].age);

    for (let person of Object.values(team)) console.log(person.job);
    //TOTAL OBJECT'IN İÇİNDEKİ MESLEKLERİ YAZDIR.
    
    Object.values(team).map((x)=> console.log(x.surname.toUpperCase()));
    //TOTAL OBJECT'IN IÇINDEKI SOYISIMLERI BUYUK HARFLE YAZDIR.

    Object(team).push({name:'said',surname:'atabay',job:'engineer',age:'24'});
    Object(team).push({name:'nursima',surname:'atabay',job:'dentist',age:'24'});
    //TOTAL OBJECT'E YENI KISI EKLE.

    console.log(team[3]);
    console.log(team[4]);
    //TEAM IÇINDEKI BELIRLI INDISI YAZDIR

    let copyAge =(team) 
    // BIR DIZI ICINE, HERKESIN YASINA 1 EKLEYIP SIRALAMA YAPIP KOPYALA
    .map((x)=> +x.age+1)
    .sort((a,b)=>a-b);
    
    let fullName = team.map((x)=> x.name.concat(' ',x.surname).toUpperCase());
    //BÜYÜK HARFE ÇEVIRIP YAZDIRMA IŞLEMI YAPILDI. 
    //ISIM VE SOYISIMI BAŞKA BIR OBJECT ICINE AKTARMAK ICIN ŞÖYLE YAPILMALI: 
    fullname = team.map((x)=> {
        return {
            fullName: (x.name+' '+x.surname).toLocaleUpperCase(),
            age :+x.age+5
        };
    })

    console.log(fullName);

    for (let kisi of Object.keys(team)) console.log(kisi)
    //KEYS'LERE ISIM VERMEDIGIMIZ ICIN 0,1,2,3,4 SONUCUNU VERDI.
    for (let kisi of Object.values(team)) console.log(kisi.name)


    console.log('******************************');
    console.log('Seneye ekiptekilerin yaşları: ',copyAge);

    team
    .filter((x)=>+x.age>=30)
    .map((x)=>console.log(x.name,',',x.job,',',x.age));
    // YASI 30 VE YUKARISINI, MESLEKLERIYLE BERABER YAZDIR

    let teamUnder25 = team.filter((x)=>x.age<25).map((x)=>x.name);
    console.log(teamUnder25);
    //YASI 25'TEN KUCUKLERIN ISIMLERINI YAZDIR

    let avgAge = team.reduce((acc,person)=> acc+=+person.age,0)/team.length;
    console.log(avgAge);
 