
# Premium Roofing Services Website

## Overview

A professional website for a roofing contractor company showcasing their services, completed projects, and company information. The site is designed to build trust with potential customers through quality imagery, detailed project information, and easy navigation.

## Features

- **Responsive Design**: Fully responsive website that works seamlessly on desktop, tablet, and mobile devices
- **Project Showcase**: Interactive project gallery with detailed information about past roofing projects
- **Interactive Map**: Geographic visualization of completed projects
- **Company Information**: Detailed about page highlighting company history, values, and charitable contributions
- **Services Section**: Comprehensive overview of available roofing services
- **Contact Forms**: Easy ways for customers to request quotes and information

## Technology Stack

This project is built with modern web technologies:

- **React**: Frontend UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Shadcn UI**: Component library for consistent UI elements
- **React Router**: Client-side routing
- **Google Maps API**: For the interactive project map

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or another package manager

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd roofing-website
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:8080
   ```

## Deployment

### GitHub Pages Deployment

To deploy this site to GitHub Pages:

1. Fork or clone this repository
2. Update the `base` path in `vite.config.ts` to match your repository name:
   ```js
   base: '/your-repo-name/',
   ```
3. Push your changes to the `main` branch
4. GitHub Actions will automatically build and deploy your site
5. Your site will be available at `https://your-username.github.io/your-repo-name/`

### Manual Deployment

1. Build the project:
   ```
   npm run build
   ```
2. The built files will be in the `dist` directory
3. Upload these files to your web hosting service

### Other Deployment Options

- **Netlify/Vercel**: Connect your GitHub repository for automatic deployments
- **Lovable**: Click "Share" -> "Publish" in the Lovable platform

## Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/           # Page-specific components
│   ├── about/       # About page components
│   ├── contact/     # Contact page components
│   ├── index/       # Homepage components
│   ├── projects/    # Projects page components
│   ├── reviews/     # Reviews page components
│   └── services/    # Services page components
├── hooks/           # React hooks
├── lib/             # Utility functions
└── App.tsx          # Main application component
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images sourced from Unsplash
- Built with [Lovable](https://lovable.dev)
