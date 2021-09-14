/*Вариант 7
  Напишите функцию, которая принимает строку
  и прореживает ее (т.е. удаляет последнюю 1/10 символов).
  Если строка состоит из 21 символа, 1/10 символов будет равно 2,1 символа,
  поэтому функция удаляет 3 символа (округляем «вверх»)
*/

//function to create buttons
function view(){
    //get the data from the user from our page
    var data = document.getElementById("num1").value;
    //convert the data to integer array
    var dataConverted = convertToString(data);
    //check the correctness of the data
    if (dataConverted === "Not a string") document.getElementById("result").innerHTML = "Некорректно введены данные";
    else if (dataConverted === "") document.getElementById("result").innerHTML = "Введена пустая строка";
    else{
       var result = solve(dataConverted);
       document.getElementById("result").innerHTML = "Ну давай посмотрим...";
       document.getElementById("result-1").innerHTML = "Введенная строка: " + "  " + dataConverted +
       "    " + "(длина строки " + dataConverted.length + ")" ;
       document.getElementById("result-2").innerHTML = "Полученная строка: " + result +
       "    " + "(длина строки " + result.length + ")" ;
    }
}

//following funcions are the solution
//@Max_on_green_

//the function which attempts
//find out if the string is wtitten correctly
function convertToString(stringToConvert){

    let convertedString = "";
    for (let i = 0; i < stringToConvert.length; i++){

       let str = stringToConvert.charAt(i);
       if (typeof str != 'string'){
         return "Not a string";
       }
       convertedString += str;
    }
    return convertedString;
}
function solve(relevantString){
    //round the index to crop the string
    let len = relevantString.length;
    let index = Math.ceil( len/10);
    console.log(index);
    let cropString = relevantString.substr(0, len - index);

    return cropString;
}
