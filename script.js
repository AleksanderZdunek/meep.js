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

meep("Hello, World!");
