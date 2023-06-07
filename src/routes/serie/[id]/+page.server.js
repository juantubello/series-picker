import { APIKEY } from '$env/static/private';
import { ids } from '../../stores.js'

/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
    const id = params.id;
    const serieDetail = await getSerieDetail(id)
    return { serieDetail: serieDetail }
}

function findMySerie(serie, id) {
    return serie.id === id
  }

async function getSerieDetail(serieId) {

    let series = []

	ids.subscribe(value => {
		series = value;
	});

    return new Promise(async (resolve, reject) => {

        let serie = series.find(serie => findMySerie(serie, serieId));
        if(serie !== undefined){
            console.log(`Ya tenia la data de ${serie.data.name} !`)
            resolve(serie.data)
        }

        const url = `https://api.themoviedb.org/3/tv/${serieId}?api_key=${APIKEY}&language=en-USS&page=1`;
        try {
            const res = await fetch(url);
            const data = await res.json()

            let index = 0

            data.networks.forEach((obj) => {
              obj["index"] = index++;
            });
            const newSerie = {id: serieId, data: data}
            series.push(newSerie)
            ids.set(series)
            resolve(data)
        } catch (err) {
            reject(err)
        }
    });
}