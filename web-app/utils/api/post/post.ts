import { PostDetail } from '@models/post/PostDetail';
import { Posts } from '@models/post/Posts';


import { getConfig } from '@config/config';

import { requestAndMapResponse } from '../requestAndMapResponse';

import { GetPostResponse } from './dto/response/GetPostResponse';
import { GetPostsResponse } from './dto/response/GetPostsResponse';

import { mapperForGetPostResponse } from './mapper/mapperForGetPostResponse';
import { mapperForGetPostsResponse } from './mapper/mapperForGetPostsResponse';

export async function getPosts(): Promise<Posts> {
  return requestAndMapResponse<GetPostsResponse, Posts>({
    method: 'get',
    uri: getConfig().endpoint.main.post.prefix,
    mapper: mapperForGetPostsResponse,
  });
}

export async function getBanners(): Promise<{ postIds: number[] }> {
  return requestAndMapResponse<{ postIds: number[] }, { postIds: number[] }>({
    method: 'get',
    uri: getConfig().endpoint.main.banner.prefix,
  });
}

export async function getPost(id: number): Promise<PostDetail> {
  return requestAndMapResponse<GetPostResponse, PostDetail>({
    method: 'get',
    uri: getConfig().endpoint.main.post.detail(id),
    mapper: mapperForGetPostResponse,
  });
}

export async function getBestPosts(): Promise<Posts> {
  return requestAndMapResponse<GetPostsResponse, Posts>({
    method: 'get',
    uri: getConfig().endpoint.main.post.best(),
    mapper: mapperForGetPostsResponse,
  });
}
