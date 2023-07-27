# 0x02. ES6 classes
An introductory project on:
- How to define a `Class`
- How to add methods to a class
- Why and how to add a `static` method to a class
- How to `extend` a class from another
- Metaprogramming and symbols

## Requirements
- The code should use the js extension
- The code will be tested using the [Jest Testing Framework](https://jestjs.io/) and the command `npm run test`
- The code will be analyzed using the linter [ESLint](https://eslint.org/) along with specific rules that we’ll provide
- All of the functions must be exported

## File Descriptions
### Mandatory

1. [0-classroom.js](./0-classroom.js) - Implement a class named `ClassRoom`:

	- Prototype: `export default class ClassRoom`
	- It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`

	**Execution Example**:
	```
	bob@dylan:~$ cat 0-main.js
	import ClassRoom from "./0-classroom.js";

	const room = new ClassRoom(10);
	console.log(room._maxStudentsSize)

	bob@dylan:~$ 
	bob@dylan:~$ npm run dev 0-main.js 
	10
	bob@dylan:~$ 
	```
