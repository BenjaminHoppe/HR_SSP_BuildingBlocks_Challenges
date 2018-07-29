// TESTING: Assert Equal

function assertEqual(expected, actual, testName) {
    return (expected === actual) ?
    `${testName} PASSED - ${expected} = ${actual}.` :
    `${testName} FAILED - Expected ${expected} but got ${actual}.`
}

// Write a function called “isOldEnoughToDrink”.
// Given a number, in this case an age, “isOldEnoughToDrink” returns whether a person of this given age is old enough to legally drink in the United States.
// Notes:
// * The legal drinking age in the United States is 21.

function isOldEnoughToDrink(age) {
    return age >= 21;
}

assertEqual(false, isOldEnoughToDrink(20), 'isOldEnoughToDrink Fails < 21');
assertEqual(true, isOldEnoughToDrink(21), 'isOldEnoughToDrink Passes 21');
assertEqual(true, isOldEnoughToDrink(24), 'isOldEnoughToDrink Passes > 21');
assertEqual(false, isOldEnoughToDrink(-24), 'isOldEnoughToDrink handles negative numbers');




// Write a function called “isOldEnoughToDrive”.
// Given a number, in this case an age, “isOldEnoughToDrive” returns whether a person of this given age is old enough to legally drive in the United States.
// Notes:
// * The legal driving age in the United States is 16.

function isOldEnoughToDrive(age) {
    return age >= 16;
}

assertEqual(false, isOldEnoughToDrive(15), 'isOldEnoughToDrink Fails < 16');
assertEqual(true, isOldEnoughToDrive(16), 'isOldEnoughToDrink Passes 16');
assertEqual(true, isOldEnoughToDrive(21), 'isOldEnoughToDrink Passes > 16');
assertEqual(false, isOldEnoughToDrive(-24), 'isOldEnoughToDrink handles negative numbers');


// Write a function called “isOldEnoughToVote”.
// Given a number, in this case an age, ‘isOldEnoughToVote’ returns whether a person of this given age is old enough to legally vote in the United States.
// Notes:
// * The legal voting age in the United States is 18.

function isOldEnoughToVote(age) {
    return age >= 18;
}

assertEqual(false, isOldEnoughToDrive(15), 'isOldEnoughToDrink Fails < 18');
assertEqual(true, isOldEnoughToDrive(18), 'isOldEnoughToDrink Passes 18');
assertEqual(true, isOldEnoughToDrive(21), 'isOldEnoughToDrink Passes > 18');
assertEqual(false, isOldEnoughToDrive(-24), 'isOldEnoughToDrink handles negative numbers');

// Write a function called “isOldEnoughToDrinkAndDrive”.
// Given a number, in this case an age, “isOldEnoughToDrinkAndDrive” returns whether a person of this given age is old enough to legally drink and drive in the United States.
// Notes:
// * The legal drinking age in the United States is 21.
// * It is always illegal to drink and drive in the United States.

// Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. 
// Notes:
// * If there is no property at the given key, it should return undefined.

function getProperty(obj, key) {
    return obj[key];
}

// Write a function called “addProperty”.
// Given an object, and a key, “addProperty” sets a new property on the given object with a value of true.

function addProperty (obj, key) {
    obj[key] = true;
}

// Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.

function removeProperty(obj, key) {
    obj[key] = undefined;
}
// or
function removeProperty(obj, key) {
    delete obj[key];
}

// Write a function called “checkAge”. 
// Given a person’s name and age, “checkAge” returns one of two messages:
// “Go home, {insert_name_here}!”, if they are younger than 21.
// “Welcome, {insert_name_here}!”, if they are 21 or older.
// Naturally, replace “{insert_name_here}” with the given name. :)

function checkAge(name, age) {
    return (age < 21) ?
    `Go home, ${name}!` :
    `Welcome, ${name}`
}

