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
        var dataConverted = convertToInteger(data);
        //check the correctness of the data
        if (dataConverted === -1) document.getElementById("result").innerHTML = "Некорректно введены данные";
        else if (isNaN(dataConverted)) document.getElementById("result").innerHTML = "Введена пустая строка";
        else{
           var result = solve(dataConverted);
           document.getElementById("result").innerHTML = "Обрабатываем данные...";
           document.getElementById("result-1").innerHTML = dataConverted;
           if ( result != -1) document.getElementById("result-2").innerHTML = result;
           else document.getElementById("result-2").innerHTML = "Таких чисел не существует";
        }
    }
    function generateArray(length){

        let array = new Array(length);
        for (let i = 0; i < array.length; i++){
           array[i] = i+1;
        }return array;
    }
    function solve(numberToConvert){
        //create an array of posstive possible numbers
        let requiredSum = numberToConvert;
        let length = Math.ceil(numberToConvert / 2);
        let arrayOfNumbers = generateArray(length);
        let sum = 0;
        let array1 = new Array();
        let j = 0;
        if ( requiredSum == 1) return -1;
        //alghoritm
        for (let i = 0; i < arrayOfNumbers.length; i++){
           sum = 0;
           array1 = new Array();
           j = i;
           while ( sum < requiredSum  && j < arrayOfNumbers.length ){
              sum += arrayOfNumbers[j];
              array1.push(arrayOfNumbers[j]);
              j++;
           }if (sum == requiredSum ) {return array1;}
        }return -1;
    }
    function convertToInteger(inputFromUser){
        for (let i = 0; i < inputFromUser.length; i++){
          if (isNaN(parseInt(inputFromUser.charAt(i)))) return -1;
        }return parseInt(inputFromUser);
    }
