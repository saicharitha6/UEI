<script lang="ts">
  import { onMount } from "svelte";
  import Swiper from "swiper";
  import "swiper/swiper-bundle.css";

  // Importing images
  import courosel1 from "$lib/assets/images/linkedinImage1.jpg";
  import courosel2 from "$lib/assets/images/linkedinImage2.jpg";
  import courosel3 from "$lib/assets/images/linkedinImage3.jpg";
  import { Autoplay, Navigation, Pagination } from "swiper/modules";

  let swiperContainer: HTMLDivElement;
  let swiper: Swiper;

  // YouTube Player API load function
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
      const iframe = swiperContainer.querySelector("iframe");
      if (iframe) {
        const player = new (window as any).YT.Player(iframe, {
          events: {
            onStateChange: (event: any) => {
              if (event.data == (window as any).YT.PlayerState.PLAYING) {
                swiper.autoplay.stop();
              } else {
                swiper.autoplay.start();
              }
            },
          },
        });
      }
    };
  }

  onMount(() => {
    Swiper.use([Autoplay, Pagination]);
    swiper = new Swiper(swiperContainer, {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    loadYouTubeAPI();
  });
</script>

<div class="text-center  text-3xl">
  <h2 class="font-bold mb-5 relative inline-block">
      Imagine with UEI
      <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-black to-gray mt-3"></div>
  </h2>
</div>
<div class="swiper-container" bind:this={swiperContainer}>
  <div class="swiper-wrapper">
    <!-- Slide 1 -->
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
  </div>

  <!-- Pagination -->
  <div class="swiper-pagination"></div>
</div>

<style>
  .swiper-container {
    width: 100%;
    height: 500px; /* Set a consistent height for the carousel */
    margin: auto; /* Center the carousel */
    position: relative; /* Ensure pagination dots are positioned relative to this container */
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
  .swiper-pagination {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
