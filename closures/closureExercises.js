//1 - Write a function, nonsense that takes an input string. This function contains another function, blab which alerts string and is immediately called inside the function nonsense. blab should look like this inside of the nonsense function:
var nonsense = function(string){
    var blab = function(){
        alert(string);
    };
	blab();
}
nonsense('fdfdfd');




//2 - In your function, nonsense, change the immediate call to a setTimeout so that the call to blab comes after 2 seconds. The blab function itself should stay the same as before.
var nonsense = function(string){
    var blab = function(){
        alert(string);
    };
	setTimeout(blab, 2000); //pass blab as an argument, dont invoke it with ()
}
nonsense('fdfdfd');




//3 & 4 - Now, instead of calling blab inside of nonsense, return blab (without invoking it). Call nonsense with some string and store the returned value (the blab function) in a variable called blabLater. Call nonsense again with a different string and store the returned value in a variable called blabAgainLater.
var nonsense = function(string){
    var blab = function(){
        alert(string);
    };
    return blab;
}
var blabLater = nonsense('fdfdfd');
var blabAgainLater = nonsense('jkjkjk');
blabLater();
blabAgainLater();




//5 - Write a function with a closure. The first function should only take one argument, someone's first name, and the inner function should take one more argument, someone's last name. The inner function should console.log both the first name and the last name.
var lastNameTrier = function(fname){
    var innerFunction = function(lname) { 
        console.log(fname + ' ' + lname)
    };
    return innerFunction;
};
var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brown'); //logs 'Farmer Brown' 
var firstNameDoc = lastNameTrier('Doc'); //useful to use w/ other names




//6 - Create a storyWriter function that returns an object with two methods. One method, addWords adds a word to your story and returns the story while the other one, erase, resets the story back to an empty string. Here is an implementation:

//this is a "module" pattern
var storyWriter = function(){
	var story = '';
	return {
		addWords: function(words){
			//dont add leading space for the first words
			if (story.length !== 0){
				story = story + ' ' +  words;
			} else {
				story = words;
			}
			
			console.log(story);
		},
		erase: function(){
			story = '';
			console.log('emptied story');
		}
	};
};

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); 
farmLoveStory.erase(); //erase the story




//7 - Using the module pattern, design a toaster. Use your creativity here and think about what you want your users to be able to access on the outside of your toaster vs what you don't want them to be able to touch.
var Toaster = function(){
    //some private methods and properties
    var timer = 30000;
    var isOn = false;
    var amps = 9.0; //users cant modify this 
    return {
    	//some public methods
    	on: function(){
    		console.log('toaster turned on');
    		this.isOn = true;
    	},
    	off: function(){
    		console.log('toaster turned off');
    		this.isOn = false;
    	},
    	setTime(time){
    		console.log('you set the timer to: ' + time + ' seconds');
    		this.timer = time * 1000;
    	},
    	
    };
};

var myToaster = Toaster();
myToaster.on();
console.log(myToaster.isOn);
myToaster.off();
console.log(myToaster.isOn);
myToaster.setTime(45);
console.log(myToaster.timer);









