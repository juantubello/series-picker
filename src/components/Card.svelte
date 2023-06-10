<script>
    import { createEventDispatcher } from "svelte";
    import { Heading, P, Badge } from 'flowbite-svelte';
    export let number;
      
    const dispatch = createEventDispatcher();
  
    const deleteNumber = () => {
      dispatch("delete", number.id);
    };
  </script>
  
  <div class="serie-detail">
    <div class="delete-icon-container">
      <div class="delete-icon-circle">
        <button class="delete-icon" on:click={deleteNumber}>X</button>
      </div>
    </div>
    <div class="img-container">
      <img
        class="img-serie"
        src={`https://image.tmdb.org/t/p/original${number.image}`}
        alt={number.value}
      />
    </div>
    <div class="text">
      <div class="header">
        <P class="mb-3 text-sm text-center text-gray-500 dark:text-gray-400 break-words">{number.value}</P>
      </div>
    </div>
  </div>
  
  <style>
    .delete-icon-container {
      position: absolute;
      top: 5px;
      right: 6px;
    }
  
    .delete-icon-circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ffcccc; /* Cambia el color de fondo según tus preferencias */
    }
  
    .delete-icon {
      font-size: 12px;
      color: red;
      cursor: pointer;
      transition: transform 0.3s;
    }
    
    .delete-icon:hover {
      transform: scale(1.2);
    }
  
    .serie-detail {
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin: 1rem auto;
      max-width: 300px; /* Adjust the width as desired */
      box-shadow: 0px 27px 53px 5px rgba(33, 23, 33, 0.92);
      background-color: #213142;
      border-radius: 1rem;
      max-width: 280px; /* Adjust the width as desired */
      min-width: 280px;
      max-height: 150px;
      min-height: 150px;
    }
  
    .img-container {
      margin: 1rem;
      flex: 0 0 auto;
      width: 100px;
      max-width: 80px;
    }
  
    .img-serie {
      width: 100%;
      border-radius: 10px;
      max-width: 100px;
      max-height: 110px;
    }
  
    .header {
      margin: 1rem;
      margin-bottom: 1rem;
      padding-right: 10px;
    }
  
    @media (max-width: 1400px) {
      .serie-detail {
        flex-direction: column;
        align-items: center;
        box-shadow: none;
        /* background-color: #101727; */
        max-width: 200px; /* Adjust the width as desired */
        min-width: 200px;
      }
  
      .img-container {
        margin-right: 10px;
        margin-bottom: 1rem;
        max-width: 80px;
      }
    }
  </style>
  