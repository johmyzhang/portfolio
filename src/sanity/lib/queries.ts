export const siteSettingsQuery = `*[_type == "siteSettings"][0]`;

export const timelineQuery = `*[_type == "timelineEntry"] | order(order asc)`;

export const booksQuery = `*[_type == "book"] | order(order asc)`;

export const climbingQuery = `*[_type == "climbing"][0]`;

export const travelPhotosQuery = `*[_type == "travelPhoto"] | order(order asc)`;

export const diaryEntriesQuery = `*[_type == "diaryEntry"] | order(date desc)`;
