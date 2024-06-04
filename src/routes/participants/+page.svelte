<script lang="ts">
  import { onMount } from "svelte";
  import { Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import screen1 from "$lib/assets/images/member2.png";
  import screen2 from "$lib/assets/images/image2.jpg";
  import screen3 from "$lib/assets/images/member7.jpg";
  import screen4 from "$lib/assets/images/member6.jpg";
  import screen5 from "$lib/assets/images/member1.png";
  import screen6 from "$lib/assets/images/image3.jpg";
  import screen7 from "$lib/assets/company-icons/chargezone.png";
  import screen8 from "$lib/assets/company-icons/sheru-logo.webp";

  let steps = [
    {
      img: screen1,
      title: "ISGF",
      des: "partnership initiative between government and various stakeholders",
    },
    {
      img: screen2,
      title: "TURNO",
      des: "upload your own custom organization logo. own custom organization logo",
    },
    {
      img: screen3,
      title: "World Resources Institute",
      des: "select payment gateway depend on your business need.",
    },
    {
      img: screen4,
      title: "Thunder",
      des: "See what it's like to build custom EV charging App, without writing code!",
    },
    {
      img: screen5,
      title: "Thunder",
      des: "See what it's like to build custom EV charging App, without writing code!",
    },
    {
      img: screen6,
      title: "Kazam",
      des: "See what it's like to build custom EV charging App, without writing code!",
    },
    {
      img: screen7,
      title: "Charge Zone",
      des: "See what it's like to build custom EV charging App, without writing code!",
    },

    {
      img: screen8,
      title: "SHERU",
      des: "See what it's like to build custom EV charging App, without writing code!",
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
  class="bg-white flex flex-col gap-14 w-full min-h-screen sm:pt-5 px-[10vw] pt-[10vh] buildAnimateSteps opacity-0 overflow-y-auto"
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
    class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10"
  >
    {#each steps as step}
      <div class="flex flex-col bg-[#1A1F24] rounded-md">
        <div
          class="flex items-center w-full h-auto border border-t-gray-500 shadow-md shadow-black"
        >
          <img
            src={step.img}
            alt="logo"
            class="h-[150px] w-full mx-auto p-3 hover:p-1"
          />
        </div>
        <div
          class="flex flex-col items-start w-full bg-[#1C2428] border shadow-md shadow-black p-4"
        >
          <p class="text-white text-lg font-semibold">{step.title}</p>
          <p class="text-sm text-gray-300">{step.des}</p>

          <div class="flex justify-center bg-[#1C2428] mt-3">
            <Button
              class="bg-green-500 hover:bg-green-700 font-bold w-auto h-10 text-white px-4 py-2 flex items-center"
            >
              Know More
              <ArrowRightOutline class="w-6 h-6 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
