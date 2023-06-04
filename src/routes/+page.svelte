<script>
  import Series from "../components/Series.svelte";
  export let data;
</script>

<h1>{data.prueba}</h1>
<section>
    <Series series={data.series}/>
</section>

<style>
  :global(body) {
		background-color: #213142;
  }
</style>