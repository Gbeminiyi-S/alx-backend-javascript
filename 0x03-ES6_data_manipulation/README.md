# 0x03. ES6 data manipulation
An introductory project on:
- How to use map, filter and reduce on arrays
- Typed arrays
- The Set, Map, and Weak link data structures

## Requirements
- The code should use the js extension
- The code will be tested using the [Jest Testing Framework](https://jestjs.io/) and the command `npm run test`
- The code will be analyzed using the linter [ESLint](https://eslint.org/) along with specific rules that we’ll provide
- All of the functions must be exported

## File Descriptions
### Mandatory
1. [0-get_list_students.js](./0-get_list_students.js) - Create a function named `getListStudents` that returns an array of objects.
	- Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).
	- The array contains the following students in order:
		- `Guillaume`, id: `1`, in `San Francisco`
		- `James`, id: `2`, in `Columbia`
		- `Serena`, id: `5`, in `San Francisco`

	**Execution Example**:
	```
	bob@dylan:~$ cat 0-main.js
	import getListStudents from "./0-get_list_students.js";

	console.log(getListStudents());

	bob@dylan:~$ 
	bob@dylan:~$ npm run dev 0-main.js 
	[
	  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
	  { id: 2, firstName: 'James', location: 'Columbia' },
	  { id: 5, firstName: 'Serena', location: 'San Francisco' }
	]
	bob@dylan:~$ 
	```
2. [1-get_list_student_ids.js](./1-get_list_student_ids.js) - Create a function `getListStudentIds` that returns an array of ids from a list of object.
	- This function is taking one argument which is an array of objects - and this array is the same format as `getListStudents` from the previous task.
	- If the argument is not an array, the function is returning an empty array.

	**Execution Example**:
	```
	bob@dylan:~$ cat 1-main.js
	import getListStudentIds from "./1-get_list_student_ids.js";
	import getListStudents from "./0-get_list_students.js";

	console.log(getListStudentIds("hello"));
	console.log(getListStudentIds(getListStudents()));

	bob@dylan:~$ 
	bob@dylan:~$ npm run dev 1-main.js 
	[]
	[ 1, 2, 5 ]
	bob@dylan:~$ 
	```
3. [2-get_students_by_loc.js](./2-get_students_by_loc.js) - Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.
	- It should accept a list of students (from `getListStudents`) and a `city` (string) as parameters.

   **Execution Example**:
   	```
	import getListStudents from "./0-get_list_students.js";
	import getStudentsByLocation from "./2-get_students_by_loc.js";

	const students = getListStudents();

	console.log(getStudentsByLocation(students, 'San Francisco'));

	bob@dylan:~$ 
	bob@dylan:~$ npm run dev 2-main.js 
	[
	  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
	  { id: 5, firstName: 'Serena', location: 'San Francisco' }
	]
	```
4. [3-get_ids_sum.js](./3-get_ids_sum.js) - Create a function `getStudentIdsSum` that returns the sum of all the student ids.
	- It should accept a list of students (from `getListStudents`) as a parameter.
	
   **Execution Example**:
	```
	bob@dylan:~$ cat 3-main.js
	import getListStudents from "./0-get_list_students.js";
	import getStudentIdsSum from "./3-get_ids_sum.js";

	const students = getListStudents();
	const value = getStudentIdsSum(students);

	console.log(value);

	bob@dylan:~$ 
	bob@dylan:~$ npm run dev 3-main.js 
	8
	bob@dylan:~$ 
	```
### Advanced
