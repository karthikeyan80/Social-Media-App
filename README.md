# ⚡ Full Stack Next.js App

A modern full-stack application built with the latest technologies to deliver high performance, scalability, and a clean developer experience.

## 🚀 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Shadcn UI
- **Authentication**: Clerk
- **Database**: PostgreSQL + Prisma ORM
- **File Uploads**: UploadThing

## 💡 Key Features

- App Router with Layouts and Server Components
- Dynamic & Static Routing
- API Integration via Route Handlers
- Data Fetching with Caching & Revalidation
- Built-in UI states: `loading.tsx`, `error.tsx`, `not-found.tsx`
- Server Actions & Forms
- Optimistic UI Updates
- Authentication & Authorization
- File Upload support
- Fully styled with Tailwind CSS & Shadcn

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install Dependencies 
```bash
npm install
```

### 3. Configure Environment Variables

Create a .env file in the root directory:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_postgres_connection_url
UPLOADTHING_TOKEN=your_uploadthing_token
```

### 4.  Run the Development Server
```bash
npm run dev