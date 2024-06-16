<script lang="ts">
  import logo from "$lib/assets/images/logo.png";
  import { isActiveTab } from "$lib/store";
  import { onMount } from "svelte";

  let navbar: HTMLElement | null;

  const updateNavbarBackgroundColor = () => {
    if (navbar) {
      if ($isActiveTab === "home" || $isActiveTab === "news") {
        navbar.style.backgroundColor = window.scrollY > 500 ? "#f4f4f3" : "";
        // navbar.style.border = window.scrollY > 500 ? "black" : "blue";
      } else if ($isActiveTab === "about") {
        navbar.style.backgroundColor = "#f4f4f3";
      } else {
        navbar.style.backgroundColor = "#f4f4f3";
      }
    }
  };

  onMount(() => {
    window.addEventListener("scroll", updateNavbarBackgroundColor);
    isActiveTab.subscribe(() => updateNavbarBackgroundColor());

    // Clean up the event listener when the component is destroyed
    return () => {
      window.removeEventListener("scroll", updateNavbarBackgroundColor);
    };
  });

  let showMenu: boolean = false;
</script>

<header
  class="bg-black h-11 fixed top-0 left-0 right-0 z-50 text-lg"
  style="font-family: 'Open Sans'"
>
  <div class="flex items-center justify-between px-4 mb-10">
    <nav
      class="bg-black text-white md:flex space-x-1 sm:space-x-1 lg:space-x-4 md:space-x-4"
    >
      <h3>Contact</h3>
    </nav>
  </div>
</header>

<div class="top-20">
  <header
    id="navbar"
    bind:this={navbar}
    class="fixed top-10 left-0 right-0 z-50 text-lg "
    style="font-family: 'Open Sans'"
  >
    <div class="flex items-center justify-between px-4 py-3">
      <div class="flex items-center">
        <img
          src={logo}
          alt="Logo"
          class="h-10 w-3/4 sm:w-3/4 lg:w-auto md:w-auto mr-5 rounded-md"
        />
      </div>
      <nav
        class="hidden md:flex space-x-1 sm:space-x-1 lg:space-x-4 md:space-x-4"
      >
        <a
          href="/"
          on:click={() => ($isActiveTab = "home")}
          class="p-1.5 sm:p-1.5 md:p-auto text-xs lg:text-lg md:text-sm sm:text-xs font-bold px-2 lg:px-3 md:px-3 sm:px-2 py-2 hover:bg-white hover:text-gray-600 rounded-md transition-colors duration-500 after:bg-white active:bg-white active:text-gray-600"
          class:bg-white={$isActiveTab === "home"}
          class:text-green-600={$isActiveTab === "home"}
          class:text-black={$isActiveTab !== "home"}>Home</a
        >
        <a
          href="/about"
          on:click={() => ($isActiveTab = "about")}
          class=" p-1.5 sm:p-1.5 md:p-auto text-xs lg:text-lg md:text-sm sm:text-xs font-bold px-2 lg:px-3 md:px-3 sm:px-2 py-2 selection:bg-white hover:bg-white rounded-md hover:text-gray-600 transition-colors duration-500 active:bg-white active:text-gray-600"
          class:bg-white={$isActiveTab === "about"}
          class:text-green-600={$isActiveTab === "about"}
          class:text-black={$isActiveTab !== "about"}>About</a
        >
        <a
          href="/news"
          on:click={() => ($isActiveTab = "news")}
          class=" p-1.5 sm:p-1.5 md:p-auto text-xs lg:text-lg md:text-sm sm:text-xs font-bold px-2 lg:px-3 md:px-3 sm:px-2 py-2 selection:bg-white hover:bg-white rounded-md hover:text-gray-600 transition-colors duration-500 active:bg-white active:text-gray-600"
          class:bg-white={$isActiveTab === "news"}
          class:text-green-600={$isActiveTab === "news"}
          class:text-black={$isActiveTab !== "news"}>Media Center</a
        >
      </nav>

      <div class="block md:hidden">
        <button
          on:click={() => (showMenu = !showMenu)}
          class="p-2 rounded-md text-black"
        >
          ☰
        </button>
      </div>
    </div>

    {#if showMenu}
      <div class="md:hidden">
        <nav class="flex flex-col space-y-1 mb-2 mx-5 text-black bg-[#f4f4f3]">
          <a
            href="/"
            on:click={() => {
              $isActiveTab = "home";
              showMenu = false;
            }}
            class="p-2 text-sm font-bold hover:bg-white hover:text-gray-600 rounded-md transition-colors duration-500"
            class:bg-white={$isActiveTab === "home"}
            class:text-gray-800={$isActiveTab === "home"}
            class:text-black={$isActiveTab !== "home"}>Home</a
          >
          <a
            href="/about"
            on:click={() => {
              $isActiveTab = "about";
              showMenu = false;
            }}
            class="p-2 text-sm font-bold hover:bg-white hover:text-gray-600 rounded-md transition-colors duration-500"
            class:bg-white={$isActiveTab === "about"}
            class:text-gray-800={$isActiveTab === "about"}
            class:text-black={$isActiveTab !== "about"}>About</a
          >
          <a
            href="/news"
            on:click={() => {
              $isActiveTab = "news";
              showMenu = false;
            }}
            class="p-2 text-sm font-bold hover:bg-white hover:text-gray-600 rounded-md transition-colors duration-500"
            class:bg-white={$isActiveTab === "news"}
            class:text-gray-800={$isActiveTab === "news"}
            class:text-black={$isActiveTab !== "news"}>Media Center</a
          >
        </nav>
      </div>
    {/if}
  </header>
</div>

<style>
  /* Optional: Adjust padding for larger screens */
  @media (min-width: 768px) {
    header {
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 0%;
      color: #e3e6e2;
    }
  }
  #navbar {
    text-align: center;
    margin: auto auto;
    position: -webkit-sticky;
    position: fixed;
    left: 0%;
    padding: 10px;
    width: 100%;
    color:#f4f4f3
  }
</style>
