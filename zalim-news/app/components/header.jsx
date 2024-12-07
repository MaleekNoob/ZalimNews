import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          News Summarizer
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-foreground hover:text-primary">Home</Link></li>
            <li><Link href="/news" className="text-foreground hover:text-primary">News</Link></li>
            <li><Link href="/about" className="text-foreground hover:text-primary">About</Link></li>
            <li><ModeToggle /></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

