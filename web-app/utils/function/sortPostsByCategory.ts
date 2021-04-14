import { Category, Post } from '../../mocks/posts';

export function sortPostsByCategory(posts: Post[]) {
  const sortedPosts: Array<{ category: Category; items: Post[] }> = [];

  posts
    .sort(
      (post1, post2) =>
        Number(post2.createdAt.split('/').join('')) -
        Number(post1.createdAt.split('/').join(''))
    )
    .forEach((post) => {
      let index = sortedPosts.findIndex((p) => p.category === post.category);

      if (index === -1) {
        index = sortedPosts.length;
        sortedPosts[index] = {
          category: post.category,
          items: [],
        };
      }

      sortedPosts[index].items.push(post);
    });

  return sortedPosts;
}
