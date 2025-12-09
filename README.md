# CoAl Tech - Digital Solutions

A modern, high-performance website for CoAl Tech, offering web development, app development, and social media marketing services.

## 🚀 Performance Optimizations

This project is optimized for maximum performance with a target Lighthouse score of 100:

### Key Optimizations:
- **Lazy Loading**: All pages are lazy-loaded for faster initial load times
- **Code Splitting**: Automatic code splitting with manual chunk optimization
- **Service Worker**: Caching and offline functionality
- **PWA Ready**: Progressive Web App capabilities
- **Image Optimization**: Optimized image loading and caching
- **Font Optimization**: Preloaded critical fonts with fallbacks
- **SEO Optimized**: Complete meta tags, sitemap, and robots.txt

### Performance Features:
- Bundle size optimization with manual chunks
- Tree shaking for unused code elimination
- Minification and compression in production
- Critical CSS inlining
- Resource preloading and prefetching
- Intersection Observer for lazy loading
- Performance monitoring hooks

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Performance**: Custom optimization utilities

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── LazyComponent.tsx # Lazy loading wrapper
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── Services.tsx    # Services overview
│   ├── WebDevelopment.tsx    # Web dev landing
│   ├── AppDevelopment.tsx    # App dev landing
│   └── SocialMediaMarketing.tsx # SMM landing
├── hooks/              # Custom React hooks
│   └── usePerformance.ts # Performance monitoring
├── lib/                # Utility functions
│   ├── utils.ts        # General utilities
│   └── performance.ts  # Performance utilities
└── App.tsx             # Main app component
```

## 🚀 Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

5. **Type checking:**
```bash
npm run type-check
```

## 📊 Performance Monitoring

The app includes built-in performance monitoring:

- **Lighthouse Score**: Target 100 across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Analysis**: Use `npm run build:analyze` for detailed analysis
- **Performance Hooks**: Real-time performance metrics

## 🎨 Design System

- **Minimalistic Design**: Clean, modern interface
- **Responsive**: Mobile-first approach
- **Accessible**: WCAG 2.1 compliant
- **Dark/Light Mode**: Theme support (ready for implementation)

## 📱 PWA Features

- **Offline Support**: Service worker caching
- **Installable**: Add to home screen capability
- **Fast Loading**: Optimized for slow connections
- **Background Sync**: Ready for offline functionality

## 🔧 Customization

### Adding New Services:
1. Create a new page in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation and links
4. Add to sitemap.xml

### Performance Tuning:
1. Monitor bundle size with `npm run build:analyze`
2. Use performance hooks for real-time metrics
3. Optimize images and assets
4. Review and update service worker cache

## 📈 SEO Optimization

- Complete meta tags for all pages
- Structured data markup
- XML sitemap
- Robots.txt configuration
- Open Graph and Twitter cards
- Semantic HTML structure

## 🚀 Deployment

The app is optimized for deployment on any static hosting service:

- **Vercel**: Zero-config deployment
- **Netlify**: Automatic builds and deployments
- **GitHub Pages**: Static site hosting
- **AWS S3**: Scalable static hosting

## 📄 License

This project is proprietary to CoAl Tech.
