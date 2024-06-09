<script lang="ts">
  import { onMount } from "svelte";
  import Content from "$lib/components/Content.svelte";
  import { AccordionItem, Accordion } from "flowbite-svelte";
  import shortterm from "$lib/assets/images/short_term.jpg";
  import longterm from "$lib/assets/images/long_term.jpg";
  import aim from "$lib/assets/images/aim.jpg";
  let paragraphs: NodeListOf<HTMLElement>;

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
    paragraphs = document.querySelectorAll(".animate-float");
    animateParagraphs();
    animateData();
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

<div class="bg-white h-auto">
  <Content />
  <div class="about w-full flex flex-col items-center justify-center my-5">
    <h3 class="buildAnimate text-center text-3xl font-bold mb-5">
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
          <div class="buildAnimate flex p-5 rounded-lg">
            <p class="mb-3 font-normal text-gray-300 dark:text-gray-700">
              The UEI Alliance is an inclusive, non-profit consortium composed
              of diverse stakeholders in the energy sector. Its primary mission
              is to promote the global development and adoption of the Beckn
              Protocol within the energy context, facilitating energy-related
              economic transactions between digital platforms.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full p-5 sm:w-full lg:w-3/4">
      <div
        class="flex flex-col lg:flex-row justify-center items-center bg-gray-300 shadow-lg border px-7 rounded-xl mb-10"
      >
        <!-- Left side content -->
        <div class="w-full lg:w-1/2 lg:m-10">
          <h2 class="font-bold text-center text-2xl pt-5 sm:pt-5 text-black">
            Long-term Objectives
          </h2>
          <ul class="list-disc mt-5">
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
              Expand the UEI network to include a broader range of
              energy-related services and sectors, increasing its reach and user
              base across various industries.
            </li>
            <li class="animate-float">
              Work towards global interoperability by aligning the protocol with
              international standards and protocols, enabling seamless
              integration as a common underlying fabric.
            </li>
          </ul>
        </div>
        <!-- Right side image -->
        <div class="w-full lg:w-1/2 m-5">
          <img
            src={longterm}
            alt="long_term"
            class="h-50 w-50 mx-auto rounded-md"
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
              Support the technical integration of digital platforms with the
              UEI network by providing necessary expertise, knowledge and
              know-hows.
            </li>
            <li class="animate-float my-5">
              Engage with key stakeholders, including energy providers,
              regulatory bodies, utility companies, and market players, to
              enhance outreach efforts and promote network adoption.
            </li>
            <li class="animate-float my-5">
              Expand the UEI network to include a broader range of
              energy-related services and sectors, increasing its reach and user
              base across various industries.
            </li>
            <li class="animate-float">
              Conduct pilot programs in collaboration with multiple stakeholders
              to demonstrate UEI network's capabilities, potential for
              innovation, and possibilities for new use cases.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="justify-center">
    <h3 class="text-2xl text-center font-bold">
      The Necessity of the Alliance
    </h3>
    <div class="flex justify-center my-5">
      <p
        class="content-center lg:w-3/4 border shadow-lg p-3 mx-5 lg:mx-10 sm:mx-5 rounded-md sm:w-full"
      >
        The benefits of the Beckn Protocol, like expanded markets and inclusive
        open networks, become tangible only with substantial adoption and scale.
        For an initiative of this magnitude, the costs of coordination can
        become prohibitively high when pursued individually. Similar to the cell
        tower analogy, where shared infrastructure is more cost-effective and
        efficient than isolated efforts, the UEI Alliance unifies efforts to
        promote interoperability, reducing duplicated efforts and coordination
        complexities.
      </p>
    </div>
    <div class="mt-10 flex justify-center w-full">
      <Accordion class="w-full mb-10 lg:w-3/4 mx-5 sm:mx-5">
        <AccordionItem open class="bg-black hover:bg-gray-500">
          <span slot="header" class="text-white">What alliance is about?</span>
          <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
            <li class="mb-2 text-gray-600 dark:text-gray-400">
              Promotion of Open Standards
            </li>
            <li class="mb-2 text-gray-600 dark:text-gray-400">
              Server-Side Interoperability
            </li>
            <li class="mb-2 text-gray-600 dark:text-gray-400">
              Protocol Advocacy
            </li>
            <li class="mb-2 text-gray-600 dark:text-gray-400">
              Incubation of Ideas
            </li>
            <li class="mb-2 text-gray-600 dark:text-gray-400">
              Open Membership- Encouraging participation from both public and
              private organisations.
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem class="bg-black hover:bg-gray-500">
          <span slot="header" class="text-white"
            >What alliance is not about?</span
          >
          <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
            <li class="mb-2 text-gray-600 dark:text-gray-400">
              The alliance will not delve into hardware specifications like EV
              chargers or batteries.
            </li>
            <li class="mb-2 text-gray-600 dark:text-gray-400">
              It does not aim to create a nationwide network or infrastructure.
            </li>
            <li class="mb-2 text-gray-600 dark:text-gray-400">
              It is neither an industry association nor an energy expert group.
            </li>
            <li class="mb-2 text-gray-600 dark:text-gray-400">
              The alliance will not become the implementation arm for any
              network or become the anchor institution for such deployments
            </li>
            <li class="mb-2 text-gray-600 dark:text-gray-400">
              The alliance is open to evolving beyond its initial scope
              (use-cases and sector specificity) as it has probably been able to
              imagine only 1`% of the unlock potential on its own.
            </li>
          </ul>
        </AccordionItem>
      </Accordion>
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
