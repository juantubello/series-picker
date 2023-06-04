<script>
  export let series;
  import SerieCard from "./SerieCard.svelte";
</script>

<h3>Series</h3>
<div class="series">
  {#each series as serie}
    <SerieCard {serie} />
  {/each}
</div>

<style>
  h3 {
    padding: 0 1rem;
    color: white
  }
  .series {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-row-gap: 2rem;
    color: white
  }
</style>
