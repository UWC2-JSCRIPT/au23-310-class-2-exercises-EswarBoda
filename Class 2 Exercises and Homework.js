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
// Update that value.
ticTacToeArray[0][1] = '-';
ticTacToeArray[0][2] = 'O';

// 5. Log the grid to the console.
console.log('\nTic Tac Toe Array first row: ', ticTacToeArray[0]);
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
console.log('\nResult of regex pattern match to email is: ', result);

// OPTIONAL - Global RegExp
const globalRegEx = new RegExp(regExToMatchEmail, 'g');
console.log('\nGlobal regex pattern match to email is: ', globalRegEx.test(myEmail));
console.log('Last Index of Global regex pattern match to email is: ', globalRegEx.lastIndex);
console.log('Pattern match after last index is: ', globalRegEx.test(myEmail));

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
const assignmentDateObj = new Date(assignmentDate);
console.log('\nAssignment date is: ', assignmentDateObj);

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

// Get year for log message
dueDateYear = dueDateObj.getFullYear();

// 10. log this value using console.log
// Print due date log message for every month in the months array
console.log('\nDue dates for all months of the year are: ');
let monthIndex = 0 // month index

for (let month of months) {
  // Most of the Date objects return single digit index for month (ex: 1 for February month)
  // Since we need two digit month displayed in the output (Ex: YYYY-MM-DD),
  // Use toISOString() method, and then use substring() to extract first 10 characters of the date string
  dueDateObj.setMonth(monthIndex);
  const yyyymmdd = dueDateObj.toISOString().substring(0, 10);
  
  console.log(`<time datetime="${yyyymmdd}">${month} ${dueDateValue}, ${dueDateYear}</time>`);
  
  // Increase the month index to print log message for the next month
  monthIndex++;
}
