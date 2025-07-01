# EstatePro Complete - Professional Real Estate Platform

A complete, production-ready real estate platform built with React, TypeScript, and Vite. Features comprehensive property listings, detailed property pages, payment integration, and agent management.

## 🌐 Live Demo

**Visit the live site:** [https://kaushiks18.github.io/estate-pro-complete/](https://kaushiks18.github.io/estate-pro-complete/)

## 🚀 Features

- **Property Listings**: Browse, search, and filter properties for buy, rent, and commercial
- **Property Details**: Comprehensive property detail pages with image galleries, specifications, and agent information
- **Payment Integration**: Complete payment flow with EMI calculator and multiple payment options
- **Agent Dashboard**: Manage customer interactions and property listings
- **Responsive Design**: Mobile-first design with hamburger menu and responsive layouts
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Visit Scheduling**: Schedule property visits directly from detail pages
- **Customer Dashboard**: Personalized dashboard for property management
- **Property Posting**: Easy-to-use property listing form for agents

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Routing**: React Router DOM
- **Backend**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/kaushiks18/estate-pro-complete.git
cd estate-pro-complete
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Add your Supabase credentials to `.env`:
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Start development server:
```bash
npm run dev
```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to "Pages" section
4. Select "GitHub Actions" as the source
5. The workflow will automatically deploy on push to main

### Manual Deployment

1. Build the project:
```bash
npm run build:gh-pages
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Setting up a New Repository

1. Create a new repository on GitHub named `estate-pro-complete`
2. Initialize git and add remote:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/kaushiks18/estate-pro-complete.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Scroll to Pages section
   - Select "GitHub Actions" as source
   - The site will be available at: `https://kaushiks18.github.io/estate-pro-complete/`

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

For GitHub Pages deployment, add these as repository secrets:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 📁 Project Structure

```
src/
├── components/ui/          # Reusable UI components (shadcn/ui)
├── pages/                  # Page components
│   ├── Index.tsx          # Home page with hero section
│   ├── Buy.tsx            # Property listings for purchase
│   ├── Rent.tsx           # Rental property listings
│   ├── Commercial.tsx     # Commercial property listings
│   ├── PropertyDetail.tsx # Detailed property information
│   ├── PaymentPage.tsx    # Payment processing and EMI calculator
│   ├── Agents.tsx         # Agent dashboard
│   ├── AgentLogin.tsx     # Agent authentication
│   ├── CustomerDashboard.tsx # Customer account management
│   ├── PostProperty.tsx   # Property listing form
│   └── Login.tsx          # User authentication
├── integrations/
│   └── supabase/          # Database integration and types
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:gh-pages` - Build for GitHub Pages deployment
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 🌐 Live Demo

The application is live at: [https://kaushiks18.github.io/estate-pro-complete/](https://kaushiks18.github.io/estate-pro-complete/)

## 🏡 Key Features Implemented

### Property Management
- **Property Listings**: Comprehensive listings with search and filter capabilities
- **Property Details**: Detailed pages with image galleries, specifications, amenities
- **Property Types**: Support for residential, commercial, and rental properties

### User Experience
- **Responsive Design**: Mobile-first approach with hamburger menu
- **Navigation**: Intuitive navigation with prominent "List Your Property" button
- **Modern UI**: Clean, professional design using Tailwind CSS and shadcn/ui

### Payment System
- **Payment Integration**: Complete payment flow for property transactions
- **EMI Calculator**: Built-in EMI calculation for different payment plans
- **Multiple Payment Options**: Support for various payment methods

### Agent Features
- **Agent Dashboard**: Comprehensive dashboard for property and customer management
- **Property Posting**: Easy-to-use form for listing new properties
- **Customer Management**: Tools for managing customer interactions

## 📧 Support

For support or questions, please open an issue on GitHub or contact the development team.

## 📄 License

This project is licensed under the MIT License.
