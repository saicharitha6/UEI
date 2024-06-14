<script>
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<div
  class="mt-10 flex justify-center p-5 w-full text-md"
  style="font-family: 'proxima_nova"
>
  <Accordion
    class="w-full md:w-3/4 lg:w-3/4 sm:w-full"
    activeClass="bg-gray-600 dark:bg-gray-800 text-white dark:text-white focus:ring-4 focus:ring-gray-500 dark:focus:ring-white"
  >
    <AccordionItem open>
      <span slot="header">What is UEI?</span>
      <ul class="list-disc ps-5 dark:text-black text-black">
        <li class="mb-2 text-black dark:text-gray-400 whitespace-normal">
          <p>
            The Unified Energy Interface, or UEI, emerges as a way of unifying
            the fragmented digital attempts spread across the domain of energy
            transactions. Built on the open-source Beckn Protocol, which also
            powers networks like Open Network for Digital Commerce (ONDC), Namma
            Yatri, Unified Health Interface (UHI) and Open Network for Education
            & Skilling Transformations (ONEST), UEI is designed as an open
            network specifically for energy transactions. This network links
            various digital platforms – those dealing in energy and its
            derivatives – enabling them to interact and transact through a
            common, interoperable language.
          </p>
        </li>
        <li class="mb-2 text-black dark:text-gray-400">
          <p>
            UEI essentially creates a unified ecosystem, integrating disparate
            energy solutions into a cohesive whole. It acts as a dynamic open
            network where providers and consumers of energy-related services,
            such as EV charging, battery swapping, renewable energy, and many
            more can seamlessly connect. They use a standardised vocabulary,
            fostering an inclusive yet competitive environment that encourages
            innovation. This interface not only simplifies transactions but also
            propels the sector towards more efficient and sustainable energy
            use.
          </p>
        </li>
      </ul>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">About the Alliance</span>
      <ul class="list-disc px-5">
        <li class="mb-2 text-black dark:text-gray-400">
          The UEI Alliance is a collaborative group formed by various
          stakeholders in the energy sector, committed to global development,
          adoption, and compliance with the Beckn Protocol for energy-related
          economic transactions between digital platforms.
        </li>
        <li class="mb-2 text-black dark:text-gray-400">
          This alliance transcends specific sectors like electric vehicles (EVs)
          or battery technology, encompassing a wide range of energy-related
          transaction domains. Its primary aim is to promote the adoption and
          interoperability of the Beckn Protocol within the energy field,
          thereby scaling the Unified Energy Interface (UEI) network.
        </li>
        <li class="mb-2 text-black dark:text-gray-400">
          Operating as a think tank, the alliance focuses on enhancing digital
          economic transactions between energy platforms, particularly in
          resource discovery and fulfilment.
        </li>
      </ul>
    </AccordionItem>
  </Accordion>
</div>
