import { APIKEY } from '$env/static/private';
/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
    const id = params.id;
    const serieDetail = await getSerieDetail(id)
    return { serieDetail: serieDetail }
}

async function getSerieDetail(serieId) {
    return new Promise(async (resolve, reject) => {
        const url = `https://api.themoviedb.org/3/tv/${serieId}?api_key=${APIKEY}&language=en-USS&page=1`;
        try {
            const res = await fetch(url);
            const data = await res.json()
            resolve(data)
        } catch (err) {
            reject(err)
        }
    });
}