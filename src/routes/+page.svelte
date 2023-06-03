<script>
  import Series from "../components/Series.svelte";
  export let data;
</script>

<h1>{data.prueba}</h1>
<section>
    <Series series={data.series}/>
</section>