<script lang="ts">
  import logo from "../lib/images/logo.png";
  // export let title: string; // Title for the header
  import "../app.css";
  import Draw from "./form.svelte";
</script>

<header class="bg-green-700 fixed top-0 left-0 right-0 z-50">
  <div class="flex items-center justify-between px-4 py-3">
    <div class="flex items-center">
      <img src={logo} alt="Logo" class="h-10 w-auto mr-5 rounded-md" />
      <!-- <h1 class="text-white text-lg font-bold">{title}</h1> -->
    </div>
    <nav class="flex space-x-4">
      <a href="/" class="text-white text-sm font-bold px-3 py-2 hover:bg-white hover:text-gray-600 rounded-md transition-colors duration-1000 active:bg-white active:text-gray-600">Home</a>
      <a href="/about" class="text-white text-sm font-bold px-3 py-2 selection:bg-white hover:bg-white rounded-md hover:text-gray-600 transition-colors duration-1000 active:bg-white active:text-gray-600">About</a>
      <a href="/participants" class="text-white text-sm font-bold px-3 py-2 selection:bg-white hover:bg-white rounded-md hover:text-gray-600 transition-colors duration-1000 active:bg-white active:text-gray-600">News</a>
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
      background-color: #1a6e4f;
    }
  }

</style>
