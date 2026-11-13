import type { Metadata } from "next";

const siteUrl = "https://cateno-advisory.com";

export const metadata: Metadata = {
  title: "Unternehmensberatung | Strategie & internationales Wachstum",
  description:
    "Unternehmensberatung aus Deutschland: internationale Expansion, strategische Beratung, Geschäftsentwicklung und operative Optimierung.",
  alternates: {
    canonical: "/de/unternehmensberatung/",
    languages: {
      en: "/business-consulting/",
      de: "/de/unternehmensberatung/",
      "x-default": "/business-consulting/",
    },
  },
  openGraph: {
    title: "Unternehmensberatung | CATENO ADVISORY",
    description:
      "Strategische Beratung, internationale Expansion, Geschäftsentwicklung und operative Optimierung.",
    url: siteUrl + "/de/unternehmensberatung/",
    siteName: "CATENO ADVISORY",
    type: "website",
    locale: "de_DE",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Unternehmensberatung",
  serviceType: "Unternehmensberatung und strategische Beratung",
  provider: {
    "@type": "Organization",
    name: "CATENO ADVISORY",
    url: siteUrl,
  },
  areaServed: "International",
  url: siteUrl + "/de/unternehmensberatung/",
};

export default function UnternehmensberatungPage() {
  return (
    <main lang="de">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="hero sm interior-hero">
        <div className="interior-visual" aria-hidden="true" />
        <div className="w interior-inner">
          <span className="eyebrow hl">CATENO ADVISORY / UNTERNEHMENSBERATUNG</span>
          <h1 className="hl">Unternehmensberatung für nachhaltiges Wachstum</h1>
          <p className="hl">
            Strategische Beratung, internationale Expansion und Geschäftsentwicklung,
            um Unternehmen bei komplexen Herausforderungen und neuen Chancen zu unterstützen.
          </p>
          <div className="btns hl">
            <a className="btn" href="/#contact">Ziele besprechen <span>↗</span></a>
            <a className="btn o" href="/">Zur Startseite</a>
          </div>
        </div>
      </section>

      <section className="editorial-intro">
        <div className="w editorial-two">
          <div>
            <span className="eyebrow">STRATEGIE / ENTWICKLUNG / UMSETZUNG</span>
            <h2>Komplexität in klare Prioritäten verwandeln.</h2>
          </div>
          <div className="editorial-copy">
            <p>
              CATENO ADVISORY unterstützt Unternehmen mit Leistungen in den Bereichen
              internationale Expansion, strategische Beratung, Geschäftsentwicklung
              und operative Optimierung.
            </p>
            <p>
              Wir beginnen mit Ihren Zielen und den Rahmenbedingungen Ihres Unternehmens.
              Gemeinsam strukturieren wir Prioritäten und entwickeln einen praxisnahen,
              an Ihren Geschäftszielen ausgerichteten Ansatz.
            </p>
          </div>
        </div>
      </section>

      <section className="dark service-detail">
        <div className="w">
          <div className="section-head">
            <div>
              <span className="eyebrow">UNSERE LEISTUNGEN</span>
              <h2>Unternehmensberatung im Überblick</h2>
            </div>
            <p>
              Der konkrete Umfang richtet sich nach Ihrem Unternehmen, dem Marktumfeld
              und Ihren individuellen Zielen.
            </p>
          </div>
          <div className="detail-grid">
            {[
              ["01", "Internationale Expansion", "Märkte, Geschäftsmöglichkeiten und praktische Aspekte eines Markteintritts bewerten."],
              ["02", "Strategische Beratung", "Unternehmerische Herausforderungen strukturieren, Optionen bewerten und Prioritäten definieren."],
              ["03", "Geschäftsentwicklung", "Wachstumsmöglichkeiten identifizieren und den Aufbau von Geschäftsbeziehungen unterstützen."],
              ["04", "Operative Optimierung", "Prozesse betrachten und Potenziale zur Verbesserung der operativen Leistungsfähigkeit identifizieren."],
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
            <span className="eyebrow">UNSER ANSATZ</span>
            <h2>Von der Analyse zur Umsetzung.</h2>
          </div>
          <div className="editorial-copy">
            <p>
              Jedes Projekt beginnt mit Ihren Zielen und Herausforderungen. Wir helfen,
              Fragestellungen zu strukturieren, relevante Optionen zu betrachten und
              sinnvolle nächste Schritte zu definieren.
            </p>
            <a className="btn dark-btn" href="/#contact">Gespräch beginnen <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="closing-band dark">
        <div className="w closing-inner">
          <span className="eyebrow">CATENO ADVISORY</span>
          <h2>Lassen Sie uns Zukunft gestalten.</h2>
          <a className="btn" href="/#contact">Kontakt aufnehmen <span>↗</span></a>
        </div>
      </section>
    </main>
  );
}
