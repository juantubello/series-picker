<script>
    import { onMount, afterUpdate } from "svelte";
    import { Search, GradientButton, Heading, Listgroup } from "flowbite-svelte";
  
    let numbers = [];
    let winner = null;
    let highlightedNumber = null;
    let timer = null;
  
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
          winner = highlightedNumber;
  
          // Remove the highlight after 2 seconds
          setTimeout(() => {
            highlightedNumber = null;
          }, 6000);
        }
      }, 1000);
    };
  
    onMount(() => {
      // Populate the numbers array with your desired list of numbers
      numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    });
  
    afterUpdate(() => {
      // Scroll to the highlighted number if it exists
      if (highlightedNumber) {
        const element = document.getElementById(`number-${highlightedNumber}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  </script>
  
  <div class="search-container">
    <Heading tag="h6" class="mb-4">Add series to the randomize</Heading>
    <Search>
      <GradientButton color="pinkToOrange">Search</GradientButton>
    </Search>
  </div>
  <div class="randomize">
    <div class="number-list">
      {#each numbers as number}
        <div class="{`number ${number === highlightedNumber ? 'highlighted' : ''}`}" id="number-{number}">
          {number}
        </div>
      {/each}
    </div>
    <button on:click={getRandomNumber}>Get a Random Number</button>
    {#if winner}
      <div class="winner">Winner: {winner}</div>
    {/if}
  </div>
  
  <style>
    .search-container {
      margin: auto;
      width: 30%;
      padding: 10px;
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
    
    .number {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      border: 1px solid #ccc;
      margin: 5px;
      font-weight: bold;
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
  