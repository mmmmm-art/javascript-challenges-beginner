/*
	Challenge 7: Create a function that filters out negative numbers

			In this challenge, you'll have a function that takes an array as an input
			and returns an array. But if all goes according to plan, it'll remove the
			negative numbers. This is another example of a task that'll be useful when
			combing through data and looking for clever ways to eliminate "bad data."
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
button.addEventListener("click", (b) => {
	nums.push(Number(input.value));
	output.innerText = nums;
});

calc.addEventListener("click", (b) => {
	nums = nums.filter(n => n > 0);
	output2.innerText = nums;
});

//solved