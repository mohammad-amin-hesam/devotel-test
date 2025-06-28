# Devotel

This is a [Monorepo](https://en.wikipedia.org/wiki/Monorepo) project built with Docker and CI/CD support. It showcases a structured, scalable architecture suitable for production environments.

### 🚀 Live Demo

You can view the deployed version of the project here:  
👉 [https://devotel.darkube.app/](https://devotel.darkube.app/)

---

## 🛠️ Tech Stack

- **Monorepo**
- **Docker**
- **CI/CD Pipelines**
- **pnpm** (version `9.15.1` required)

---

## 🔧 Getting Started

To run the project locally, make sure you have `pnpm` version `9.15.1` installed.

## ⚙️ Configuration

Before running the project, create a `.env` file inside the `apps/web` directory with the following content:

```env
NEXT_PUBLIC_API_URL=https://assignment.devotel.io/api
```

### Development

```bash
pnpm i
pnpm dev
```

### Production

```bash
pnpm i
pnpm build
pnpm start
```
