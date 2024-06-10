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

  const news = [
    {
      title: "UEI demo happened in Kormangala in presence of NN, PV, etc",
      posted: "Beckn protocol",
    },
    {
      title: "Virtual Power Plant innovations",
      posted: "Sheru",
    },
    {
      title:
        "NIKOL EV CHARGING STATION and Kazam join hands for interoperability across their networks",
      posted: "Kazam",
    },
    {
      title: "Akhil's post on DST",
      posted: "Akhil JP",
    },
    {
      title: "ET story covering UEI",
      posted: "Economic Times India",
    },
    {
      title: "AN EXPLAINER ON UEI FOR EV CHARGING",
      posted: "EV Reporter",
    },
    {
      title:
        "News_Charging Network Operators and Energy Companies Come Together to Create a UPI-Like Network for EV Charging - Called UEI",
      posted: "Alliance",
    },
    {
      title: "UEI CPOS",
      posted: "PULSE ",
    },
    {
      title: "UEI Alliance Meetup with Nandan ",
      posted: "Beckn",
    },
    {
      title: "UEI Alliance formation ",
      posted: "Beckn and Economic times",
    },
  ];
</script>

<div class="flex flex-col gap-3 w-full px-[7vw] mb-10">
  <p
    class="text-3xl lg:text-3xl md:text-4xl sm:text-3xl mb-5 font-bold text-center text-black"
  >
    Our News Updates
  </p>
  <a href="/news">
    <div class="flex gap-5 scrollbar-hide List">
      {#each news as customer}
        <div class="flex flex-col items-center min-w-[250px] px-2">
          <div class="flex flex-col">
            <p
              class="text-xl lg:text-xl md:text-xl mb-3 sm:text-sm font-semibold text-center font-serif text-green-600"
            >
              {customer.posted}
            </p>
          </div>
          <p
            class="text-sm font-small font-serif text-black text-center whitespace-normal"
          >
            {customer.title}
          </p>
        </div>
      {/each}
    </div>
  </a>
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