assertEqual('Go home, Malcolm!', checkAge(Malcolm, 15), 'checkAge Fails under 21')
assertEqual('Welcome, Hans!', checkAge(Hans, 21), 'checkAge Fails passes 21')
assertEqual('Welcome, Gertrude!', checkAge(Gertrude, 52), 'checkAge Fails passes 21')


// Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

function getFullName(first, last) {
    return `${first} ${last}`;
}

assertEqual('Antonio Vivaldi', getFullName('Antonio', 'Vivaldi'), 'getFullName passes correctly')
assertEqual('Maurice Ravel', getFullName('Claude', 'Ravel'), 'getFullName fails correctly')


// Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.

function getLengthOfWord(word) {
    return word.length;
}

assertEqual(8, getLengthOfWord('Computer'), 'getLengthOfWord passes correctly')
assertEqual(2, getLengthOfWord('Milan'), 'getLengthOfWord fails correctly')


// Write a function called “isGreaterThan10”.
// Given a number, “isGreaterThan10” returns whether the given number is greater than 10.

function isGreaterThan10(num) {
    return (num > 10);
}

assertEqual(true, isGreaterThan10(23), 'isGreaterThan10 passes > 10')
assertEqual(false, isGreaterThan10(10), 'isGreaterThan10 fails 10')
assertEqual(false, isGreaterThan10(9), 'isGreaterThan10 passes < 10')
assertEqual(false, isGreaterThan10(-54), 'isGreaterThan10 handles negative numbers')

// Write a function called “isLessThan30”.
// Given a number, “isLessThan30” returns whether the given number is less than 30.

function isLessThan30(num) {
    return (num < 30);
}

assertEqual(true, isGreaterThan10(1234), 'isGreaterThan10 passes > 13')
assertEqual(false, isGreaterThan10(13), 'isGreaterThan10 fails 30')
assertEqual(false, isGreaterThan10(9), 'isGreaterThan10 passes < 30')
assertEqual(false, isGreaterThan10(-54), 'isGreaterThan10 handles negative numbers')

// Write a function called “equalsTen”.
// Given a number, “equalsTen” returns whether or not the given number is 10.

function equalsTen(num) {
    return (num === 10);
}
assertEqual(false, isGreaterThan10(23), 'isGreaterThan10 fails > 10')
assertEqual(true, isGreaterThan10(10), 'isGreaterThan10 passes 10')
assertEqual(false, isGreaterThan10(9), 'isGreaterThan10 fails < 10')
assertEqual(false, isGreaterThan10(-10), 'isGreaterThan10 handles negative numbers')

// Write a function called “isLessThan”.
// Given 2 numbers, “isLessThan” returns whether num2 is less than num1.

function isLessThan(num1, num2) {
    return (num2 < num1);
}

assertEqual(true, isLessThan(54, 32), 'isLessThan passes correctly')
assertEqual(false, isLessThan(31, 55), 'isLessThan fails correctly')
assertEqual(false, isLessThan(-88, 55), 'isLessThan handles negative numbers')
assertEqual(true, isLessThan(-88, -99), 'isLessThan handles negative numbers')

// Write a function called “isGreaterThan”.
// Given 2 numbers, “isGreaterThan” returns whether num2 is greater than num1.

// Write a function called “isEqualTo”.
// Given 2 numbers, “isEqualTo” returns whether num2 is equal to num1.

// Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.

function isEven(num) {
    return (num % 2 === 0);
}

assertEqual(true, isEven(56), 'isEven passes corredctly')
assertEqual(false, isEven(5), 'isEven fails correctly')

// Write a function called “isOdd”.
// Given a number, “isOdd” returns whether the given number is odd.

// Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.

function isSameLength(word1, word2) {
    return (word1.length === word2.length);
}

assertEqual(true, isSameLength('get', 'the'), 'isSameLength passes correctly')
assertEqual(false, isSameLength('thanks', 'industrious'), 'isSameLegnth false correctly')

// Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

