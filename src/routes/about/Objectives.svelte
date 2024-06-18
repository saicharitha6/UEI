<script lang="ts">
  import aim from "$lib/assets/images/aim.jpg";
  import { onMount } from "svelte";

  const animateData = async () => {
    const gsapModule = await import("gsap");
    const ScrollTriggerModule = await import("gsap/ScrollTrigger");
    const gsap = gsapModule.gsap;
    const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".buildAnimateSteps",
        start: "10% 80%",
      },
    });
    tl.fromTo(
      ".buildAnimateSteps",
      0.5,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
  };

  onMount(() => {
    animateData();
  });
</script>
<div class="flex flex-row items-center "  style="font-family: 'Open Sans'">
  <h2 class="buildAnimateSteps font-bold text-black pt-5 text-3xl ml-40">  Aims and Objectives</h2>
  <!-- <div class="ml-4 mr-20 flex-grow border-t border-black"></div> -->
</div>
<div
  class="w-full flex flex-col items-center justify-center "
  style="font-family: 'Open Sans'"
>
  <!-- <h3 class="buildAnimateSteps text-center text-3xl font-bold mb-5">
    Aims and Objectives
  </h3> -->
  
  <div class="lg:w-3/4">
    <div class="flex justify-center items-center">
      <div class="buildAnimateSteps flex py-3 rounded-lg">
        <p
          class="mb-3 text-xl lg:text-xl sm:text-xl text-black dark:text-gray-700"
        >
          The UEI Alliance is an inclusive, non-profit consortium composed of
          diverse stakeholders in the energy sector. Its primary mission is to
          promote the global development and adoption of the Beckn Protocol
          within the energy context, facilitating energy-related economic
          transactions between digital platforms.
        </p>
      </div>
    </div>
  </div>
</div>
