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

<div class="justify-center" style="font-family: 'proxima_nova">
  <h3
    class="buildAnimate text-2xl text-center text-black font-bold"
    style="font-family: 'proxima_nova"
  >
    Why Do We Need an Alliance?
  </h3>
  <div class="flex justify-center my-5">
    <p
      class="buildAnimate content-center bg-black p-5 text-white text-lg lg:w-3/4 border shadow-lg mx-5 lg:mx-10 sm:mx-5 rounded-md sm:w-full"
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
        class="text-black text-2xl ml-5 mb-5 font-bold buildAnimate"
        style="font-family: 'proxima_nova"
      >
        The Alliance will focus on being a..
      </h2>

      <ul
        class="ps-5 custom-list text-lg dark:text-gray-400 text-gray-500"
        style="font-family: 'proxima_nova"
      >
        <div
          class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1"
        >
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
  </div>
</div>

<div class="flex items-center justify-center mb-10">
  <div class="mt-10 items-center justify-center w-3/4">
    <h2
      class="text-black text-2xl ml-5 mb-5 font-bold buildAnimate"
      style="font-family: 'proxima_nova"
    >
      And alliance is not involve in..
    </h2>
    <ul
      class="ps-5 custom-list1 text-lg dark:text-gray-400 text-gray-500"
      style="font-family: 'proxima_nova"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"
      >
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
    top: 0.75rem;
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
    top: 0.75rem;
    width: 0.75rem;
    height: 0.75rem;
    background-color: red; /* Green color */
    border-radius: 20%;
  }

  span {
    width: 20rem;
  }
</style>
