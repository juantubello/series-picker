<script>
  export let serie;
</script>
<div class="serie-card">
  <a href={`/serie/${serie.id}`}>
    <img
      src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
      alt={serie.name}
    />
  </a>
  <div class="description">
    <h2>{serie.name}</h2>
    <p>{serie.first_air_date}</p>
  </div>
</div>

<style>
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1rem;
    color: white
  }
  h2 {
    font-size: 0.9rem;
    color: white
  }
  .description {
    height: 5vh;
    color: white
  }
  p {
    font-size: 0.6rem;
    color: white
  }
  .serie-card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
    color: white
  }
    .serie-card:hover img {
      transform: scale(1.1); /* Zoom in effect on hover */
    transition: transform 0.3s ease; /* Add a smooth transition */
    box-shadow: 0px 0px 36px -12px rgba(255,255,255,1);
  }
</style>
