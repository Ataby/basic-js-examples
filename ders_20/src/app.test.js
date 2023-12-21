//ES6 MODULE FORMATI
//import {celcToFahr,fahrToCelc,fibonacci,priceTotal}from './app.js'


//NODE MODULE FORMATI
const {celcToFahr,fahrToCelc,fibonacci,priceTotal}= require ("./app.js");


//IMPORT EDILEN FONKSIYONLAR PARCA PARCA KUCUK TESTLERE TABI TUTULUR

describe ("priceTotal",()=>{

    //TEST CASE'LER : 
    it("should exist",()=>{ // BU FONK. VAR OLMALI
        expect(priceTotal).toBeDefined();
        //TANIMLI OLMALI VE ADI DEGISMEMIS OLMALI
    })

    it("should return a number",()=>{
        expect(priceTotal(100,0.18)).toBe(118);
    })

    it("should return with default tax",function(){
        expect(priceTotal(200)).toBe(236);
    })


})
describe ("celcToFahr",()=>{
    it("should exist",()=>{ // BU FONK. VAR OLMALI
        expect(celcToFahr).toBeDefined();
        //TANIMLI OLMALI VE ADI DEGISMEMIS OLMALI
    })

    it("should return 0 to 32",()=>{
        expect(celcToFahr(0)).toBe(32);
    })


})
describe ("fahrToCelc",()=>{

    it("should exist",()=>{ // BU FONK. VAR OLMALI
        expect(fahrToCelc).toBeDefined();
        //TANIMLI OLMALI VE ADI DEGISMEMIS OLMALI
    })

    it("should return 212 to 100",()=>{
        expect(fahrToCelc(212)).toBe(100);
    })
})
describe ("fibo",()=>{
    it("should exist",()=>{ // BU FONK. VAR OLMALI
        expect(fahrToCelc).toBeDefined();
        //TANIMLI OLMALI VE ADI DEGISMEMIS OLMALI
    })

    it("if number=1",function(){
        expect(fibonacci(1)).toBe(1);
    })

    it("not given parameters",function(){
        expect(fibonacci()).toBe(1);
    })

    test('should return 55 for 10th index',() =>{ 
        expect(fibonacci(10)).toBe(55) 
    })

    test('should throw error < 1', () =>{
        expect(()=> fibonacci(0)).toThrow(new Error("Must enter a number greater than 0")); 
    })
})




