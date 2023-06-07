<script>
  import {  Heading, P, Mark, Span } from 'flowbite-svelte'
  export let data;
  //   let url = `https://image.tmdb.org/t/p/w533_and_h300_bestv2${data.serieDetail.poster_path}`
</script>

<div class="serie-datail">
  <div class="img-container">
    <img class="img-serie"
      src={`https://image.tmdb.org/t/p/original${data.serieDetail.poster_path}`}
      alt={data.serieDetail.name}
    />
    <div class="provider">
        {#each data.serieDetail.networks as network}
        {#if network.index < 3}
        <img
         class="provider-img" src={`https://www.themoviedb.org/t/p/original${network.logo_path}`} alt={network.name}/>
         {/if}
      {/each}
    </div>
  </div>
  <div class="text">
    <div class="header">
      <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">{data.serieDetail.name}</Heading>
      {#each data.serieDetail.genres as genre}
        <h5 class="genre-container"><Mark markClass="px-3 rounded" color="text-white dark:bg-orange-600">{genre.name}</Mark></h5>
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
      <!-- <h5 class="details-title">Sinopsis</h5> -->
      <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">{data.serieDetail.overview}</P>
    </section>
  </div>
</div>

<style>
    .provider-img{
        min-width: 65px;
        max-width: 65px;
        max-height: 20px;
        min-height: 20px;
        margin-top: 10px;
        margin-right: 10px;
        margin-bottom: 5px;
        margin-left: 20px;
        display: inline-block;
    }
    .provider{
        border-radius: 0px 0px 10px 10px;
        background-color: #f1f5f8;
        align-items: center;
        margin-bottom: 20px;
        box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.75);
    }
    h4{
        display: inline-block;
        margin-right: 3rem;
        margin-bottom: 15px;
    }
  .info {
    display: inline-block;
    margin-right: 100px;
    margin-top: 15px;
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
    box-shadow: 0px 27px 53px 5px rgba(33,23,33,0.92);
    background-color: #213142;
    /* background-image: var(--background-image); */

    border-radius: 1rem;
  }

  .img-container {
    margin-bottom: -10px;
    margin-top: 7px;
    margin-left: 7px;
    width: 100%; /* Ajusta el ancho de la imagen según tus necesidades */
    margin-right: 30px; /* Espacio entre la imagen y el texto */
    max-width: 300px;
    min-width: 300px;
    
  }

  .img-serie {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    margin-bottom: -6px;
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

  @media (max-width: 1400px) {
    .serie-datail {
      flex-direction: column;
      align-items: center;
      box-shadow: initial; /* Quitar el border-radius */
      background-color: #101727
    }

    .img-container {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  .provider{
        border-radius: 0px 0px 10px 10px;
        background-color: #f1f5f8;
        align-items: center;
        margin-bottom: 20px;
        box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.75);
    }

</style>
