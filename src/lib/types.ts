// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export interface SiteSettings {
  siteTitle: string;
  ownerName: string;
  heroQuote: string;
  heroBio: string;
  navLinks: NavLink[];
  timelineHeading: string;
  readingHeading: string;
  climbingHeading: string;
  travelHeading: string;
  diaryHeading: string;
  footerText: string;
}

export interface NavLink {
  _key: string;
  label: string;
  sectionId: string;
}

export interface TimelineEntry {
  _id: string;
  title: string;
  description: string;
  isCurrent: boolean;
  order: number;
}

export interface Book {
  _id: string;
  title: string;
  author: string;
  cover?: SanityImageSource;
  reviewNote: string;
  order: number;
}

export interface ClimbingData {
  description: string;
  tags: ClimbingTag[];
}

export interface ClimbingTag {
  _key: string;
  label: string;
  isPrimary: boolean;
}

export interface TravelPhoto {
  _id: string;
  image?: SanityImageSource;
  caption: string;
  rotation: string;
  order: number;
}

export interface DiaryEntry {
  _id: string;
  date: string;
  mood: string;
  content: string;
  bgColor: string;
}
