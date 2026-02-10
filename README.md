# Avizum Landing Page

A modern, professional landing page for Avizum - an AI-powered competitive intelligence platform.

## Features

- 🎨 Modern, AI-themed design with gradient animations
- 📱 Fully responsive layout
- ⚡ Smooth animations using Framer Motion
- 🎯 SEO optimized with Next.js 14
- 🎨 Tailwind CSS for styling
- 🚀 TypeScript for type safety

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Project Structure

```
avizum-landing-page/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── about/           # About us page
│   ├── blog/            # Blog page
│   ├── contact/         # Contact page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Footer.tsx       # Footer
│   ├── WaitlistModal.tsx # Waitlist modal
│   └── ContactModal.tsx # Contact modal
└── public/              # Static assets
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

- `primary` - Primary brand color (blue)
- `accent` - Accent color (purple)

### Content

Update component files in `components/` directory to modify content and messaging.

## License

MIT
