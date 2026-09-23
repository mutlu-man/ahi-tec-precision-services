import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Factory, MapPin, PackageCheck, Route, Users } from "lucide-react";
import { Header, Footer } from "@/components/site/Header";
import heroImage from "@/assets/hero-parts.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AHI-TEC – Industriedienstleistungen aus Meinerzhagen" },
      {
        name: "description",
        content:
          "AHI-TEC in Meinerzhagen: Montage-, Prüf-, Sortier-, Entgrat- und konventionelle Bearbeitung von Metall-, Kunststoff- und Elektroteilen sowie CNC-Bearbeitung.",
      },
      { property: "og:title", content: "AHI-TEC – Industriedienstleistungen aus Meinerzhagen" },
      {
        property: "og:description",
        content:
          "Montage, Prüfung, Sortierung, Entgraten und CNC-Bearbeitung von Metall-, Kunststoff- und Elektroteilen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const LEISTUNGEN = [
  {
    title: "Montage",
    text: "Fachgerechte Montage von Baugruppen und Einzelteilen – von der Kleinserie bis zum Dauerauftrag.",
  },
  {
    title: "Prüfung",
    text: "Sicht- und Maßprüfung nach Ihren Vorgaben, inklusive dokumentierter Qualitätskontrolle.",
  },
  {
    title: "Sortierung",
    text: "Zuverlässige Ausschuss- und Qualitätssortierung Ihrer Teile – schnell und nachvollziehbar.",
  },
  {
    title: "Entgraten",
    text: "Sauberes Entgraten von Metall- und Kunststoffteilen für einwandfreie Weiterverarbeitung.",
  },
  {
    title: "Konventionelle Bearbeitung",
    text: "Weitere konventionelle Bearbeitungen von Metall-, Kunststoff- und Elektroteilen nach Zeichnung.",
  },
  {
    title: "CNC-Bearbeitung",
    text: "Präzise CNC-Bearbeitung für Dreh- und Frästeile – flexibel, maßgenau und termintreu.",
  },
];

const ABLAUF = [
  {
    step: "01",
    title: "Anfrage",
    text: "Sie senden uns Zeichnung, Muster oder Anforderung – wir melden uns zeitnah zurück.",
  },
  {
    step: "02",
    title: "Angebot",
    text: "Sie erhalten ein transparentes Angebot mit klaren Konditionen und Lieferzeiten.",
  },
  {
    step: "03",
    title: "Umsetzung",
    text: "Wir bearbeiten Ihre Teile zuverlässig – mit laufender Qualitätskontrolle.",
  },
  {
    step: "04",
    title: "Lieferung",
    text: "Geprüft, dokumentiert und termingerecht geliefert – auf Wunsch auch in Chargen.",
  },
];

const EINSATZBEREICHE = [
  {
    icon: Factory,
    title: "Fertigungsengpässe",
    text: "Zusätzliche Kapazität, wenn Serienaufträge Ihre internen Linien auslasten oder kurzfristige Bedarfe entstehen.",
  },
  {
    icon: PackageCheck,
    title: "Sortier- & Prüfaktionen",
    text: "Gewissenhafte Sicht-, Maß- und 100%-Kontrollen für sichere Lieferketten und dokumentierte Qualität.",
  },
  {
    icon: Users,
    title: "Montage & Nacharbeit",
    text: "Baugruppengenaue Montage und saubere Nachbearbeitung, ohne wertvolle interne Kapazitäten zu binden.",
  },
];

