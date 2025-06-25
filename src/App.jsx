import './App.css'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Welcome
                </CardTitle>
                <CardDescription>
                  This is your new React application with shadcn/ui integration.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button size="sm" variant="secondary">Explore</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Components
                </CardTitle>
                <CardDescription>
                  Ready to use beautiful UI components from shadcn/ui.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button size="sm" variant="secondary">View Components</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  Tailwind CSS
                </CardTitle>
                <CardDescription>
                  Styled with Tailwind CSS and CSS variables for theming.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button size="sm" variant="secondary">Customize</Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App