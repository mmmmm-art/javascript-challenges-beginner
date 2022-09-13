/*
	Challenge 6: Sort an array from lowest to highest

			You could create a function for this solution as well, but be sure to try
			your program with varying lengths and types of arrays. Try one with all
			integers, another with negative numbers, and another with decimals.

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
	nums.sort(function (a, b) {  return a - b;  });
	output2.innerText = nums;
});

//solved