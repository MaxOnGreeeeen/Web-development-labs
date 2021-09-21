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
        //найдём число перестановок
        let convertedArray = dataChecked.split(' ');
        result = [];
        console.log(convertedArray);
        let i = 0;
        while ( convertedArray.length != 0 ) {
           //it's not working
           i = 0;
           if (convertedArray[i] === convertedArray[i+1] && convertedArray[i+1] != undefined){
             let j = i;
             while ( convertedArray[j] === convertedArray[i]){
               j++;
             }
             result.push(convertedArray[i]);
             convertedArray = convertedArray.slice(j,
             convertedArray.length);
             i += j;
           }else{
             result.push(convertedArray[i])
             convertedArray = convertedArray.slice(i + 1,convertedArray.length);
             i++;
           }
        }
        return  result;
    }
    //solution
    //check the input
    function isTheInputCorrect(input){
       if (input === null || input === '' ||
            typeof input === "undefined") {
          return -1;
       }else return input;
    }
