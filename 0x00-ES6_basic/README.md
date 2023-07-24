# 0x00. ES6 Basics
An introductory project on:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements
- The code should use the js extension
- The code will be tested using the [Jest Testing Framework](https://jestjs.io/)
- The code will be analyzed using the linter [ESLint](https://eslint.org/) along with specific rules that we’ll provide
- All of the functions must be exported

## File Descriptions
### Mandatory

1. [0-constants.js](./0-constants.js) - Modify
	- function `taskFirst` to instantiate variables using `const`
	- function `taskNext` to instantiate variables using `let`

	```
	export function taskFirst() {
	  var task = 'I prefer const when I can.';
	  return task;
	}
	
	export function getLast() {
	  return ' is okay';
	}
	
	export function taskNext() {
	  var combination = 'But sometimes let';
	  combination += getLast();
	
	  return combination;
	}
	```
2. [1-block-scoped.js](./1-block-scoped.js) - modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block
	```
	export default function taskBlock(trueOrFalse) {
  	  var task = false;
	  var task2 = true;

	  if (trueOrFalse) {
	    var task = true;
	    var task2 = false;
	  }

	  return [task, task2];
	}
	```

### Advanced
