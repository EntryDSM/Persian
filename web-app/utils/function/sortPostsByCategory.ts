import { Posts } from '@models/post/Posts';
import { Category } from '@models/post/Category';

export function sortPostsByCategory(posts: Posts) {
  const sortedPosts: Array<{ category: Category; items: Posts }> = [];

  posts.forEach((post) => {
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
