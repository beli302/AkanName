 function getDay(name){
    var century = year.slice(0, 2);
    var year = year.slice(2, 4);
    var years = year.slice(2,4);
    var month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("day").value);
 }
if (year === "" || year > 4 || month === "" || month < 1 || month > 12 || date === "" || date < 0 || date > 31 || name ==="") {
     alert("Make sure you have fill in correct information")
 } else{
     var day = Math.floor((((century/4)-2*century-1)+((5*years/4))+((26*(month+1)/10))+date)%7);
     return day
 }

 function getGender(){
     var radio =document.getElementsByName("gender");
     for (var i = 0; i < radio.length; i++){
         if (radio[i].checked){
           var gender = radio[i].value;
            return gender;        }
    }
 }
 function getName(){
     var name = document.getElementById("name").value;
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
     var female = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];

     if (getGender() === "male"){
        document.getElementById("post").innerHTML = 'Hello ${name}! your Akan name is ${male[getDay(name)]}';
     }else if(getGender() === "female"){
         document.getElementById("post").innerHTML = 'Hello ${name}! your Akan name is ${female[getDay(name)]}';
    }else{
         alert("Select your gender ")
     }
 }