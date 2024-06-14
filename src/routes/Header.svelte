<script lang="ts">
  import logo from "$lib/assets/images/logo.png";
  import "../app.css";
  import { isOpen } from "$lib/store";
  import { isActiveTab } from "$lib/store";
  import { goto } from "$app/navigation";

  let showMenu: boolean = false;

  function toggleForm() {
    isOpen.update((n) => {
      if (!n) {
        console.log("open");
        isActiveTab.set("");
        goto("/form");
      } else {
        console.log("close");
        isActiveTab.set("home");
        goto("/");
      }
      return !n;
    });
  }
</script>

<header class="bg-black fixed top-0 left-0 right-0 z-50 text-lg"  style="font-family: 'proxima_nova">
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
        class:text-gray-800={$isActiveTab === "home"}
        class:text-white={$isActiveTab !== "home"}>Home</a
      >
      <a
        href="/about"
        on:click={() => ($isActiveTab = "about")}
        class=" p-1.5 sm:p-1.5 md:p-auto text-xs lg:text-lg md:text-sm sm:text-xs font-bold px-2 lg:px-3 md:px-3 sm:px-2 py-2 selection:bg-white hover:bg-white rounded-md hover:text-gray-600 transition-colors duration-500 active:bg-white active:text-gray-600"
        class:bg-white={$isActiveTab === "about"}
        class:text-gray-800={$isActiveTab === "about"}
        class:text-white={$isActiveTab !== "about"}>About</a
      >
      <a
        href="/news"
        on:click={() => ($isActiveTab = "news")}
        class=" p-1.5 sm:p-1.5 md:p-auto text-xs lg:text-lg md:text-sm sm:text-xs font-bold px-2 lg:px-3 md:px-3 sm:px-2 py-2 selection:bg-white hover:bg-white rounded-md hover:text-gray-600 transition-colors duration-500 active:bg-white active:text-gray-600"
        class:bg-white={$isActiveTab === "news"}
        class:text-gray-800={$isActiveTab === "news"}
        class:text-white={$isActiveTab !== "news"}>Media Center</a
      >
    </nav>

    <button
      on:click={toggleForm}
      class="inline-block px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-[#f2fcf9] hover:text-black"
    >
      Join Us
    </button>

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
            $isActiveTab = "home";
            showMenu = false;
          }}
          class="p-2 text-sm font-bold hover:bg-white hover:text-gray-600 rounded-md transition-colors duration-500"
          class:bg-white={$isActiveTab === "home"}
          class:text-gray-800={$isActiveTab === "home"}
          class:text-white={$isActiveTab !== "home"}>Home</a
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
          class:text-white={$isActiveTab !== "about"}>About</a
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
          class:text-white={$isActiveTab !== "news"}>Media Center</a
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
