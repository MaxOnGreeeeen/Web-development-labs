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
    function factorial(n) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    }

    function solve(dataChecked){
        //найдём число перестановок
        let count = factorial(dataChecked.length);
        let combinations = new Array();
        combinations.push(dataChecked);

        let permString = dataChecked;
        let arrayOfSymb = new Array();
        //create an array of used characters
        for (let symb in permString){
           arrayOfSymb.push(permString.charAt(symb));
        }
        return permute(arrayOfSymb)
    }
    //solution
    function permute(arr) {

      if (arr.length > 1) {
          //set the start element
          let begin = arr[0];
          let arr1 = permute(arr.slice(1));
          let arr2 = new Array();
          let length1 = arr1[0].length;
          for( let i = 0; i < arr1.length; i++)
              for( let j = 0; j <= length1; j++)
                  arr2.push(arr1[i].slice(0, j).concat(begin, arr1[i].slice(j)));
          return arr2;
      }else return arr[0];
   }
    //check the input
    function isTheInputCorrect(input){
       if (input === null || input === '' ||
            typeof input == "undefined") {
          return -1;
       }else return input;
    }
