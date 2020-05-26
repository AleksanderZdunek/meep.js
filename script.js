'use strict'
let meep = (function()
{
	let counter = 0;
	return function(...args)
	{
		console.log(...args);
		document.body.innerHTML += ++counter + ": " + (args.length ? args.reduce((acc, val) => acc + " " + val) : "") + "<br>";
	};
})();
//-----------------//
async function sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve ,ms));
}
//-----------------//

meep("Hello, World!")
let cont = true
document.addEventListener('keydown', event => {
	if (event.ctrlKey && event.code === 'KeyC') {
		cont = false
		meep("SIGINT")
	}
})
document.addEventListener('blur', _ => {
	meep("document BLUR")
})
document.addEventListener('focus', _ => {
	meep("document FOCUS")
})
window.addEventListener('blur', _ => {
	meep("window BLUR")
})
window.addEventListener('focus', _ => {
	meep("window FOCUS")
})

fun()

async function fun()
{
	while(cont)
	{
		let t0 = Date.now()
		await sleep(1000)
		let t1 = Date.now()
		meep("Δ:", t1-t0)
	}
}