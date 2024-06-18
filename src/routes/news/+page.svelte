<script lang="ts">
  import { Card, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import blog from "$lib/assets/images/n1.png";
  import NewsCard from "./NewsCard.svelte";
  import Publications from "./Publications.svelte";

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
    {
      title: " An Explainer on UEI for EV Charging",
      posted: "EVreporter Magazine",
      link: "https://evreporter.com/wp-content/uploads/2024/03/EVreporter-Mar-2024-magazine.pdf",
      date: "Date- March 2024",
      // img: s3,
    },
    {
      title:
        "Pulse Energy and CPOs of India are working together along with UEI",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7200853938584080384/",
      posted: "CPO Society of India",
      date: "Date- May 2024",
      // img: s6,
    },
  ];
</script>

<div style="font-family: 'Open Sans'">
  <NewsCard />
  <Publications />
  <div
    class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 justify-center md:justify-center"
  >
    {#each news as card}
      <div class="flex flex-col">
        <!-- Flex container for each card -->
        <div>
          <img
            src={blog}
            alt="blog"
            class="h-auto lg:h-[20rem] sm:h-auto w-full object-cover rounded-t-lg"
          />
          <!-- Adjusted image source and added styling -->
        </div>
        <div class="bg-white border-gray-300 shadow-lg flex-1">
          <!-- Flex-1 to make the card expand -->
          <div class="flex flex-col h-full p-5">
            <h5
              class="mb-2 font-bold text-2xl tracking-tight text-gray-900"
            >
              {card.title}
            </h5>
            <p class="font-normal text-xl text-gray-600 leading-tight">
              {card.posted}
            </p>
            <div class="justify-start  text-gray-900 hover:text-green-700">
              <Button
                href={card.link}
                class="w-fit mt-5 text-white bg-green-600 hover:bg-green-700 font-bold justify-center"
              >
                Know More<ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