const WERKSTOFFE = [
  "Aluminium",
  "Edelstahl",
  "Messing",
  "Technische Kunststoffe",
  "Verbundwerkstoffe",
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center bg-brand-deep">
        <img
          src={heroImage}
          alt="Präzise bearbeitete Metall- und Kunststoffteile"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/60 to-brand-deep/30" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-32 sm:px-6">
          <p className="mb-4 inline-block rounded-full border border-primary-foreground/25 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">
            Industriedienstleistungen · Meinerzhagen
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-primary-foreground sm:text-6xl">
            Präzision und Termintreue für Ihre{" "}
            <span className="text-signal">Fertigung.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Wir entlasten Ihre internen Fertigungslinien gezielt – mit Montage,
            Prüfung, Sortierung, Entgraten, konventioneller Bearbeitung und
            präziser CNC-Bearbeitung aus Meinerzhagen.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="rounded-md bg-signal px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Jetzt anfragen
            </a>
            <a
              href="#leistungen"
              className="rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-signal">
          Unsere Leistungen
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-foreground sm:text-4xl">
          Alles rund um Ihre Metall-, Kunststoff- und Elektroteile
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LEISTUNGEN.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-signal" />
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Einsatzbereiche */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-signal">
              Entlastung, wenn es darauf ankommt
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Verlässliche Kapazitäten für Fertigungsleiter, Zulieferer und Einkäufer
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Engpässe in der Serienfertigung, aufwändige Sortierarbeiten oder
              kapazitätsbindende Nachbearbeitungen gefährden Liefertermine und
              Budgets. AHI-TEC übernimmt klar definierte Teil- oder Komplettprozesse
              und schafft Freiraum für Ihre Kernfertigung.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {EINSATZBEREICHE.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border-l-2 border-signal pl-5">
                  <Icon className="h-6 w-6 text-signal" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="scroll-mt-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-signal">
              Über uns
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Ihr Partner in Meinerzhagen
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Als inhabergeführter Industriedienstleister mit Sitz in Meinerzhagen
              im Märkischen Kreis verstehen wir die täglichen Herausforderungen
              von Fertigungsleitern, Zulieferern und Einkäufern. Technischer
              Sachverstand, kurze Entscheidungswege und gewissenhaftes Arbeiten
              bilden die Grundlage jeder Zusammenarbeit.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Mit einem modernen Maschinenpark sowie sorgfältiger Handarbeits- und
              Prüfmanufaktur übernehmen wir Teil- oder Komplettprozesse. Von der
              spanabhebenden Zerspanung über die baugruppengenaue Montage bis zur
              100%-Qualitätskontrolle stehen Präzision, Nachvollziehbarkeit und
              Termintreue im Mittelpunkt.
            </p>
          </div>
          <div className="bg-brand-deep p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-widest text-signal">
              Werkstoffkompetenz
            </p>
            <h3 className="mt-3 text-2xl font-bold text-primary-foreground">
              Sicher im Umgang mit anspruchsvollen Materialien
            </h3>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {WERKSTOFFE.map((material) => (
                <li key={material} className="flex items-center gap-3 text-sm text-primary-foreground/85">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-signal" aria-hidden="true" />
                  {material}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Standort */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex items-start gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-signal text-accent-foreground">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-signal">
                Logistischer Heimvorteil
              </p>
              <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                Meinerzhagen – direkt an der BAB 45
              </h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                Unser Standort im Märkischen Kreis bietet kurze Wege in die
                Industrieregionen Südwestfalens, des Ruhrgebiets und darüber hinaus.
                Das erleichtert schnelle Anlieferungen, planbare Abholungen und
                termingerechte Rückführungen Ihrer Werkstücke.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-l-2 border-signal pl-5 text-primary">
            <Route className="h-7 w-7" aria-hidden="true" />
            <div>
              <p className="text-sm font-bold">Schnell angebunden</p>
              <p className="text-xs text-muted-foreground">A45 · Märkischer Kreis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-signal">
          So arbeiten wir
        </p>
        <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
          In vier Schritten zum fertigen Teil
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ABLAUF.map((item) => (
            <div key={item.step} className="relative rounded-xl border border-border bg-card p-6">
              <p className="text-4xl font-black text-signal/25">{item.step}</p>
              <h3 className="mt-3 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="scroll-mt-20 bg-brand-deep">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-signal">
                Kontakt
              </p>
              <h2 className="mt-3 text-3xl font-bold text-primary-foreground sm:text-4xl">
                Sprechen wir über Ihr Projekt
              </h2>
              <p className="mt-6 leading-relaxed text-primary-foreground/75">
                Senden Sie uns Ihre Anfrage – wir erstellen Ihnen zeitnah ein
                unverbindliches Angebot. Gerne können Sie uns auch direkt
                Zeichnungen oder Muster zusenden.
              </p>
              <div className="mt-8 space-y-3 text-sm text-primary-foreground/80">
                <p>
                  <span className="font-semibold text-primary-foreground">Standort:</span>{" "}
                  58540 Meinerzhagen
                </p>
                <p>
                  <span className="font-semibold text-primary-foreground">E-Mail:</span>{" "}
                  <a href="mailto:info@ahi-tec.de" className="underline hover:text-primary-foreground">
                    info@ahi-tec.de
                  </a>
                </p>
              </div>
            </div>
            <form
              className="rounded-xl bg-card p-6 shadow-lg sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
                    Name / Firma
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
                    E-Mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">
                    Ihre Anfrage
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-signal px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Anfrage senden
                </button>
                <p className="text-xs text-muted-foreground">
                  Hinweis: Das Formular ist derzeit eine Vorschau – bitte nutzen
                  Sie vorerst die E-Mail-Adresse.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
