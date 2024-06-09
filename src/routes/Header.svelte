<script lang="ts">
  import logo from "$lib/assets/images/logo.png";
  import "../app.css";
  let activeTab: string = "";
  let showMenu: boolean = false;
  import { writable } from "svelte/store";
  export let isOpen = writable(false); // isOpen as a writable store
</script>

<header class="bg-black fixed top-0 left-0 right-0 z-50">
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
        on:click={() => (activeTab = "home")}
        class="p-1.5 sm:p-1.5 md:p-auto text-xs lg:text-sm md:text-sm sm:text-xs font-bold px-2 lg:px-3 md:px-3 sm:px-2 py-2 hover:bg-white hover:text-gray-600 rounded-md transition-colors duration-500 after:bg-white active:bg-white active:text-gray-600"
        class:bg-white={activeTab === "home"}
        class:text-gray-800={activeTab === "home"}
        class:text-white={activeTab !== "home"}>Home</a
      >
      <a
        href="/about"
        on:click={() => (activeTab = "about")}
        class=" p-1.5 sm:p-1.5 md:p-auto text-xs lg:text-sm md:text-sm sm:text-xs font-bold px-2 lg:px-3 md:px-3 sm:px-2 py-2 selection:bg-white hover:bg-white rounded-md hover:text-gray-600 transition-colors duration-500 active:bg-white active:text-gray-600"
        class:bg-white={activeTab === "about"}
        class:text-gray-800={activeTab === "about"}
        class:text-white={activeTab !== "about"}>About</a
      >
      <a
        href="/news"
        on:click={() => (activeTab = "news")}
        class=" p-1.5 sm:p-1.5 md:p-auto text-xs lg:text-sm md:text-sm sm:text-xs font-bold px-2 lg:px-3 md:px-3 sm:px-2 py-2 selection:bg-white hover:bg-white rounded-md hover:text-gray-600 transition-colors duration-500 active:bg-white active:text-gray-600"
        class:bg-white={activeTab === "news"}
        class:text-gray-800={activeTab === "news"}
        class:text-white={activeTab !== "news"}>Updates</a
      >
    </nav>

    <a
      href="/form"
      on:click={() => isOpen.update((value) => !value)}
      class="inline-block px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:text-white"
    >
      Join Us
    </a>

    <div class="block md:hidden">
      <button
        on:click={() => (showMenu = !showMenu)}
        class="p-2 rounded-md text-white"
      >
        ☰
      </button>
    </div>
  </div>
  {#if showMenu}
    <div class="md:hidden">
      <nav class="flex flex-col space-y-1 mb-2">
        <a
          href="/"
          on:click={() => {
            activeTab = "home";
            showMenu = false;
          }}
          class="p-2 text-sm font-bold hover:bg-white hover:text-gray-600 rounded-md transition-colors duration-500"
          class:bg-white={activeTab === "home"}
          class:text-gray-800={activeTab === "home"}
          class:text-white={activeTab !== "home"}>Home</a
        >
        <a
          href="/about"
          on:click={() => {
            activeTab = "about";
            showMenu = false;
          }}
          class="p-2 text-sm font-bold hover:bg-white hover:text-gray-600 rounded-md transition-colors duration-500"
          class:bg-white={activeTab === "about"}
          class:text-gray-800={activeTab === "about"}
          class:text-white={activeTab !== "about"}>About</a
        >
        <a
          href="/news"
          on:click={() => {
            activeTab = "news";
            showMenu = false;
          }}
          class="p-2 text-sm font-bold hover:bg-white hover:text-gray-600 rounded-md transition-colors duration-500"
          class:bg-white={activeTab === "news"}
          class:text-gray-800={activeTab === "news"}
          class:text-white={activeTab !== "news"}>News</a
        >
      </nav>
    </div>
  {/if}
</header>

<style>
  /* Optional: Adjust padding for larger screens */
  @media (min-width: 768px) {
    header {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
</style>
