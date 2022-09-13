/*
	Challenge 5: Create a function that reverses an array

			This challenge is particularly helpful if you're planning to become a Data
			Scientist. Manipulating data is a significant part of the role, and
			building the foundations now will help you later down the road when you're
			working with large databases. Start small here and work your way up. Begin
			with an array of 5 numbers, and then try your program with a larger array
			to verify its success.

			Start small here and work your way up. Begin with an array of 5 numbers,
			and then try your program with a larger array to verify its success.
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
	nums.reverse()
	output2.innerText = nums;
});

//solved
