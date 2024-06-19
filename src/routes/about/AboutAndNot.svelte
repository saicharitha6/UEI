<!-- <script>
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
</script> -->

<div
  class="mx-[5vw] flex flex-row items-center"
  style="font-family: 'Open Sans'"
>
  <h2 class="font-bold text-black py-5 text-3xl">
    Why Do We Need an Alliance?
  </h2>
  <div class="ml-5 flex-grow border-t border-black"></div>
</div>

<div class="flex mx-[5vw]">
  <p class="py-5 text-black text-[22px]">
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
    <h2
      class="text-black text-2xl mb-5 sm:ml-5 lg:ml-0 ml-5 font-bold buildAnimate"
    >
      The Alliance will focus on being a..
    </h2>

    <ul
      class="sm:ps-5 ps-5 lg:ps-0 text-[22px] dark:text-gray-400 text-gray-500"
    >
      <div class="flex flex-col">
        <div class="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="24"
            height="24"
            class="mt-2"
          >
            <path
              fill="green"
              d="M168 364.4c-5.6 5.6-14.8 5.6-20.4 0L21.2 238.8c-5.6-5.6-5.6-14.8 0-20.4l29.8-29.8c5.6-5.6 14.8-5.6 20.4 0l96.2 96.2 192.4-192.4c5.6-5.6 14.8-5.6 20.4 0l29.8 29.8c5.6 5.6 5.6 14.8 0 20.4L188.4 364.4c-5.6 5.6-14.8 5.6-20.4 0z"
            />
          </svg>

          <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
            <div>Promotion of Open Standards</div>
          </li>
        </div>
        <div class="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="24"
            height="24"
            class="mt-2"
          >
            <path
              fill="green"
              d="M168 364.4c-5.6 5.6-14.8 5.6-20.4 0L21.2 238.8c-5.6-5.6-5.6-14.8 0-20.4l29.8-29.8c5.6-5.6 14.8-5.6 20.4 0l96.2 96.2 192.4-192.4c5.6-5.6 14.8-5.6 20.4 0l29.8 29.8c5.6 5.6 5.6 14.8 0 20.4L188.4 364.4c-5.6 5.6-14.8 5.6-20.4 0z"
            />
          </svg>
          <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
            <div>Server-Side Interoperability</div>
          </li>
        </div>
        <div class="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="24"
            height="24"
            class="mt-2"
          >
            <path
              fill="green"
              d="M168 364.4c-5.6 5.6-14.8 5.6-20.4 0L21.2 238.8c-5.6-5.6-5.6-14.8 0-20.4l29.8-29.8c5.6-5.6 14.8-5.6 20.4 0l96.2 96.2 192.4-192.4c5.6-5.6 14.8-5.6 20.4 0l29.8 29.8c5.6 5.6 5.6 14.8 0 20.4L188.4 364.4c-5.6 5.6-14.8 5.6-20.4 0z"
            />
          </svg>
          <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
            <div>Protocol Advocacy</div>
          </li>
        </div>
        <div class="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="24"
            height="24"
            class="mt-2"
          >
            <path
              fill="green"
              d="M168 364.4c-5.6 5.6-14.8 5.6-20.4 0L21.2 238.8c-5.6-5.6-5.6-14.8 0-20.4l29.8-29.8c5.6-5.6 14.8-5.6 20.4 0l96.2 96.2 192.4-192.4c5.6-5.6 14.8-5.6 20.4 0l29.8 29.8c5.6 5.6 5.6 14.8 0 20.4L188.4 364.4c-5.6 5.6-14.8 5.6-20.4 0z"
            />
          </svg>
          <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
            <div>Incubation of Ideas</div>
          </li>
        </div>
        <div class="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="24"
            height="24"
            class="mt-2"
          >
            <path
              fill="green"
              d="M168 364.4c-5.6 5.6-14.8 5.6-20.4 0L21.2 238.8c-5.6-5.6-5.6-14.8 0-20.4l29.8-29.8c5.6-5.6 14.8-5.6 20.4 0l96.2 96.2 192.4-192.4c5.6-5.6 14.8-5.6 20.4 0l29.8 29.8c5.6 5.6 5.6 14.8 0 20.4L188.4 364.4c-5.6 5.6-14.8 5.6-20.4 0z"
            />
          </svg>
          <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
            <div>Open Membership</div>
          </li>
        </div>
      </div>
    </ul>
  </div>
 <!-- Vertical line here -->
 <div class="border-l border-black ml-20 my-5 lg:my-0 hidden lg:block"></div>
  <div
    class="flex flex-col mb-10 mt-0 sm:mt-10 lg:mt-0"
    style="font-family: 'Open Sans'"
  >
    <h2 class="text-black text-2xl ml-5 mb-5 font-bold buildAnimate">
      And alliance is not involve in..
    </h2>
    <ul class="ps-5 text-[22px] dark:text-gray-400 text-gray-500">
      <div class="flex flex-col">
        <div class="flex flex-row">
          <!-- SVG Close Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
            width="24"
            height="24"
            class="mt-1"
          >
            <path
              fill="red"
              d="M335.5 113.9l-21.9-21.9c-4.7-4.7-12.3-4.7-17 0L176 231 55.4 110.4c-4.7-4.7-12.3-4.7-17 0L16.5 132.3c-4.7 4.7-4.7 12.3 0 17L137 256 16.5 376.7c-4.7 4.7-4.7 12.3 0 17l21.9 21.9c4.7 4.7 12.3 4.7 17 0L176 281l120.6 120.6c4.7 4.7 12.3 4.7 17 0l21.9-21.9c4.7-4.7 4.7-12.3 0-17L215 256l120.5-120.6c4.8-4.6 4.8-12.3.1-16.9z"
            />
          </svg>

          <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
            <div>Hardware Specifications</div>
          </li>
        </div>
        <div class="flex flex-row">
          <!-- SVG Close Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
            width="24"
            height="24"
            class="mt-1"
          >
            <path
              fill="red"
              d="M335.5 113.9l-21.9-21.9c-4.7-4.7-12.3-4.7-17 0L176 231 55.4 110.4c-4.7-4.7-12.3-4.7-17 0L16.5 132.3c-4.7 4.7-4.7 12.3 0 17L137 256 16.5 376.7c-4.7 4.7-4.7 12.3 0 17l21.9 21.9c4.7 4.7 12.3 4.7 17 0L176 281l120.6 120.6c4.7 4.7 12.3 4.7 17 0l21.9-21.9c4.7-4.7 4.7-12.3 0-17L215 256l120.5-120.6c4.8-4.6 4.8-12.3.1-16.9z"
            />
          </svg>
          <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
            <div>National Infrastructure Development.</div>
          </li>
        </div>
        <div class="flex flex-row">
          <!-- SVG Close Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
            width="24"
            height="24"
            class="mt-1"
          >
            <path
              fill="red"
              d="M335.5 113.9l-21.9-21.9c-4.7-4.7-12.3-4.7-17 0L176 231 55.4 110.4c-4.7-4.7-12.3-4.7-17 0L16.5 132.3c-4.7 4.7-4.7 12.3 0 17L137 256 16.5 376.7c-4.7 4.7-4.7 12.3 0 17l21.9 21.9c4.7 4.7 12.3 4.7 17 0L176 281l120.6 120.6c4.7 4.7 12.3 4.7 17 0l21.9-21.9c4.7-4.7 4.7-12.3 0-17L215 256l120.5-120.6c4.8-4.6 4.8-12.3.1-16.9z"
            />
          </svg>
          <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
            <div>Being an industry association/energy expert group.</div>
          </li>
        </div>
        <div class="flex flex-row">
          <!-- SVG Close Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
            width="24"
            height="24"
            class="mt-1"
          >
            <path
              fill="red"
              d="M335.5 113.9l-21.9-21.9c-4.7-4.7-12.3-4.7-17 0L176 231 55.4 110.4c-4.7-4.7-12.3-4.7-17 0L16.5 132.3c-4.7 4.7-4.7 12.3 0 17L137 256 16.5 376.7c-4.7 4.7-4.7 12.3 0 17l21.9 21.9c4.7 4.7 12.3 4.7 17 0L176 281l120.6 120.6c4.7 4.7 12.3 4.7 17 0l21.9-21.9c4.7-4.7 4.7-12.3 0-17L215 256l120.5-120.6c4.8-4.6 4.8-12.3.1-16.9z"
            />
          </svg>
          <li class="mb-2 text-gray-600 dark:text-gray-400 mr-5">
            <div>Being an implementation arm for any network.</div>
          </li>
        </div>
      </div>
    </ul>
  </div>
</div>
