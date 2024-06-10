<script lang="ts">
  import { Card, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";

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
      title: "Akhil's post on DST",
      posted: "Akhil JP",
      link: "https://www.linkedin.com/posts/akhil-pulse-energy_dpi-platform-in-works-to-find-closest-ev-activity-7165170998307176448-9PFl?utm_source=share&utm_medium=member_desktop",
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
      title:
        "News_Charging Network Operators and Energy Companies Come Together to Create a UPI-Like Network for EV Charging - Called UEI",
      posted: "Alliance",
      link: "https://drive.google.com/file/d/10xY37w6bvuAelErXt1ONBdO19I3I2Ylj/view",
    },
    {
      title: "UEI CPOS",
      posted: "PULSE ",
      link: "https://www.linkedin.com/posts/pulse-energy-pvt-ltd_uei-cpos-activity-7200878117823913984-znCh?utm_source=share&utm_medium=member_ios",
    },
    {
      title: "UEI Alliance Meetup with Nandan ",
      posted: "Beckn",
      link: "https://www.linkedin.com/posts/becknprotocol_uei-climateaction-interoperability-activity-7160171957462700032-9J_e?utm_source=share&utm_medium=member_ios",
    },
    {
      title: "UEI Alliance formation ",
      posted: "Beckn and Economic times",
      link: "https://www.linkedin.com/posts/becknprotocol_charging-network-operators-energy-cos-form-activity-7188518169655808001-UOIM?utm_source=share&utm_medium=member_ios",
    },
  ];
</script>

<div
  class="bg-white flex flex-col w-full lg:h-screen h-screen md:px-[5vw] px-[10vw] pt-[3vh] overflow-y-auto"
>
  <div class="bg-white mb-5">
    <h2 class="text-center mt-20 font-bold text-2xl text-black">Daily News</h2>

    <div
      class="news grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 justify-center md:justify-center"
    >
      {#each news as card}
        <Card
          class="overflow-hidden hover:translate-y-1 floating bg-white border-gray-300 shadow-lg"
        >
          <div class="flex-grow overflow-auto bg-white">
            <h5
              class="mb-2 text-md font-bold tracking-tight text-black dark:text-black"
            >
              {card.title}
            </h5>
            <p
              class="mb-3 font-normal text-gray-600 dark:text-gray-600 leading-tight"
            >
              {card.posted}
            </p>
          </div>
          <hr />
          <div class="items-center flex flex-col p-5">
            <Button
              href={card.link}
              class="w-fit bg-green-500 hover:bg-green-700 font-bold justify-center"
            >
              Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</div>
