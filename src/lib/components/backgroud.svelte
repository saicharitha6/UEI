<script lang="ts">
  import { Carousel, Video } from "flowbite-svelte";
  import courosel1 from "$lib/assets/images/linkedinImage1.jpg";
  import courosel2 from "$lib/assets/images/linkedinImage2.jpg";
  import courosel3 from "$lib/assets/images/linkedinImage3.jpg";

  const images = [{ src: courosel1 }, { src: courosel2 }, { src: courosel3 }];
</script>

<div class="flex justify-center mx-5 lg:mx-0 sm:mx-5 my-10 sm:my-10 lg:my-5 bg-[#f7f9f7] ">
  <div class="items-center justify-center w-3/4">
    <p class="text-2xl italic my-5" style="font-family: 'Open Sans'">
      <b><b class="text-3xl italic">"</b>Unified Energy Interface</b> or UEI unifies digital efforts in energy transactions.
      Built on the open-source Beckn Protocol, which powers networks like Open Network
      for Digital Commerce (ONDC), Namma Yatri, Unified Health Interface (UHI), and
      Open Network for Education & Skilling Transformations (ONEST). it links platforms
      dealing in energy and its derivatives such as E V charging, battery swapping,
      renewable energy, and more. UEI creates a unified ecosystem, connecting providers
      and consumers of energy-related services, fostering innovation, and promoting
      efficient and sustainable energy use.<b class="text-3xl italic">"</b>
    </p>
  </div>
</div>

<div
  class="relative h-[100%] flex justify-center mb-5"
  style="font-family: 'Open Sans'"
>
  <div class="w-[90%] h-[100%] lg:w-3/4 md:w-3/4 lg:p-5 md:p-5">
    <div class=" items-center">
      <Carousel {images} duration={3900} class="rounded-none"></Carousel>
    </div>
    <div class="text-center items-center">
      <h2
        class="bg-black text-white p-5 text-xl sm:text-2xl md:text-3xl font-bold"
      >
      UEI Alliance is a Collaborative Group.
      </h2>
    </div>
  </div>
</div>
