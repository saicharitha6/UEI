<script>
  import background from "$lib/assets/images/bg.png";
  import { isOpen, isActiveTab } from "$lib/store";
  import { goto } from "$app/navigation";
  function toggleForm() {
    isOpen.update((n) => {
      if (!n) {
        console.log("open");
        isActiveTab.set("");
        goto("/form");
      } else {
        console.log("close");
        isActiveTab.set("home");
        goto("/");
      }
      return !n;
    });
  }
</script>

<div class="relative top-5 h-auto" style="font-family: 'Open Sans'">
  <div
    class="relative object-cover w-full h-full lg:max-h-sm sm:object-contain sm:h-full"
  >
    <img
      class="object-cover w-full h-full sm:h-svh lg:h-[35rem]"
      src={background}
      alt="background"
    />
  </div>

  <div
    class="w-full lg:w-1/2 sm:w-full text-white p-10 font-bold text-center lg:text-left absolute inset-0 flex lg:flex-col lg:flex lg:justify-center lg:items-center md:justify-start md:items-center justify-start items-center"
  >
    <div class=" flex-col mt-5 lg:mt-60">
      <h2
        class="text-xl mt-10 sm:mt-10 md:text-4xl lg:text-5xl sm:text-xl font-bold"
      >
        UEI Alliance is a Collaborative Group.
      </h2>
      <div class="justify-center lg:justify-start sm:justify-center flex">
        <button
          on:click={toggleForm}
          class="border-2 text-xl border-white text-white p-1 sm:p-1 md:p-3 lg:p-3 sm:mt-5 px-5 sm:px-5 lg:px-6 rounded-lg mt-5 lg:mt-10"
          >Join Us</button
        >
      </div>
    </div>
  </div>
</div>
