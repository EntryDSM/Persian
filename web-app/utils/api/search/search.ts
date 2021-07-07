import { Posts } from '@models/post/Posts';

import { getConfig } from '@config/config';

import { GetPostsResponse } from '../post/dto/response/GetPostsResponse';
import { mapperForGetPostsResponse } from '../post/mapper/mapperForGetPostsResponse';
import { requestAndMapResponse } from '../requestAndMapResponse';

export async function searchPost(keyword: string): Promise<Posts> {
  return requestAndMapResponse<GetPostsResponse, Posts>({
    method: 'get',
    uri: getConfig().endpoint.main.search.withKeyword(keyword),
    mapper: mapperForGetPostsResponse,
  });
}
