var sum = function(a){
  return function(b){
    return a+b;
  }
}

var t = sum(2)(4);
console.log(t);

function add(a,b){
    var s = function (b){
      return a+b;
    };
    if(typeof b =='undefined'){
        return s;
    }
    else{
        return s(b);
    }
  }

  var h = add(5,8);
  console.log(h);

  var i = add(5)(8);
  console.log(i);

  function addNum(x) {
    return function(y) {
        if (typeof y !== 'undefined') {
            x = x + y;
            return arguments.callee; //The arguments.callee property contains the currently executing function.
        } else {
            return x;
        }
    };
}

var u = addNum(6)(7)(9)(8)();
console.log(u);
