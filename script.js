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

/// Implement sleep using setTimeout()
function sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve ,ms));
}

/// Implement sleep using window.requestAnimationFrame()
function sleep2(ms)
{
    return new Promise(resolve =>
        window.requestAnimationFrame(t0 => {
            function poke(t1)
            {
                if (t1 - t0 < ms) window.requestAnimationFrame(poke)
                else resolve()
            }
            poke(t0)
        })
    )
}

//-----------------//

let cont = true
document.addEventListener('keydown', event => {
	if (event.ctrlKey && event.code === 'KeyC') {
		cont = false
		meep("Ctrl-C")
	}
})

document.addEventListener('visibilitychange', () => meep(document.visibilityState))

fun()

async function fun()
{
	while(cont)
	{
		let t0 = Date.now()
		await sleep(1000)
		let t1 = Date.now()
		meep("Δ", t1-t0, "ms")
	}
}
