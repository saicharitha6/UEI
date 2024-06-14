<script lang="ts">
  import { Indicator } from "flowbite-svelte";
</script>

<div class="flex justify-center">
  <div class="flex flex-col w-3/4">
    <!-- <div class="flex justify-center items-center">
      <p class="justify-center font-medium" style="font-family: 'proxima_nova">
        <b>Unified Energy Interface</b> or UEI unifies digital efforts in energy
        transactions. Built on the open-source Beckn Protocol, which powers networks
        like Open Network for Digital Commerce (ONDC), Namma Yatri, Unified Health
        Interface (UHI), and Open Network for Education & Skilling Transformations
        (ONEST). it links platforms dealing in energy and its derivatives such as
        E V charging, battery swapping, renewable energy, and more. UEI creates a
        unified ecosystem, connecting providers and consumers of energy-related services,
        fostering innovation, and promoting efficient and sustainable energy use.
      </p>
    </div> -->
    <div>
      <h3
        class="text-2xl text-center font-sans font-extrabold mt-5"
        style="font-family: 'proxima_nova"
      >
        Imagine with UEI
      </h3>
    </div>
    <div class=" p-5 items-center justify-center flex">
      <!-- <Video src="/videos/flowbite.mp4" controls class="w-full max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700" trackSrc="flowbite.mp4" /> -->
      <iframe
        width="800"
        height="350"
        src="https://www.youtube.com/embed/ReqR_xvFjEI?si=sgdkwmTBMtLncS5K"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div
      class="inline p-2 bg-gradient-to-b from-black via-transparent to-white"
    ></div>
  </div>
  
</div>
<div class="flex justify-center mb-5">
  <Indicator color="dark" />
  <Indicator color="green" />
  <Indicator color="dark" />
</div>
