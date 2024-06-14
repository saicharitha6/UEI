<script>
  import { onMount } from "svelte";
  import mission from "$lib/assets/images/mission.png";

  let steps = [
    {
      icon: `<svg class="w-16 h-16 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/><path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>`,
      des: "UEI Alliance is a collaborative group formed by various stakeholders. It is aimed at transforming the energy sector through the adoption of open digital protocols and interoperability standards.",
      isSvg: true,
    },
    {
      icon: `<svg class="w-16 h-16 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"/>
</svg>
`,
      des: "The alliance serves as a hub for open network concepts, providing support and advisory services. Participation from both public and private organisations is highly encouraged.",
      isSvg: true,
    },
    {
      icon: `<svg class="w-16 h-16 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"/></svg>`,
      des: "The UEI Alliance is dedicated to expediting the expansion of the UEI network. A key aspect of this mission is to streamline the onboarding process for new energy platforms interested in adopting UEI.",
      isSvg: true,
    },
  ];

  const animateData = async () => {
    const gsapModule = await import("gsap");
    const ScrollTriggerModule = await import("gsap/ScrollTrigger");

    const gsap = gsapModule.gsap;
    const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".buildAnimate",
        start: "10% 90%",
      },
    });
    tl.fromTo(
      ".buildAnimate",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );
  };

  onMount(() => {
    animateData();
  });
</script>

<div class="mb-5 buildAnimate">
  <div class="flex items-center justify-center">
    <!-- <h3 class="font-bold text-3xl text-center text-black" style="font-family: 'proxima_nova">Our Mission</h3> -->
  </div>
  <div class="flex items-center justify-center">
    <p class="w-3/4 justify-center text-3xl text-black sm:content-center m-5">
      The UEI Alliance is committed to <b
        >global development, adoption, and compliance</b
      >
      with the Beckn Protocol for <b>energy-related economic transactions</b> between
      digital platforms.
    </p>
  </div>

  <!-- <h3 class="font-bold text-3xl text-center text-black" style="font-family: 'proxima_nova">Our Vision</h3>
  <div class="flex items-center flex-col">
    <div class="lg:w-3/4 md:w-3/4">
      <div
        class="w-full h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5"
      >
        {#each steps as step}
          <div class="relative buildAnimate flex flex-col">
            <div
              class="flex-grow flex flex-col justify-center items-center w-full bg-[#1C2428] p-4 rounded-md shadow-md shadow-black"
            >
              <div class="flex justify-center items-center h-15">
                {#if step.isSvg}
                  {@html step.icon}
                {:else}
                  <img src={step.icon} alt="icon" class="h-16 w-16" />
                {/if}
              </div>
              <p
                class="text-lg content-center sm:content-center lg:content-center text-gray-300 p-5" style="font-family: 'proxima_nova"
              >
                {step.des}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div> -->
</div>

<style>
  p {
    font-family: "proxima-nova";
  }
</style>
