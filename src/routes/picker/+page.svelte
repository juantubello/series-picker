<script>
  import { onMount, afterUpdate } from "svelte";
  import {
    Heading,
    Input,
    Label,
    GradientButton,
    Button,
    Toast,
    Card
  } from "flowbite-svelte";

  import NewCard from "../../components/Card.svelte"

  let serie = "";
  let numbers = [];
  let winner = null;
  let highlightedNumber = null;
  let timer = null;
  let suggestions = [];
  let hCard = false;
  const addSerie = async () => {
  // Find the selected suggestion based on the entered serie value
  const selectedSuggestion = suggestions.find(
    (suggestion) => suggestion.name === serie
  );

  if (selectedSuggestion) {
    // Make an API call to retrieve series details using the selected suggestion's ID
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${selectedSuggestion.id}?api_key=051ab166a96f4ca58f123cc148b6c914&language=en-US&page=1`
    );
    const data = await response.json();
    console.log(data);

    numbers = [...numbers, { value: data.name, id: data.id, image: data.poster_path }];
    serie = "";
  }
};

  const deleteNumber = (numberId) => {
    numbers = numbers.filter((number) => number.id !== numberId);
  };

  const getRandomNumber = () => {
    if (timer) {
      clearInterval(timer);
    }

    let currentIndex = 0;
    const maxIndex = numbers.length - 1;
    let randomizedNumbers = [...numbers];

    // Shuffle the numbers array randomly
    for (let i = maxIndex; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomizedNumbers[i], randomizedNumbers[j]] = [
        randomizedNumbers[j],
        randomizedNumbers[i],
      ];
    }

    timer = setInterval(() => {
      highlightedNumber = randomizedNumbers[currentIndex];
      currentIndex++;

      if (currentIndex > maxIndex) {
        clearInterval(timer);
        winner = highlightedNumber.value;

        // Remove the highlight after 2 seconds
        setTimeout(() => {
          highlightedNumber = null;
        }, 6000);
      }
    }, 1000);
  };

  const fetchSuggestions = async () => {
    // Make an API call to retrieve suggestions based on the entered text
    // Replace the URL below with your actual API endpoint
    const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=051ab166a96f4ca58f123cc148b6c914&query=${serie}&include_adult=true&language=en-US&page=1`);
    const data = await response.json();
    console.log(data);
    suggestions = data.results.map((result) => ({
      id: result.id,
      name: result.name
    }));
  };

  onMount(() => {
    // Populate the numbers array with your desired list of numbers
    numbers = [];
  });

  afterUpdate(() => {
    // Scroll to the highlighted number if it exists
    if (highlightedNumber) {
      const element = document.getElementById(`number-${highlightedNumber.id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
</script>

<div class="search-container">
  <Heading tag="h6" class="mb-4">Add series to the randomize</Heading>
  <div class="add-series-container">
    <Label class="space-y-2">
      <Input
        type="email"
        placeholder="Default input"
        size="md"
        bind:value={serie}
        on:input={fetchSuggestions}
        list="suggestions"
      />
      <datalist id="suggestions">
        {#each suggestions as suggestion}
          <option value={suggestion.name} data-id={suggestion.id} />
        {/each}
      </datalist>
      <GradientButton color="purpleToPink" on:click={addSerie}
        >Add</GradientButton
      >
      <GradientButton color="greenToBlue" on:click={getRandomNumber}>Get a random winner</GradientButton>
    </Label>
  </div>
</div>
<div class="randomize">
  <div class="number-list">
    {#each numbers as number}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="matrix-container">
      <div
        class={`number ${number === highlightedNumber ? "highlighted" : ""}`}
        id="number-{number.id}"
      >
      <NewCard {number} on:delete={deleteNumber(number.id)}/>
      <!-- <Card img={`https://image.tmdb.org/t/p/original${number.image}`} href="/" horizontal reverse={hCard}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{number.value}</h5>
        <Button color="red" on:click={() => deleteNumber(number.id)}>
          <svg
            aria-hidden="true"
            class="w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            /></svg
          >
          <span class="sr-only" />
        </Button>
      </Card> -->
      </div>
        <!-- <span class="delete-icon" >X</span> -->
      </div>
    {/each}
  </div>
  {#if winner}
    <div class="winner">
    <Heading tag="h2">Winner: {winner}</Heading>
  </div>
  {/if}
</div>

<style>
  /* Estilos existentes... */
  .number {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid #ccc; */
    margin: 5px;
    font-weight: bold;
    padding: 10px;
    position: relative;
    margin-right: 20px; /* Ajuste el margen derecho según sea necesario */
  }
  .search-container {
    margin: auto;
    width: 30%;
    padding: 10px;
    margin-top: 6%;
  }

  .randomize {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .number-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 10px;
  }

  .highlighted {
    animation: highlight 2s;
  }

  @keyframes highlight {
    0% {
      background-color: yellow;
    }
    100% {
      background-color: inherit;
    }
  }

  button {
    padding: 10px 20px;
    margin-bottom: 10px;
  }

  .winner {
    font-weight: bold;
    margin-top: 10px;
  }

  @media (max-width: 1100px) {
    .search-container {
      width: 40%;
    }
  }

  @media (max-width: 1000px) {
    .search-container {
      width: 50%;
    }
  }

  @media (max-width: 900px) {
    .search-container {
      width: 60%;
    }
  }

  @media (max-width: 800px) {
    .search-container {
      width: 70%;
    }
  }

  @media (max-width: 700px) {
    .search-container {
      width: 70%;
    }
  }

  @media (max-width: 600px) {
    .search-container {
      width: 90%;
    }
  }
</style>
