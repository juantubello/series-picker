import { APIKEY } from '$env/static/private';
/** @type {import('./$types').PageLoad} */

export async function load() {
	const res = await getMovies();
	return { series: res,
	         prueba: "Listado de series" }
}

async function getMovies() {
	return new Promise(async (resolve, reject) => {
		const url = `https://api.themoviedb.org/3/tv/popular?api_key=${APIKEY}&language=es-ES&page=1`;
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