function areBothOdd(num1, num2) {
    return ((num1 % 2 !== 0) && (num2 % 2 !== 0));
}

assertEqual(false, areBothOdd(4, 5), 'areBothOdd fails if one number is odd');
assertEqual(false, areBothOdd(3, 6), 'areBothOdd fails if one number is odd');
assertEqual(true, areBothOdd(3, 6), 'areBothOdd passes if both odd');

// Write a function called “isEitherEven”.
// Given two numbers, “isEitherEven” returns whether or not either one of the given numbers is even.

function isEitherEven(num1, num2) {
    return ((num1 % 2 === 0) || (num2 % 2 === 0));
}

assertEqual(true, isEitherEven(2, 55), 'isEitherEven passes if one is even');
assertEqual(true, isEitherEven(3, 16), 'isEitherEven passes if one is even');
assertEqual(true, isEitherEven(8, 16), 'isEitherEven passes if both even');
assertEqual(false, isEitherEven(3, 77), 'isEitherEven passes if both odd');

// Write a function called “isOddLength”.
// Given a word, “isOddLength” returns whether the length of the given word is odd.

// Write a function called “isEvenLength”.
// Given a word, “isEvenLength” returns whether the length of the word is even.

// Write a function called “isEvenAndGreaterThanTen”.
// Given a number, “isEvenAndGreaterThanTen” returns whether it is both even and greater than 10.

// Write a function called “average”.
// Given two numbers, “average” returns their average.

function average(num1, num2) {
    return (num1 + num2) / 2;
}

// Write a function called “computeAreaOfATriangle”.
// Given the base and height of a triangle, “computeAreaOfATriangle” returns its area.

function computeAreaOfATriangle(base, height) {
    return (base * height / 2);
}

// Write a function called “cube”.
// Given a number, “cube” returns the cube of that number.

function cube(num) {
    return Math.pow(num, 3);
}

// Write a function called “square”.
// Given a number, “square” should return the square of the given number.

// Write a function called “computeAverageLengthOfWords”.
// Given two words, “computeAverageLengthOfWords” returns the average of their lengths.

function computeAverageLengthOfWords(word1, word2) {
    return (word1.length + word2.length) / 2;
}

// Write a function called “addFullNameProperty”.
// Given an object that has a “firstName” property and a “lastName” property, “addFullNameProperty” adds a “fullName” property whose value is a string with the first name and last name separated by a space.

function addFullNameProperty(obj) {
    obj[fullName] = `${obj[firstName]} ${obj[lastName]}`;
}

// Write a function called “addObjectProperty”.
// Given two objects and a key, “addObjectProperty” sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object.

function addObjectProperty(obj1, obj2, key) {
    obj1[key] = obj2;
}

// Write a function called “isPersonOldEnoughToDrinkAndDrive”.
// Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrinkAndDrive” returns whether the given person is old enough to legally drink and drive in the United States.
// Notes:
// * The legal drinking age in the United States is 21.
// * The legal driving age in the United States is 16.
// * It is always illegal to drink and drive in the United States.

// Write a function called “isPersonOldEnoughToDrive”.
// Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrive” returns whether the given person is old enough to drive.
// Notes:
// * The legal driving age in the United States is 16.

function isPersonOldEnoughToDrive(obj) {
    return (obj[age] >=16)
}

// Write a function called “isPersonOldEnoughToVote”.
// Given a “person” object, that contains an “age” property, “isPersonOldEnoughToVote” returns whether the given person is old enough to vote.
// Notes:
// * The legal voting age in the United States is 18.

function isPersonOldEnoughToVote(obj) {
    return (obj[age] >= 18);
}

// Write a function called “isPersonOldEnoughToDrink”.
// Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrink” returns whether the given person is old enough to drink.
// Notes:
// * The legal drinking age in the United States is 21.

function isPersonOldEnoughToDrink(obj) {
    return (obj[age] >= 18);
}

