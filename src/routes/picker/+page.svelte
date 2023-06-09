<script>
    import { onMount, afterUpdate } from "svelte";
    import { Heading, Input, Label, GradientButton, Button, Card } from "flowbite-svelte";
  
    let serie = "";
    let numbers = [];
    let winner = null;
    let highlightedNumber = null;
    let timer = null;
  
    const addSerie = () => {
      numbers = [...numbers, { value: serie, id: Date.now() }];
      serie = "";
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
        [randomizedNumbers[i], randomizedNumbers[j]] = [randomizedNumbers[j], randomizedNumbers[i]];
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
        <Input type="email" placeholder="Default input" size="md" bind:value={serie} />
        <GradientButton color="purpleToPink" on:click={addSerie}>Add</GradientButton>
      </Label>
    </div>
  </div>
  <div class="randomize">
    <div class="number-list">
      {#each numbers as number}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="{`number ${number === highlightedNumber ? 'highlighted' : ''}`}" id="number-{number.id}" on:click={() => deleteNumber(number.id)}>
            <Card>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{number.value}</h5>

                <Button color="red" on:click={() => deleteNumber(number.id)}>
                </Button>
              </Card>   
          <!-- <span class="delete-icon" >X</span> -->
        </div>
      {/each}
    </div>
    <button on:click={getRandomNumber}>Get a Random Number</button>
    {#if winner}
      <div class="winner">Winner: {winner}</div>
    {/if}
  </div>
  
  <style>
    /* Estilos existentes... */
    .number {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    margin: 5px;
    font-weight: bold;
    padding: 10px;
    position: relative;
    margin-right: 20px; /* Ajuste el margen derecho según sea necesario */
  }

  .delete-icon {
    width: 16px;
    height: 16px;
    color: red;
    cursor: pointer;
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
  
    .delete-icon {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 16px;
      height: 16px;
      color: red;
      cursor: pointer;
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
  