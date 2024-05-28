<script lang="ts">
	import { onMount } from "svelte";
  
	let cards: NodeListOf<HTMLElement>;
  
	// Function to animate the cards
	function animateCards() {
	  cards.forEach((card: HTMLElement, index) => {
		setTimeout(() => {
		  card.classList.add("floating");
		}, index * 500); // Adjust the delay between each card animation
	  });
	}
  
	// Check if window object is available (client side)
	// Execute the code only if window object is available
	$: if (typeof window !== "undefined") {
	  onMount(() => {
		cards = document.querySelectorAll(".card");
		animateCards(); // Trigger card animation on mount
	  });
	}
  </script>
  
  <div>
	<h2 class="font-bold text-green-500 text-3xl text-center mt-5">Focus Areas</h2>
	<div class="justify-center items-center p-5">
	  <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
		{#each Array.from({ length: 3 }) as _, i}
		  <div class="card hover:translate-y-1 floating p-6 rounded-lg shadow-md bg-white border overflow-hidden">
			{#if i === 0}
			  <div class="header bg-green-600 text-white py-2 px-4 rounded-t-lg mb-4">
				Scaling Transactions
			  </div>
			  <p class="text-gray-700">
				The primary aim is to increase transaction volume within the UEI network.
			  </p>
			{:else if i === 1}
			  <div class="header bg-green-600 text-white py-2 px-4 rounded-t-lg mb-4">
				Ease of Scaling
			  </div>
			  <p class="text-gray-700">
				Promoting a scalable model for easy integration of new and existing participants.
			  </p>
			{:else}
			  <div class="header bg-green-600 text-white py-2 px-4 rounded-t-lg mb-4">
				Ease of Adoption
			  </div>
			  <p class="text-gray-700">
				Ensuring the Beckn Protocol remains relevant and adaptable to market needs, guiding technical evolution, and governance.
			  </p>
			{/if}
		  </div>
		{/each}
	  </div>
	</div>
  </div>
  
  <style>
	@keyframes float {
	  0% {
		opacity: 0;
		transform: translateY(20px);
	  }
	  100% {
		opacity: 1;
		transform: translateY(0);
	  }
	}
  
	.card {
	  position: relative;
	  opacity: 0; /* Initially hide cards */
	  animation-fill-mode: forwards; /* Ensure animation stays applied after it finishes */
	  margin-bottom:10%;
	}
  
	.floating {
	  animation: float 1s ease-in-out;
	  opacity: 1; /* Show cards when floating animation starts */
	}
  </style>
  