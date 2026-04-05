export interface Settings {
  siteTitle: string;
  ownerName: string;
  heroQuote: string;
  heroBio: string;
  footerText: string;
}

export interface Section {
  id: string;
  label: string;
  heading: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface TimelineEntry {
  title: string;
  description: string;
  isCurrent: boolean;
}

export interface BookEntry {
  title: string;
  author: string;
  cover: string;
  reviewNote: string;
}

export interface TravelEntry {
  image: string;
  caption: string;
  rotation: string;
}

export interface DiaryEntry {
  date: string;
  mood: string;
  content: string;
  bgColor: string;
}

export interface Tag {
  label: string;
  primary: boolean;
}
