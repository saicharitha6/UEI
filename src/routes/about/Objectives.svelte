<script lang="ts">
  import shortterm from "$lib/assets/images/short_term.jpg";
  import longterm from "$lib/assets/images/long_term.jpg";
  import aim from "$lib/assets/images/aim.jpg";
  import { onMount } from "svelte";

  const animateData = async () => {
    const gsapModule = await import("gsap");
    const ScrollTriggerModule = await import("gsap/ScrollTrigger");
    const ScrollSmoothModule = await import("gsap/all");

    const gsap = gsapModule.gsap;
    const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
    const ScrollSmoother = ScrollSmoothModule.ScrollSmoother;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".buildAnimateSteps",
        start: "10% 80%",
      },
    });
    tl.fromTo(
      ".buildAnimateSteps",
      0.5,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
    // ScrollSmoother.create({
    //   content: "#smooth-content",
    //   wrapper: "#smooth-wrapper",
    //   smooth: 1.5,
    //   effects: true,
    // });
  };

  onMount(() => {
    animateData();
  });
</script>

<div
  id="smooth-wrapper"
  class="about w-full flex flex-col items-center justify-center my-5"
>
  <h3
    id="smooth-content"
    class="buildAnimateSteps text-center text-3xl font-bold mb-5"
  >
    Aims and Objectives
  </h3>
  <div class="lg:w-3/4">
    <div
      class="flex flex-col sm:flex-row mx-5 rounded-md border bg-[#141a1d] justify-center items-center"
    >
      <div class="text-center sm:text-left">
        <img src={aim} alt="aim" class="buildAnimate lg:h-auto w-auto" />
      </div>
      <div
        class="w-3/4 lg:3/4 md:w-3/4 sm:w-3/4 bg-[#141a1d] items-center justify-center"
      >
        <div class="buildAnimateSteps flex p-5 rounded-lg">
          <p class="mb-3 font-normal text-gray-300 dark:text-gray-700">
            The UEI Alliance is an inclusive, non-profit consortium composed of
            diverse stakeholders in the energy sector. Its primary mission is to
            promote the global development and adoption of the Beckn Protocol
            within the energy context, facilitating energy-related economic
            transactions between digital platforms.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="justify-center flex">
  <div class="w-full p-5 sm:w-full lg:w-3/4">
    <div
      class="flex flex-col lg:flex-row justify-center items-center bg-gray-300 shadow-lg border px-7 rounded-xl mb-10"
    >
      <!-- Left side content -->
      <div
        id="smooth-wrapper"
        class="buildAnimateSteps w-full lg:w-1/2 lg:m-10"
      >
        <h2
          id="smooth-content"
          class="buildAnimateSteps font-bold text-center text-2xl pt-5 sm:pt-5 text-black"
        >
          Long-term Objectives
        </h2>
        <ul class="buildAnimateSteps list-disc mt-5">
          <li class="animate-float">
            Enhance digital economic transactions within the energy sector by
            unifying efforts, reducing coordination complexities, and scaling
            the Unified Energy Interface (UEI) network.
          </li>
          <li class="animate-float my-5">
            Ensure the Beckn Protocol remains relevant and adaptable to market
            needs, guiding its technical evolution and governance.
          </li>
          <li class="animate-float my-5">
            Expand the UEI network to include a broader range of energy-related
            services and sectors, increasing its reach and user base across
            various industries.
          </li>
          <li class="animate-float">
            Work towards global interoperability by aligning the protocol with
            international standards and protocols, enabling seamless integration
            as a common underlying fabric.
          </li>
        </ul>
      </div>
      <!-- Right side image -->
      <div class="w-full lg:w-1/2 m-5">
        <img
          src={longterm}
          alt="long_term"
          class="buildAnimateSteps h-50 w-50 mx-auto rounded-md"
        />
      </div>
    </div>

    <!-- Short-term Objectives -->
    <div
      class="flex flex-col lg:flex-row justify-center items-center bg-gray-300 shadow-lg border rounded-xl px-6"
    >
      <!-- Left side image -->
      <div class="w-full lg:w-1/2 m-5 order-last lg:order-first">
        <img
          src={shortterm}
          alt="short_term"
          class="h-50 w-50 mx-auto rounded-md"
        />
      </div>
      <!-- Right side content -->
      <div class="w-full lg:w-1/2 mx-10 lg:m-10 order-first lg:order-last">
        <h2 class="font-bold text-center text-2xl text-black pt-5 sm:pt-5">
          Short-term Objectives
        </h2>
        <ul class="list-disc mt-5">
          <li class="animate-float">
            Support the technical integration of digital platforms with the UEI
            network by providing necessary expertise, knowledge and know-hows.
          </li>
          <li class="animate-float my-5">
            Engage with key stakeholders, including energy providers, regulatory
            bodies, utility companies, and market players, to enhance outreach
            efforts and promote network adoption.
          </li>
          <li class="animate-float my-5">
            Expand the UEI network to include a broader range of energy-related
            services and sectors, increasing its reach and user base across
            various industries.
          </li>
          <li class="animate-float">
            Conduct pilot programs in collaboration with multiple stakeholders
            to demonstrate UEI network's capabilities, potential for innovation,
            and possibilities for new use cases.
          </li>
        </ul>
      </div>
    </div>
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
    animation-delay: 0.5s;
  }

  .animate-float:nth-child(2) {
    animation-delay: 1s;
  }

  .animate-float:nth-child(3) {
    animation-delay: 1.5s;
  }
</style>
