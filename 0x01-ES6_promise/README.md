# 0x01. ES6 Promises
An introductory project on:

- Promises (how, why, and what)
- How to use the `then`, `resolve`, `catch` methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an `async` function

## Requirements
- The code should use the js extension
- The code will be tested using the [Jest Testing Framework](https://jestjs.io/) and the command `npm run test`
- The code will be analyzed using the linter [ESLint](https://eslint.org/) along with specific rules that we’ll provide
- All of the functions must be exported

## File Descriptions
### Mandatory

1. [0-promise.js](./0-promise.js) - Return a Promise using this prototype function `getResponseFromAPI()`

	**Execution Example**:
	```
	bob@dylan:~$ cat 0-main.js
	import getResponseFromAPI from "./0-promise.js";

	const response = getResponseFromAPI();
	console.log(response instanceof Promise);

	bob@dylan:~$ 
	bob@dylan:~$ npm run dev 0-main.js 
	true
	bob@dylan:~$
	```
