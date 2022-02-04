document.addEventListener("DOMContentLoaded", function () {
  console.log(`It's working`);

hobbySelectedTypeEl=document.getElementById("hobbyTypes")  
chooseHobbyTypeBtn=document.getElementById("chooseHobbyTypeBtn")
randomHobbyBtn=document.getElementById("randomHobbyBtn")
hobbyEl=document.getElementById("hobby")
});

const hobbytypes=["general","collection","competition","observation","sports_and_outdoors","education"];

randomHobbyBtn.addEventListener("click", function(){
  hobbySelectedTypeEl.value = "";
  hobbyRandomtype=hobbytypes[Math.floor(Math.random() * hobbytypes.length)];
  console.log(hobbyRandomtype)
  getRandomHobby(hobbyRandomtype);
});

chooseHobbyTypeBtn.addEventListener("click", function(){
if (hobbySelectedTypeEl.selectedIndex){
  hobbySelectedType=hobbySelectedTypeEl.options[hobbySelectedTypeEl.selectedIndex].value;
  getRandomHobby(hobbySelectedType);
}
else {
  alert("Please select a kind of hobby and then click Find !")
}

});

function getRandomHobby(type){
  fetch(`https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies?category=${type}`
  , {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "hobbies-by-api-ninjas.p.rapidapi.com",
      "x-rapidapi-key": "dae060c942mshb40aa0eb304dcecp16d9dajsn9c1267462dec"
    }
  })
    .then((response) => {
     return response.json()
  })
    .then((obj) => {
      console.log("obj",obj)
      createHobby(obj);
    })
    .catch((err) => {
      console.log(err);
    });
}
function createHobby (hobby){
  hobbyEl.innerHTML=`<p>Hobby's name:  <b>${hobby.hobby}</b></p><p> More about this hobby: <a href=${hobby.link} target="_blank"><box-icon type='logo' name='wikipedia'></box-icon>${hobby.link}</a></p>`
}
