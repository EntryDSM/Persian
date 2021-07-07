import { useMemo } from 'react';

import { ScrolllLayout } from 'layouts/ScrollLayout';

import { PostItem } from '../PostItem';

import * as S from './style';

import { Posts } from '@models/post/Posts';
import { Category } from '@models/post/Category';

type Props = {
  category: Category;
  posts: Posts;
  hasDivideLine: boolean;
};

export function PostList({ category, posts, hasDivideLine }: Props) {
  const postList = useMemo(
    () =>
      posts.map((post: Posts[number]) => (
        <PostItem key={post.id} post={post} />
      )),
    [posts]
  );

  return (
    <S.PostListWrapper>
      <h2>{category}</h2>
      <ScrolllLayout x={true} style={S.scrollLayoutStyle}>
        {postList}
      </ScrolllLayout>
      {hasDivideLine && <hr />}
    </S.PostListWrapper>
  );
}
