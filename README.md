[оформление документации](https://docs.github.com/ru/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

# **SPIFA-MONOREPO**

# Монорепозиторий системы платежей и финансовой аналитики

Монорепозиторий построен с помощью [Turborepo](https://turbo.build/repo/docs) — высокопроизводительной
системы сборки для кодовых баз JavaScript и TypeScript. 
Он предназначен для масштабирования монорепозиториев, а также ускоряет рабочие процессы в 
рабочих пространствах с одним пакетом.

### Оглавление

[1. Структура проекта](./documentation/monorepo-structure.md)

### Сборка

Для сборки всех приложений используется команда:

```
cd my-turborepo
pnpm build
```

### Разработка

Для запуска в режиме разработки (все прилоежния) используется команда:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
