/*Вариант 15
15.	Создайте функцию, которая принимает многомерный массив,
преобразует его в одномерный массив, и возвращает его с помощью рекурсии.
  */
//function to create buttons
    function view(){
        //get the data from the user from our page
        var inputData = document.getElementById("num1").value;

        var arrayResult = new Array();
        var newArray = pushFunction(inputData, arrayResult);
        //чтобы убедиться в корректности полученного многомерного массива
        console.log(newArray);
        //check the correctness of the data
        if ( newArray === -1 ) document.getElementById("result").innerHTML =
           "Некорректно введены данные";
        else{
           var resultArray = new Array();
           var result = solve(newArray,resultArray);
           document.getElementById("result").innerHTML = "Обрабатываем данные...";
           document.getElementById("result-0").innerHTML = inputData;
           document.getElementById("result-1").innerHTML = result;
        }
    }
    //in order to create an array from string
    //firstly we need to parse it from string
    //ниже происходит преобразование введенных данных
    //поправочка, писал эту функцию ещё до
    //того как узнал о существовании eval()
    //здесь же осуществляется проверка данных
    function pushFunction(inputData, arrayResult){
      let regExp = new RegExp(/\[+/g);
      let res1 = inputData.match(regExp);
      let regExp1 = new RegExp(/\]+/g);
      let res2 = inputData.match(regExp1);
      if ( inputData.length === 0 || inputData.charAt(0) !== "["
          || res1[0].length !== res2[0].length ){
        return -1;
      } let i = 1;
      while ( i < inputData.length){
          if (inputData.charAt(i) ==="["){
            let newInd = pushim(i,inputData,arrayResult);
            i = newInd;
          }else if (inputData.charAt(i) ==="]" || inputData.charAt(i) === ","){
            i++;
          }else{
            let elemOfArray = '';
            while (inputData.charAt(i) !== "," && i < inputData.length - 1){
              elemOfArray += inputData.charAt(i);
              i++;
            }arrayResult.push(elemOfArray);
          }
       }return arrayResult;
    }

    function pushim(index, inputData, arrayResult){
       //рекурсивный метод
       //для преобразования строки, которая подразумевается
       //как многомерный массив, в реальный массив
       let array = new Array();
       let newIndex = index+1;
       if (inputData.charAt(newIndex) ==="["){
         arrayResult.push(array);
         pushim(newIndex,inputData,array)
       //if charAt equals to symb
       }else{
          let string = '';
          let index2 = newIndex;
          arrayResult.push(array);
          while(inputData.charAt(index2) !== "]"){
            if (inputData.charAt(index2) === "["){
              index2 = pushim(index2,inputData,array);
            }else if (inputData.charAt(index2) !== ","){
              array.push(inputData.charAt(index2));
              index2++;
            }else{
              index2++;
            }
          }
          return index2;
       }
    }
    //solution
    //после преобразования данных
    //рекурсивная функция
    function solve(dataChecked, resultArray){
        for (let elem of dataChecked) {
          //если элемент массива является объектом(массивом)
          if (typeof elem === 'object') {
            solve(elem,resultArray);
          //если примитив
          }else{
            resultArray.push(elem);
          }
      }return resultArray;
    }