// Write a function called “addArrayProperty”.
// Given an object, a key, and an array, “addArrayProperty” sets a new property on the object at the given key, with its value set to the given array.

function addArrayProperty(obj, key, arr) {
    obj[key] = arr;
}

// Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array.
// Notes:
// * If the array has a length of 0, it should return ‘undefined’.

function getNthElement(arr, int) {
    return arr[int];
}

// Write a function called “getFirstElement”.
// Given an array, “getFirstElement” returns the first element of the given array.
// Notes:
// * If the given array has a length of 0, it should return undefined.

function getFirstElement(arr) {
    return arr[0];
}

assertEqual('dog', fetFirstElement('dog', 'cat', 'elephant'), 'getFirstElement handles strings')
assertEqual(3, fetFirstElement(3, 7, 34, 7654), 'getFirstElement handles numbers')
assertEqual(true, fetFirstElement(true, false, false, true, false), 'getFirstElement handles booleans')
assertEqual([3, 6, 4, 5], fetFirstElement([3, 6, 4, 5], [4, 6, 4, 3]), 'getFirstElement handles arrays')

// Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array.
// Notes:
// * If the given array has a length of 0, it should return ‘undefined’.

function getLastElement(arr) {
    return arr[arr.length -1];
}
// or
function getLastElement(arr) {
    return arr.pop(0);
}

// Write a function called “addToFront”.
// Given an array and an element, “addToFront” adds the given element to the front of the given array, and returns the given array.
// Notes: 
// * It should be the SAME array, not a new array.

function addToFront(arr, element) {
    arr.unshift(element);
    return arr;
}

// Write a function called “addToBack”.
// Given an array and an element, “addToBack” returns the given array with the given element added to the end.
// Note: It should be the SAME array, not a new array.

function addToBack(arr, element) {
    arr.push(element);
    return arr;
}

// Write a function called “computeAreaOfARectangle”.
// Given the length and width of a rectangle, “computeAreaOfARectangle” returns its area.

// Write a function called “computePerimeterOfARectangle”.
// Given a length and a width describing a rectangle, “computePerimeterOfARectangle” returns its perimter.

// Write a function called “computePerimeterOfATriangle”.
// Given 3 sides describing a triangle, “computePerimeterOfATriangle” returns its perimter.

// Write a function called “computeTripledAreaOfARectangle”.
// Given a length and width of a rectangle, “computeTripledAreaOfARectangle” returns the rectangle’s area, multiplied by 3.

// Write a function called “computePerimeterOfACircle”.
// Given the radius of a circle, “computePerimeterOfACircle” returns its perimeter.

function computePerimeterOfACircle(radius) {
    return (2 * Math.PI * radius);
}

// Write a function called “computeAreaOfACircle”.
// Given the radius of a circle, “computeAreaOfACircle” returns its area.

function computeAreaOfACircle(radius) {
    return (Math.PI * Math.pow(radius, 2))
}

// Write a function called “computePower”.
// Given a number and an exponent, “computePower” returns the given number, raised to the given exponent.

function computePower(num, exp) {
    return Math.pow(num, exp);
}

// Write a function called “computeSquareRoot”.
// Given a number, “computeSquareRoot” returns its square root.

function computeSquareRoot(num) {
    return Math.pow(num, 0.5);
}

assertEqual(2, computeSquareRoot(4), "Square Root of 4 should be 2")
assertEqual(4, computeSquareRoot(16), "Square Root of 16 should be 4")


// Write a function called “doubleSquareRootOf”.
// Given a number, “doubleSquareRootOf” returns double its square root.

// Write a function called “getLengthOfThreeWords”.
// Given 3 words, “getLengthOfThreeWords” returns the sum of their lengths.

// Write a function called “joinArrays”.
// Given two arrays, “joinArrays” returns an array with the elements of “arr1” in order, followed by the elements in “arr2”.

function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

