
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
           document.getElementById("result").innerHTML = "Обрабатываем данные...";
           document.getElementById("result-1").innerHTML = "Введенная строка: " + "  " + dataConverted;
           document.getElementById("result-2").innerHTML = "Эквивалент в азбуке Морзе:  " + result;
        }
    }

    function solve(relevantString){

        var alpRus = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
        var alpEng= "abcdefghijklmnopqrstuvwxyz";

        var morzeCollectionLatin = new Map();
        morzeCollectionLatin = {
           "a":".-","b":"-...","c" : "-.-.","d" : "-..","e" : ".",
           "f":"..-.","g":"--.","h":"....","i":"..","j":".---",
           "k":"-.-","l":".-..","m":"--","n":"-.","o":"---",
           "p":".--.","q":"--.-","r":".-.","s":"...","t":"-",
           "u":"..-","v":"...-","w":".--","x":"-..-","y":"-.--",
           "z":"--.."
        };
        var morzeCollectionKirill = new Map();
        morzeCollectionKirill = {
           "а":".-","б":"-...","ц":"-.-.","д":"-..","е":".",
          "ф": "..-.","г":"--.","х":"....","и":"..","й":".---",
          "к": "-.-","л":".-..","м":"--","н":"-.","о":"---",
           "п":".--.","щ":"--.-","р":".-.","с":"...","т":"-",
          "у": "..-","ж":"...-","в":".--","ь":"-..-","ы":"-.--",
           "з":"--..", "ч":"---.","ш":"----","щ":"--.-",
           "ъ":"--.--","ы":"-.--","ъ":"-..-","э":"..-..",
           "ю":"..--","я":".-.-"
        };
        var morzeCollectionDotsAndNumbers = new Map();
        morzeCollectionDotsAndNumbers = {
          "0":"-----","1":".----","2":"..---","3":"...--","4":"....-",
          "5":".....","6":"-....","7":"--...","8":"---.."," ":"----.","9": "----.",
          "!":"-.-.--",".":".-.-.-",",":"--..--"
        };
        let stringToConvertLower = relevantString.toLowerCase();

        var result = "";

        for (let i = 0; i < stringToConvertLower.length; i++){

            symb = stringToConvertLower.charAt(i);
            console.log(symb);

            if ( isRus(symb, alpRus) ) { result += morzeCollectionKirill[symb];
              console.log(morzeCollectionKirill[symb]);}


            else if ( isEng(symb, alpEng) ) result += morzeCollectionLatin[symb];

            else{

               if ( morzeCollectionDotsAndNumbers[symb] != undefined) result += morzeCollectionDotsAndNumbers[symb];
               else {
                  result += "none";
                  continue;
                  //cdoe bellow is not working
                  document.getElementById("key-1").innerHTML = "Был найден неизвестный символ : " + symb;

                  document.getElementById('num2').addEventListener('input', function() {
                     document.getElementById('key-2').innerText = this.value + " ?";

                  });
                  //input morze text
                  document.getElementById("key-1").innerHTML += " Экваивалент эл. " + symb
                  +" в азбуке Морзе =  " ;

                  let value = document.getElementById("num-2").value;
                  //buttons
                  document.getElementById('but1').addEventListener('onclick', function() {
                     /*document.getElementById('key-1').innerText = this.value;
                     morzeCollectionDotsAndNumbers.set(symb, value);
                     result += value ;*/
                     alert("Ну я же просил :(");

                  });
                  document.getElementById('but1').addEventListener('onclick', function() {
                     /*document.getElementById('key-1').innerText = this.value;
                     result += "none";*/
                     alert("Больше так не делайте!");

                  });
               }
            }

        }
        return result;
    }
    function isRus(symb, alpRus){

        for ( let i = 0; i < alpRus.length; i++){

          if (alpRus.charAt(i) === symb) return true;

        }return false;
    }
    function isEng(symb, alpEng){

        for ( let i = 0; i < alpEng.length; i++){

          if (alpEng.charAt(i) === symb) return true;

        }return false;
    }

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
