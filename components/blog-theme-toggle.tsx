"use client"

import * as React from "react"
import { Moon, Sun, Palette } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

interface BlogThemeToggleProps {
  variant?: "floating" | "inline"
  showLabel?: boolean
}

export function BlogThemeToggle({ variant = "floating", showLabel = false }: BlogThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size={variant === "floating" ? "default" : "sm"}
        className={`${variant === "floating" 
          ? "w-12 h-12 p-0 rounded-full shadow-lg" 
          : "w-10 h-10 p-0 rounded-full"
        }`}
        disabled
      >
        <Sun className="w-5 h-5" />
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (variant === "floating") {
    return (
      <div className="fixed bottom-8 left-8 z-40">
        <Button
          onClick={toggleTheme}
          className="blog-theme-toggle glass-theme-toggle text-foreground w-12 h-12 p-0 rounded-full shadow-lg transition-all duration-300"
          aria-label={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
          title={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
        >
          <Sun className="h-5 w-5 theme-icon-transition rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 theme-icon-transition rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-auto h-10 px-3 rounded-full hover:bg-muted transition-all duration-300 flex items-center gap-2 border border-border/50 hover:border-border"
      aria-label={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
    >
      <Sun className="h-4 w-4 theme-icon-transition rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 theme-icon-transition rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      {showLabel && (
        <span className="text-sm font-medium ml-1">
          {theme === "light" ? "Oscuro" : "Claro"}
        </span>
      )}
    </Button>
  )
}
