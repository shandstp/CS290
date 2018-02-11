function deepEqual (a , b){
  if(typeof(a) == "object" && a != null && typeof(b) == "object" && b != null){
    var aSize = 0;
    var bSize = 0;
    for (var i in a){
      console.log(a[i]);
      console.log(b[i]);
      ++aSize;
      if(a[i] !== b[i]){
        return false;
      }
      else{deepEqual();}
    }
    for (var j in b){
      ++bSize;
    }
    if(aSize !== bSize){
      return false;
    }
    else return true;
  }
  else if(a === b){
    return true;
  }
  else{
    return false;
  }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
