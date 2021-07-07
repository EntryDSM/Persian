import { PostDetail } from 'models/post/PostDetail';

import { GetPostResponse } from '../dto/response/GetPostResponse';

export function mapperForGetPostResponse({
  id,
  imagePath,
  title,
  author,
  date,
  content,
  description,
}: GetPostResponse) {
  const mappedResponse: PostDetail = {
    id,
    image: imagePath,
    title,
    writerName: author,
    createdAt: date,
    content: `<img src="${imagePath}" />${content}`,
    description,
  };

  return mappedResponse;
}
