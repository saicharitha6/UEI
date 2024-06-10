<script>
  import { AccordionItem, Accordion } from "flowbite-svelte";
  import { onMount } from "svelte";
  //   let paragraphs: NodeListOf<HTMLElement>;

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
        trigger: ".buildAnimate",
        start: "10% 80%",
      },
    });
    tl.fromTo(
      ".buildAnimate",
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
    ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
  };

  onMount(() => {
    // paragraphs = document.querySelectorAll(".animate-float");
    // animateParagraphs();
    animateData();
  });

  //   function animateParagraphs() {
  //     paragraphs.forEach((p, index) => {
  //       setTimeout(() => {
  //         p.classList.remove("hidden");
  //         p.classList.add(
  //           index % 2 === 0 ? "animate-float-in" : "animate-float-out"
  //         );
  //       }, index * 4000); // Adjust the delay to match the animation duration
  //     });
  //   }
</script>

<div id="scroll-wrapper" class="justify-center buildAnimate">
  <h3 id="smooth-content" class="buildAnimate text-2xl text-center font-bold">
    The Necessity of the Alliance
  </h3>
  <div class="flex justify-center my-5">
    <p
      class="buildAnimate content-center lg:w-3/4 border shadow-lg p-3 mx-5 lg:mx-10 sm:mx-5 rounded-md sm:w-full"
    >
      The benefits of the Beckn Protocol, like expanded markets and inclusive
      open networks, become tangible only with substantial adoption and scale.
      For an initiative of this magnitude, the costs of coordination can become
      prohibitively high when pursued individually. Similar to the cell tower
      analogy, where shared infrastructure is more cost-effective and efficient
      than isolated efforts, the UEI Alliance unifies efforts to promote
      interoperability, reducing duplicated efforts and coordination
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
        <span slot="header" class="text-white">What alliance is not about?</span
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
            The alliance will not become the implementation arm for any network
            or become the anchor institution for such deployments
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-400">
            The alliance is open to evolving beyond its initial scope (use-cases
            and sector specificity) as it has probably been able to imagine only
            1`% of the unlock potential on its own.
          </li>
        </ul>
      </AccordionItem>
    </Accordion>
  </div>
</div>
