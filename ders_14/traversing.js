//TRAVERSING DOM
//BIR ELEMENT UZERINDEN BASKA ELEMENTLERI SECMEYE DOM TRAVERSING DIYORUZ. OZELLIKLE DINAMIK DEGISEN (SILME, EKLEME VS) HTML ELEMANLARINI SECERKEN GEREKLI OLUYOR.

//UST CLASS  -> PARENT
//ALT CLASS  -> CHILDREN
//AYNI CLASS -> SIBLING 
//EN YAKIN "X" PARENT'I = CLOSEST()

const list = document.querySelector(".list");
const ul = list.parentElement;
const section = list.parentNode.parentElement;
console.log(ul,section);
const boolean = section.parentElement == list.closest("main");
console.log(boolean);

const ull = document.querySelector(".item-list").children[0];
const css =ull.children[2];
css.style.background="orange";
//CHILDREN KULLANIRKEN KOSELI PARANTEZ UNUTULMAMALI
css.previousElementSibling.style.background="turquoise";
css.nextElementSibling.style.background="yellow";
css.nextElementSibling.style.fontSize="25px";
ul.lastElementChild.style.background="red";

//////////////////////////////////////////////////////////////////////

const newPar = document.createElement("p");
const liElement = document.createElement("li");
const aciklama = document.createTextNode("These topics will be learned in the program");
newPar.appendChild(aciklama);
const h2 = document.querySelector(".item-list h2");
h2.after(newPar); //H2 DEN SONRA BU ELEMENTI EKLE
