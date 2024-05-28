<script lang="ts">
  import { onMount } from "svelte";
  let paragraphs: NodeListOf<HTMLElement>;

  onMount(() => {
    paragraphs = document.querySelectorAll(".animate-float");
    animateParagraphs();
  });

  function animateParagraphs() {
    paragraphs.forEach((p, index) => {
      setTimeout(() => {
        p.classList.remove("hidden");
        p.classList.add(
          index % 2 === 0 ? "animate-float-in" : "animate-float-out"
        );
      }, index * 4000); // Adjust the delay to match the animation duration
    });
  }
</script>

<div class="about w-full flex flex-col items-center justify-center my-20">
  <div class="w-3/4 md:w-3/4 lg:w-1/2 flex items-center border shadow-lg p-5 rounded-lg">
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
      The UEI Alliance is committed to global development, adoption, and
      compliance with the Beckn Protocol for energy-related economic
      transactions between digital platforms. The alliance serves as a hub for
      open network concepts, providing support and advisory services.
      Participation from both public and private organisations is highly
      encouraged.
    </p>
  </div>

  <h2 class="font-bold mt-5 text-center  text-3xl text-green-600">
    Our Mission
  </h2>
  <div
    class="w-3/4 md:w-3/4 lg:w-1/2 bg-scroll flex flex-col justify-center font-normal text-gray-500 dark:text-gray-400 bg-white py-4 px-6 mx-5 align-middle"
  >
    <!-- Paragraphs with floating animation -->
    <ul class="list-disc">
      <li class="animate-float">
        UEI Alliance is a collaborative group formed by various stakeholders in
        the energy sector, committed to global development, adoption, and
        compliance with the Beckn Protocol for energy-related economic
        transactions between digital platforms.
      </li>
      <li class="animate-float mt-5 mb-5">
        This alliance transcends specific sectors like electric vehicles (EVs)
        or battery technology, encompassing a wide range of energy-related
        transaction domains.
      </li>
      <li class="animate-float">
        Its primary aim is to promote the adoption and interoperability of the
        Beckn Protocol within the energy field, thereby scaling the Unified
        Energy Interface (UEI) network. Operating as a think tank, the alliance
        focuses on enhancing digital economic transactions between energy
        platforms, particularly in resource discovery and fulfillment.
      </li>
    </ul>
  </div>
</div>

<style>
  /* Style for the border triangle */
  /* Animation for floating effect */
  @keyframes float {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  /* Apply animation to paragraphs */
  .animate-float {
    animation: float 0.5s ease-in-out;
    animation-fill-mode: forwards; /* Ensure that the animation stays applied after it finishes */
    opacity: 0; /* Hide paragraphs initially */
  }

  /* Delay each paragraph by 1 second */
  .animate-float:nth-child(1) {
    animation-delay: 1s;
  }

  .animate-float:nth-child(2) {
    animation-delay: 2s;
  }

  .animate-float:nth-child(3) {
    animation-delay: 3s;
  }
</style>