// Write a function called “getElementsAfter”.
// Given an array and an index, “getElementsAfter” returns a new array with all the elements after (but not including) the given index.

function getElementsAfter(arr, index) {
    return arr.slice(index+1);
}
//or
function getElementsAfter(arr, index) {
    return arr.splice(0, index+1);
}

assertEqual([5, 6, 7, 8], getElementsAfter([0, 1, 2, 3, 4, 5, 6, 7, 8], 5), 'getElementsAfter passes correctly')

// Write a function called “getElementsUpTo”.
// Given an array and a index, “getElementsUpTo”, returns an array with all the elements up until, but not including, the element at the given index.
// Notes:
// * In order to do this you should be familiar with the ‘slice’ method.

function getElementsUpTo(arr, index) {
    return arr.slice(0, index+1);
}
// or
function getElementsUpTo(arr, index) {
    return arr.splice(0);
}

assertEqual([0, 1, 2, 3], getElementsAfter([0, 1, 2, 3, 4, 5, 6, 7, 8], 5), 'getElementsAfter passes correctly')

// Write a function called “getAllElementsButFirst”.
// Given an array, “getAllElementsButFirst” returns an array with all the elements but the first.

function getAllElementsButFirst(arr) {
    return arr.shift();
}

// Write a function called “getAllElementsButLast”.
// Given an array, “getAllElementsButLast” returns an array with all the elements but the last.

function getAllElementsButLast(arr) {
    return arr.pop();
}

// Write a function called “removeFromFront”.
// Given an array, “removeFromFront” returns the given array with its first element removed.
// Notes:
// * You should be familiar with the method ‘shift’.

// Write a function called “removeFromBackOfNew”.
// Given an array, “removeFromBackOfNew” returns a new array containing all but the last element of the given array.
// Notes:
// * You should be familiar with the ‘slice’ method.

// Write a function called “removeFromFrontOfNew”.
// Given an array, “removeFromFrontOfNew” returns a new array containing all but the first element of the given array.
// Notes:
// * You should be familiar with the ‘slice’ method.

// Write a function called “countCharacter”.
// Given a string input and a character, “countCharacter” returns the number of occurences of a given character in the given string.

function countCharacter(str, letter) {
    var letterCount = 0;
    for (i = 0 ; i < str.length ; i++) {
        if (str[i] === letter) {
            letterCount ++
        }
    }
    return letterCount;
}

// Write a function called “getAllLetters”.
// Given a word, “getAllLetters” returns an array containing every character in the word.
// Notes:
// * If given an empty string, it should return an empty array.

// Write a function called “getAllWords”.
// Given a sentence, “getAllWords” returns an array containing every word in the sentence.
// Notes:
// * If given an empty string, it should return an empty array.

// Write a function called “countWords”.
// Given a string, “countWords” returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.
// Notes:
// * If given an empty string, it should return an empty object.

// Write a function called “removeFromBack”.
// Given an array, “removeFromBack” returns the given array with its last element removed.
// Notes:
// * You should be familiar with the method ‘pop’.

// Write a function called “or”.
// Given 2 boolean expressions, “or” returns true or false, corresponding to the ‘||’ operator.
// Notes:
// * Do not use the || operator.
// * Use ! and && operators instead.

// Write a function called “isEitherEvenOrAreBoth7”.
// Given two numbers, ‘isEitherEvenOrAreBoth7’ returns whether at least one of them is even, or, both of them are 7.

// Write a function called “isEitherEvenAndLessThan9”.
// Given two numbers, ‘isEitherEvenAndLessThan9’ returns whether at least one of them is even, and, both of them are less than 9.

// Write a function called “extend”.
// Given two objects, “extend” adds properties from the 2nd object to the 1st object.
// Notes:
// * Add any keys that are not in the 1st object.
// * If the 1st object already has a given key, ignore it (do not overwrite the property value).
// * Do not modify the 2nd object at all.

