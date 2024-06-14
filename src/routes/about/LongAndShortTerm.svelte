<script lang="ts">
  import s1 from "$lib/assets/images/s1.png";
  import s2 from "$lib/assets/images/s2.png";
  import s3 from "$lib/assets/images/s3.png";
  import l1 from "$lib/assets/images/l1.png";
  import l2 from "$lib/assets/images/l2.png";
  import l3 from "$lib/assets/images/l3.png";
  import l4 from "$lib/assets/images/l4.png";
</script>

<div class="justify-center flex" style="font-family: 'proxima_nova">
  <div class="w-full p-5 sm:w-full lg:w-3/4">
    <div
      class="flex flex-col lg:flex-row justify-center items-center px-7 rounded-xl"
    >
      <!-- Left side content -->
      <div class="buildAnimateSteps w-full lg:m-10">
        <h2
          class="buildAnimateSteps font-bold text-center text-2xl pt-5 sm:pt-5 text-black"
        >
          Long-term Objectives
        </h2>
        <div class="buildAnimateSteps">
          <div
            class="grid grid-cols-1 lg:grid-col-2 md:grid-cols-2 sm:grid-cols-1"
          >
            <div class="p-5 mx-5">
              <img
                src={l1}
                alt="long_term"
                class="h-15 w-20 mx-auto rounded-md mb-5"
              />
              <p class="animate-float">
                To enhance digital transactions in the energy sector, we aim to
                unify efforts, reduce coordination complexities, and scale the
                Unified Energy Interface (UEI) network.
              </p>
            </div>
            <div class="p-5 mx-5">
              <img
                src={l2}
                alt="long_term"
                class="h-15 w-20 mx-auto rounded-md mb-5"
              />
              <p class="animate-float my-5">
                We will ensure the Beckn Protocol remains relevant and
                adaptable, guiding its technical evolution and governance.
              </p>
            </div>
            <div class="p-5 mx-5">
              <img
                src={l3}
                alt="long_term"
                class="h-15 w-20 mx-auto rounded-md mb-5"
              />
              <p class="animate-float my-5">
                Our mission includes expanding the UEI network to encompass more
                energy-related services and sectors, increasing its reach across
                industries.
              </p>
            </div>
            <div class="p-5 mx-5">
              <img
                src={l4}
                alt="long_term"
                class="h-15 w-20 mx-auto rounded-md mb-5"
              />
              <p class="animate-float">
                We are committed to global interoperability by aligning the
                protocol with international standards, enabling seamless
                integration as a common underlying fabric.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row justify-center items-center px-7 rounded-xl"
    >
      <!-- Left side content -->
      <div class="buildAnimateSteps w-full lg:m-10">
        <h2
          class="buildAnimateSteps font-bold text-center text-2xl text-black"
        >
          Short-term Objectives
        </h2>
        <div class="buildAnimateSteps">
          <div
            class="grid grid-cols-1 lg:grid-col-2 md:grid-cols-2 sm:grid-cols-1"
          >
            <div class="p-5 mx-5">
              <img
                src={s1}
                alt="short_term"
                class="h-15 w-20 mx-auto rounded-md mb-5"
              />
              <p class="animate-float">
                Support the technical integration of digital platforms with the
                UEI network by providing expertise.
              </p>
            </div>
            <div class="p-5 mx-5">
              <img
                src={s2}
                alt="short_term"
                class="h-15 w-20 mx-auto rounded-md mb-5"
              />
              <p class="animate-float my-5">
                Engage with key stakeholders to promote network adoption.
              </p>
            </div>
            <div class="p-5 mx-5">
              <img
                src={s3}
                alt="short_term"
                class="h-15 w-20 mx-auto rounded-md mb-5"
              />
              <p class="animate-float my-5">
                Conduct pilot programs to demonstrate UEI network's capabilities
                and potential for innovation.
              </p>
            </div>
          </div>
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
