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
	
	**Execution Example**:
	```
	bob@dylan:~$ cat 0-main.js
	import { taskFirst, taskNext } from './0-constants.js';

	console.log(`${taskFirst()} ${taskNext()}`);

	bob@dylan:~$ 
	bob@dylan:~$ npm run dev 0-main.js 
	I prefer const when I can. But sometimes let is okay
	bob@dylan:~$ 
	```
2. [1-block-scoped.js](./1-block-scoped.js) - modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block

	**Execution Example**:
	```
	bob@dylan:~$ cat 1-main.js
	import taskBlock from './1-block-scoped.js';

	console.log(taskBlock(true));
	console.log(taskBlock(false));
	bob@dylan:~$
	bob@dylan:~$ npm run dev 1-main.js 
	[ false, true ]
	[ false, true ]
	bob@dylan:~$
	```
3. [2-arrow.js](./2-arrow.js) - Rewrite the following standard function to use ES6’s arrow syntax of the function `add`
	
 	**Execution Example**:
	```
	bob@dylan:~$ cat 2-main.js
	import getNeighborhoodsList from './2-arrow.js';

	const neighborhoodsList = new getNeighborhoodsList();
	const res = neighborhoodsList.addNeighborhood('Noe Valley');
	console.log(res);
	bob@dylan:~$
	bob@dylan:~$ npm run dev 2-main.js 
	[ 'SOMA', 'Union Square', 'Noe Valley' ]
	bob@dylan:~$
	```

4. [3-default-parameter.js](./3-default-parameter.js) - Condense the internals of the following function to 1 line - without changing the name of each function/variable.
	
 	**Execution Example**:
	```
	bob@dylan:~$ cat 3-main.js
	import getSumOfHoods from './3-default-parameter.js';

	console.log(getSumOfHoods(34));
	console.log(getSumOfHoods(34, 3));
	console.log(getSumOfHoods(34, 3, 4));
	bob@dylan:~$
	bob@dylan:~$ npm run dev 3-main.js 
	142
	56
	41
	bob@dylan:~$
	```
5. [4-rest-parameter.js](./4-rest-parameter.js) - Modify the following function to return the number of arguments passed to it using the rest parameter syntax
	
 	**Execution Example**:
	```
	bob@dylan:~$ cat 4-main.js
	import returnHowManyArguments from './4-rest-parameter.js';

	console.log(returnHowManyArguments("one"));
	console.log(returnHowManyArguments("one", "two", 3, "4th"));
	bob@dylan:~$
	bob@dylan:~$ npm run dev 4-main.js 
	1
	4
	bob@dylan:~$
	```
6. [5-spread-operator.js](5-spread-operator.js) - Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below

   	**Execution Example**:
	```plaintext
	bob@dylan:~$ cat 5-main.js
	import concatArrays from './5-spread-operator.js';

	console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

	bob@dylan:~$
	bob@dylan:~$ npm run dev 5-main.js 
	[
 	 'a', 'b', 'c',
  	 'd', 'H', 'e',
 	 'l', 'l', 'o'
	]
	bob@dylan:~$
 	```
7. [6-string-interpolation.js](./6-string-interpolation.js) - Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined

	**Execution Example**:
   	```plaintext
	bob@dylan:~$ cat 6-main.js
	import getSanFranciscoDescription from './6-string-interpolation.js';

	console.log(getSanFranciscoDescription());

	bob@dylan:~$
	bob@dylan:~$ npm run dev 6-main.js 
	As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868.
    As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
	bob@dylan:~$
	```
8. [7-getBudgetObject.js](./7-getBudgetObject.js) - Modify the following function’s budget `object` to simply use the keyname instead

	**Execution Example**:
	```
	bob@dylan:~$ cat 7-main.js
	import getBudgetObject from './7-getBudgetObject.js';

	console.log(getBudgetObject(400, 700, 900));

	bob@dylan:~$
	bob@dylan:~$ npm run dev 7-main.js 
	{ income: 400, gdp: 700, capita: 900 }
	bob@dylan:~$
	```
9. [8-getBudgetCurrentYear.js](./8-getBudgetCurrentYear.js) - Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the `budget` object

	**Execution Example**:
	```
	bob@dylan:~$ cat 8-main.js
	import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

	console.log(getBudgetForCurrentYear(2100, 5200, 1090));

	bob@dylan:~$
	bob@dylan:~$ npm run dev 8-main.js 
	{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
	bob@dylan:~$
	```
10. [9-getFullBudget.js](./9-getFullBudget.js) - Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object

	**Execution Example**:
	```
	bob@dylan:~$ cat 9-main.js
	import getFullBudgetObject from './9-getFullBudget.js';

	const fullBudget = getFullBudgetObject(20, 50, 10);

	console.log(fullBudget.getIncomeInDollars(fullBudget.income));
	console.log(fullBudget.getIncomeInEuros(fullBudget.income));

	bob@dylan:~$
	bob@dylan:~$ npm run dev 9-main.js 
	$20
	20 euros
	bob@dylan:~$
	```
11. [10-loops.js](./10-loops.js) - Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator
	
	
	**Execution Example**:
        ```
	bob@dylan:~$ cat 10-main.js
	import appendToEachArrayValue from './10-loops.js';

	console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

	bob@dylan:~$
	bob@dylan:~$ npm run dev 10-main.js 
	[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
	bob@dylan:~$
	```
12. [11-createEmployeesObject.js](./11-createEmployeesObject.js) - Write a function named `createEmployeesObject` that will receive two arguments:
	- `departmentName` (String)
	- `employees` (Array of Strings)
	```
	export default function createEmployeesObject(departmentName, employees) {

	}
	```
	The function should return an object with the following format:
	```
	{
     		$departmentName: [
          	$employees,
     		],
	}
	```

	**Execution Example**:
	```
	bob@dylan:~$ cat 11-main.js
	import createEmployeesObject from './11-createEmployeesObject.js';

	console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

	bob@dylan:~$
	bob@dylan:~$ npm run dev 11-main.js 
	{ Software: [ 'Bob', 'Sylvie' ] }
	bob@dylan:~$
	```
13. [getNumberOfDepartments](./getNumberOfDepartments) - Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.

	- `createReportObject` should return an object containing the key `allEmployees` and a method property called `getNumberOfDepartments.`
	- `allEmployees` is a key that maps to an object containing the department name and a list of all the employees in that department.
	- The method property receives `employeesList` and returns the number of departments.

	**Execution Example**:
	```
	bob@dylan:~$ cat 12-main.js
	import createEmployeesObject from './11-createEmployeesObject.js';
	import createReportObject from './12-createReportObject.js';

	const employees = {
	    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
	    ...createEmployeesObject('marketing', ['Sylvie'])
	};      

	const report = createReportObject(employees);
	console.log(report.allEmployees);
	console.log(report.getNumberOfDepartments(report.allEmployees));

	bob@dylan:~$
	bob@dylan:~$ npm run dev 12-main.js 
	{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
	2
	bob@dylan:~$
	```
### Advanced
