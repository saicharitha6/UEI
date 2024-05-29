<script>
  // @ts-nocheck

  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import { Popover } from "flowbite-svelte";
  let placement;
  // Import your styles here
  import "./styles.css";
  import "../app.css";
</script>

<div class="app">
  <Header />
  <main>
    <!-- Content of your main section -->
    <slot />
  </main>
  <!-- Fixed clickable icon -->
  <a
    href="/participants"
    id="placement-top"
    on:mouseenter={() => (placement = "top")}
    class="fixed bottom-20 left-0 p-4"
  >
    <Popover triggeredBy="[id^='placement-top']" class="w-30 text-sm font-bold"
      >Join Us</Popover
    >
    <svg
      class="w-16 h-16 text-gray-800 dark:text-white border-2 rounded-full shadow-lg"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
        clip-rule="evenodd"
      />
    </svg>
  </a>
  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative; 
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    padding-top: 24px;
    /* margin: 0 auto; */
    /* box-sizing: border-box; */
  }
</style>
