
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

//function to create bujttons
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
            document.getElementById("result").innerHTML =
            "Пользователь успешно добавлен";
            showTable();
       }else
        document.getElementById("result").innerHTML =
        "Некорректно введены данные";
       }
    function view(){
        //get the data from the user from our page
        var inputData = document.getElementById("data").value;
        var newString = inputData.split(",");
        if (newString.length < 3 ) document.getElementById("currentError").innerHTML =
        "Недостаточно аргументов";
        else if( checkDataForCorrectness(newString)){
           solve(newString);
        }else  document.getElementById("currentError").innerHTML =
        "Некорректно введены данные";

    }
    function solve(dataToFind){

        let theRow = parseInt(dataToFind[0]);
        let theColumn = parseInt(dataToFind[1]);
        let theStringToChange = dataToFind[2];

        let trs = document.querySelectorAll('#table tr');
        let tr;let tds;
        for ( let i = 0; i < trs.length; i ++){
          tr = trs[i];
          tds = tr.querySelectorAll('td');
          for ( let j = 0; j < tds.length; j++){
		          let td = tds[j];
              if (theRow === i && theColumn === j) {
                td.innerHTML = theStringToChange;
                break;}
          }
        }
    }

    function OnSelectionChange (select) {
        var selectedOption = select.options[select.selectedIndex];
    }
    function clearLocalStorage(){
       localStorage.clear();
       document.getElementById("result-1").innerHTML = '';
       document.getElementById("result").innerHTML =
       "Данные очищены";
    }
    function checkDataForCorrectness(arrayData){
       let firstif = isNaN(arrayData[0]);
       let secondif = isNaN(arrayData[1]);
       if (!firstif && !secondif && arrayData[2].length!== 0) return true;
       else return false;

    }

    function findJsonObject(keyToSearch){ let lowerKey = keyToSearch.toLowerCase();
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
    function unshowUsers(){document.getElementById('table').innerHTML ='';}
    function showTable(){
      document.getElementById('table').innerHTML =
       '';
      let table = document.getElementById('table');
      let jsonObjects = [];

      for (let i = 0; i < localStorage.length; i++){
        let currentObj;
        currentObj = JSON.parse(localStorage.getItem(i));
        jsonObjects.push(currentObj);
      }
      //create starting elements
      createTitles();
      //create a table of users
      if (jsonObjects.length === 0) return 0;
      else{for (let user of jsonObjects) {

      	let tr = document.createElement('tr');
      	let td1 = document.createElement('td');
      	td1.innerHTML = user.name;
      	tr.appendChild(td1);

      	let td2 = document.createElement('td');
      	td2.innerHTML = user.lastName;
      	tr.appendChild(td2);

      	let td3 = document.createElement('td');
      	td3.innerHTML = user.age;
      	tr.appendChild(td3);
      	table.appendChild(tr);
      }
    }
  }
  function createTitles(){

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerHTML = "Name";
    td1.classList.add("title");
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = "Last Name";
    td2.classList.add("title");
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerHTML = "Age";
    td3.classList.add("title");
    tr.appendChild(td3);
    table.appendChild(tr);
  }
