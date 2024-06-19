<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Swiper from "swiper";
  import "swiper/swiper-bundle.css";
  import { Autoplay, Pagination, Navigation } from "swiper/modules";

  // Importing images
  import courosel1 from "$lib/assets/images/linkedinImage1.jpg";
  import courosel2 from "$lib/assets/images/linkedinImage2.jpg";
  import courosel3 from "$lib/assets/images/linkedinImage3.jpg";
  import courosel4 from "$lib/assets/images/linkedinImage4.jpg";

  let swiperContainer: HTMLDivElement;
  let swiper: Swiper;
  let youtubePlayers: any[] = [];

  function loadYouTubeAPI() {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag?.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      document.head.appendChild(tag);
    }

    (window as any).onYouTubeIframeAPIReady = () => {
      const iframes = Array.from(swiperContainer.querySelectorAll("iframe"));
      iframes.forEach((iframe, index) => {
        const player = new (window as any).YT.Player(iframe, {
          events: {
            onStateChange: (event: any) => {
              if (event.data === (window as any).YT.PlayerState.PLAYING) {
                // Pause Swiper autoplay
                if (swiper) {
                  swiper.autoplay.stop();
                }
              } else if (
                event.data === (window as any).YT.PlayerState.PAUSED ||
                event.data === (window as any).YT.PlayerState.ENDED
              ) {
                // Resume Swiper autoplay after video ends or paused
                if (swiper) {
                  swiper.autoplay.start();
                }
              }
            },
          },
        });
        youtubePlayers.push(player);
      });
    };
  }

  onMount(() => {
    Swiper.use([Autoplay, Pagination, Navigation]);
    swiper = new Swiper(swiperContainer, {
      loop: true,
      slidesPerView: 1,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    loadYouTubeAPI();
  });

  onDestroy(() => {
    // Clean up YouTube players and listeners when component is destroyed
    youtubePlayers.forEach((player) => {
      player.destroy();
    });
    youtubePlayers = [];
  });
</script>

<div class="text-center text-3xl  mb-[3vw] mt-[5vw]">
  <h2 class="font-bold mb-5 relative inline-block">
    Imagine with UEI
    <div
      class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-black to-gray mt-3"
    ></div>
  </h2>
</div>

<div class="swiper-container" bind:this={swiperContainer}>
  <div class="swiper-wrapper">
    <!-- Slide 1 -->

    <!-- Slide 4 - YouTube Video -->
    <div class="swiper-slide">
      <iframe
        src="https://www.youtube.com/embed/ReqR_xvFjEI?enablejsapi=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="slide-content"
      ></iframe>
    </div>
    <div class="swiper-slide">
      <img src={courosel1} alt="Image1" class="slide-content" />
    </div>
    <!-- Slide 2 -->
    <div class="swiper-slide">
      <img src={courosel2} alt="Image2" class="slide-content" />
    </div>
    <!-- Slide 3 -->
    <div class="swiper-slide">
      <img src={courosel3} alt="Image3" class="slide-content" />
    </div>
    <!-- Slide 4 -->
    <div class="swiper-slide">
      <img src={courosel4} alt="Image4" class="slide-content" />
    </div>
  </div>

  <!-- Pagination -->
  <div class="swiper-pagination"></div>
</div>

<style>
  .swiper-container {
    width: 90%;
    height: 500px; /* Set a consistent height for the carousel */
    margin: auto; /* Center the carousel */
    position: relative; /* Ensure pagination dots are positioned relative to this container */
    overflow: hidden;
  }

@media (max-width: 500px) {
  .swiper-container {
    max-height: 200px; /* Reset max-height for smaller screens */
  }
}
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .slide-content {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-wrapper{
    object-fit: cover;
    margin:0%
  }
  .swiper-pagination {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10; /* Ensure pagination dots are above other content */
  }
</style>
