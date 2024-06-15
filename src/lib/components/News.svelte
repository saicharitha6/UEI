<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { isActiveTab } from "$lib/store";

  function todo() {
    $isActiveTab = "news";
    // isActiveTab.set("news");
  }
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

<div class="my-10" style="font-family: 'Open Sans'">
  <p
    class="text-3xl lg:text-3xl md:text-4xl sm:text-3xl mb-5 font-bold text-center text-black"
  >
    Our News Updates
  </p>
  <div class="flex flex-row justify-center items-center">
    <svg
      class="w-10 h-10 text-gray-800 dark:text-white"
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
        d="m15 19-7-7 7-7"
      />
    </svg>
</div>
  <div class="flex flex-col gap-3 w-full px-[7vw]">
    <a href="/news" on:click={todo}>
      <div class="flex flex-row justify-center items-center">
        <svg
          class="w-16 h-16 text-gray-800 dark:text-white"
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
            d="m15 19-7-7 7-7"
          />
        </svg>

        <div class="flex gap-5 List">
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
        <svg
          class="w-16 h-16 text-gray-800 dark:text-white"
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
    </a>
  </div>
</div>

<style>
  .List {
    white-space: nowrap;
    overflow-x: hidden; /* Hide horizontal overflow */
  }
</style>
