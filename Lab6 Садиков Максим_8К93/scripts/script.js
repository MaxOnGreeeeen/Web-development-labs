/*Вариант 7
  Создайте функцию, которая возвращает true,
   если заданные круговые области пересекаются,
   в противном случае возвращает false.
   Круги представлены в виде двух массивов,
   содержащих значения в следующем порядке:
   радиус круга, положение центра по оси x, положение центра по оси y
  */
  //(X-a)^2 + (y-b)^2 = R^2
//function to create buttons
    function view(){
        //get the data from the user from our page
        var circle1 = document.getElementById("num1").value;
        //convert the data to integer array
        var circle2 = document.getElementById("num2").value;

        var dataConvertedCircle1 = convertToInteger(circle1);
        var dataConvertedCircle2 = convertToInteger(circle2);
        //check the correctness of the data

        if (dataConvertedCircle1 === -1 || dataConvertedCircle2 === -1 ) document.getElementById("result").innerHTML =
           "Некорректно введены данные";
        else if (dataConvertedCircle1.length < 3 || dataConvertedCircle2.length < 3 )document.getElementById("result").innerHTML =
           "Недостаточно аргументов";
        else{
           var result = solve(dataConvertedCircle1, dataConvertedCircle2);
           document.getElementById("result").innerHTML = "Обрабатываем данные...";
           if ( result ) document.getElementById("result-1").innerHTML = "Круги пересекаются";
           else document.getElementById("result-1").innerHTML = "Круги не пересекаются";
        }
    }
    function graphic(x,y,r,x1,y1,r1){

        let z = 40; // масштаб
        let c = document.querySelector('canvas');
        let ctx = c.getContext('2d');

        // центровочка
        ctx.translate(c.width/2, c.height/2)

        // сетка
        ctx.beginPath();
        for (let x = -3; x <3; x++) {
          ctx.moveTo(x*z, -c.height/2);
          ctx.lineTo(x*z, c.height/2);
          ctx.moveTo(-c.width/2, x*z);
          ctx.lineTo(c.width/2, x*z);
        }
        ctx.stroke();

        // график функции
        ctx.strokeStyle = "#3c4043";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI*2, true);
        ctx.arc(x1, y1, r1, 0, Math.PI*2, true);

        ctx.stroke();
    }
    function solve(dataConvertedCircle1, dataConvertedCircle2){

        //создаём алгоритм решения
        //основной критерий r1 + r2 > d, d - расстояние между окружн.
        //1 круг
        let a1 = dataConvertedCircle1[1];
        let b1 = dataConvertedCircle1[2];
        let r1 = dataConvertedCircle1[0];

        //2 круг
        let a2 = dataConvertedCircle2[1];
        let b2 = dataConvertedCircle2[2];
        let r2 = dataConvertedCircle2[0];
        graphic(a1,b1,r1, a2, b2, r2);
        //найдём расстояние
        if ( a1 != a2 && b1 != b2 ){

           let x = Math.abs(a1 - a2);
           let y = Math.abs(b1 - b2);
           let d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
           if (r1 + r2 > d) return true;
           else return false;

        }//круги имеют одинаковую x
        else if ( b1 != b2 && a1 == a2){
           d = Math.abs(b1 - b2);
           if (r1 + r2 > d) return true;
           else return false;
        }//круги имеют одинаковую y
        else if ( a1 != a2 && b1 == b2 ){
           d = Math.abs(a1 - a2);
           if (r1 + r2 > d) return true;
           else return false;
        }//круги имеют одинаковый центр
        else{
           //круги совпадают
           if ( r1 == r2) return true;
           else return false;
        }

    }
    function convertToInteger(inputFromUser){

        let array = inputFromUser.split(" ").map(Number);
        console.log(array);
        for (let i = 0; i < array.length; i++) {
           if ( isNaN(array[i]) || array[i] === '') { console.log("hello"); console.log(i); return -1;}
        }
        return array;
    }
