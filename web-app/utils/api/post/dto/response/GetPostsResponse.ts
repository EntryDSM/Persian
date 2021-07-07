import { PostKind } from '@utils/api/post/entity/PostKind';

export type GetPostsResponse = Array<{
  id: number;
  imagePath: string;
  title: string;
  description: string;
  type: PostKind;
  author: string;
}>;
