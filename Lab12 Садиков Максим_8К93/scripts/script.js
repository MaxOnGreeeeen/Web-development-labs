
class JSONObject{

  currentObject = null;
  name = "Unknown";
  lastName = "Unknown";
  counter = 0;
  age = 0;
  //коструктор класса
  constructor(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  get name(){
    return this.name;
  }
  addToArray(){
    this.currentObject = {
      name : this.name,
      lastName : this.lastName,
      age : this.age
    }
    var newObject = JSON.stringify(this.currentObject);
    localStorage.setItem(localStorage.length, newObject );
  }
}
//function to create buttons
    function addJsonObject(){

       var nameOfPerson = document.getElementById('name').value;
       var lastnameOfPerson = document.getElementById('lastName').value;
       var ageOfPerson = document.getElementById('age').value;
       if (nameOfPerson.length !== 0 &&
            lastnameOfPerson.length !== 0 &&
            typeof(lastnameOfPerson) === "string" &&
              typeof(nameOfPerson) === "string"&&
             !isNaN(parseInt(ageOfPerson)
          )){
             var jsonObject = new JSONObject(nameOfPerson,lastnameOfPerson,ageOfPerson);
            jsonObject.addToArray();
       }else
        document.getElementById("result").innerHTML =
        "Некорректно введены данные";
       }
    function view(){
        document.getElementById("result-1").innerHTML = '';
        //get the data from the user from our page
        var inputData = document.getElementById("num1").value;
        if (inputData.length != 0){
          var result = findJsonObject(inputData);
          document.getElementById("result-0").innerHTML = inputData;
          for ( let i = 0; i < result.length; i++){
            let space;
            if (i < result.length - 1) space = "; ";
            else space = ".";
            document.getElementById("result-1").innerHTML += result[i] + space + '<br>';
          }

        }else document.getElementById("result").innerHTML =
        "Некорректно введен ключ";
    }

    function OnSelectionChange (select) {
        var selectedOption = select.options[select.selectedIndex];
    }
    function clearLocalStorage(){
       localStorage.clear();
       document.getElementById("result-1").innerHTML = '';
    }
    function findJsonObject(keyToSearch){
        let lowerKey = keyToSearch.toLowerCase();
        let foundObjects = [];
        for (let i = 0; i < localStorage.length; i++){

          let currentObj;
          currentObj = JSON.parse(localStorage.getItem(i));

          if (currentObj.name.toLowerCase() === lowerKey ||
          currentObj.lastName.toLowerCase() === lowerKey ||
            currentObj.age == keyToSearch
          )foundObjects.push(currentObj);}
        let convertedJsonObjects = [];
        for (let elem of foundObjects){
          convertedJsonObjects.push(elem.name + ' '
          + elem.lastName + ', ' +
          elem.age  + ' лет ' )
        }
        return convertedJsonObjects;
    }
