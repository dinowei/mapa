# Mapa

A modern React application built with Vite, Tailwind CSS, and shadcn/ui components.

## Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Latest React with modern features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful and accessible UI components
- 🎯 **Lucide Icons** - Beautiful & consistent icon library
- 📱 **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mapa
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:12000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── ui/           # shadcn/ui components
├── lib/
│   └── utils.js      # Utility functions
├── hooks/            # Custom React hooks
├── App.jsx           # Main application component
├── App.css           # Global styles with Tailwind
└── main.jsx          # Application entry point
```

## Adding shadcn/ui Components

This project is configured to work with shadcn/ui. You can add new components using:

```bash
npx shadcn-ui@latest add [component-name]
```

## Configuration

The project includes:
- `components.json` - shadcn/ui configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `vite.config.js` - Vite configuration with path aliases

## License

MIT