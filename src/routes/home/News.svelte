<script lang="ts">
  import { onMount } from "svelte";

  const animateData = async () => {
    const { default: gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".buildAnimateCustomers",
        start: "10% 90%",
      },
    });
    tl.fromTo(
      ".buildAnimateCustomers",
      0.3,
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

  let customers = [
    {
      title: "Transmission and Distribution",
      para: "Here is the details for the biggest news about technology.",
    },
    {
      title: "EV Finance and funding",
      para: "EV financing start-up Revfin to raise around ₹2,000 crore in the next year",
    },
    {
      title: "EV Marketing",
      para: "EV motorcycle maker Raptee rolls out first electric bike from its Chennai factory",
    },
    {
      title: "UPI-like platform for EV users",
      para: "The UEI will address interoperability challenges pertaining to EV charging.",
    },
  ];
</script>

<div
  class="flex flex-col gap-10 w-full px-[7vw] buildAnimateCustomers opacity-0"
>
  <p class="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500">
    Our News Updates
  </p>

  <!-- svelte-ignore a11y-distracting-elements -->
  <marquee behavior="scroll" direction="left">
    <div class="flex gap-20">
      {#each customers as customer}
        <div class="flex flex-col items-center gap-4 min-w-[350px]">
          <p class="text-3xl font-semibold text-center text-white ">
            {customer.title}
          </p>
          <p class="text-xl font-semibold text-center text-[#30BFAE] ">
            Development @ India
          </p>
          <p class="text-sm text-gray-400 text-center whitespace-normal">
           {customer.para}
          </p>
        </div>
      {/each}
    </div>
  </marquee>
</div>
