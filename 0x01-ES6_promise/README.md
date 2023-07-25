# 0x01. ES6 Promises
An introductory project on:

- Promises (how, why, and what)
- How to use the `then`, `resolve`, `catch` methods
- How to use every method of the Promise object
- `Throw` / `Try`
- The `await` operator
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

2. [1-promise.js](./1-promise.js) - Using the prototype below, return a `promise`. The parameter is a `boolean`.
	```
	getFullResponseFromAPI(success)
	```
	When the argument is:
		- `true`
			- resolve the promise by passing an object with 2 attributes:
				- `status`: `200`
				- `body`: `'Success'`
		- `false`
			- reject the promise with an error object with the message `The fake API is not working currently`

	**Execution Example**:
   	```
	bob@dylan:~$ cat 1-main.js
	import getFullResponseFromAPI from './1-promise';

	console.log(getFullResponseFromAPI(true));
	console.log(getFullResponseFromAPI(false));

	bob@dylan:~$ 
	bob@dylan:~$ npm run dev 1-main.js 
	Promise { { status: 200, body: 'Success' } }
	Promise {
	  <rejected> Error: The fake API is not working currently
	    ...
	    ...
	bob@dylan:~$ 
	```
3. [2-then.js](./2-then.js) - Using the function prototype below
	```
	function `handleResponseFromAPI(promise)`
	```
	Append three handlers to the function:
		- When the Promise resolves, return an object with the following attributes
			- `status`: `200`
			- `body`: `success`
		- When the Promise rejects, return an empty `Error` object
		- For every resolution, log `Got a response from the API` to the console

	**Execution Example**:
 	```
	bob@dylan:~$ cat 2-main.js
	import handleResponseFromAPI from "./2-then";

	const promise = Promise.resolve();
	handleResponseFromAPI(promise);

	bob@dylan:~$ 
	bob@dylan:~$ npm run dev 2-main.js 
	Got a response from the API
	bob@dylan:~$ 
	```

4. [3-all.js](./3-all.js) - In this file, import `uploadPhoto` and `createUser` from `utils.js`
	- Knowing that the functions in [utils.js](testFiles/utils.js) return promises, use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console.
	```
	function handleProfileSignup()
 	```
	- In the event of an error, log `Signup system offline` to the console

	**Execution Example**:
 	```
	bob@dylan:~$ cat 3-main.js
	import handleProfileSignup from "./3-all";
	
	handleProfileSignup();
	
	bob@dylan:~$ 
	bob@dylan:~$ npm run dev 3-main.js 
	photo-profile-1 Guillaume Salva
	bob@dylan:~$ 	
 	```
