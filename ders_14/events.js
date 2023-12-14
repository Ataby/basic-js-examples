

const h1 = document.querySelector("#header h1");

h1.onmouseover = function(){
    h1.style.color = "red";
    h1.style.fontWeight = '800';
    
}

h1.onmouseout = function(){
    h1.style.fontWeight = '200';
    h1.style.color = "black";
}

h1.addEventListener("click", ()=> { //ADDEVEN ILE FONKSIYONLARDA 'ON' EKI SILINIR
    alert("h1 pressed");
})

document.getElementById("btn").addEventListener("click", function(){
    const input = document.querySelector("#input");

    !input.value 
    ? alert('please enter an item')
    : alert(`${input.value} entered.`);

    input.value =''; //TUŞA BASILDIĞINDA KUTU İÇERİĞİNİ SİLER.
    document.querySelector('#input').focus(); 

    // if(!input.value){
    //     alert('please enter an item');
    // }else{ 
    //     alert(`${input.value} entered.`);
    // }
});

////////////////////////////////////////////////////////////////////////

//ONMOUSEOVER, ONMOUSEOUT EVENTS

const list = document.querySelectorAll('.list');
// console.log(list);
list.forEach ((li)=>{
    // console.log(li.innerText);
    li.style.transition = "all .3s";
    li.style.lineHeight ='2rem';
    
    li.onmouseover =()=>{
        li.style.fontSize = '2rem';
        li.style.transform = 'translateX(10px)';
        // li.style.transform = 'translateY(10px)';
    }
    
    li.onmouseout =()=>{
        li.style.transform = 'translateX(-10px)';
        // li.style.transform = 'translateY(-10px)';
        li.style.fontSize='1rem';
    }
});
////////////////////////////////////////////////////////////////////////

//SAYFA TEKRAR YUKLENDIGINDE = ONLOAD()
const buton=document.querySelector(".add-item #btn");
window.onload = function(){
    document.querySelector('#input').focus(); 
    //SAYFA YENILENDIGINDE, INPUT BOX'A FOCUSLANSIN
    buton.style.background = "black";
    buton.style.color = "white";
    buton.style.borderRadius= "9px";
    buton.style.width="8rem";
    buton.style.padding=".5rem";
    
    
}
////////////////////////////////////////////////////////////////////////


// const liElement= document.getElementsByTagName("li");
// console.log(liElement);

// liElement[2].style.background="orange";
// liElement[3].style.background="turquoise";
// liElement.item(0).style.background="blue";
// liElement.item(0).style.color="white";
// liElement[4].innerText += " and Python"
// //INNERTEXT SADECE GOZUKEN METNI GÖSTERİR. TEXTCONTENT GIZLI OLANLARI DA GOSTERIR.


////////////////////////////////////////////////////////////////////////

const myList = document.getElementsByClassName("list");
const myListArray = Array.from(myList);
myListArray.forEach((item)=>console.log(item.innerText));
[...myList].forEach((item)=>console.log((item.textContent)));

const itemh2 = document.querySelector(".item-list h2").style;
itemh2.background="purple";
itemh2.color = "white";
const inputBox = document.querySelector("input[type='text']");
inputBox.style.border = "2px solid red";
console.log(document.querySelector("section ul li:nth-child(3)").innerText);