<script lang="ts">
  import { onMount } from "svelte";
  import { Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import screen1 from "$lib/assets/images/member2.png";
  import screen2 from "$lib/assets/images/image2.jpg";
  import screen3 from "$lib/assets/images/image4.jpg";
  import screen4 from "$lib/assets/images/member6.jpg";
  import screen5 from "$lib/assets/images/member1.png";
  import screen6 from "$lib/assets/images/image3.jpg";
  import screen7 from "$lib/assets/company-icons/chargezone.png";
  import screen8 from "$lib/assets/company-icons/sheru-logo.webp";

  let steps = [
    {
      img: screen1,
      title: "ISGF",
      des: "ISGF is a Think-Tank of global repute on Energy Transition, Electric Mobility and Grid Modernization",
      link: "https://indiasmartgrid.org/",
    },
    {
      img: screen2,
      title: "TURNO",
      des: "It is an Electric Vehicle company, that helps operators of commercial vehicles to switch to EVs",
      link: "https://www.turno.club/?utm_source=Li&utm_medium=Osocial&utm_campaign=bio",
    },
    {
      img: screen3,
      title: "World Resources Institute",
      des: "WRI is a trusted partner for change. We work globally and in focus countries to meet people’s essential needs",
      link: "https://www.wri.org/about",
    },
    {
      img: screen4,
      title: "Thunder",
      des: "See what it's like to build custom EV charging App, without writing code!",
    },
    {
      img: screen5,
      title: "Pulse Energy",
      des: "we enables CPOs and fleet operators to scale up their charging operations pan India.",
      link: "https://pulseenergy.io/",
    },
    {
      img: screen6,
      title: "Kazam",
      des: "Kazam is an agnostic EV charging software platform building India's largest EV charging station network.",
      link: "https://kazam.in/",
    },
    {
      img: screen7,
      title: "Charge Zone",
      des: "It is one of the leading global companies to have a fully integrated technology",
      link: "https://chargezone.com/",
    },

    {
      img: screen8,
      title: "SHERU",
      des: "We are building the backend for new energy networks.",
      link: "https://sheru.se/",
    },
  ];

  const animateData = async () => {
    const { default: gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".buildAnimateSteps",
        start: "10% 80%",
      },
    });
    tl.fromTo(
      ".buildAnimateSteps",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
      }
    );
  };

  onMount(() => {
    animateData();
  });
</script>

<div
  class="bg-white flex mt-20 flex-col gap-14 w-full lg:h-screen min-h-screen pt-[10vh] px-[10vw] sm:pt-[10vh] md:pt-[10vh] lg:pt-[10vh] buildAnimateSteps opacity-0 overflow-y-auto" style="font-family: 'Open Sans'"
>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-3">
      <p class="text-center text-4xl font-semibold text-black">
        Our Participants
      </p>
      <p class="text-lg text-center text-gray-500">
        See our member participants that we have co-ordinate!
      </p>
    </div>
  </div>

  <div
    class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-10"
  >
    {#each steps as step}
      <div class="flex flex-col rounded-md">
        <div class="flex flex-col rounded-md h-full">
          <div
            class="flex items-center w-full h-auto border bg-[#1A1F24] shadow-md shadow-black"
          >
            <img
              src={step.img}
              alt="logo"
              class="h-[150px] w-full mx-auto p-3 hover:p-1"
            />
          </div>
          <div
            class="flex flex-col items-center w-full bg-[#1C2428] border shadow-md shadow-black p-4"
          >
            <div
              class="flex flex-col w-auto h-[100px] sm:h-[100px] md:h-[130px] lg:h-[10rem]"
            >
              <p class="text-white text-xl font-semibold">{step.title}</p>
              <p class="text-lg text-gray-300 flex-1">{step.des}</p>
            </div>
            <div class="items-center justify-center flex flex-col">
              <Button
                href={step.link}
                class="w-fit mt-5 text-white hover:bg-green-700 font-bold justify-center"
              >
                Click Here<ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
