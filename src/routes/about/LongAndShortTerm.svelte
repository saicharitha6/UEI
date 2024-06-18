<script lang="ts">
  import s1 from "$lib/assets/images/s1.png";
  import s2 from "$lib/assets/images/s2.png";
  import s3 from "$lib/assets/images/s3.png";
  import l1 from "$lib/assets/images/l1.png";
  import l2 from "$lib/assets/images/l2.png";
  import l3 from "$lib/assets/images/l3.png";
  import l4 from "$lib/assets/images/l4.png";
</script>

<div class="mx-[5vw] flex" style="font-family: 'Open Sans'">
 
    <div class="buildAnimateSteps w-full">
      <div class="flex flex-row items-center">
        <h2 class="font-bold text-black py-5 text-3xl">
          Short-term Objectives
        </h2>
        <div class="ml-5 flex-grow border-t border-black"></div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5 text-[22px]">
        
        <div class="py-5">
            <img
              src={s1}
              alt="short_term"
              class="h-15 w-20 mx-auto rounded-md mb-5"
            />
            <li class="animate-float text-center">
              Support the technical integration of digital platforms with the
              UEI network by providing expertise.
            </li>
          </div>
          <div class="py-5 mx-5">
            <img
              src={s2}
              alt="short_term"
              class="h-15 w-20 mx-auto rounded-md mb-5"
            />
            <li class="animate-float my-5 text-center">
              Engage with key stakeholders to promote network adoption.
            </li>
          </div>
          <div class="p-5 mx-5">
            <img
              src={s3}
              alt="short_term"
              class="h-15 w-20 mx-auto rounded-md mb-5"
            />
            <li class="animate-float my-5 text-center">
              Conduct pilot programs to demonstrate UEI network's capabilities
              and potential for innovation.
            </li>
          </div>
        </div>
    </div>
  </div>
<div class="mx-[5vw]">
  <div class="buildAnimateSteps">
    <div class="flex flex-row items-center">
      <h2 class="font-bold text-black py-5 text-3xl">
        Long-term Objectives
      </h2>
      <div class="ml-5 flex-grow border-t border-black"></div>
    </div>
    <div class="buildAnimateSteps">
      <div
        class="grid grid-cols-1 text-[22px] lg:grid-col-2 md:grid-cols-2 sm:grid-cols-1 gap-5"
      >
        <div class="p-5 mx-5">
          <img
            src={l1}
            alt="long_term"
            class="h-15 w-20 mx-auto rounded-md mb-5"
          />
          <li class="animate-float justify-center text-center">
            To enhance digital transactions in the energy sector, we aim to
            unify efforts, reduce coordination complexities, and scale the
            Unified Energy Interface (UEI) network.
          </li>
        </div>
        <div class="p-5 mx-5">
          <img
            src={l2}
            alt="long_term"
            class="h-15 w-20 mx-auto rounded-md mb-5"
          />
          <li class="animate-float my-5 text-center">
            We will ensure the Beckn Protocol remains relevant and adaptable,
            guiding its technical evolution and governance.
          </li>
        </div>
        <div class="p-5 mx-5">
          <img
            src={l3}
            alt="long_term"
            class="h-15 w-20 mx-auto rounded-md mb-5"
          />
          <li class="animate-float my-5 text-center">
            Our mission includes expanding the UEI network to encompass more
            energy-related services and sectors, increasing its reach across
            industries.
          </li>
        </div>
        <div class="p-5 mx-5">
          <img
            src={l4}
            alt="long_term"
            class="h-15 w-20 mx-auto rounded-md mb-5"
          />
          <li class="animate-float text-center">
            We are committed to global interoperability by aligning the protocol
            with international standards, enabling seamless integration as a
            common underlying fabric.
          </li>
        </div>
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
