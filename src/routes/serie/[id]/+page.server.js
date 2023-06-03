import { APIKEY } from '$env/static/private';
/** @type {import('./$types').PageLoad} */

export async function load({ url }) {

    const path = url.pathname
    const regex = new RegExp(/[^0-9]/gi);
    const id = path.replace(regex, '');
    const serieDetail = await getSerieDetail(id)
    return { serieDetail: serieDetail }
}
// console.log(serieDetail)
// const res = await getMovies();
// return { series: res,
//          prueba: "Listado de series" }


async function getSerieDetail(serieId) {
    return new Promise(async (resolve, reject) => {
        const url = `https://api.themoviedb.org/3/tv/${serieId}?api_key=${APIKEY}&language=es-ES&page=1`;
        console.log(url)
        try {
            const res = await fetch(url);
            const data = await res.json()
            resolve(data)
        } catch (err) {
            console.log(err)
            reject(err)
        }
    });
}