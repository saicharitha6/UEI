<script>
  import { onMount } from "svelte";
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

<div
  class="flex flex-col px-[5vw] mb-5 buildAnimate"
  style="font-family: 'Open Sans'"
>
  <div class="flex flex-row items-center">
    <h2 class="font-bold text-black py-5 text-3xl">Our Mission</h2>
    <div class="ml-5 flex-grow border-t border-black"></div>
  </div>

  <div class="flex">
    <p class=" text-[22px] text-black">
      The UEI Alliance is committed to <b
        >global development, adoption, and compliance</b
      >
      with the Beckn Protocol for <b>energy-related economic transactions</b> between
      digital platforms.
    </p>
  </div>
</div>
<!-- <div class="relative mx-[5vw] bottom-0  w-full h-0.5 bg-gradient-to-r from-black to-gray-500 mt-3"></div> -->
