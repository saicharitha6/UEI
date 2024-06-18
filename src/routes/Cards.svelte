<script lang="ts">
  import { onMount } from "svelte";

  let cards: NodeListOf<HTMLElement>;

  // Function to animate the cards
  function animateCards() {
    cards.forEach((card: HTMLElement, index) => {
      setTimeout(() => {
        card.classList.add("floating");
      }, index * 500); // Adjust the delay between each card animation
    });
  }

  // Check if window object is available (client side)
  // Execute the code only if window object is available
  $: if (typeof window !== "undefined") {
    onMount(() => {
      cards = document.querySelectorAll(".card");
      animateCards(); // Trigger card animation on mount
    });
  }
</script>

<div class="lg:right-0 text-xl" style="font-family: 'Open Sans'">
  <div class="flex flex-row items-center">
    <h2 class="font-bold text-black py-5 text-3xl pl-[5vw]">Focus Areas</h2>
    <div class="ml-4 mr-20 flex-grow border-t border-black"></div>
  </div>
  <div class="justify-center items-center w-full px-[5vw] p-5">
    <div
      class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 md:gap-4 lg:gap-6"
    >
      {#each Array.from({ length: 3 }) as _, i}
        <div
          class="card floating rounded-lg text-lg shadow-md bg-white border overflow-hidden"
        >
          {#if i === 0}
            <div
              class="bg-black text-white font-bold py-2 px-4 rounded-t-lg text-center"
            >
              Scaling Transactions
            </div>
            <p class="text-black p-3">
              The primary aim is to increase transaction volume within the UEI
              network.
            </p>
          {:else if i === 1}
            <div
              class="bg-black text-white font-bold py-2 px-4 rounded-t-lg text-center"
            >
              Ease of Scaling
            </div>
            <p class="text-black p-3">
              Promoting a scalable model for easy integration of new and
              existing participants.
            </p>
          {:else}
            <div
              class="bg-black text-white font-bold py-2 px-4 rounded-t-lg text-center"
            >
              Ease of Adoption
            </div>
            <p class="text-black p-3" style="font-family: 'Open Sans'">
              Ensuring the Beckn Protocol remains relevant and adaptable to
              market needs, guiding technical evolution, and governance.
            </p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
<div class="flex pl-[5vw] flex-row items-center mt-5">
  <h2 class="font-bold text-3xl">What is UEI?</h2>
  <div class="ml-4 mr-20 flex-grow border-t border-black"></div>
</div>
<div
  class="flex flex-col px-[5vw] justify-center mx-5 lg:mx-0 sm:mx-5 my-10 sm:my-10 lg:my-5 bg-[#f7f9f7]"
>
 
  <div
    class="items-center justify-center transition-colors from-white to-gray-500"
  >
    <p class="text-xl my-5" style="font-family: 'Open Sans'">
      <b>Unified Energy Interface</b> or UEI unifies digital efforts in energy transactions.
      Built on the open-source Beckn Protocol, which powers networks like Open Network
      for Digital Commerce (ONDC), Namma Yatri, Unified Health Interface (UHI), and
      Open Network for Education & Skilling Transformations (ONEST). It links platforms
      dealing in energy and its derivatives such as E V charging, battery swapping,
      renewable energy, and more.
    </p>
    <p class="text-xl italic my-5" style="font-family: 'Open Sans'">
      UEI creates a unified ecosystem, connecting providers and consumers of
      energy-related services, fostering innovation, and promoting efficient and
      sustainable energy use.
    </p>
  </div>
</div>

<style>
  @keyframes float {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .card {
    position: relative;
    opacity: 0; /* Initially hide cards */
    animation-fill-mode: forwards; /* Ensure animation stays applied after it finishes */
    margin-bottom: 10%;
  }

  .floating {
    animation: float 1s ease-in-out;
    opacity: 1; /* Show cards when floating animation starts */
  }
</style>
