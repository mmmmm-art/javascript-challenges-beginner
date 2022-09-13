/*
	Challenge 10: Return the number of vowels in a string

			Create a function that'll return an integer of the number of vowels found
			in a string. This is a great way to practice determining the features of a
			dataset. If you use JavaScript later in your career, you'll be
			well-prepared to determine what datasets (or just strings) consist of. If
			you feel like an extra challenge, consider returning the number of
			characters.
 */

// you can log out to the console or to the output container like this:
// output.innerText = "My output";
const output = document.getElementById("output-container");
const input = document.getElementById("input");
const button = document.getElementById("Push");
if (!output) throw "Output container not found.";

//@ts-check
// your code starts after this line

button.addEventListener("click", (b) => {
	let as = input.value.split("a").length - 1;
	let es = input.value.split("e").length - 1;
	let is = input.value.split("i").length - 1;
	let os = input.value.split("o").length - 1;
	let us = input.value.split("u").length - 1;

	output.innerText = `a:${as}, e:${es}, i:${is}, o:${os}, u:${us}`
	
});

//solved

