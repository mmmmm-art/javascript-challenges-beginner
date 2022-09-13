/*
	Challenge 9: Return a Boolean if a number is divisible by 10

			Here, you'll create a function that'll give you a "true" or "false"
			Boolean as its output. The inputted number should only return a "true" if
			it's divisible by 10. Otherwise, your program should return a "false"
			answer.
 */

// you can log out to the console or to the output container like this:
// output.innerText = "My output";
const output = document.getElementById("output-container");
const output2 = document.getElementById("output-container2");
const input = document.getElementById("input");
const input2 = document.getElementById("input2");
const calc = document.getElementById("Calculate");
if (!output) throw "Output container not found.";

//@ts-check
// your code starts after this line

calc.addEventListener("click", (b) => {
	let num = input.value / input2.value;
	if (num % 1 != 0) {
		output2.innerText = num;
		output.innerText = "Not Divisable";
	} else if (num % 1 === 0) {
		output2.innerText = num;
		output.innerText = `${input.value} is divisable by ${input2.value}`;
	}
});

//Solved
