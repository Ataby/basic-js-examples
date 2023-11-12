// console.log('app.js is running');
// alert("hello guys");

// let fname = prompt("enter your first name");
// let sname = prompt("enter your second name");

// alert (fname +" " + sname);

// let sonuc = confirm("are you legal");
// console.log(sonuc); 

//////////////////////////////////////////////////////////

// var mynumber=11;
// console.log(mynumber);
// let v1=55;
// console.log(v1);

// var mynumber=22;
// console.log(mynumber);
// v1=89;
// console.log(v1);

//////////////////////////////////////////////////////////

const student = {
    name:'ahmet', age: 34
}

console.log(student);
let otherOne=student;
otherOne.name = 'mehmet'; // LET İLE İKİNCİ KEZ TANIMLAMAYA İZİN VERİLMİYOR.
otherOne.age = 24;

console.log(otherOne);
console.log(student);