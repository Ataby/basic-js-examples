document.querySelector(".btn1").addEventListener("click", getTextFile);
document.querySelector(".btn2").addEventListener("click", getJsonFile);
document.querySelector(".btn3").addEventListener("click", getApiFile);

function getTextFile(){
    fetch("someText.txt")
    .then((res)=> {return res.text();})
    .then((text)=>{
        document.querySelector(".liste").innerHTML+=text;
    })
} /////^^^^^^ BUTTON-1 ^^^^^^//////////

function getJsonFile(){
    fetch("article.json")
    .then((res)=> {return res.json();})
    .then((article)=>{
        updateDOM(article);
        //document.querySelector(".liste").innerHTML+=text;
    })
}

const updateDOM = ((users)=>{
    const liste =document.querySelector(".liste");

    users.forEach((user)=>{ //FOR.EACH METODU DIV'LER ICIN KULLANILIR.
        // console.log(user);
        const {name,surname}=user;
        let output = "<ul>";
        output+= `<li> ${name}${surname} </li> `;
        output+= "</ul>";

        liste.innerHTML+= output;
    })
})//////^^^^^^ BUTTON-2 ^^^^^^^^////////

function getApiFile(){
    fetch("https://api.github.com/users")
    .then((res)=> {return res.json();})
    .then((users)=>{
        updateDOMM(users);
        //document.querySelector(".liste").innerHTML+=text;
    })
}

const updateDOMM = ((users)=>{
    const liste =document.querySelector(".liste");

    users.forEach((user)=>{ //FOR.EACH METODU DIV'LER ICIN KULLANILIR.
        // console.log(user);
        const {login,avatar_url}=user;
        let output = "<ul>";
        output+= `<li> ${login} <img src="${avatar_url}" width=200px"/> </li> `;
        output+= "</ul>";

        liste.innerHTML+= output;
    })
})