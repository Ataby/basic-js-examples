console.log("****Object Literals****");

const book1= {
    title: "Iknanın anahtarı",
    author: "Mark Goulston",
    year:1880,

    getSummary : function(){ 
        //ARROW FUNC. ILE 'THIS' KEYWORD'U DOGRU ÇALISMIYOR
        return `${this.title} was written by ${this.author} in ${this.year}.` ;
    }
}
console.log(book1);
console.log(book1.hasOwnProperty("author"));

const book2= {
    title: "Mesnevi",
    author: "Mevlana",
    year:1250,

    getSummary : function(){ 
        //ARROW FUNC. ILE 'THIS' KEYWORD'U DOGRU ÇALISMIYOR
        return `${this.title} was written by ${this.author} in ${this.year}.` ;
    }
}
console.log(book2);
console.log(book2.hasOwnProperty("author"));

//OBJECT LITERAL ILE SERI URETIM OBJECT TURETILMESI ZAHMETLI OLDUGU ICIN OBJECT CONSTRUCTOR URETILMISTIR.