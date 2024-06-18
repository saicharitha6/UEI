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

<div class="mb-5 buildAnimate" style="font-family: 'Open Sans'">
    <div class="flex flex-row items-center">
      <h2 class="font-bold text-black py-5 text-3xl ml-40">Our Mission</h2>
      <div class="ml-4 mr-20 flex-grow border-t border-black"></div>
  </div>
  
  <div class="flex items-center justify-center">
    <p class="w-3/4 justify-center  text-3xl text-black m-5">
      <b class="italic text-2xl lg:text-3xl sm:text-2xl font-bold">" </b>The UEI Alliance is committed to <b
        >global development, adoption, and compliance</b
      >
      with the Beckn Protocol for <b>energy-related economic transactions</b> between
      digital platforms.<b class="italic text-4xl font-bold">"</b>
    </p>
  </div>
</div>
<div class="relative bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-black to-gray mt-3"></div>
 