function buttonBinding(){
  document.getElementById('postSubmit').addEventListener('click',function(event){
    var req = new XMLHttpRequest();
    var inputText = null;
    inputText = document.getElementById('inputText').value;
    req.open('POST', 'http://httpbin.org/post', true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load',function(){
      if(req.status >= 200 && req.status < 400){
        var reply = JSON.parse(req.responseText);
        document.getElementById('response').textContent = reply.data;
      }
      else {console.log('Something went wrong: ' + req.statusText);
    }
  });
  req.send(JSON.stringify(inputText));
  event.preventDefault();
});
}
document.addEventListener('DOMContentLoaded', buttonBinding);
