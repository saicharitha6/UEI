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
  import { Carousel } from "flowbite-svelte";
  import courosel1 from "../assets/courosel1.png";
  import courosel2 from "../assets/c2.png";
  import courosel3 from "../assets/c3.png";

  const images = [{ src: courosel1 }, { src: courosel2 }, { src: courosel3 }];
</script>

<div class="relative h-auto flex justify-center mb-5">
  <div class="w-[90%]">
    <div class="space-y-4 items-center object-cover">
      <Carousel {images} duration={3900}></Carousel>

      <div
        class="text-white px-10 font-bold text-center absolute inset-0 flex justify-center items-center"
      >
        <h2 class="max-w-lg text-2xl sm:text-2xl md:text-3xl font-bold">
          UEI Alliance is formed by various stakeholders in the energy sector.
        </h2>
      </div>
    </div>
  </div>
</div>
