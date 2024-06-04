<script lang="ts">
  // import AppBuilderDashboardImg from "../../lib/images/member3.png";
  import gsap from "gsap";
  import { onMount } from "svelte";

  const animateData = () => {
    gsap.to(".animateImage", {
      x: 100,
      force3D: true, // always uses 3d
    });

    const tl = gsap.timeline();
    tl.fromTo(
      ".animation_text",
      { y: -100, opacity: 0 },
      { y: 0, delay: 0.5, opacity: 1, duration: 0.7 }
    );
  };

  onMount(() => {
    animateData();
  });
</script>


<div
  class="flex flex-col gap-8 h-max px-[10vw] w-full animation_text opacity-0"
>
  <p
    class="text-center text-7xl mx-auto font-semibold mt-40 text-transparent bg-clip-text bg-gradient-to-r from-green-400 pb-4 to-sky-500 leading-[85px] "
  >UEI Alliance is a collaborative group<br/>
  
  </p>
  <p class="text-xl text-center text-gray-400 font-semibold">
    The UEI Alliance is committed to global development, adoption, and
      compliance with the Beckn Protocol<br/> for energy-related economic
      transactions between digital platforms.  
  </p>
<!-- 
  <div class="animateImage">
    <img src={AppBuilderDashboardImg} alt="" class="mt-16" />
  </div> -->
</div>
