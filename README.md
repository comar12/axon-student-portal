# Axon Student Portal

Axon is a track-based learning-platform frontend built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It currently provides a polished student and academy-admin demo. Authentication, persistence, content management, and payments are intentionally scheduled for later implementation phases.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deployment

The project is structured for Vercel. Import the GitHub repository and keep the framework preset as **Next.js**. No environment variables are required for the current frontend demo.

## Current status

See [`PHASE_STATUS.md`](./PHASE_STATUS.md).
