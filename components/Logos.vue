<script lang="ts" setup>
import { clsx } from '~/utlis'

const logos = [
  {
    src: 'logos:remix',
    alt: 'Remix',
    href: 'https://remix.run',
    column: 1,
    row: 1,
  },
  {
    src: 'logos:fly',
    alt: 'Fly.io',
    href: 'https://fly.io',
    column: 1,
    row: 2,
  },
  {
    src: 'logos:sqlite',
    alt: 'SQLite',
    href: 'https://sqlite.org',
    column: 1,
    row: 3,
  },
  {
    src: 'logos:prisma',
    alt: 'Prisma',
    href: 'https://prisma.io',
    column: 2,
    row: 2,
  },
  { src: 'logos:zod', alt: 'Zod', href: 'https://zod.dev/', column: 2, row: 3 },
  {
    src: 'logos:github',
    alt: 'GitHub',
    href: 'https://github.com',
    column: 2,
    row: 4,
  },
  {
    src: 'simple-icons:resend',
    alt: 'Resend',
    href: 'https://resend.com',
    column: 2,
    row: 5,
  },
  {
    src: 'logos:react',
    alt: 'React Email',
    href: 'https://react.email',
    column: 2,
    row: 6,
  },
  {
    src: 'logos:tailwindcss-icon',
    alt: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
    column: 3,
    row: 3,
  },
  {
    src: 'simple-icons:radixui',
    alt: 'Radix UI',
    href: 'https://www.radix-ui.com/',
    column: 3,
    row: 4,
  },
  {
    src: 'simple-icons:shadcnui',
    alt: 'shadcn/ui',
    href: 'https://ui.shadcn.com/',
    column: 3,
    row: 5,
  },
  {
    src: 'logos:playwright',
    alt: 'Playwright',
    href: 'https://playwright.dev/',
    column: 4,
    row: 1,
  },
  { src: 'logos:msw', alt: 'MSW', href: 'https://mswjs.io', column: 4, row: 2 },
  {
    src: 'logos:faker',
    alt: 'Faker.js',
    href: 'https://fakerjs.dev/',
    column: 4,
    row: 3,
  },
  {
    src: 'logos:vitest',
    alt: 'Vitest',
    href: 'https://vitest.dev',
    column: 4,
    row: 4,
  },
  {
    src: 'logos:testing-library',
    alt: 'Testing Library',
    href: 'https://testing-library.com',
    column: 4,
    row: 5,
  },
  {
    src: 'logos:docker',
    alt: 'Docker',
    href: 'https://www.docker.com',
    column: 4,
    row: 6,
  },
  {
    src: 'logos:typescript-icon',
    alt: 'TypeScript',
    href: 'https://typescriptlang.org',
    column: 5,
    row: 2,
  },
  {
    src: 'logos:prettier',
    alt: 'Prettier',
    href: 'https://prettier.io',
    column: 5,
    row: 3,
  },
  {
    src: 'logos:eslint',
    alt: 'ESLint',
    href: 'https://eslint.org',
    column: 5,
    row: 4,
  },
  {
    src: 'logos:sentry',
    alt: 'Sentry',
    href: 'https://sentry.io',
    column: 5,
    row: 5,
  },
] as const

const columnClasses: Record<(typeof logos)[number]['column'], string> = {
  1: 'xl:col-start-1',
  2: 'xl:col-start-2',
  3: 'xl:col-start-3',
  4: 'xl:col-start-4',
  5: 'xl:col-start-5',
}
const rowClasses: Record<(typeof logos)[number]['row'], string> = {
  1: 'xl:row-start-1',
  2: 'xl:row-start-2',
  3: 'xl:row-start-3',
  4: 'xl:row-start-4',
  5: 'xl:row-start-5',
  6: 'xl:row-start-6',
}
</script>

<template>
  <ul
    class="flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-4 xl:grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-6"
  >
    <li
      v-for="(logo, index) in logos"
      :key="logo.alt"
      :style="{ '--loop-index': index }"
      :class="
        clsx(
          columnClasses[logo.column],
          rowClasses[logo.row],
          'motion-safe:animate-roll-reveal animate-fade-in',
          'motion-safe:[animation-delay:calc(0.07s*var(--loop-index))]',
        )
      "
    >
      <a
        :href="logo.href"
        class="grid size-20 place-items-center rounded-2xl bg-highlight/[7%] p-4 transition hover:-rotate-6 hover:bg-highlight/10 focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 sm:size-24"
      >
        <Icon class="size-full" :name="logo.src" :atl="logo.alt" />
      </a>
    </li>
  </ul>
</template>
