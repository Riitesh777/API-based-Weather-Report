
var city= document.querySelector(".city")
var button=document.querySelector(".submit")
var main=document.querySelector(".main");
var desc=document.querySelector(".desc");
var temp=document.querySelector(".temp");

button.addEventListener('click',function(name){
 fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=9e36bf57e1fc1fc563890a0a29f08cb5')
    .then(response => response.json())
    .then(data => {
        var nameValue=data['name'];
        var descValue=data['weather'][0]['description'];
        var tempValue=data['main']['temp'];

        main.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML=descValue;
        console.log(nameValue,descValue,tempValue)
        city.value="";
    })
 .catch(err => alert("wrong city name!")) 
})