// Write a function called “removeNumbersLargerThan”.
// Given a number and an object, “removeNumbersLargerThan” removes any properties whose values are numbers greater than the given number.

// Write a function called “removeNumbersLessThan”.
// Given a number and an object, “removeNumbersLessThan” removes any properties whose values are numbers less than the given number.

// Write a function called “removeStringValuesLongerThan”.
// Given an number and an object, “removeStringValuesLongerThan” removes any properties on the given object whose values are strings longer than the given number.

// Write a function called “removeEvenValues”.
// Given an object, “removeEvenValues” removes any properties whose values are even numbers.
// Do this in place and return the original object, do not construct a cloned object that omits the properties.

// Write a function called “countNumberOfKeys”.
// Given an object, “countNumberOfKeys” returns how many properties the given object has.

// Write a function called “removeOddValues”.
// Given an object, “removeOddValues” removes any properties whose values are odd numbers.

// Write a function called “removeArrayValues”.
// Given an object, “removeArrayValues” removes any properties whose values are arrays.

// Write a function called “removeNumberValues”.
// Given an object, “removeNumberValues” removes any properties whose values are numbers.

// Write a function called “removeStringValues”.
// Given an object, “removeStringValues” removes any properties on the given object whose values are strings.

// Write a function called “convertDoubleSpaceToSingle”.
// Given a string, “convertDoubleSpaceToSingle” returns the passed in string, with all the double spaces converted to single spaces.

// Write a function called “joinThreeArrays”.
// Given three arrays, “joinThreeArrays” returns an array with the elements of “arr1” in order followed by the elements in “arr2” in order followed by the elements of “arr3” in order.

// Write a function called “addToFrontOfNew”.
// Given an array and an element, “addToFrontOfNew” returns a new array containing all the elements of the given array, with the given element added to the front.
// Important: It should be a NEW array instance, not the original array instance.

// Write a function called “addToBackOfNew”.
// Given an array and an element, “addToBackOfNew” returns a clone of the given array, with the given element added to the end.
// Important: It should be a NEW array instance, not the original array instance.

// Write a function called “getAllElementsButNth”.
// Given an array and an index, “getAllElementsButNth” returns an array with all the elements but the nth.

// Write a function called “areValidCredentials”.
// Given a name and a password, “areValidCredentials”, returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.

// Write a function called “getIndexOf”.
// Given a character and a string, “getIndexOf” returns the first position of the given character in the given string.
// Notes:
// * Strings are zero indexed, meaning the first character in a string is at position 0.
// * When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
// * If the character does not exist in the string, it should return -1.
// * Do not use the native indexOf function in your implementation.

// Write a function called “findMinLengthOfThreeWords”.
// Given 3 words, “findMinLengthOfThreeWords” returns the length of the shortest word.

// Write a function called “findMaxLengthOfThreeWords”.
// Given 3 words, “findMaxLengthOfThreeWords” returns the length of the longest word.

// Write a function called “getElementsThatEqual10AtProperty”.
// Given an object and a key, “getElementsThatEqual10AtProperty” returns an array containing all the elements of the array located at the given key that are equal to ten.
// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements that are equal to 10, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

// Write a function called “select”.
// Given an array and an object, “select” returns a new object whose properties are those in the given object AND whose keys are present in the given array.
// Notes:
// * If keys are present in the given array, but are not in the given object, it should ignore them. 
// * It does not modify the passed in object.

// Write a function called “getElementsLessThan100AtProperty”.
// Given an object and a key, “getElementsLessThan100AtProperty” returns an array containing all the elements of the array located at the given key that are less than 100.
// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements less than 100, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

// Write a function called “countAllCharacters”.
// Given a string, “countAllCharacters” returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.
// Notes:
// * If given an empty string, countAllCharacters should return an empty object.

// Write a function called “getElementsGreaterThan10AtProperty”.
// Given an object and a key, “getElementsGreaterThan10AtProperty” returns an array containing the elements within the array, located at the given key, that are greater than 10.
// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements greater than 10, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

