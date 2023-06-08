<script>
  import Series from "../components/Series.svelte";
  import { Heading, P, Span } from "flowbite-svelte";
  export let data;
</script>

<div class="header">
  <Heading tag="h3" class="mb-4"><Span gradient>Trending</Span>🔥</Heading>
</div>
<section>
  <Series series={data.series} />
</section>

<style>
  :global(body) {
    background-color: #101727;
  }
  .header{
    padding-left: 5%;
  }
</style>
