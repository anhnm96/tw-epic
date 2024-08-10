<script lang="ts" setup>
const logos = [
  {
    src: 'logos:remix',
    alt: 'Remix',
    href: 'https://remix.run',
  },
  {
    src: 'logos:fly',
    alt: 'Fly.io',
    href: 'https://fly.io',
  },
  {
    src: 'logos:sqlite',
    alt: 'SQLite',
    href: 'https://sqlite.org',
  },
  {
    src: 'logos:prisma',
    alt: 'Prisma',
    href: 'https://prisma.io',
  },
  {
    src: 'logos:zod',
    alt: 'Zod',
    href: 'https://zod.dev/',
  },
  {
    src: 'logos:github',
    alt: 'GitHub',
    href: 'https://github.com',
  },
  {
    src: 'simple-icons:resend',
    alt: 'Resend',
    href: 'https://resend.com',
  },
  {
    src: 'logos:react',
    alt: 'React Email',
    href: 'https://react.email',
  },
  {
    src: 'logos:tailwindcss-icon',
    alt: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
  },
  {
    src: 'simple-icons:radixui',
    alt: 'Radix UI',
    href: 'https://www.radix-ui.com/',
  },
  {
    src: 'simple-icons:shadcnui',
    alt: 'shadcn/ui',
    href: 'https://ui.shadcn.com/',
  },
  {
    src: 'logos:playwright',
    alt: 'Playwright',
    href: 'https://playwright.dev/',
  },
  {
    src: 'logos:msw',
    alt: 'MSW',
    href: 'https://mswjs.io',
  },
  {
    src: 'logos:faker',
    alt: 'Faker.js',
    href: 'https://fakerjs.dev/',
  },
  {
    src: 'logos:vitest',
    alt: 'Vitest',
    href: 'https://vitest.dev',
  },
  {
    src: 'logos:testing-library',
    alt: 'Testing Library',
    href: 'https://testing-library.com',
  },
  {
    src: 'logos:docker',
    alt: 'Docker',
    href: 'https://www.docker.com',
  },
  {
    src: 'logos:typescript-icon',
    alt: 'TypeScript',
    href: 'https://typescriptlang.org',
  },
  {
    src: 'logos:prettier',
    alt: 'Prettier',
    href: 'https://prettier.io',
  },
  {
    src: 'logos:eslint',
    alt: 'ESLint',
    href: 'https://eslint.org',
  },
  {
    src: 'logos:sentry',
    alt: 'Sentry',
    href: 'https://sentry.io',
  },
]
</script>

<template>
  <ul class="flex max-w-3xl flex-wrap justify-center gap-2">
    <li v-for="logo in logos" :key="logo.alt">
      <a
        :href="logo.href"
        class="grid size-20 place-items-center rounded-2xl bg-highlight/[7%] p-4"
      >
        <Icon class="h-full w-full" :name="logo.src" :atl="logo.alt" />
      </a>
    </li>
  </ul>
</template>
