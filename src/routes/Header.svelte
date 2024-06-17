<script lang="ts">
  import logo from "$lib/assets/images/logo.png";
  import { isActiveTab } from "$lib/store";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  let navbar: HTMLElement | null;
  $isActiveTab = "";

  const updateNavbarBackgroundColor = () => {
    if (navbar && browser) {
      if ($isActiveTab === "home" || $isActiveTab === "news") {
        navbar.style.backgroundColor = window.scrollY > 500 ? "#f4f4f3" : "";
        navbar.style.color = window.scrollY > 500 ? "black" : "white";
      } else if ($isActiveTab === "about") {
        navbar.style.backgroundColor = "#f4f4f3";
        navbar.style.color = "black";
      } else {
        navbar.style.backgroundColor = "#f4f4f3";
        navbar.style.color = "black";
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
  class="bg-black h-16 fixed top-0 left-0 right-0 z-50 text-lg font-open-sans"
>
  <div class="flex items-center justify-end mt-5 px-6">
    <nav class="flex space-x-10">
      <h3 class="text-white font-bold">Contact Us</h3>
      <!-- <a href={""}>
        <img src={linkedIn} alt="LinkedIn" class="w-10 h-7 rounded-lg" /></a
      > -->
      <!-- <a href={""}
        ><img src={youtube} alt="YouTube" class="w-10 h-7 rounded-lg" /></a
      > -->
      <a href={""}>
        <svg
          class="w-[33px] h-[33px] text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
            clip-rule="evenodd"
          />
          <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
        </svg></a
      >
      <a href={""}>
        <svg
          class="w-[33px] h-[33px] text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
            clip-rule="evenodd"
          />
        </svg></a
      >
    </nav>
  </div>
</header>

<div class="top-20">
  <header
    id="navbar"
    bind:this={navbar}
    class="fixed top-16 left-0 right-0 z-50 text-lg"
    style="font-family: 'Open Sans'"
  >
    <div class="flex items-center justify-between px-6 py-3">
      <div class="flex items-center">
        <img
          src={logo}
          alt="Logo"
          class="h-10 w-3/4 sm:w-3/4 lg:w-35 md:w-auto mr-5 rounded-md"
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
          class:text-green-600={$isActiveTab === "home"}>Home</a
        >
        <a
          href="/about"
          on:click={() => ($isActiveTab = "about")}
          class=" p-1.5 sm:p-1.5 md:p-auto text-xs lg:text-lg md:text-sm sm:text-xs font-bold px-2 lg:px-3 md:px-3 sm:px-2 py-2 selection:bg-white hover:bg-white rounded-md hover:text-gray-600 transition-colors duration-500 active:bg-white active:text-gray-600"
          class:[#f4f4f3]={$isActiveTab === "about"}
          class:text-green-600={$isActiveTab === "about"}>About</a
        >
        <a
          href="/news"
          on:click={() => ($isActiveTab = "news")}
          class=" p-1.5 sm:p-1.5 md:p-auto text-xs lg:text-lg md:text-sm sm:text-xs font-bold px-2 lg:px-3 md:px-3 sm:px-2 py-2 selection:bg-white hover:bg-white rounded-md hover:text-gray-600 transition-colors duration-500 active:bg-white active:text-gray-600"
          class:bg-white={$isActiveTab === "news"}
          class:text-green-600={$isActiveTab === "news"}>Media Center</a
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
    color: #f4f4f3;
  }
</style>
