import { GetPostsResponse } from '../dto/response/GetPostsResponse';

import { Posts } from '@models/post/Posts';
import { Category } from '@models/post/Category';

export function mapperForGetPostsResponse(response: GetPostsResponse) {
  const mappedResponse: Posts = response.map((data) => ({
    id: data.id,
    title: data.title,
    category: Category[data.type],
    writerName: data.author,
    thumbnailUrl: data.imagePath,
  }));

  return mappedResponse;
}
