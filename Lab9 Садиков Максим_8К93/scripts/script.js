/*Вариант 8
  8.	Напишите программу для генерации всех
   перестановок строки (может содержать дубликаты).
  */
  //(X-a)^2 + (y-b)^2 = R^2
//function to create buttons
    function view(){
        //get the data from the user from our page
        var inputData = document.getElementById("num1").value;
        var dataChecked = isTheInputCorrect(inputData);
        //check the correctness of the data
        if ( dataChecked === -1 ) document.getElementById("result").innerHTML =
           "Некорректно введены данные";
        else{
           var result = solve(dataChecked);
           document.getElementById("result").innerHTML = "Обрабатываем данные...";
           document.getElementById("result-0").innerHTML = inputData;
           document.getElementById("result-1").innerHTML = result;
        }
    }

    function solve(dataChecked){
        //создадим регулярное выражение
        const regexp = new RegExp(/-\d+/g);
        let resultOfRegExp = dataChecked.matchAll(regexp);
        let result = Array.from(resultOfRegExp);
        //введенные данные не соответствуют требованиям regexp
        if ( result == null || result === undefined){
          return "В введенной строке нет отрицательных чисел";
        }else{
          let summa = 0;
          for ( let i = 0; i < result.length; i++){
            summa += parseInt(result[i]);
          }
          return "отрицательные числа: " + result +
          ", сумма отрицательных чисел " + summa;
        }
    }
    //solution
    //check the input
    function isTheInputCorrect(input){
       if (input === null || input === '' ||
            typeof input === "undefined") {
          return -1;
       }else return input;
    }
