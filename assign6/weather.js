var appid = '2455d9f4ab50b4a8923a4357030da88b';

function buttonBinding(){
  document.getElementById('zipSubmit').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var location = {country:null,city:null,zip:null};
    location.country = document.getElementById('country').value;
    location.city = document.getElementById('city').value;
    location.zip = document.getElementById('zipCode').value;
    req.addEventListener('load',function(){
      var reply = JSON.parse(req.responseText);
      document.getElementById('placeName').textContent = reply.name;
      document.getElementById('currTemp').textContent = reply.main.temp;
      document.getElementById('humidity').textContent = reply.main.humidity;
      console.log(JSON.parse(req.responseText));
    });
    if(location.country === ''){
      alert('Please enter a country');
    }
    else if(location.city != ''){
      req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + location.city + ',' + location.country + '&units=imperial&appid=' + appid, true);
    }
    else if(location.zip != ''){
      req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=' + location.zip + ',' + location.country + '&units=imperial&appid=' + appid, true);
    }
    else {alert('Please enter either a city or zip code');}
    req.send(null);
    event.preventDefault();
  })
}

document.addEventListener('DOMContentLoaded', buttonBinding);
