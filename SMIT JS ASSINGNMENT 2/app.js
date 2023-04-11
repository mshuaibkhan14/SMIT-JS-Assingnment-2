alert("SMIT JS ASSINGNEMET 2 All Code is Comment please check JS File");

////////////////////// Assingnment 2 Question 1 //////////////////////

function print (num1) {
    return function (num2) {
       console.log(num1 + num2)
    }
}
let innerFunc = print(8);
innerFunc(9)





////////////////////// Assingnment 2 Question 2 //////////////////////

// let cars = ["Civc", "Corolla","Vitz","Mark-X","City"]; 


// function searchMyCar (arrName, carName) {
// if(arrName.length === 0){
//         return false;
//     }
//     if(arrName[0] === carName){
//         return true;
//     }

//     return searchMyCar (arrName.slice(1), carName)

// }

// console.log(searchMyCar(cars, "Mark-X"))






////////////////////// Assingnment 2 Question 3 //////////////////////

//     ******Please un-comment Code in html file before test this code*******

// function addPara (newPara){

// let cretEle = document.createElement("p");
// let paraText = document.createTextNode(newPara);

// cretEle.appendChild(paraText);
// let divPara = document.getElementById("para_div")

// divPara.appendChild(cretEle)
// }

// addPara("Hello SMIT this is the new paragraph for the JS Assingnment 2 question no.3 add para by using JS function");





////////////////////// Assingnment 2 Question 4 //////////////////////

//     ******Please un-comment Code in html file before test this code*******

// function addInList (listItem){

// let cretEle = document.createElement("li");
// let addListItem = document.createTextNode(listItem);

// cretEle.appendChild(addListItem);
// let divUl = document.getElementById("fruit_ul")

// divUl.appendChild(cretEle)
// }

// addInList("Mango");





////////////////////// Assingnment 2 Question 5 //////////////////////

//     ******Please un-comment Code in html file before test this code*******

//  function elementColor (eleName , eleColor){
//     let eleId = document.querySelector(eleName);
//     eleId.style.backgroundColor = eleColor;
// }

// elementColor("p" ,"orange"); 





////////////////////// Assingnment 2 Question 6 //////////////////////

// let car1 = {
//     name : "Civic",
//     company : "Honda",
//     year : 2020,
//     enigen : "1500cc",
//     color : "white"
// }

// let car2 = {
//     name : "Corolla",
//     company : "Tyota",
//     year : 2017,
//     enigen : "1300cc",
//     color : "Black"
// }

// function storeObj(keyName, valueToSave) {
//     let stringifyObj = localStorage.setItem(keyName,JSON.stringify(valueToSave));
//     return(stringifyObj)
// }

// storeObj("Civic", car1)
// storeObj("Corolla", car2)





////////////////////// Assingnment 2 Question 7 //////////////////////

// function restoreObj (nameObj) {
//     let restItem = JSON.parse(localStorage.getItem(nameObj))
//     return(restItem)
// }

// console.log(restoreObj("Corolla"));





////////////////////// Assingnment 2 Question 8 //////////////////////

// let mobileDetail = {
//     name : "Iphone",
//     company : "Apple",
//     model: "14 pro max",
//     lunchyear : 2021,
//     storage: "512GB",
//     color : "Deep purple"
// }
 
// function storeData(mobileDetail) {
//     for(let propName in mobileDetail){
//         localStorage.setItem(propName, mobileDetail[propName])
//     }

//     let newMobileObj = {};
//     for(let keys = 0; keys<localStorage.length; keys++){
//         let keyName = localStorage.key(keys);
//         newMobileObj[keyName] = localStorage.getItem(keyName)
//     }
//     return newMobileObj;
// };

// let newObj = storeData(mobileDetail);
// storeData(mobileDetail);
// console.log(newObj);





