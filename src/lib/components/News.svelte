<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  let container: HTMLElement | null = null;
  let interval: number | null = null;

  onMount(() => {
    container = document.querySelector(".List");
    if (container) {
      // Duplicate items to create infinite scrolling effect
      container.innerHTML += container.innerHTML;

      interval = setInterval(() => {
        if (container) {
          container.scrollLeft += 1; // Adjust scroll speed as needed
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0; // Reset to the start of the original items
          }
        }
      }, 20); // Adjust scroll interval as needed
    }
  });

  onDestroy(() => {
    if (interval) {
      clearInterval(interval);
    }
  });

  let customers = [
    {
      title: "Transmission and Distribution",
      para: "Here is the details for the biggest news about technology.",
    },
    {
      title: "EV Finance and funding",
      para: "EV financing start-up Revfin to raise around ₹2,000 crore in the next year",
    },
    {
      title: "EV Marketing",
      para: "EV motorcycle maker Raptee rolls out first electric bike from its Chennai factory",
    },
    {
      title: "UPI-like platform for EV users",
      para: "The UEI will address interoperability challenges pertaining to EV charging.",
    },
  ];
</script>

<div class="flex flex-col gap-10 w-full px-[7vw] ">
  <p class="text-3xl lg:text-4xl md:text-4xl sm:text-3xl font-bold text-center text-black">
    Our News Updates
  </p>

  <div class="flex gap-20 scrollbar-hide List">
    {#each customers as customer}
      <div class="flex flex-col items-center gap-4 min-w-[350px]  ">
        <p class="text-2xl lg:text-3xl md:text-3xl sm:text-2xl  font-semibold text-center text-black ">
          {customer.title}
        </p>
        <p class="text-xl font-semibold text-center text-green-500 ">
          Development @ India
        </p>
        <p class="text-sm text-gray-600 text-center whitespace-normal">
         {customer.para}
        </p>
      </div>
    {/each}
  </div>
</div>

<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .List {
    white-space: nowrap;
    overflow-x: hidden; /* Hide horizontal overflow */
  }
</style>
