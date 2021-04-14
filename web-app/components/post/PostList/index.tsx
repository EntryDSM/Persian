import { useMemo } from 'react';

import { ScrolllLayout } from 'layouts/ScrollLayout';

import { PostItem } from '../PostItem';

import * as S from './style';

import { Category, Post } from 'mocks/posts';

type Props = {
  category: Category;
  posts: Post[];
  hasDivideLine: boolean;
};

export function PostList({ category, posts, hasDivideLine }: Props) {
  const postList = useMemo(
    () =>
      posts.map((post: Post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          writerName={post.writerName}
          thumbnailUrl={post.thumbnailUrl}
        />
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
