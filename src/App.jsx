import './App.css'
import { Button } from '@/components/ui/button'
import { MapPin, Zap, Palette } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Mapa</h1>
          <p className="text-muted-foreground mb-6">
            A modern React application with shadcn/ui components
          </p>
          <div className="flex gap-4 justify-center">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </header>
        
        <main className="max-w-4xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg bg-card text-card-foreground">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Welcome</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                This is your new React application with shadcn/ui integration.
              </p>
              <Button size="sm" variant="secondary">Explore</Button>
            </div>
            
            <div className="p-6 border rounded-lg bg-card text-card-foreground">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Components</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Ready to use beautiful UI components from shadcn/ui.
              </p>
              <Button size="sm" variant="secondary">View Components</Button>
            </div>
            
            <div className="p-6 border rounded-lg bg-card text-card-foreground">
              <div className="flex items-center gap-2 mb-3">
                <Palette className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Tailwind CSS</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Styled with Tailwind CSS and CSS variables for theming.
              </p>
              <Button size="sm" variant="secondary">Customize</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App