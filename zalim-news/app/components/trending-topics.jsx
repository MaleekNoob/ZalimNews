'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const mockTrendingTopics = [
  { id: 1, title: 'Global Climate Summit', category: 'Environment' },
  { id: 2, title: 'Tech Giant Unveils New AI', category: 'Technology' },
  { id: 3, title: 'Major Sports Trade Shakes League', category: 'Sports' },
  { id: 4, title: 'Breakthrough in Renewable Energy', category: 'Science' },
  { id: 5, title: 'Economic Policies Shift Markets', category: 'Finance' },
  { id: 6, title: 'Cultural Festival Draws Millions', category: 'Culture' },
]

export default function TrendingTopics() {
  const [topics, setTopics] = useState(mockTrendingTopics)

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Trending Topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <Card key={topic.id}>
            <CardHeader>
              <CardTitle>{topic.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{topic.category}</p>
              <Button asChild variant="outline">
                <Link href={`/news/${topic.id}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

