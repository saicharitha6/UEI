<script lang="ts">
  import { Card, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";

  const news = [
    {
      title: "Transmission and Distribution in India",
      para: "Here is the details for the biggest news about technology.",
    },
    {
      title: "Top EV Finance and funding in India",
      para: "EV financing start-up Revfin to raise around ₹2,000 crore in the next year",
    },
    {
      title: "EV Marketing top rating bikes in Chennai",
      para: "EV motorcycle maker Raptee rolls out first electric bike from its Chennai factory",
    },
    {
      title: "UPI-like platform for EV users",
      para: "The UEI will address interoperability challenges pertaining to EV charging.",
    },
  ];
</script>

<div
  class="bg-white flex flex-col gap-14 w-full min-h-screen md:px-[5vw] px-[10vw] pt-[3vh] overflow-y-auto"
>
  <div class="bg-white h-screen">
    <h2 class="text-center mt-20 font-bold text-2xl text-black">Daily News</h2>

    <div
      class="news grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 justify-center md:justify-center"
    >
      {#each news as card}
        <Card
          class="overflow-hidden hover:translate-y-1 floating bg-white shadow-lg"
        >
          <div class="flex-grow overflow-auto bg-white">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black"
            >
              {card.title}
            </h5>
            <p
              class="mb-3 font-normal text-gray-600 dark:text-gray-600 leading-tight"
            >
              {card.para}
            </p>
          </div>
          <hr />
          <div class="items-center p-5">
            <Button
              class="w-fit bg-green-500 hover:bg-green-700 font-bold justify-center"
            >
              Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>

            <!-- Your SVG icons here -->
            <div class="mt-5 left-5 flex flex-row flex-auto">
              <svg
                class="w-7 h-7 text-black dark:text-white mr-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                  clip-rule="evenodd"
                />
                <path
                  fill="currentColor"
                  d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                />
              </svg>
              <svg
                class="w-7 h-7 text-black dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="w-7 h-7 text-black dark:text-white mx-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clip-rule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</div>
