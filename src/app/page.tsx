import { client } from "@/sanity/lib/client";
import {
  siteSettingsQuery,
  timelineQuery,
  booksQuery,
  climbingQuery,
  travelPhotosQuery,
  diaryEntriesQuery,
} from "@/sanity/lib/queries";
import {
  SiteSettings,
  TimelineEntry,
  Book,
  ClimbingData,
  TravelPhoto,
  DiaryEntry,
} from "@/lib/types";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import BookList from "@/components/BookList";
import Climbing from "@/components/Climbing";
import TravelGrid from "@/components/TravelGrid";
import DiaryScroll from "@/components/DiaryScroll";
import Footer from "@/components/Footer";

export const revalidate = 3600;

// Fallback data for when Sanity is not yet configured
const fallbackSettings: SiteSettings = {
  siteTitle: "",
  ownerName: "",
  heroQuote: "",
  heroBio: "",
  navLinks: [],
  timelineHeading: "",
  readingHeading: "",
  climbingHeading: "",
  travelHeading: "",
  diaryHeading: "",
  footerText: "",
};

const fallbackTimeline: TimelineEntry[] = [];

const fallbackBooks: Book[] = [];

const fallbackClimbing: ClimbingData = {
  description: "",
  tags: [],
};

const fallbackTravel: TravelPhoto[] = [];

const fallbackDiary: DiaryEntry[] = [];

async function getData() {
  if (!client) {
    // Sanity not configured — use fallback data
    return {
      settings: fallbackSettings,
      timeline: fallbackTimeline,
      books: fallbackBooks,
      climbing: fallbackClimbing,
      travelPhotos: fallbackTravel,
      diaryEntries: fallbackDiary,
    };
  }

  try {
    const [settings, timeline, books, climbing, travelPhotos, diaryEntries] =
      await Promise.all([
        client.fetch<SiteSettings>(siteSettingsQuery),
        client.fetch<TimelineEntry[]>(timelineQuery),
        client.fetch<Book[]>(booksQuery),
        client.fetch<ClimbingData>(climbingQuery),
        client.fetch<TravelPhoto[]>(travelPhotosQuery),
        client.fetch<DiaryEntry[]>(diaryEntriesQuery),
      ]);

    return {
      settings: settings || fallbackSettings,
      timeline: timeline?.length ? timeline : fallbackTimeline,
      books: books?.length ? books : fallbackBooks,
      climbing: climbing || fallbackClimbing,
      travelPhotos: travelPhotos?.length ? travelPhotos : fallbackTravel,
      diaryEntries: diaryEntries?.length ? diaryEntries : fallbackDiary,
    };
  } catch {
    return {
      settings: fallbackSettings,
      timeline: fallbackTimeline,
      books: fallbackBooks,
      climbing: fallbackClimbing,
      travelPhotos: fallbackTravel,
      diaryEntries: fallbackDiary,
    };
  }
}

export default async function Home() {
  const { settings, timeline, books, climbing, travelPhotos, diaryEntries } =
    await getData();

  return (
    <>
      <Navbar
        siteTitle={settings.siteTitle}
        navLinks={settings.navLinks}
      />
      <Hero heroQuote={settings.heroQuote} heroBio={settings.heroBio} />
      <Timeline entries={timeline} heading={settings.timelineHeading} />
      <BookList books={books} heading={settings.readingHeading} />
      <Climbing data={climbing} heading={settings.climbingHeading} />
      <TravelGrid photos={travelPhotos} heading={settings.travelHeading} />
      <DiaryScroll entries={diaryEntries} heading={settings.diaryHeading} />
      <Footer
        footerText={settings.footerText}
        ownerName={settings.ownerName}
      />
    </>
  );
}
