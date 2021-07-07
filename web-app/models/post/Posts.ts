import { Category } from './Category';

type PostItem = {
  id: number;
  title: string;
  writerName: string;
  thumbnailUrl: string;
  category: Category;
};

export type Posts = PostItem[];
