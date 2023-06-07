import { APIKEY } from '$env/static/private';
import { ids } from './stores.js'
/** @type {import('./$types').PageLoad} */

export async function load() {
	const res = await getMovies();
	return { series: res,
	         prueba: "Listado de series" }
}

function resetIds(){
	console.log("Id's reseteados despues de 5 minutos")
	let myValue = []
	ids.subscribe(value => {
		myValue = value;
	});
	ids.set([])
}

async function getMovies() {
	setTimeout(resetIds, 300000);
	return new Promise(async (resolve, reject) => {
		const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${APIKEY}&language=en-US&page=1`;
		console.log(url)
		try {
			const res = await fetch(url);
			// console.log(res)
			const data = await res.json()
			// console.log(data)
			// const jsonRes = JSON.stringify(res)
			resolve(data.results)
		} catch (err) {
			console.log(err)
			reject(err)
		}
	});
}