/*
	Challenge 4: Calculate the sum of numbers within an array

		You can create your own array of numbers but consider trying this problem
		with a few different sets to verify your solution. Have one array with
		negative and positive numbers and another with integers and decimals.

		You could also try using arrays of different lengths. If you're feeling
		comfortable with this, try the slightly more challenging bonus challenge
		below.

		Bonus intermediate challenge: Create a function that can return the sum of
		a particular column or row number in a table.
 */

// you can log out to the console or to the output container like this:
// output.innerText = "My output";
const output = document.getElementById("output-container");
const output2 = document.getElementById("output-container2");
const input = document.getElementById("input");
const button = document.getElementById("Push");
const calc = document.getElementById("Calculate");
if (!output) throw "Output container not found.";

//@ts-check
// your code starts after this line
let nums = [];
let sum = 0;
button.addEventListener("click", (b) => {
	nums.push(Number(input.value));
	sum = 0
	output.innerText = nums;
});
calc.addEventListener("click", (b) => {
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
	}
	output2.innerText = sum;
});

//solved