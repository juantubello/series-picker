<script>
  export let data;
</script>

<div class="serie-datail">
    <div class="img-container">
        <img
        src={`https://image.tmdb.org/t/p/original${data.serieDetail.poster_path}`}
        alt={data.serieDetail.name}/>
    </div>
    <div class="text">
        <h1>{data.serieDetail.name}</h1>
        <h4>Temporadas {data.serieDetail.number_of_seasons}</h4>
        <p><span>
            En emisión: {data.serieDetail.in_production}
        </span></p>
        <p>{data.serieDetail.overview}</p>
    </div>
</div>

<style>
    h1{
        padding: 1rem 0rem 2rem;
    }
    p{
        padding: 1rem 0rem;
    }
    .img-container{
        width: 40%;
        
    }
    img{
        width: 100%;
        border-radius: 1rem;
    }
    .text{
        float: left
    }
    .serie-datail{
        display: inline-block;
        margin: 2rem 20%;
    }
    span{
        font-weight: bold;
    }
</style>