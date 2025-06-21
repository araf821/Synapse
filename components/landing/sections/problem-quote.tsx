export function ProblemQuote() {
  return (
    <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {/* Quote */}
        <blockquote className="mb-6 text-2xl leading-relaxed font-medium text-foreground sm:text-3xl">
          "Brain imaging revealed a decline in cognitive engagement in ChatGPT
          users... a 'cognitive debt' that compounds over time."
        </blockquote>

        {/* Citation */}
        <cite className="text-lg font-medium text-muted-foreground">
          — MIT Technology Review
        </cite>
      </div>
    </section>
  );
}
