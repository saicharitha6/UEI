<script lang="ts">
  import logo from "$lib/assets/images/logo.png";
  // export let title: string; // Title for the header
  import "../app.css";
  import Draw from "./form.svelte";

  let activeTab: string = "home";
</script>

<header class="bg-black fixed top-0 left-0 right-0 z-50">
  <div class="flex items-center justify-between px-4 py-3">
    <div class="flex items-center">
      <img src={logo} alt="Logo" class="h-10 w-auto mr-5 rounded-md" />
      <!-- <h1 class="text-white text-lg font-bold">{title}</h1> -->
    </div>
    <nav class="flex space-x-1 sm:space-x-1 lg:space-x-4 md:space-x-4">
      <a
        href="/"
        on:click={() => (activeTab = "home")}
        class="p-2 sm:p-2 md:p-auto text-xs lg:text-sm md:text-sm sm:text-xs font-bold px-2 lg:px-3 md:px-3 sm:px-2 py-2 hover:bg-white hover:text-gray-600 rounded-md transition-colors duration-500 after:bg-white active:bg-white active:text-gray-600"
        class:bg-white={activeTab === "home"}
        class:text-gray-800={activeTab === "home"}
        class:text-white={activeTab !== "home"}>Home</a
      >
      <a
        href="/about"
        on:click={() => (activeTab = "about")}
        class=" p-2 sm:p-2 md:p-auto text-xs lg:text-sm md:text-sm sm:text-xs font-bold px-2 lg:px-3 md:px-3 sm:px-2 py-2 selection:bg-white hover:bg-white rounded-md hover:text-gray-600 transition-colors duration-500 active:bg-white active:text-gray-600"
        class:bg-white={activeTab === "about"}
        class:text-gray-800={activeTab === "about"}
        class:text-white={activeTab !== "about"}>About</a
      >
      <a
        href="/news"
        on:click={() => (activeTab = "news")}
        class=" p-2 sm:p-2 md:p-auto text-xs lg:text-sm md:text-sm sm:text-xs  font-bold px-2 lg:px-3 md:px-3 sm:px-2 py-2 selection:bg-white hover:bg-white rounded-md hover:text-gray-600 transition-colors duration-500 active:bg-white active:text-gray-600"
        class:bg-white={activeTab === "news"}
        class:text-gray-800={activeTab === "news"}
        class:text-white={activeTab !== "news"}>News</a
      >
    </nav>
    <Draw />
  </div>
</header>

<style>
  /* Optional: Adjust padding for larger screens */
  @media (min-width: 768px) {
    header {
      padding-left: 2rem;
      padding-right: 2rem;
      /* background: #2b9642; */
    }
  }
</style>
