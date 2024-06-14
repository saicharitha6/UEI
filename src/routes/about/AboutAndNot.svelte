<script>
  import { onMount } from "svelte";

  const animateData = async () => {
    const gsapModule = await import("gsap");
    const ScrollTriggerModule = await import("gsap/ScrollTrigger");

    const gsap = gsapModule.gsap;
    const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

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
  };

  onMount(() => {
    animateData();
  });
</script>

<div class="justify-center">
  <h3
    class="buildAnimate text-2xl text-center text-black font-bold"
    style="font-family: 'proxima_nova"
  >
    Why Do We Need an Alliance?
  </h3>
  <div class="flex justify-center my-5">
    <p
      class="buildAnimate content-center text-lg lg:w-3/4 border shadow-lg p-3 mx-5 lg:mx-10 sm:mx-5 rounded-md sm:w-full"
      style="font-family: 'proxima_nova"
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

  <div class="flex items-center justify-center">
    <div class="mt-10 items-center justify-center w-3/4">
      <h2
        class="text-black text-2xl ml-5 font-bold buildAnimate"
        style="font-family: 'proxima_nova"
      >
        The Alliance will focus on being a..
      </h2>
      <ul
       class="ps-5 custom-list  text-lg dark:text-gray-400 text-gray-500"
        style="font-family: 'proxima_nova"
      >
        <li class="mb-2 text-gray-600 dark:text-gray-400">
          <span class="border border-[#4caf50] p-1">Promotion of Open Standards</span>
        </li>
        <li class="mb-2 text-gray-600 dark:text-gray-400">
          <span class="border border-[#4caf50] p-1">Server-Side Interoperability</span>
        </li>
        <li class="mb-2 text-gray-600 dark:text-gray-400">Protocol Advocacy</li>
        <li class="mb-2 text-gray-600 dark:text-gray-400">
          Incubation of Ideas
        </li>
        <li class="mb-2 text-gray-600 dark:text-gray-400">
          Open Membership- Encouraging participation from both public and
          private organisations.
        </li>
      </ul>
    </div>
  </div>
  </div>

  <div class="flex items-center justify-center">
    <div class="mt-10 items-center justify-center w-3/4">
      <h2
        class="text-black text-2xl ml-5 font-bold buildAnimate"
        style="font-family: 'proxima_nova"
      >
        And alliance is not involve in..
      </h2>
      <ul
        class="ps-5 custom-list1  text-lg dark:text-gray-400 text-gray-500"
        style="font-family: 'proxima_nova"
      >
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
          The alliance will not become the implementation arm for any network or
          become the anchor institution for such deployments
        </li>
        <li class="mb-2 text-gray-600 dark:text-gray-400">
          The alliance is open to evolving beyond its initial scope (use-cases
          and sector specificity) as it has probably been able to imagine only
          1`% of the unlock potential on its own.
        </li>
      </ul>
    </div>
  </div>

  


<style>
  .custom-list {
    list-style-type: none;
    padding-left: 1.5rem;
  }

  .custom-list li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
  /* Green color */
  }

  .custom-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 0.75rem;
    height: 0.75rem;
    background-color: #4caf50; /* Green color */
    border-radius: 20%;
  }

  .custom-list1 {
    list-style-type: none;
    padding-left: 1.5rem;
  }

  .custom-list1 li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
  /* Green color */
  }

  .custom-list1 li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 0.75rem;
    height: 0.75rem;
    background-color: red; /* Green color */
    border-radius: 20%;
  }
</style>
