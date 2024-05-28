<script>
  // Sample card data
  import image1 from "../../lib/images/image1.jpg";
  import image2 from "../../lib/images/image2.jpg";
  import image3 from "../../lib/images/image3.jpg";
  import image4 from "../../lib/images/image4.jpg";
  const cards = [
    { imageUrl: image1, text: "Charge Zone" },
    { imageUrl: image2, text: "Turno" },
    { imageUrl: image3, text: "Kazam" },
    { imageUrl: image4, text: "World Resources Institute" },
    // { imageUrl: 'bg-[url('/src/lib/images/bg.jpg')]', text: 'Card 5' },
    // { imageUrl: 'https://via.placeholder.com/150', text: 'Card 6' },
  ];
</script>

<div
  class="participants grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 my-20"
>
  {#each cards as card}
    <div
      class="bg-gray-600 border bg-cover bg-no-repeat bg-center rounded-lg shadow-2xl overflow-hidden flex flex-col"
    >
      <img
        src={card.imageUrl}
        alt="Cardimage"
        class="h-40 w-full object-cover md:w-full md:object-cover"
      />

      <div class="p-4 flex flex-col flex-grow">
        <p class="text-white mb-4 font-bold text-center text-2xl">
          {card.text}
        </p>
        <div class="flex-grow flex items-center justify-center">
          <button
            class="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Read More
            <svg
              class="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  {/each}
</div>
