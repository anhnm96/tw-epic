<script setup lang="ts"></script>

<template>
  <div class="grid h-dvh place-items-center px-4 py-16">
    <div
      class="grid place-items-center gap-12 sm:gap-16 xl:grid-cols-[auto_1fr] xl:gap-24"
    >
      <div
        class="flex max-w-md flex-col items-center text-center xl:order-2 xl:items-start xl:text-left"
      >
        <EpicStackLogo class="animate-slide-top size-20" />
        <h1
          class="animate-slide-top mt-6 text-4xl font-medium [animation-delay:0.3s] sm:text-4.5xl md:mt-8 md:text-5xl lg:text-5.5xl"
        >
          The <span class="text-highlight">Epic</span> Stack
        </h1>
        <p
          class="animate-slide-top text-slate-60 mt-4 [animation-delay:0.8s] sm:mt-6 sm:text-lg md:text-xl"
        >
          Check the
          <a
            href="#"
            class="text-black underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-highlight"
            >Getting Started</a
          >
          guide file for how to get your project off the ground!
        </p>
      </div>
      <Logos />
    </div>
  </div>
</template>
