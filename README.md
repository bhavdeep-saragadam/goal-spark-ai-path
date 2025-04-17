
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/60137a97-240d-4053-8b6c-9ee56779835e

## Backend Development Plan

### Overview
DoIT AI requires a robust backend to support user authentication, goal tracking, roadmap generation and progress monitoring. The backend will be built using Supabase, which provides a powerful PostgreSQL database with real-time capabilities and built-in authentication.

### Database Schema

#### Tables
1. **users**
   - `id`: UUID (primary key)
   - `email`: String (unique)
   - `created_at`: Timestamp
   - `last_login`: Timestamp
   - `user_metadata`: JSON (preferences, settings)

2. **goals**
   - `id`: UUID (primary key)
   - `user_id`: UUID (foreign key → users.id)
   - `title`: String
   - `description`: Text
   - `category`: String
   - `status`: String (active, completed, abandoned)
   - `created_at`: Timestamp
   - `completed_at`: Timestamp (nullable)
   - `target_date`: Date (nullable)

3. **roadmaps**
   - `id`: UUID (primary key)
   - `goal_id`: UUID (foreign key → goals.id)
   - `generated_at`: Timestamp
   - `ai_parameters`: JSON (parameters used for generation)

4. **steps**
   - `id`: UUID (primary key)
   - `roadmap_id`: UUID (foreign key → roadmaps.id)
   - `title`: String
   - `description`: Text
   - `order_index`: Integer
   - `status`: String (not_started, in_progress, completed)
   - `start_date`: Date (nullable)
   - `due_date`: Date (nullable)
   - `completed_at`: Timestamp (nullable)

5. **achievements**
   - `id`: UUID (primary key)
   - `user_id`: UUID (foreign key → users.id)
   - `title`: String
   - `description`: Text
   - `category`: String
   - `achieved_at`: Timestamp
   - `points`: Integer

### Authentication Flow
1. User registration with email/password
2. Email verification
3. Login with JWT token
4. Password reset flow
5. Social authentication options (Google, GitHub)

### API Endpoints

#### Authentication
- POST `/auth/register`
- POST `/auth/login`
- POST `/auth/logout`
- POST `/auth/reset-password`
- GET `/auth/user`

#### Goals
- GET `/goals` - List user goals
- POST `/goals` - Create goal
- GET `/goals/:id` - Get goal details
- PUT `/goals/:id` - Update goal
- DELETE `/goals/:id` - Delete goal

#### Roadmaps
- GET `/goals/:goalId/roadmap` - Get roadmap for a goal
- POST `/goals/:goalId/roadmap` - Generate roadmap for a goal
- PUT `/goals/:goalId/roadmap` - Update roadmap

#### Steps
- GET `/roadmaps/:roadmapId/steps` - List steps for a roadmap
- POST `/roadmaps/:roadmapId/steps` - Add step to roadmap
- PUT `/steps/:id` - Update step
- DELETE `/steps/:id` - Delete step
- PUT `/steps/:id/status` - Update step status

#### Achievements
- GET `/achievements` - List user achievements
- POST `/achievements` - Create achievement (triggered by backend)

### AI Integration Plan
1. **AI Roadmap Generation**
   - AI service will accept goal description and user preferences
   - Will generate structured roadmap with realistic steps
   - Steps will include reasonable timeframes and resources

2. **Progress Analysis**
   - Analyze user progress against roadmap timeline
   - Provide suggestions for adjustments based on progress

3. **Achievement System**
   - AI will identify milestone achievements
   - Generate appropriate badges and rewards

### Implementation Phases

#### Phase 1: Foundation
- Set up Supabase project
- Configure authentication
- Create database schema
- Implement basic API endpoints

#### Phase 2: Core Features
- Implement goal management
- Build roadmap generation with AI
- Create step tracking functionality

#### Phase 3: Enhancements
- Add achievement system
- Implement progress analytics
- Build notification system

#### Phase 4: Advanced Features
- Community features
- Resource recommendations
- AI-assisted coaching

### Tech Stack
- **Database**: PostgreSQL (via Supabase)
- **Authentication**: Supabase Auth
- **API**: Supabase Edge Functions
- **Storage**: Supabase Storage
- **AI**: OpenAI API for roadmap generation
- **Real-time**: Supabase Realtime for live updates

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/60137a97-240d-4053-8b6c-9ee56779835e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/60137a97-240d-4053-8b6c-9ee56779835e) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
