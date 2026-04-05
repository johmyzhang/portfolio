import { getSettings, getSections } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionRenderer from "@/components/SectionRenderer";
import Footer from "@/components/Footer";

export default function Home() {
  const settings = getSettings();
  const sections = getSections();

  const navLinks = sections.map((s) => ({ id: s.id, label: s.label }));

  return (
    <>
      <Navbar siteTitle={settings.siteTitle} links={navLinks} />
      <Hero heroQuote={settings.heroQuote} heroBio={settings.heroBio} />
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
      <Footer footerText={settings.footerText} ownerName={settings.ownerName} />
    </>
  );
}
