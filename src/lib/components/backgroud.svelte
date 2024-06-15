<!-- <script>
  import background from "../lib/images/bg.jpg";
</script>

<div class="relative h-auto">
  <img
    class="md:max-h-50 object-cover w-full rounded-b-2xl"
    src={background}
    alt="background"
  />

  <div
    class="text-white p-10 left-10 font-bold text-right absolute inset-0 flex lg:justify-start lg:items-center md:justify-start md:items-center justify-start items-center"
  >
    <h2 class="max-w-lg lg:max-w-lg text-3xl font-bold">
      UEI Alliance is formed by various stakeholders in the energy sector.
    </h2>
  </div>
</div> -->

<script lang="ts">
  import { Carousel, Video } from "flowbite-svelte";
  import courosel1 from "$lib/assets/images/linkedinImage1.jpg";
  import courosel2 from "$lib/assets/images/linkedinImage2.jpg";
  import courosel3 from "$lib/assets/images/linkedinImage3.jpg";
  // import courosel4 from "$lib/assets/images/linkedinImage4.jpg";

  const images = [{ src: courosel1 }, { src: courosel2 }, { src: courosel3 }];
</script>


<div class="flex justify-center mx-5">
  <div class=" items-center justify-center w-3/4">
    <p class="text-lg" style="font-family: 'Open Sans'">
      <b>Unified Energy Interface</b> or UEI unifies digital efforts in energy transactions.
      Built on the open-source Beckn Protocol, which powers networks like Open Network
      for Digital Commerce (ONDC), Namma Yatri, Unified Health Interface (UHI), and
      Open Network for Education & Skilling Transformations (ONEST). it links platforms
      dealing in energy and its derivatives such as E V charging, battery swapping,
      renewable energy, and more. UEI creates a unified ecosystem, connecting providers
      and consumers of energy-related services, fostering innovation, and promoting
      efficient and sustainable energy use.
    </p>
  </div>
</div>

<div class="relative h-[100%] flex justify-center mb-5"  style="font-family: 'Open Sans'">
  <div class="w-[90%] h-[100%] lg:w-3/4 md:w-3/4 lg:p-5 md:p-5">
    <div class=" items-center">
      <Carousel {images} duration={3900} class="rounded-none"></Carousel>
    </div>
    <div class="text-center items-center">
      <h2 class="bg-black text-white p-5 text-xl sm:text-2xl md:text-3xl font-bold">
        UEI Alliance is formed by various stakeholders in the energy sector.
      </h2>
    </div>
  </div>
</div>
<div class="justify-center items-center">
  <!-- <Video src="https://www.youtube.com/embed/ReqR_xvFjEI?si=IM3xI2_FAhYfBxfB" controls class="w-full max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700" trackSrc="flowbite.mp4" /> -->
  <!-- <iframe class="video" src="https://www.youtube.com/embed/ReqR_xvFjEI?si=IM3xI2_FAhYfBxfB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
</div>

