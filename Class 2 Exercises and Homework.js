// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
// Myself object
const koteshObject = {
  firstName: 'Kotesh',
  lastName: 'Boda',
  'favorite food': 'Mediterranean',
  
  bestFriend: {
    firstName: 'Brad',
    lastName: 'Pitt',
    'favorite food': 'Mexican',  
  },
};

// 2. console.log best friend's firstName and your favorite food
console.log(`${koteshObject.firstName} best friend's first name is: `, koteshObject.bestFriend.firstName);
console.log(`${koteshObject.firstName} favorite food is: `, koteshObject['favorite food']);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const ticTacToeArray = [['-', 'O', '-'], ['-', 'X', 'O'], ['X', '-', 'X']];

// 4. After the array is created, 'O' claims the top right square.
// Update the top right square value.
ticTacToeArray[0][2] = 'O';

// 5. Log the grid to the console.
console.log('Tic Tac Toe Array first row: ', ticTacToeArray[0]);
console.log('Tic Tac Toe Array second row: ', ticTacToeArray[1]);
console.log('Tic Tac Toe Array thrid row: ', ticTacToeArray[2]);

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
const myEmail = 'test@test.com';
const regExToMatchEmail = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';

// Regular RegExp
const regex = new RegExp(regExToMatchEmail);
const result  = regex.test(myEmail);
console.log('Result of regex pattern match to email is: ', result);

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
const assignmentDateObj = new Date(assignmentDate);
console.log('Assignment date is: ', assignmentDateObj);

// Get assignment date value from the assignment date object
const assignmentDateValue = assignmentDateObj.getDate();

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
const dueDateValue = assignmentDateValue + 7;
const dueDate = assignmentDateObj.setDate(dueDateValue);
// Create due date object with the new due date
const dueDateObj = new Date(dueDate);
console.log('Due date a week from the assignment date is: ', dueDateObj);

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

// Get Month Index & Year from due date for log message
const dueDateYear = dueDateObj.getFullYear();

// Calculate padded due date & month with leading zero for log message
const dueDateWithPadding = dueDateValue.toString().padStart(2, 0);

// Calculate due date month
const dueMonthFromDueDate = dueDateObj.getMonth();
// increase month index by 1, since month index start at 0
const dueMonthWithPadding = (dueMonthFromDueDate + 1).toString().padStart(2, 0);

// 10. log this value using console.log

// SOLUTION 1 - TO PRINT TWO DIGIT MONTH, DATE WITHOUT USING String.padStart() METHOD
// Most of the Date objects return single digit index for month (ex: 1 for February month)
// Since we need two digit month displayed in the output (Ex: YYYY-MM-DD),
// Use toISOString() method, and then use substring() to extract first 10 characters of the date string
const yyyymmdd = dueDateObj.toISOString().substring(0, 10);
  
console.log(`<time datetime="${yyyymmdd}">${months[dueMonthFromDueDate]} ${dueDateWithPadding}, ${dueDateYear}</time>`);

// SOLUTION 2 - TO PRINT TWO DIGIT MONTH, DATE USING String.padStart() METHOD
console.log(`<time datetime="${dueDateYear}-${dueMonthWithPadding}-${dueDateWithPadding}">${months[dueMonthFromDueDate]} ${dueDateWithPadding}, ${dueDateYear}</time>`);
