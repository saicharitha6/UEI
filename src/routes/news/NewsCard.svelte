<script>
  import s5 from "$lib/assets/images/bussinessLine.png";
  import s2 from "$lib/assets/images/economicTimes.png";
  import s3 from "$lib/assets/images/evReporter.png";
  import s6 from "$lib/assets/images/cpos.png";
  import s4 from "$lib/assets/images/energyWorld.png";
  import s1 from "$lib/assets/images/fide.png";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import { Button } from "flowbite-svelte";

  const news1 = [
    {
      title:
        "In a groundbreaking moment, the Beckn community members Pulse Energy, Sheru, Kazam, and Turno rocked a joint demo, showcasing seamless open network transactions on Unified Energy Interface",
      posted: "FIDE",
      link: "https://www.linkedin.com/posts/becknprotocol_uei-climateaction-interoperability-activity-7160171957462700032-9J_e/",
      date: "Date - Jan 2024",
      img: s1,
    },
    {
      title:
        "Energy startups, power utilities and other companies could come together as an open community to take this idea from concept to a full-fledged implementation with the support of existing or new policies on green energy of the participating states in India",
      posted: "Economic Times",
      link: "https://economictimes.indiatimes.com/tech/technology/a-platform-in-the-works-to-find-closest-ev-charging-spot-more/articleshow/107801218.cms?from=mdr",
      date: "Date - Feb, 2024",
      img: s2,
    },
    {
      title: " An Explainer on UEI for EV Charging",
      posted: "EVreporter Magazine",
      link: "https://evreporter.com/wp-content/uploads/2024/03/EVreporter-Mar-2024-magazine.pdf",
      date: "Date- March 2024",
      img: s3,
    },
    {
      title:
        "Pulse Energy and CPOs of India are working together along with UEI",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7200853938584080384/",
      posted: "CPO Society of India",
      date: "Date- May 2024",
      img: s6,
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
</script>

<div
  class="bg-[#f5f5f4] flex flex-col w-full p-3 sm:p-3 md:p-10 lg:p-10 lg:min-h-screen md:px-[5vw] px-[10vw] mb-[3vw]"
  style="font-family: 'Open Sans'"
>
  <h2 class="text-center font-bold text-[29px] mt-40 mb-5">In The News</h2>
  <div class="flex flex-col space-y-4">
    {#each news1 as n1}
      <div
        class="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg mb-4"
      >
        <!-- Styling for each card -->
        <div class="w-full lg:w-1/4 sm:w-full p-5">
          <!-- Image container -->
          <img src={n1.img} alt="" class="w-full h-auto rounded-lg" />
          <!-- Set image height and rounded corners -->
        </div>
        <div class="w-full p-5 flex flex-col justify-between">
          <!-- Use flex-1 to take remaining space -->
          <div>
            <h5 class="font-bold text-[20px] mb-5">{n1.title}</h5>
            <p class="text-gray-800 text-[20px] font-medium mb-2">
              {n1.posted}
            </p>
            <p class="text-gray-600 text-[18px] mb-2">Posted {n1.date}</p>
          </div>
          <div class="text-black hover:text-green-700">
            <Button
              href={n1.link}
              class="w-fit mt-5 text-[20px] text-white bg-black hover:bg-gray-700 font-bold justify-center"
            >
              Know More<ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
