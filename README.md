# Styra Family Salon — Unisex Salon Website

A modern, fast, and responsive salon website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** components. Features include a hero slider, services and pricing, booking modal with validation, contact section with Google Maps, and SEO-ready metadata.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern UI/UX** - Responsive design with Tailwind CSS and shadcn/ui components
- 🖼️ **Hero Slideshow** - Automatic image carousel with smooth transitions
- 💇 **Services Showcase** - Gender-based service packages with pricing
- 📅 **Smart Booking System** - Appointment modal with date/time validation and IST timezone support
- 📍 **Contact Section** - Embedded Google Maps, phone, email, and business hours
- 🔍 **SEO Optimized** - Metadata, Open Graph tags, and semantic HTML
- 📱 **Mobile Responsive** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Built with Next.js for optimal loading speed
- 🎭 **Smooth Animations** - Custom animations and transitions throughout

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Directory)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **State Management:** [TanStack Query](https://tanstack.com/query)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git (optional)

### Installation

1. **Clone or download the repository**

```bash
cd styra-salon-sparkle-main
```

2. **Install dependencies**

```bash
npm install --legacy-peer-deps
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |

## 📁 Project Structure

```
styra-salon-sparkle-main/
├── app/                      # Next.js 14 App Directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── not-found.tsx        # 404 page
│   ├── providers.tsx        # Client-side providers (React Query)
│   └── globals.css          # Global styles and CSS variables
│
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── HeroSection.tsx  # Hero with image slideshow
│   │   ├── AboutSection.tsx # "Why Choose Us" section
│   │   ├── ServicesSection.tsx # Services and pricing
│   │   ├── ContactSection.tsx  # Contact info and map
│   │   ├── Footer.tsx       # Footer with links
│   │   ├── BookingModal.tsx # Appointment booking form
│   │   └── ui/              # shadcn/ui components
│   │
│   ├── data/               # JSON data files
│   │   ├── servicesData.json    # Service packages and pricing
│   │   ├── timeSlotsData.json   # Available time slots
│   │   └── salonImages.json     # Hero slideshow images
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── use-toast.ts    # Toast notification hook
│   │   └── use-mobile.tsx  # Mobile detection hook
│   │
│   └── lib/                # Utility functions
│       └── utils.ts        # Helper utilities (cn, etc.)
│
├── public/                 # Static assets
│   ├── logo.png           # Salon logo
│   ├── favicon.ico        # Website favicon
│   └── salon-*.jpg        # Salon photos
│
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization Guide

### 1. Branding & Logo

Update your salon name and logo:
- **Logo:** Replace `public/logo.svg` and `public/favicon.ico`
- **Name:** Edit `src/components/Header.tsx` and `src/components/Footer.tsx`
- **Metadata:** Update `app/layout.tsx` (title and description)

### 2. Hero Section

Customize hero text and images:
- **Text & CTAs:** Edit `src/components/HeroSection.tsx`
- **Images:** Replace images in `public/` and update `src/data/salonImages.json`

### 3. Services & Pricing

Update service packages and combos:
- **Services Data:** Edit `src/data/servicesData.json`
- **Structure:**
  ```json
  {
    "male": {
      "service-category": {
        "sub_services": [
          { "name": "Service Name", "mrp": 2000, "offer": 1500 }
        ]
      }
    },
    "female": { /* same structure */ }
  }
  ```

### 4. Booking System

Configure appointment settings:
- **Time Slots:** Edit `src/data/timeSlotsData.json`
- **Form Logic:** Modify `src/components/BookingModal.tsx`
- **API Endpoint:** Update the webhook URL in `BookingModal.tsx` (line ~170)

### 5. Contact Information

Update salon details:
- **Address, Phone, Email:** Edit `src/components/ContactSection.tsx`
- **Google Maps:** Replace the iframe `src` with your location embed URL
- **Business Hours:** Update hours in `ContactSection.tsx`

### 6. Theme & Colors

Customize colors using HSL variables in `app/globals.css`:

```css
:root {
  --primary: 164 100% 21%;      /* Teal */
  --accent: 12 100% 56%;        /* Orange */
  --salon-female: 340 75% 55%;  /* Pink */
  --salon-male: 210 85% 45%;    /* Blue */
  /* ... more colors */
}
```

### 7. Navigation

Update menu items:
- **Labels:** Edit `navItems` array in `src/components/Header.tsx`
- **Links:** Ensure section IDs match: `home`, `about`, `services`, `contact`

### 8. Footer & Social Media

Update footer content:
- **Links:** Edit `src/components/Footer.tsx`
- **Social Media:** Update `href` attributes for Facebook, Instagram, Twitter

### 9. SEO & Metadata

Optimize for search engines:
- **Page Metadata:** Update `app/layout.tsx`
- **SEO Keywords:** Edit the hidden text in `Footer.tsx` for local SEO

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import project to Vercel
3. Vercel will auto-detect Next.js settings
4. Click "Deploy"

### Deploy to Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables if needed

### Other Platforms

Works with any platform that supports Next.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## 📱 Features Breakdown

### Smart Booking System
- **IST Timezone Support** - Automatically handles Indian Standard Time
- **8:00 PM Cutoff** - Prevents same-day bookings after 8 PM
- **Time Slot Filtering** - Only shows available future slots (current time + 30 minutes)
- **Form Validation** - Validates phone numbers, dates, and required fields
- **Toast Notifications** - User feedback on success/error

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile
- Touch-friendly interactions
- Optimized images and loading

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly

## 🔧 Configuration Files

- **`next.config.js`** - Next.js configuration
- **`tailwind.config.ts`** - Tailwind CSS settings and theme
- **`tsconfig.json`** - TypeScript compiler options
- **`postcss.config.js`** - PostCSS plugins (Tailwind)
- **`components.json`** - shadcn/ui component configuration
- **`.eslintrc.json`** - ESLint rules

## 📝 Important Notes

- **Section IDs:** Smooth scrolling requires these IDs: `home`, `about`, `services`, `contact`
- **Timezone:** All date/time logic uses IST (UTC+5:30)
- **Images:** Optimize images before adding to reduce load time
- **API Integration:** Update the booking webhook URL with your actual endpoint

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Rebuild
npm run build
```

### Port Already in Use

If port 3000 is occupied:

```bash
# Kill the process
npx kill-port 3000

# Or use a different port
PORT=3001 npm run dev
```

## 📄 License

This project is provided as-is. Feel free to modify and use for your salon business.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For support or questions about customization, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

---

**Built with ❤️ for Styra Family Salon**
