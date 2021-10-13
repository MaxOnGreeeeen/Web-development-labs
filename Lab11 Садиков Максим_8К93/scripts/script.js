/*Вариант 15
15.	Создайте функцию, которая принимает многомерный массив,
преобразует его в одномерный массив, и возвращает его с помощью рекурсии.
  */
//function to create buttons
    function view(){
        //get the data from the user from our page
        var inputData = document.getElementById("num1").value;
        var listOfMonth = document.getElementById("menu1").value;
        var inputMonth = parseInt(document.getElementById("num2").value);
        var correctnessOfData = checkTheInputData(inputData);

        if (inputMonth.length != 0 && correctnessOfData && !isNaN(inputMonth) ){
          var result = solve(inputData,inputMonth);
          document.getElementById("result").innerHTML = "Обрабатываем данные...";
          document.getElementById("result-0").innerHTML = inputData;
          document.getElementById("result-1").innerHTML = result;
        }
        else if (correctnessOfData){
          var result = solve(inputData,listOfMonth);
          document.getElementById("result").innerHTML = "Обрабатываем данные...";
          document.getElementById("result-0").innerHTML = inputData;
          document.getElementById("result-1").innerHTML = result;
        }else{
          document.getElementById("result").innerHTML =
             "Некорректно введены данные";
        }
    }
    function OnSelectionChange (select) {
        var selectedOption = select.options[select.selectedIndex];
    }
    function checkTheInputData(stringToCheck){
        let regExp = new RegExp(/\d\d\d\d\.\d\d/g)
        let match = stringToCheck.match(regExp);
        console.log(match[0].substr(5,7));
        if (match!== null && parseInt(match[0].substr(5,7)) <= 12) return true;
        else return false;
    }
    function solve(currentData, month){
        let date = new Date(currentData.substr(0,4),
        currentData.substr(5,currentData.length - 1));
        date.setMonth(date.getMonth() + parseInt(month));
        return date.getFullYear() + " " + date.getMonth();
    }