// Write a function called “removeElement”.
// Given an array of elements, and a “discarder” parameter, “removeElement” returns an array containing the items in the given array that do not match the “discarder” parameter.
// Notes:
// * If all the elements match, it should return an empty array.
// * If an empty array is passed in, it should return an empty array.

// Write a function called “getFirstElementOfProperty”.
// Given an object and a key, “getFirstElementOfProperty” returns the first element of the array located at the given key.
// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

// Write a function called “getNthElementOfProperty”.
// Given an object and a key, “getNthElementOfProperty” returns the nth element of an array located at the given key.
// Notes:
// * If the array is empty, it should return undefined.
// * If n is out of range, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

// Write a function called “getLastElementOfProperty”.
// Given an object and a key, “getLastElementOfProperty” returns the last element of an array located at the given key.
// Notes:
// * If the array is empty, it should return undefined.
// * if the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

// Write a function called “keep”.
// Given an array and a keeper element, “keep” returns an array containing the items that match the given keeper element.
// Notes:
// * If no elements match, “keep” should return an empty array.

// Write a function called “getOddLengthWordsAtProperty”.
// Given an object and a key, “getOddLengthWordsAtProperty” returns an array containing all the odd length word elements of the array located at the given key.
// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no odd length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the given key, it should return an empty array.

// Write a function called “computeAverageOfNumbers”.
// Given an array of numbers, “computeAverageOfNumbers” returns their average.
// Notes:
// * If given an empty array, it should return 0.

// Write a function called “getAverageOfElementsAtProperty”.
// Given an object and a key, “getAverageOfElementsAtProperty” returns the average of all the elements in the array located at the given key.
// Notes:
// * If the array at the given key is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the given key, it should return 0.

// Write a function called “getEvenLengthWordsAtProperty”.
// Given an object and a key, “getEvenLengthWordsAtProperty” returns an array containing all the even length word elements of the array located at the given key.
// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no even length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

// Write a function called “filterOddLengthWords”.
// Given an array of string, “filterOddLengthWords” returns an array containing only the elements of the given array whose lengths are odd numbers.

// Write a function called “getSquaredElementsAtProperty”.
// Given an object and a key, “getSquaredElementsAtProperty” returns an array containing all the squared elements of the array located at the given key.
// Notes:
// * If the array is empty, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

// Write a function called “getOddElementsAtProperty”.
// Given an object and a key, “getOddElementsAtProperty” returns an array containing all the odd elements of the array located at the given key.
// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no odd elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

// Write a function called “getEvenElementsAtProperty”.
// Given an object and a key, “getEvenElementsAtProperty” returns an array containing all the even elements of the array located at the given key.
// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no even elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the given key, it should return an empty array.

// Write a function called “filterEvenLengthWords”.
// Given an array of strings, “filterEvenLengthWords” returns an array containing only the elements of the given array whose length is an even number.

// Write a function called “getLengthOfLongestElement”.
// Given an array, “getLengthOfLongestElement” returns the length of the longest string in the given array.
// Notes:
// * It should return 0 if the array is empty.

// Write a function called “getSmallestElementAtProperty”.
// Given an object and a key, “getSmallestElementAtProperty” returns the smallest element in the array located at the given key.
// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return undefined. 
// * If there is no property at the key, it should return undefined.

// Write a function called “getLargestElementAtProperty”.
// Given an object and a key, “getLargestElementAtProperty” returns the largest element in the array located at the given key.
// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

// Write a function called “getAllButLastElementOfProperty”.
// Given an object and a key, “getAllButLastElementOfProperty” returns an array containing all but the last element of the array located at the given key.
// Notes:
// * If the array is empty, it should return an empty array.
// * If the property at the given key is not an array, it return an empty array.
// * If there is no property at the key, it should return an empty array.

// 111
