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
  siteTitle: "进化日记.",
  ownerName: "[你的名字]",
  heroQuote: '"成长的转折点永远在当下。\n每一天，都在进化。"',
  heroBio: "你好，我是 [你的名字]。\n一名前往过加州与纽约，现居洛杉矶的心理咨询师。\n这里记录着我的跨界、迷茫、探索，以及那些微小但确定的改变。",
  navLinks: [
    { _key: "1", label: "轨迹", sectionId: "timeline" },
    { _key: "2", label: "读书", sectionId: "reading" },
    { _key: "3", label: "攀岩", sectionId: "climbing" },
    { _key: "4", label: "游记", sectionId: "travel" },
    { _key: "5", label: "心事", sectionId: "diary" },
  ],
  timelineHeading: "我的轨迹",
  readingHeading: "书页间的避难所",
  climbingHeading: "向上生长的本能",
  travelHeading: "步履不停",
  diaryHeading: "碎碎念与小情绪",
  footerText: "Evolving Every Day.",
};

const fallbackTimeline: TimelineEntry[] = [
  { _id: "1", title: "现在 - 洛杉矶", description: "Community Mental Health 咨询师", isCurrent: true, order: 1 },
  { _id: "2", title: "2023 - 哥伦比亚大学", description: "心理咨询深造", isCurrent: false, order: 2 },
  { _id: "3", title: "2019 - UC Davis", description: "Psychology (Bio Emphasis)", isCurrent: false, order: 3 },
];

const fallbackBooks: Book[] = [
  {
    _id: "1",
    title: "《也许你该找个人聊聊》",
    author: "Lori Gottlieb",
    reviewNote: '"痛觉是改变的催化剂。" 作为咨询师读这本书，更能共情那种在咨询室里彼此镜射、共同成长的脆弱与勇敢。',
    order: 1,
  },
];

const fallbackClimbing: ClimbingData = {
  description: "攀岩不仅是体能的对抗，更是与内心恐惧的博弈。每一次脱落（fall），都是为了下一次更好地抓住岩点。这和心理咨询的过程何其相似。",
  tags: [
    { _key: "1", label: "抱石 V4", isPrimary: true },
    { _key: "2", label: "顶绳 5.10c", isPrimary: false },
    { _key: "3", label: "📍 LA 某岩馆", isPrimary: false },
  ],
};

const fallbackTravel: TravelPhoto[] = [
  { _id: "1", caption: "纽约 · 2023", rotation: "rotate-1", order: 1 },
  { _id: "2", caption: "加州一号公路", rotation: "-rotate-2", order: 2 },
  { _id: "3", caption: "南宁 · 故乡", rotation: "rotate-2", order: 3 },
];

const fallbackDiary: DiaryEntry[] = [
  {
    _id: "1",
    date: "2026-04-04",
    mood: "🌤️",
    content: "洛杉矶今天的晚霞很温柔。刚刚结束了一个艰难的咨询个案，感觉自己被掏空了，但在开车回家的路上，看着窗外的棕榈树，突然觉得一切都在慢慢变好。",
    bgColor: "bg-[#F4F1E1]",
  },
  {
    _id: "2",
    date: "2026-03-20",
    mood: "☕️",
    content: "发现自己还是会在某些瞬间感到迷茫。也许\u201C允许自己偶尔停滞\u201D，也是心理学教给我最重要的一课吧。",
    bgColor: "bg-[#E8EAE6]",
  },
];

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
