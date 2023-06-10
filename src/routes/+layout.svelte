<script>
  import "../app.css";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";

  let home = true;
  let picker = false;
  let history = false;

  function setNavBarItemsFalse() {
    home = false;
    picker = false;
    history = false;
  }

  function handleNavBarItems(page) {
    setNavBarItemsFalse();
    if (page === "home") {
      home = true;
      return;
    }
    if (page === "picker") {
      picker = true;
      return;
    }
    if (page === "history") {
      history = true;
      return;
    }
  }
</script>

<!-- Main navigation container -->
<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white zoom-in-hover"
    >
      Que mierda ver 🤔
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={home} on:click={() => handleNavBarItems("home")}>
      <div class="zoom-in-hover">Home</div>
    </NavLi>
    <NavLi
      href="/picker"
      class="zoom-in-hover"
      active={picker}
      on:click={() => handleNavBarItems("picker")}
    >
      <div class="zoom-in-hover">Picker</div>
    </NavLi>
    <NavLi
      href="/history"
      class="zoom-in-hover"
      active={history}
      on:click={() => handleNavBarItems("history")}
    >
      <div class="zoom-in-hover">History</div>
    </NavLi>
  </NavUl>
</Navbar>

<slot />

<style>
  .zoom-in-hover {
    transition: transform 0.3s ease-in-out;
  }
  .zoom-in-hover:hover {
    transform: scale(1.2);
  }
</style>
