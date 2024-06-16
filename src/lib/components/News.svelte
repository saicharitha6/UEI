<!-- Carousel.svelte -->
<script>
  import s5 from "$lib/assets/images/bussinessLine.png";
  import s2 from "$lib/assets/images/economicTimes.png";
  import s4 from "$lib/assets/images/energyWorld.png";
  import s1 from "$lib/assets/images/fide.png";
  import news from "$lib/assets/images/news.jpg";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  let currentIndex = 0;

  const updates = [
    {
      title:
        "In a groundbreaking moment, the Beckn community members Pulse Energy, Sheru, Kazam, and Turno rocked a joint demo, showcasing seamless open network transactions on Unified Energy Interface",
      posted: "FIDE insert log",
      link: "https://www.linkedin.com/posts/becknprotocol_uei-climateaction-interoperability-activity-7160171957462700032-9J_e/",
      date: "Date - Jan 2024",
      img: s1,
    },
    {
      title:
        "Energy startups, power utilities and other companies could come together as an open community to take this idea from concept to a full-fledged implementation with the support of existing or new policies on green energy of the participating states in India",
      posted: "Economic Times insert logo",
      link: "https://economictimes.indiatimes.com/tech/technology/a-platform-in-the-works-to-find-closest-ev-charging-spot-more/articleshow/107801218.cms?from=mdr",
      date: "Date - Feb, 2024",
      img: s2,
    },
    {
      title:
        "At least 20 energy companies have joined hands to create an alliance for an open energy network called the Unified Energy Interface (UEI), which is a unified payments interface (UPI)-like system for EV charging",
      posted: "Hindu Businessline",
      link: "https://www.thehindubusinessline.com/companies/seamless-ev-charging-alliance-formed-to-promote-payment-and-transaction-interoperability/article68083295.ece",
      date: "Date- April 2024",
      img: s4,
    },
    {
      title:
        " Charging network operators, energy co.s form Unified Energy Interface for intero ..",
      posted: " Economic Times ",
      link: "https://auto.economictimes.indiatimes.com/news/industry/unified-energy-interface-for-interoperability/109428034",
      date: "Date- April 2024",
      img: s5,
    },
  ];

  function shiftLeft() {
    currentIndex = (currentIndex - 1 + updates.length) % updates.length;
  }

  function shiftRight() {
    currentIndex = (currentIndex + 1) % updates.length;
  }
</script>

<h3
  class="text-3xl text-black text-center font-bold mt-3"
  style="font-family: 'Open Sans'"
>
  News & Articles
</h3>

<div
  class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row m-10"
  style="font-family: 'Open Sans'"
>
  <!-- Left side (image) -->
  <div class="lg:w-1/3">
    <img src={news} alt="Card" class="w-full h-full object-cover lg:h-auto" />
  </div>

  <!-- Right side (content) -->
  <div class="p-6 lg:w-2/3 bg-gradient-to-r from-white to-green-200">
    <div class="mb-4">
      <h2 class="text-4xl font-extrabold text-gray-800 italic mb-10">
        "Charging network operators, energy co.s form Unified Energy Interface for interoperability .."
      </h2>
      <p class="text-gray-600">
        The new UEI , a UPI-like system, will help address interoperability challenges pertaining to EV charging and grid demand response by partnering with Discoms.It is aimed at facilitating seamless payment and transaction interoperability within EV charging networks.
      </p>
    </div>
    <button
      class="text-gray-800 py-2 px-4 rounded-lg border-2 hover:text-green-500 border-green-300 shadow-md"
    >
      <a href={"/news"}> More About</a>
    </button>
  </div>
</div>

<div class="mb-20" style="font-family: 'Open Sans'">
  <div>
    <!-- Add one image news letter with some content -->
  </div>
  <div class="flex flex-col gap-3 w-full">
    <div class="flex flex-row justify-center items-center px-[6vw]">
      <svg
        on:click={shiftLeft}
        class="w-16 h-16 text-gray-800 dark:text-white cursor-pointer"
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
        {#each updates
          .slice(currentIndex)
          .concat(updates.slice(0, currentIndex)) as customer}
          <div
            class="grid lg:flex-col h-70 lg:flex grid-cols-1 md:flex md:flex-col sm:flex sm:flex-col items-center min-w-[400px] px-7 sm:px-5"
          >
            <div class="mb-7 w-auto h-20">
              <a href={customer.link} target="_blank">
                <img
                  src={customer.img}
                  alt={customer.title}
                  class="w-full m-3 sm:m-0"
                />
              </a>
            </div>
            <div class="flex flex-col">
              <p
                class="text-xl lg:text-2xl md:text-xl mb-3 sm:text-sm font-semibold text-center font-serif text-green-600"
                style="font-family: 'Open Sans'"
              >
                {customer.posted}
              </p>
            </div>
            <!-- <p
              class="text-md flex-grow font-small font-serif text-black text-left whitespace-normal"
              style="font-family: 'Open Sans'"
            >
              {customer.title}
            </p> -->
          </div>
        {/each}
      </div>

      <svg
        on:click={shiftRight}
        class="w-16 h-16 text-gray-800 dark:text-white cursor-pointer"
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
  <div
    class="justify-end items-end flex mr-20 p-5 text-black hover:text-green-700"
  >
    <a href={"/news"} class=" font-bold py-2 px-4 rounded flex items-center">
      Know more <ArrowRightOutline class="w-6 h-6 ml-2" />
    </a>
  </div>
</div>

<style>
  .List {
    white-space: nowrap;
    overflow-x: hidden; /* Hide horizontal overflow */
  }
</style>
