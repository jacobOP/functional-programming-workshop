// 1. Write a function, `funcCaller`, that takes a `func` (a function) and an `arg` (any data type). The function returns the `func` called with `arg`(as an argument).
var funcCaller = function(func, arg){
	return func(arg);
};



// 2. Write a function, `firstVal`, that takes an array, `arr`, and a function, `func`, and calls `func` with the first index of the `arr`, the index # and the whole array.
svar firstVal = function(arr, func){
	func(arr[0], 0, arr);
};



// 3. Change `firstVal` to work not only with arrays but also objects. Since objects are not ordered, you can use any key-value pair on the object.
var firstVal = function(collection, func){
  //arrays in js are techincally objects, so Array.isArray is needed instead of typeof to check for them
  if (Array.isArray(collection)){
    func(collection[0], 0, collection);
  } elseif (typeof collection){
    //Object.keys returns an array of all keys in an object
    var keys = Object.keys(collection);
    func(keys[0], first, collection);    
  }
};


// extra credit
var once = function(func) {
  var ran = false;
  return function() {
    if (ran){
        return;
    } else {
      ran = true;
      return func();
    }
  };
};
  
//use once like this

var processPaymentOnce = once(chargeCreditCard);
//now processPaymentOnce is the nested function from once, but it has access to the ran variable and to the chargeCreditCard function that you passed to once, due to closures! how neat

//then you can call processpayment once as many times as you want, but chargeCreditCard will only run once!

//it runs this time, and it sets ran === true
processPaymentOnce(123456789012, 200);

//it doesn't run here b/c ran is set to false, so the func returns nothing




//instructors solution
var once = function(func){
  var alreadyCalled = false;
  var answer;
  return function(){
    if(alreadyCalled){
      console.log("already run");
      return answer;
    } else {
      alreadyCalled = true;
      console.log("running for the first time");
      return func.apply(this, arguments);
    }
  }
}

var add = function(a,b){
  return a + b;
}

var addOnce = once(add);


var firstRun = addOnce(2,4); // 6 
console.log(firstRun); 

var secondRun = addOnce(2,4); //doesnt run
console.log(secondRun);