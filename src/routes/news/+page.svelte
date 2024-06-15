<script lang="ts">
  import { Card, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import blog from "$lib/assets/images/blog.jpg";
  import NewsCarousel from './NewsCarousel.svelte';

  const update = [
    {
      title:"In a groundbreaking moment, the Beckn community members Pulse Energy, Sheru, Kazam, and Turno rocked a joint demo, showcasing seamless open network transactions on Unified Energy Interface",
      posted:"FIDE insert log",
      link:"https://www.linkedin.com/posts/becknprotocol_uei-climateaction-interoperability-activity-7160171957462700032-9J_e/",
      date:"Date - Jan 2024"
    },
    {
      title:"Energy startups, power utilities and other companies could come together as an open community to take this idea from concept to a full-fledged implementation with the support of existing or new policies on green energy of the participating states in India",
      posted:"Economic Times insert logo ",
      link:"https://economictimes.indiatimes.com/tech/technology/a-platform-in-the-works-to-find-closest-ev-charging-spot-more/articleshow/107801218.cms?from=mdr",
      date:"Date - Feb, 2024 "
    },
    {
      title:" An Explainer on UEI for EV Charging",
      posted:"EVreporter Magazine",
      link:"https://evreporter.com/wp-content/uploads/2024/03/EVreporter-Mar-2024-magazine.pdf",
      dtae:"Date- March 2024"
    }
  ]

  const news = [
    {
      title: "UEI demo happened in Kormangala in presence of NN, PV, etc",
      posted: "Beckn protocol",
      link: "https://www.linkedin.com/posts/becknprotocol_uei-climateaction-interoperability-activity-7160171957462700032-9J_e/",
    },
    {
      title: "Virtual Power Plant innovations",
      posted: "Sheru",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7161685145714876416",
    },
    {
      title:
        "NIKOL EV CHARGING STATION and Kazam join hands for interoperability across their networks",
      posted: "Kazam",
      link: "https://www.linkedin.com/posts/kazam-ev_kazamev-nikolev-electrifyingfuture-activity-7169303957624795137-W9Xf?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "ET story covering UEI",
      posted: "Economic Times India",
      link: "https://economictimes.indiatimes.com/tech/technology/a-platform-in-the-works-to-find-closest-ev-charging-spot-more/articleshow/107801218.cms?from=mdr",
    },
    {
      title: "AN EXPLAINER ON UEI FOR EV CHARGING",
      posted: "EV Reporter",
      link: "https://evreporter.com/wp-content/uploads/2024/03/EVreporter-Mar-2024-magazine.pdf",
    },
   
    {
      title: "UEI Alliance Meetup with Nandan ",
      posted: "Beckn",
      link: "https://www.linkedin.com/posts/becknprotocol_uei-climateaction-interoperability-activity-7160171957462700032-9J_e?utm_source=share&utm_medium=member_ios",
    },
    {
      title: "Akhil's post on DST",
      posted: "Akhil JP",
      link: "https://www.linkedin.com/posts/akhil-pulse-energy_dpi-platform-in-works-to-find-closest-ev-activity-7165170998307176448-9PFl?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "UEI Alliance formation ",
      posted: "Beckn and Economic times",
      link: "https://www.linkedin.com/posts/becknprotocol_charging-network-operators-energy-cos-form-activity-7188518169655808001-UOIM?utm_source=share&utm_medium=member_ios",
    },
    {
      title: "UEI CPOS",
      posted: "PULSE ",
      link: "https://www.linkedin.com/posts/pulse-energy-pvt-ltd_uei-cpos-activity-7200878117823913984-znCh?utm_source=share&utm_medium=member_ios",
    },
    {
      title:
        "News_Charging Network Operators and Energy Companies Come Together to Create a UPI-Like Network for EV Charging.",
      posted: "Alliance",
      link: "https://drive.google.com/file/d/10xY37w6bvuAelErXt1ONBdO19I3I2Ylj/view",
    },
  ];
</script>

<div class="mt-20">
  <NewsCarousel />

</div>

<div class="bg-white flex flex-col w-full lg:h-screen h-screen md:px-[5vw] px-[10vw] pt-[3vh] overflow-y-auto"  style="font-family: 'Open Sans'">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 justify-center md:justify-center">
    {#each news as card}
      <div class="bg-black border-gray-300 shadow-lg hover:translate-y-1 floating">
        <div class="flex flex-col h-full p-5" >
          <!-- <div class="flex-grow p-4 overflow-auto"> -->
            <h5 class="mb-2 text-md font-bold tracking-tight text-white dark:text-black">{card.title}</h5>
            <p class="mb-3 font-normal text-white dark:text-gray-600 leading-tight">{card.posted}</p>
          <!-- </div> -->
          <!-- <hr /> -->
          <!-- <div class="flex items-center justify-center p-5">
            <Button href={card.link} class="bg-green-500 hover:bg-green-700 font-bold justify-center">
              Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </div> -->
        </div>
      </div>
    {/each}
  </div>
</div>
