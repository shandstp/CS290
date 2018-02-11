hoistFunction();

function hoistFunction(){
console.log("Hoisting really works!");
}

//hoistVar();

var hoistVar = function (){
  console.log("I will be surprised if I can see this");
};
