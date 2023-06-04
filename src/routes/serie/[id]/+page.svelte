<script>
  export let data;
  //   let url = `https://image.tmdb.org/t/p/w533_and_h300_bestv2${data.serieDetail.poster_path}`
</script>

<div class="serie-datail">
  <div class="img-container">
    <img
      src={`https://image.tmdb.org/t/p/original${data.serieDetail.poster_path}`}
      alt={data.serieDetail.name}
    />
  </div>
  <div class="text">
    <div class="header">
      <h1 class="title">{data.serieDetail.name}</h1>
      {#each data.serieDetail.genres as genre}
        <h5 class="genre-container">{genre.name}</h5>
      {/each}
    </div>
    <div class="info">
      <h4>
        Temporadas: {data.serieDetail.number_of_seasons}
      </h4>
      <h4>
        En emisión: {data.serieDetail.in_production}
      </h4>
    </div>
    <section class="details">
      <h5 class="details-title">Sinopsis</h5>
      <p>{data.serieDetail.overview}</p>
    </section>
  </div>
</div>

<style>
    h4{
        display: inline-block;
        margin-right: 3rem;
    }
  .info {
    display: inline-block;
    margin-right: 100px;
  }
  .details-title {
    /* margin: 0; */
  }
  .title {
    margin: 0;
  }
  .serie-datail {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem auto;
    max-width: 50%;
    box-shadow: 10px -1px 78px 6px rgba(0, 0, 0, 0.75);
    background-color: #213142;
    /* background-image: var(--background-image); */

    border-radius: 1rem;
  }

  .img-container {
    width: 100%; /* Ajusta el ancho de la imagen según tus necesidades */
    margin-right: 30px; /* Espacio entre la imagen y el texto */
    max-width: 300px;
    min-width: 300px;
    box-shadow: 0px 0px 10px 2px rgba(78, 79, 82, 1);
    border-radius: 1rem;
  }

  img {
    width: 100%;
    border-radius: 1rem;
  }

  .text {
    flex-grow: 1; /* Permite que el texto ocupe el espacio restante */
    color: white;
    margin: 0;
  }

  .genre-container {
    display: inline-block;
    margin-right: 10px;
    /* padding: 1rem 0rem 2rem; */
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: white;
  }

  span {
    font-weight: bold;
    color: white;
  }

  @media (max-width: 1150px) {
    .serie-datail {
      flex-direction: column;
      align-items: center;
      box-shadow: initial; /* Quitar el border-radius */
    }

    .img-container {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
</style>
