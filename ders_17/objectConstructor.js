function book(title,author,year){
    this.baslik = title;
    this.yazar=author;
    this.yil=year;
}

book.prototype.getAge= function(){
    return new Date().getFullYear() - this.yil;
}
book.prototype.getSummary = function(){
    return  `${this.baslik} was written by ${this.yazar} in ${this.yil}.`;
}
//BOOK OBJESININ TUM ORNEKLERI BU FONK. MIRAS ALIR
//NESNE KALIBININ PROTOTIPINE ".PROTOTYPE" ILE ERISILIR.
//ORNEK NESNENIN PROTOTIPINE "__PROTO__" ILE ERISILIR.

const book1 = new book("Kasagi","Omer Seyfettin",1930);
book1.price = 120;
const book2 = new book ("Mesnevi","Mevlana",1250);
console.log(book1,book2);
console.log(book1.getAge());
console.log(book2.getAge());
// console.log(book.prototype);
console.log(book1.__proto__);
console.log(typeof book);

//------------------- INHERITANCE(ES5)-------------------------

function magazine (title,author,year,month,category){
    book.call(this,title,author,year);
    this.ay = month;
    this.kategori=category  ;
}
magazine.prototype = Object.create(book.prototype);
//OBJENIN FONKSIYONUNU KALITIMLA ALMAK ICIN DERIN KOPYALAMA

const mag1=new magazine("Bilim Cocuk","Einstein",2012,"September","Bilim");
console.log(mag1.getSummary());

