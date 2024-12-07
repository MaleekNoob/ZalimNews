import Link from 'next/link'
import { Button } from '@/components/ui/button'
import TrendingTopics from './components/trending-topics'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to News Summarizer</h1>
        <p className="text-xl mb-6">Stay informed with AI-powered news summaries and interactive analysis.</p>
        <Button asChild>
          <Link href="/news">Explore News</Link>
        </Button>
      </section>
      <TrendingTopics />
    </div>
  )
}

