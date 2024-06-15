<!-- Carousel.svelte -->
<script>
  import blog from "$lib/assets/images/blog.jpg";
  import s5 from "$lib/assets/images/bussinessLine.png";
  import s2 from "$lib/assets/images/economicTimes.png";
  import s3 from "$lib/assets/images/evReporter.png";
  import s6 from "$lib/assets/images/cpos.png";
  import s4 from "$lib/assets/images/energyWorld.png";
  import s1 from "$lib/assets/images/fide.png";
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
      title: " An Explainer on UEI for EV Charging",
      posted: "EVreporter Magazine",
      link: "https://evreporter.com/wp-content/uploads/2024/03/EVreporter-Mar-2024-magazine.pdf",
      date: "Date- March 2024",
      img: s5,
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
    {
      title:
        "Pulse Energy and CPOs of India are working together along with UEI",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7200853938584080384/",
      posted: "CPO Society of India",
      date: "Date- May 2024",
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

<!-- <div class="relative flex justify-center">
  <img
    class=" object-cover w-3/4 h-auto lg:h-60 rounded-b-2xl"
    src={blog}
    alt="background"
  />

  <div
    class="text-white w-3/4 p-10 font-bold text-right absolute inset-0 flex lg:justify-center lg:items-center md:justify-start md:items-center justify-start items-center"
  >
    <h2 class="max-w-lg lg:max-w-lg text-black text-3xl font-bold">
      UEI Alliance is formed by various stakeholders in the energy sector.
    </h2>
  </div>
</div> -->

<div class="my-10 mb-20" style="font-family: 'Open Sans'">
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
            class="grid lg:flex-col h-70 lg:flex grid-cols-1 md:flex md:flex-col sm:flex sm:flex-col items-center min-w-[400px] px-7"
          >
            <!-- <div class="border border-black"> -->
            <div class="mb-7 w-auto h-20">
              <a href={customer.link} target="_blank">
                <img
                  src={customer.img}
                  alt={customer.title}
                  class="w-full m-3"
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
            <p
              class="text-md flex-grow font-small font-serif text-black text-left whitespace-normal"
            style="font-family: 'Open Sans'"
            >
              {customer.title}
            </p>
          </div>
          <!-- </div> -->
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
</div>
<div
  class="h-px w-full bg-gradient-to-r from-black via-black to-transparent"
></div>

<style>
  .List {
    white-space: nowrap;
    overflow-x: hidden; /* Hide horizontal overflow */
  }
</style>
