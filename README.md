# NEXTBOOK

**NEXTBOOK** is a full-stack social media platform built entirely with **Next.js**, designed for user interaction, content sharing, and community engagement.

The application uses **Clerk** for authentication, **Prisma ORM** for database access, and **NeonDB (PostgreSQL 18)** as the primary database.

## 🚀 Tech Stack

* **Framework:** Next.js
* **Frontend:** React, TypeScript, Tailwind CSS, DaisyUI
* **Backend:** Next.js Server Components & Server-side APIs
* **Authentication:** Clerk
* **ORM:** Prisma
* **Database:** NeonDB — PostgreSQL 18
* **Package Manager:** npm

## ✨ Features

* 🔐 Secure user authentication with Clerk
* 👤 User profiles and account management
* 📝 Create and share posts
* ❤️ Interact with posts
* 💬 Social interaction between users
* 🗄️ Persistent data storage with PostgreSQL
* ⚡ Prisma-powered database queries
* 📱 Responsive UI for desktop and mobile
* 🔄 Real-time-feeling social interaction through modern Next.js architecture


## 🗄️ Database

NEXTBOOK uses **NeonDB with PostgreSQL 18** for persistent data storage.

**Prisma** acts as the ORM between the Next.js application and PostgreSQL, providing:

* Type-safe database queries
* Schema management
* Prisma Client
* Database migrations
* Developer-friendly database access

The database schema is located at:

```text
prisma/schema.prisma
```

## 🔐 Authentication

Authentication and user management are handled by **Clerk**.

Clerk provides:

* User sign-up and sign-in
* Session management
* User profiles
* Authentication state
* Account management

Authenticated users can interact with the social features of NEXTBOOK.

## 🧑‍💻 Development

Run the development server:

```bash
npm run dev
```

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Run Prisma Studio:

```bash
npx prisma studio
```

## 🌐 Deployment

NEXTBOOK can be deployed to a Next.js-compatible hosting platform.

Before deploying, make sure the production environment contains the required:

* Clerk environment variables
* NeonDB `DATABASE_URL`
* Other application-specific environment variables

Also ensure the production database has the latest Prisma schema/migrations applied.

## 🎯 Project Goal

NEXTBOOK was built as a **full-stack social media application using Next.js as both the client and server framework**.

The project demonstrates how modern web applications can combine:

```text
Next.js
   ↓
React + TypeScript
   ↓
Clerk Authentication
   ↓
Next.js Server / API Layer
   ↓
Prisma ORM
   ↓
NeonDB
   ↓
PostgreSQL 18
```

## 📚 Resources

* [Next.js Documentation](https://nextjs.org/docs?utm_source=chatgpt.com)
* [Clerk Documentation](https://clerk.com/docs?utm_source=chatgpt.com)
* [Prisma Documentation](https://www.prisma.io/docs?utm_source=chatgpt.com)
* [Neon Documentation](https://neon.tech/docs?utm_source=chatgpt.com)

---

**NEXTBOOK — Connect. Share. Interact.**
