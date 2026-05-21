export default function Hero() {
  return (
    <section className="section-padding min-h-screen flex items-center">
      <div className="padding-global w-full">
        <div className="container-xlarge">
          <div className="max-w-4xl">
            <p
              fd-animate="fade-up"
              className="eyebrow mb-4"
            >
              Style Guide
            </p>

            <h1
              fd-animate="fade-up"
              className="heading-h1"
            >
              Flowdojo Style Guide
            </h1>

            <p
              fd-animate="fade-up"
              className="text-body mt-6 max-w-2xl"
            >
              Building scalable frontend systems using
              Next.js, Tailwind, GSAP, Lenis, and
              Sanity CMS.
            </p>

            <div
              fd-animate="fade-up"
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#" className="button-primary">
                Get Started
              </a>

              <a href="#" className="button-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}