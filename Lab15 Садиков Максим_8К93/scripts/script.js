/*Вариант 2
2.	Разработка скрипта «Количество обособленных регионов». Область задана прямоугольной матрицей,
состоящей из нулей и единиц. Подсчитайте количество разных регионов и верните результат.
Отдельный регион - это совокупность единиц,
связанных между собой по горизонтали и вертикали. В регионе могут быть пустые пространства.
  */
//function to create buttons

    function view(){

        //get the data from the user from our page
        var inputData = document.getElementById("num1").value;
        if (inputData.length === 0){
            document.getElementById("result").innerHTML =
             "Некорректно введены данные";
             return -1;
        }
        //данная переменная будет основной для дальнейшей обработки
        var matrix = createMatrix(inputData);
        //проверка на правильность введённых данных
        var correctnessOfData = checkForInnappropriateSymb(matrix);
        console.log(correctnessOfData);
        if (!correctnessOfData){
          document.getElementById("result").innerHTML =
           "Некорректно введены данные";
        }else{
          var result = solve(matrix);
          document.getElementById("result").innerHTML = "Обрабатываем данные...";
          document.getElementById("result-0").innerHTML = inputData;
          document.getElementById("result-1").innerHTML = result;
        }

    }
    //создаём матрицу из введенной строки в textarea
    function createMatrix(inputData){

      let matrix = new Array();
      let string = "";
      let array  = new Array();
      for (let i = 0; i < inputData.length; i++){
          string = "";

          while (inputData.charAt(i) !== "\n" && i !== inputData.length ){

            string += inputData.charAt(i);
            i++;

          }if(i === inputData.length ){

            array = string.split(" ");
            matrix.push(array);
            return matrix;
          }else{

            array = string.split(" ");
            matrix.push(array);}
      }
    }

    //проверяем матрциу на следующие параметры:
    //матрциа является матрицей и при этом прямоугольной,
    //все символы в матрице - числовые,
    //символы равны 1 или 0
    function checkForInnappropriateSymb(matrix){
      let canonLength = matrix[0].length;
      //проверяем явялется ли матрица прямоугольной
      if ( canonLength === matrix.length) {
        return false;}
      else{
        for (let element of matrix){
          //проверям является ли элемент массивом
          if (typeof element === 'object'){
            //проверяем имеют ли все элементы матрицы одинаковую длину
            if ( element.length === canonLength){
              //проверяем каждый элемент матрицы на значения 0 или 1
              for (let elementOfArray of element){
                let check = parseInt(elementOfArray);
                if ( isNaN(check) || (check !== 0 && check !== 1)) return false;
              }continue;

            }else return false;
          }
          else return false;
        }return true;
      }
    }
    //главная функция для решения поставленной задачи
    function solve(matrix){

      let length = matrix[0].length;
      let height = matrix.length;
      let resultMatrix = new Array();
      //create new matrix contains only zeroes
      for ( let i = 0; i < height; i++){
        let tempArray = new Array();
        for ( let j = 0; j < length  ; j++){
          tempArray.push(0);
        }
        resultMatrix.push(tempArray);
      }

      let resultMatrixVisual = matrix;
      let totalRegionCount = 0;
      //здесь происходит непонятная даже мне чертовщина

      for ( let i = 0; i < matrix.length; i++){
        for ( let j = 0; j < matrix[i].length; j++){
           if ( matrix[i][j] === "1" && resultMatrix[i][j] === 0){
             totalRegionCount ++;
             resultMatrix[i][j] = 1;
             result = whereToGo(matrix, resultMatrix, i, j);
             if (result.length > 1){for (let eachElem of result){
                 resultMatrix = switchPossibleWays(eachElem,matrix,
                   resultMatrix, i, j);
                 if (resultMatrix == matrix) return totalRegionCount;//пересылаю на свитч
               }
             }else if (result.length === 1){
               resultMatrix = switchPossibleWays(result,matrix,
                 resultMatrix, i, j);
             }else{
               continue;
             }
           }else{
             continue;
           }
        }
      }
      return totalRegionCount;
    }
    function whereToGo(matrix, resultMatrix,
       xPosition, yPosition){
       let returnString ="";
       //проверка свободно ли справа
       if (yPosition + 1 < matrix[xPosition].length){
         if ( matrix[xPosition][yPosition + 1] === "1" &&
         resultMatrix[xPosition][yPosition + 1] === 0){
         returnString += "1";
         }
       }
       //проверка свободно ли слева
       if (yPosition - 1 >= 0){
         if ( matrix[xPosition][yPosition - 1] === "1" &&
         resultMatrix[xPosition][yPosition - 1] === 0){
         returnString += "2";
         }
       }
       //проверка свободно ли сверху
       if (xPosition - 1 >= 0){
         if ( matrix[xPosition - 1][yPosition] === "1" &&
         resultMatrix[xPosition - 1][yPosition] === 0){
         returnString += "3";
         }
       }
       //проверка свободно ли снизу
       if (xPosition + 1 < matrix.length){
         if ( matrix[xPosition + 1][yPosition] === "1" &&
         resultMatrix[xPosition + 1][yPosition] === 0){
         returnString += "4";
         }
       }return returnString;
    }
    //IN ORDER TO MAKE SENSE: 1 - GO RIGHT;
    //2 - GO LEFT; 3 - GO UP; 4 GO DOWN
    function switchPossibleWays(switchValue,matrix, resultMatrix,
       xPosition, yPosition){
        switch (switchValue){
          case "1":
            resultMatrix = goRight(matrix, resultMatrix,
               xPosition, yPosition);
            break;
          case "2":
            resultMatrix = goLeft(matrix, resultMatrix,
             xPosition, yPosition);
            break;

          case "3":
            resultMatrix = goUp(matrix, resultMatrix,
           xPosition, yPosition);
            break;
          case "4":
            resultMatrix = goDown(matrix, resultMatrix,
            xPosition, yPosition);
            break;
          case "":
            break;
          default:
            break;
      }
      return resultMatrix;
    }
    function goRight(matrix, resultMatrix,
       xPosition, yPosition){
       yPosition++;
       resultMatrix[xPosition][yPosition] = 1;
       result = whereToGo(matrix, resultMatrix, xPosition, yPosition);

       if (result.length > 1){
         for (let eachElem of result){
           switchPossibleWays(eachElem,matrix,
             resultMatrix,xPosition, yPosition);//пересылаю на свитч
         }
       }else {
         switchPossibleWays(result,matrix,
           resultMatrix,xPosition, yPosition);
       }return resultMatrix;

    }
    function goLeft(matrix, resultMatrix,
       xPosition, yPosition){

       yPosition -= 1;
       resultMatrix[xPosition][yPosition] = 1;
       result = whereToGo(matrix, resultMatrix, xPosition, yPosition);

       if (result.length > 1){for (let eachElem of result){
           switchPossibleWays(eachElem,matrix,
             resultMatrix,xPosition, yPosition);//пересылаю на свитч
         }
       }else {
         switchPossibleWays(result,matrix,
           resultMatrix,xPosition, yPosition);
       }return resultMatrix;
    }
    function goUp(matrix, resultMatrix,
       xPosition, yPosition){
       xPosition -= 1;
       resultMatrix[xPosition][yPosition] = 1;
       result = whereToGo(matrix, resultMatrix, xPosition, yPosition);

       if (result.length > 1){for (let eachElem of result){
           switchPossibleWays(eachElem,matrix,
             resultMatrix,xPosition, yPosition);//пересылаю на свитч
         }
       }else {
         switchPossibleWays(result,matrix,
           resultMatrix,xPosition, yPosition);
       }return resultMatrix;
    }
    function goDown(matrix, resultMatrix,
       xPosition, yPosition){
       xPosition ++;
       resultMatrix[xPosition][yPosition] = 1;
       result = whereToGo(matrix, resultMatrix, xPosition, yPosition);

       if (result.length > 1){for (let eachElem of result){
           switchPossibleWays(eachElem,matrix,
             resultMatrix,xPosition, yPosition);//пересылаю на свитч
         }
       }else {
         switchPossibleWays(result,matrix,
           resultMatrix,xPosition, yPosition);
       }return resultMatrix;
    }
