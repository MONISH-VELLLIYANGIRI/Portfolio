"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Monish V. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Crafted with passion for building intelligent systems</p>
        </div>
      </div>
    </footer>
  )
}
