<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";

  const animateData = () => {
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
  class="flex flex-col gap-8 h-max px-[10vw] w-full animation_text"
  style="font-family: 'Open Sans'"
>
  <p
    class="text-center text-5xl lg:text-7xl md:text-6xl sm:text-5xl sm:text-center sm:mx-auto mx-auto font-semibold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-black pb-4 to-gray-800"
  >
    UEI Alliance is a collaborative group<br />
  </p>
</div>
