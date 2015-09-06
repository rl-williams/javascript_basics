/* JAVASCRIPT BASIC ALGORITHM SCRIPTING */


// string reverse
function reverseString(str) {
	var strArray = str.split('').reverse();
	return strArray.join('');
}



// factorialize a number
function factorialize(num) {
	var f = num - 1;
	while (f > 0) {
		num *= f;
		f--;
	}
	return num;
}



// check for palindromes
function palindrome(str) {
  
  // remove punctuation and spaces, lower case
  str = str.replace(/[.,-\/#!$%\^&\*;:{}=\-_'~()?]/g,''); 
  str = str.replace(/\s+/g,'');
  str = str.toLowerCase();
  
  var strArray = str.split('');
  var halfLength = Math.floor(str.length / 2);
  
  for (var i = 0; i < halfLength; i++) {
    if (strArray[i] !== strArray[str.length - 1 - i])
      return false;
  }
  
  return true;
}



// find the length of the longest word in a string
function findLongestWord(str) {
  
  var strArray = str.split(' ');
  var longestL = 0;
  
  for (var i = 0; i < strArray.length; i++) {
    var currentL = strArray[i].length;
    if (currentL > longestL) longestL = currentL;
  }
  
  return longestL;
}



// title case a sentence
function titleCase(str) {
  
  var strArray = str.split(' ');

  for (var i = 0; i < strArray.length; i++) {
    var word = strArray[i].toLowerCase();
    var firstLetter = word.charAt(0).toUpperCase();
    strArray[i] = firstLetter + word.slice(1);
  }

  return strArray.join(' ');
}



// return largest numbers in arrays
function largestOfMany(arr) {
  
  for (var i = 0; i < arr.length; i++) {

    var largestOfOne = 0;

    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestOfOne)
        largestOfOne = arr[i][j];
    }

    arr[i] = largestOfOne;
  }
  
  return arr;
}



// check if a string ends with the given target string
function end(str, target) {
  
  //remove punctuation, spaces, and capitalization
  str = str.replace(/[.,-\/#!$%\^&\*;:{}=\-_'~()?]/g,''); 
  str = str.replace(/\s+/g,'');
  str = str.toLowerCase();
  target = target.toLowerCase();

  //create target-sized substring from end of str
  var substring = str.substr(str.length - target.length, target.length);
  
  //compare
  if (substring === target) return true;
  return false;
}



// repeat a given string n times
function repeat(str, num) {
  
  if (num < 1) return "";
  if (num == 1) return str;

  var orig = str;
  for (var i = 1; i < num; i++)
  	str += orig;
  
  return str;
}



// truncate a string if it is longer than the given length
function truncate(str, num) {
  
  if (str.length <= num) return str;
  return str.slice(0, num - 3) + "...";
}



// splits an array into groups the length of size and returns them as a multidimensional array
function chunk(arr, size) {
  
  // number of arrays
  var numArrays = Math.ceil(arr.length / size);
  
  //make an array of arrays
  var newArr = [];
  for (var i = 0; i < numArrays; i++) {
    var thisArr = [];
    newArr.push(thisArr);  
  }
  
  // push each element of arr to the appropriate array
  for (var i = 0; i < arr.length; i++) {
    var n = Math.floor(i / size);
    newArr[n].push(arr[i]);
  }
  
  return newArr;
}



// return the remaining elements of an array after chopping off n elements from the head
function slasher(arr, howMany) {

  return arr.splice(howMany, arr.length-howMany);
  
}



// determine if the string in the first element contains all the letters of the string in the second
function mutation(arr) {
  
  var strArr1 = arr[0].toLowerCase().split('');
  var strArr2 = arr[1].toLowerCase().split('');
  
  for (var i = 0; i < strArr2.length; i++)
    if (strArr1.indexOf(strArr2[i]) < 0) return false;
  
  return true;
}



// remove all falsey values from an array
function bouncer(arr) {
  return arr.filter(isTruey);
}

function isTruey(element) {
  return Boolean(element);
}



// looks through an array of objects and returns an array of all objects that have matching property and value pairs
function where(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  
  for (var i = 0; i < collection.length; i++) {
    
    var hasProperties = true;
    for (var k = 0; k < keys.length; k++) {
    
      if (!collection[i].hasOwnProperty(keys[k]) ||
          collection[i][keys[k]] != source[keys[k]]) {
        hasProperties = false;
        break;
      }
    }
    
    if (hasProperties) arr.push(collection[i]);
  }
  
  return arr;
}



//remove all elements from the initial array that are of the same value as the arguments
function destroyer(arr) {
    
  for (var i = 1; i < arguments.length; i++)
    arr = arr.filter(notEqual, arguments[i]);
    
  return arr;
}

function notEqual(element) {
  return (element != this);
}



// return the lowest index at which a value should be inserted into a sorted array
function where(arr, num) {
  
  arr = arr.sort();
  
  for (var i = 0; i < arr.length; i++)
    if (num <= arr[i]) return i;
  
  return arr.length;
}


