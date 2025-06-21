export function ProblemQuote() {
  return (
    <section className="bg-muted/30 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        {/* Quote */}
        <blockquote className="mb-8 font-serif text-2xl leading-relaxed font-medium text-foreground sm:text-3xl lg:text-4xl lg:leading-relaxed">
          "Brain imaging revealed a decline in cognitive engagement in ChatGPT
          users... a 'cognitive debt' that compounds over time."
        </blockquote>

        {/* Citation */}
        <cite className="font-sans text-lg font-medium text-muted-foreground sm:text-xl">
          — MIT Technology Review
        </cite>
      </div>
    </section>
  );
}
