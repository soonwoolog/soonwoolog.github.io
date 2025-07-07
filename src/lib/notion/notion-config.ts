export interface NotionResult {
  id: string;
  title: string;
  date: string;
}

export const dateFormatOption: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric"
};
