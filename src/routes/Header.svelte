<script lang="ts">
  import logo from "$lib/assets/images/logo.png";
  import { isActiveTab } from "$lib/store";
  import { onMount } from "svelte";

  let showMenu: boolean = false;
</script>

<header id="navbar"
  class="fixed bg-white left-0 shadow-lg top-0 right-0 z-50 text-lg"
  style="font-family: 'Open Sans'"
>
  <div class="flex items-center justify-between px-6 py-3">
    <div class="flex items-center">
      <img
        src={logo}
        alt="Logo"
        class="h-[4rem] w-auto lg:w-auto md:w-auto mr-5 rounded-md"
      />
    </div>
    <nav
      class="hidden text-black md:flex space-x-1 sm:space-x-1 lg:space-x-4 md:space-x-4"
    >
      <a
        href="/"
        on:click={() => ($isActiveTab = "home")}
        class=" p-1.5 sm:p-1.5 md:p-auto text-xs lg:text-lg md:text-sm sm:text-xs font-bold px-2 lg:px-3 md:px-3 sm:px-2 py-2 selection:bg-white rounded-md transition-colors duration-500 active:bg-black active:text-gray-600"
        class:bg-black={$isActiveTab === "home"}
        class:text-white={$isActiveTab === "home"}
        class:text-black={$isActiveTab !== "home"}>Home</a
      >
      <a
        href="/about"
        on:click={() => ($isActiveTab = "about")}
        class=" p-1.5 sm:p-1.5 md:p-auto text-xs lg:text-lg md:text-sm sm:text-xs font-bold px-2 lg:px-3 md:px-3 sm:px-2 py-2 selection:bg-white rounded-md transition-colors duration-500 active:bg-black active:text-gray-600"
        class:bg-black={$isActiveTab === "about"}
        class:text-white={$isActiveTab === "about"}
        class:text-black={$isActiveTab !== "about"}>About</a
      >
      <a
        href="/news"
        on:click={() => ($isActiveTab = "news")}
        class=" p-1.5 sm:p-1.5 md:p-auto text-xs lg:text-lg md:text-sm sm:text-xs font-bold px-2 lg:px-3 md:px-3 sm:px-2 py-2 selection:bg-white rounded-md transition-colors duration-500 active:bg-black active:text-gray-600"
        class:bg-black={$isActiveTab === "news"}
        class:text-white={$isActiveTab === "news"}
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

<style>
  /* Optional: Adjust padding for larger screens/ */
  @media (min-width: 768px) {
    header {
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 0%;
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
    color: #f4f4f3;
  }
</style>
