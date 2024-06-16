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

<div
  class="w-full flex flex-col items-center justify-center my-5"
  style="font-family: 'Open Sans'"
>
  <h3 class="buildAnimateSteps text-center text-3xl font-bold mb-5">
    Aims and Objectives
  </h3>
  <div class="lg:w-3/4">
    <div
      class="flex flex-col sm:flex-row rounded-md border bg-[#141a1d] justify-center items-center"
    >
      <div class="text-center sm:text-left">
        <img src={aim} alt="aim" class="buildAnimate lg:h-auto w-auto" />
      </div>
      <div
        class="w-3/4 lg:3/4 md:w-3/4 sm:w-3/4 bg-[#141a1d] items-center justify-center"
      >
        <div class="buildAnimateSteps flex p-5 rounded-lg">
          <p
            class="mb-3 text-xl text-gray-300 dark:text-gray-700"
            style="font-family: 'proxima_nova"
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
</div>
