import NewsSummaryCard from '../components/news-summary-card'

const mockNewsData = [
  {
    id: 1,
    title: 'Global Climate Summit Reaches Landmark Agreement',
    description: 'World leaders commit to ambitious carbon reduction targets',
    highlights: [
      'Over 190 countries participated in the summit',
      'Agreement aims for net-zero emissions by 2050',
      'Developing nations to receive climate finance support'
    ],
    category: 'Environment'
  },
  {
    id: 2,
    title: 'Tech Giant Unveils Revolutionary AI Model',
    description: 'New AI system shows unprecedented language understanding capabilities',
    highlights: [
      'AI model trained on diverse multilingual datasets',
      'Demonstrates human-like reasoning in complex tasks',
      'Raises ethical questions about AI development'
    ],
    category: 'Technology'
  },
  // Add more mock news items here
]

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Latest News Summaries</h1>
      <div className="space-y-6">
        {mockNewsData.map((news) => (
          <NewsSummaryCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  )
}

