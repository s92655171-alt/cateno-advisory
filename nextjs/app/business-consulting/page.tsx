import type { Metadata } from "next";

const siteUrl = "https://cateno-advisory.com";

export const metadata: Metadata = {
  title: "Business Consulting | International Strategy & Growth",
  description:
    "Business consulting from Germany for international expansion, strategic advisory, business development and operational optimization.",
  alternates: {
    canonical: "/business-consulting/",
    languages: {
      en: "/business-consulting/",
      de: "/de/unternehmensberatung/",
      "x-default": "/business-consulting/",
    },
  },
  openGraph: {
    title: "Business Consulting | CATENO ADVISORY",
    description:
      "Strategic advisory, international expansion, business development and operational optimization.",
    url: siteUrl + "/business-consulting/",
    siteName: "CATENO ADVISORY",
    type: "website",
    locale: "en_US",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Consulting",
  serviceType: "Business consulting and strategic advisory",
  provider: {
    "@type": "Organization",
    name: "CATENO ADVISORY",
    url: siteUrl,
  },
  areaServed: "International",
  url: siteUrl + "/business-consulting/",
};

export default function BusinessConsultingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="hero sm interior-hero">
        <div className="interior-visual" aria-hidden="true" />
        <div className="w interior-inner">
          <span className="eyebrow hl">CATENO ADVISORY / BUSINESS CONSULTING</span>
          <h1 className="hl">Business Consulting for Sustainable Growth</h1>
          <p className="hl">
            Strategic advisory, international expansion and business development
            to help organizations navigate complexity and pursue new opportunities.
          </p>
          <div className="btns hl">
            <a className="btn" href="/#contact">Discuss Your Goals <span>↗</span></a>
            <a className="btn o" href="/">Back to Home</a>
          </div>
        </div>
      </section>

      <section className="editorial-intro">
        <div className="w editorial-two">
          <div>
            <span className="eyebrow">STRATEGY / DEVELOPMENT / EXECUTION</span>
            <h2>Turn Complexity into Clear Business Priorities.</h2>
          </div>
          <div className="editorial-copy">
            <p>
              CATENO ADVISORY supports organizations with business consulting
              focused on international expansion, strategic advisory, business
              development and operational optimization.
            </p>
            <p>
              We start by understanding your objectives and operating context.
              Together, we clarify priorities and shape a practical approach
              aligned with your business goals.
            </p>
          </div>
        </div>
      </section>

      <section className="dark service-detail">
        <div className="w">
          <div className="section-head">
            <div>
              <span className="eyebrow">AREAS OF SUPPORT</span>
              <h2>Business Consulting Services</h2>
            </div>
            <p>
              The scope of support depends on your organization, market context
              and specific objectives.
            </p>
          </div>
          <div className="detail-grid">
            {[
              ["01", "International Expansion", "Assessing markets, opportunities and the practical considerations involved in entering new markets."],
              ["02", "Strategic Advisory", "Structuring business challenges, evaluating options and defining clear strategic priorities."],
              ["03", "Business Development", "Identifying growth opportunities and supporting the development of business relationships."],
              ["04", "Operational Optimization", "Reviewing processes and identifying opportunities to improve operational effectiveness."],
            ].map(([number, title, description]) => (
              <article className="detail-item rv" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-intro">
        <div className="w editorial-two">
          <div>
            <span className="eyebrow">OUR APPROACH</span>
            <h2>From Understanding to Action.</h2>
          </div>
          <div className="editorial-copy">
            <p>
              Every engagement begins with your goals and challenges. We help
              structure the questions, consider relevant options and identify
              meaningful next steps.
            </p>
            <a className="btn dark-btn" href="/#contact">Start a Conversation <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="closing-band dark">
        <div className="w closing-inner">
          <span className="eyebrow">CATENO ADVISORY</span>
          <h2>Let’s Build What’s Next.</h2>
          <a className="btn" href="/#contact">Contact Us <span>↗</span></a>
        </div>
      </section>
    </main>
  );
}
