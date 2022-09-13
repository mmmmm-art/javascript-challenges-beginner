/*
	Challenge 8: Remove the spaces found in a string

			Yet another way to clean up data is to remove any errors or unnecessary
			spaces. This function will take in a string and then return it with all
			spaces removed. Think about if you were tasked with cleaning up customer
			data at your job. You could scale this function to clean up specific
			fields of data, such as zip codes.
 */

// you can log out to the console or to the output container like this:
// output.innerText = "My output";
const output = document.getElementById("output-container");
const output2 = document.getElementById("output-container2");
const input = document.getElementById("input");
const button = document.getElementById("Push");
const calc = document.getElementById("why?");
if (!output) throw "Output container not found.";

//@ts-check
// your code starts after this line

button.addEventListener("click", (b) => {
	output.innerText = String(input.value);
});

calc.addEventListener("click", (b) => {
	output2.innerText =  output.innerText.replace(' ', '');
});

//Solved
