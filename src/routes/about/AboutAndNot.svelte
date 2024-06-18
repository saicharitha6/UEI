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

<div
  class="buildAnimate mx-[5vw] flex flex-row items-center"
  style="font-family: 'Open Sans'"
>
  <h2 class="font-bold text-black py-5 text-3xl">
    Why Do We Need an Alliance?
  </h2>
  <div class="ml-5 flex-grow border-t border-black"></div>
</div>

<div class="flex mx-[5vw]">
  <p class="buildAnimate py-5 text-black text-[22px]">
    The benefits of the Beckn Protocol, like expanded markets and inclusive open
    networks, become tangible only with substantial adoption and scale. For an
    initiative of this magnitude, the costs of coordination can become
    prohibitively high when pursued individually. Similar to the cell tower
    analogy, where shared infrastructure is more cost-effective and efficient
    than isolated efforts, the UEI Alliance unifies efforts to promote
    interoperability, reducing duplicated efforts and coordination complexities.
  </p>
</div>

<div
  class="flex mb-10 flex-col lg:flex-row sm:flex-col justify-between mx-[2vw] sm:mx-[2vw] lg:mx-[5vw]"
  style="font-family: 'Open Sans'"
>
  <div class="flex flex-col">
    <h2 class="text-black text-2xl mb-5 sm:ml-5 lg:ml-0 ml-5 font-bold buildAnimate">
      The Alliance will focus on being a..
    </h2>

    <ul class="sm:ps-5 ps-5 lg:ps-0 custom-list text-[22px] dark:text-gray-400 text-gray-500">
      <div class="flex flex-col">
        <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
          <div class="border border-green-500 p-1">
            Promotion of Open Standards
          </div>
        </li>
        <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
          <div class="border border-green-500 p-1">
            Server-Side Interoperability
          </div>
        </li>
        <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
          <div class="border border-green-500 p-1">Protocol Advocacy</div>
        </li>
        <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
          <div class="border border-green-500 p-1">Incubation of Ideas</div>
        </li>
        <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
          <div class="border border-green-500 p-1">Open Membership</div>
        </li>
      </div>
    </ul>
  </div>

  <div class="flex flex-col mb-10 mt-0 sm:mt-10 lg:mt-0" style="font-family: 'Open Sans'">
    <h2 class="text-black text-2xl ml-5 mb-5 font-bold buildAnimate">
      And alliance is not involve in..
    </h2>
    <ul class="ps-5 custom-list1 text-[22px] dark:text-gray-400 text-gray-500">
      <div class="flex flex-col">
        <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
          <div class="border border-red-500 p-1">Hardware Specifications</div>
        </li>
        <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
          <div class="border border-red-500 p-1">
            National Infrastructure Development.
          </div>
        </li>
        <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
          <div class="border border-red-500 p-1">
            Being an industry association/energy expert group.
          </div>
        </li>
        <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
          <div class="border border-red-500 p-1">
            Being an implementation arm for any network.
          </div>
        </li>
      </div>
    </ul>
  </div>
</div>

<style>
  .custom-list {
    list-style-type: none;
    /* padding-left: 1.5rem; */
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
    top: 0.75rem;
    width: 0.75rem;
    height: 0.75rem;
    background-color: #4caf50; /* Green color */
    border-radius: 20%;
  }

  .custom-list1 {
    list-style-type: none;
    /* padding-left: 1.5rem; */
  }

  .custom-list1 li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .custom-list1 li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.75rem;
    width: 0.75rem;
    height: 0.75rem;
    background-color: red;
    border-radius: 20%;
  }
</style>
