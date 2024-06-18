<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { isActiveTab } from "$lib/store";
  import member1 from "$lib/assets/images/member1.png";
  import member2 from "$lib/assets/company-icons/chargezone.png";
  import member3 from "$lib/assets/company-icons/sheru.png";
  import member4 from "$lib/assets/company-icons/isof.png";
  import member5 from "$lib/assets/images/image3.jpg";
  import member6 from "$lib/assets/images/image4.jpg";
  import member7 from "$lib/assets/company-icons/thunder.png";

  // Define members
  let members = [member1, member2, member3, member4, member5, member6, member7];
  let container: HTMLElement | null = null;
  let isArrowHovered = false;
  let interval: NodeJS.Timeout | null = null;
  onMount(() => {
    container = document.querySelector(".participantList");
    if (container) {
      // Duplicate items to create infinite scrolling effect
      container.innerHTML += container.innerHTML;

      interval = setInterval(() => {
        if (container && !isArrowHovered) {
          container.scrollLeft += 1; // Adjust scroll speed as needed
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0; // Reset to the start of the original items
          }
        }
      }, 20); // Adjust scroll interval as needed
    }
  });

  function stopScroll() {
    if (interval) {
      clearInterval(interval);
    }
  }

  function shiftLeft() {
    if (container) {
      container.scrollLeft -= 100; // Adjust scroll amount as needed
    }
  }

  function shiftRight() {
    if (container) {
      container.scrollLeft += 100; // Adjust scroll amount as needed
    }
  }

  function handleArrowHover(hovered: boolean) {
    isArrowHovered = hovered;
  }

  function todo() {
    isActiveTab.set("");
  }

  onDestroy(() => {
    stopScroll();
    if (interval) {
      clearInterval(interval);
    }
  });
</script>

<h3
  class="text-3xl sm:text-3xl lg:text-3xl text-black text-center font-bold mt-10 mb-5 font-inter"
  style="font-family: 'Open Sans'"
>
  Member Participants
</h3>

<div class="mx-auto max-w-screen-xl" style="font-family: 'Open Sans'">
  <div class="flex flex-col gap-3 w-full relative">
    <!-- Left arrow -->
    <svg
      on:click={shiftLeft}
      on:mouseenter={() => handleArrowHover(true)}
      on:mouseleave={() => handleArrowHover(false)}
      class="absolute top-12 left-5 transform -translate-y-1/2 z-10 w-7 h-7 text-gray-800 dark:text-white cursor-pointer"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m15 19-7-7 7-7"
      />
    </svg>

    <!-- Participant list -->
    <div class="mx-auto max-w-screen-xl" style="font-family: 'Open Sans'">
      <a href="/participants" on:click={todo}>
        <div
          class="mx-12 flex items-center space-x-1 overflow-x-auto mb-10 scrollbar-hide participantList"
        >
          {#each members as member}
            <img
              src={member}
              alt="Member"
              class="w-35 h-24 space-x-1 rounded-md"
            />
          {/each}
        </div>
      </a>
    </div>

    <!-- Right arrow -->
    <svg
      on:click={shiftRight}
      on:mouseenter={() => handleArrowHover(true)}
      on:mouseleave={() => handleArrowHover(false)}
      class="absolute top-12 transform -translate-y-1/2 right-5 z-10 w-7 h-7 text-gray-800 dark:text-white cursor-pointer"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m9 5 7 7-7 7"
      />
    </svg>
  </div>
</div>

<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .participantList {
    white-space: nowrap;
  }
  .participantList img {
    display: inline-block;
  }
</style>
