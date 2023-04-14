export type Quote = {
  authorId: number;
  content: string;
  author: string;
  tags: string[];
  minLength: number;
  maxLength: number;
  limit: number;
};
