<script setup lang="ts">
import { clsx } from './utlis'
</script>

<template>
  <div class="grid h-dvh place-items-center px-4 py-16">
    <div
      class="grid place-items-center gap-12 sm:gap-16 xl:max-w-7xl xl:grid-cols-[auto_1fr] xl:gap-x-24 xl:gap-y-4"
    >
      <!-- header -->
      <div
        :class="
          clsx(
            'flex max-w-md flex-col items-center text-center xl:text-left',
            'xl:col-start-2 xl:row-span-2 xl:row-start-3 xl:grid xl:max-w-none xl:grid-cols-[auto_1fr] xl:grid-rows-subgrid xl:gap-4',
          )
        "
      >
        <EpicStackLogo
          class="animate-slide-top xl:animate-slide-left size-20 xl:[animation-delay:0.5s]"
        />
        <h1
          :class="
            clsx(
              'sm:text-4.5xl lg:text-5.5xl mt-6 text-4xl font-medium md:mt-8 md:text-5xl xl:mt-0',
              'animate-slide-top xl:animate-slide-left [animation-delay:0.3s] xl:[animation-delay:0.8s]',
            )
          "
        >
          The <span class="text-highlight">Epic</span> Stack
        </h1>
        <p
          class="text-slate-60 animate-slide-top xl:animate-slide-left mt-4 [animation-delay:0.8s] sm:mt-6 sm:text-lg md:text-xl xl:col-span-2 xl:mt-0 xl:[animation-delay:1.3s]"
        >
          Check the
          <a
            href="#"
            class="focus:ring-highlight text-black underline hover:no-underline focus:ring-2 focus:outline-none"
            >Getting Started</a
          >
          guide file for how to get your project off the ground!
        </p>
      </div>
      <Logos />
    </div>
  </div>
</template>
