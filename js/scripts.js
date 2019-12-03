function akan(){
    var y = parseInt(document.getElementById("year").value);
    var m = parseInt(document.getElementById("month").value);
    var d = parseInt(document.getElementById("date").value);
    var gender = parseInt(document.getElementsByTagName("select")[0].value)
    var date = new Date (y,m,d);
    var day = date.getDay();
    var week = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];
    var week2 =["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    var week3 =[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var akanmaleweek =["Yaw", "Kofi", "Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku"];
    var akanmaleweek2 =["Kofi", "Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw"];
    var akanmaleweek3 =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw","Kofi", "Kwame" ];
    var akanfemaleweek =["Yaa", "Afua", "Ama", "Akosua", "Adwoa", "Abenaa", "Akua"];
    var akanfemaleweek2 =["Afua", "Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa"];
    var akanfemaleweek3 =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    
    if (y === ""){
        alert("day");
    }
    else if (gender == 1){
        if(m == 4) {
            alert("Hello! you were born on " + week2[day] + " and your Akan Name is " + akanmaleweek2[day]);
        }
        else if (m == 6) {
            alert("Hello! you were born on " + week2[day] + " and your Akan Name is " + akanmaleweek2[day]);
        }
        else if (m == 9) {
            alert("Hello! you were born on " + week2[day] + " and your Akan Name is " + akanmaleweek2[day]);
        }
        else if (m == 11) {
            alert("Hello! you were born on " + week2[day] + " and your Akan Name is " + akanmaleweek2[day]);
        }
        else if (m == 2) {
            alert("Hello! you were born on " + week3[day] + " and your Akan Name is " + akanmaleweek3[day]);
        }
        else {
            alert("Hello! you were born on " + week[day] + " and your Akan Name is " + akanmaleweek[day]);
        }
    }
        if (y === ""){
            alert("day")
        }
       else if (gender == 2){
            if (m == 4){
                alert("Hello! you were born on " + week2[day] + " and your Akan Name is " + akanfemaleweek2[day]);
            }
            else if (m == 6) {
                alert("Hello! you were born on " + week2[day] + " and your Akan Name is " + akanfemaleweek2[day]);
            }
            else if (m == 9) {
                alert("Hello! you were born on " + week2[day] + " and your Akan Name is " + akanfemaleweek2[day]);
            }
            else if (m == 11) {
                alert("Hello! you were born on " + week2[day] + " and your Akan Name is " + akanfemaleweek2[day]);
            }
            else if (m == 2) {
                alert("Hello! you were born on " + week3[day] + " and your Akan Name is " + akanfemaleweek3[day]);
            }
            else {
                alert("Hello! you were born on " + week[day] + " and your Akan Name is " + akanfemaleweek[day]);
            }
        }

}