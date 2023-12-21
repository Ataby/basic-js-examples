console.log("js module is running");
function toplama(a1,a2){
    return a1+a2;
}

const WORKING_HOURS_WEEKLY =40;
let sayac =0;

function artis(miktar=1){
    sayac +=miktar; 
    return sayac;
}

function azalis(miktar=1){
    sayac-=miktar;
    return sayac;
}

const moduleName = "Module 1";
// export default moduleName;

export default(num)=>  num*num;

export {
    WORKING_HOURS_WEEKLY as WHW,
    toplama,artis,azalis,sayac
}
console.log("Module 1 is loaded.")