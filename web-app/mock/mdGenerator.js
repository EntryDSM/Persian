const fs = require('fs');
const md = require('markdown-js');

const directory = process.cwd() + '/mock';

const files = fs.readdirSync(directory);

const postOptions = [
  {
    title: 'Github 꾸미기 Github 꾸미기 Github 꾸미기 Github 꾸미기',
    category: 'VLOG 🎥',
    createdAt: '2021/03/21',
    writerName: '이우찬',
  },
  {
    title: '조직관리',
    category: '전공 동아리 💻',
    createdAt: '2021/03/22',
    writerName: 'DMS',
  },
  {
    title: '삽질',
    category: 'VLOG 🎥',
    createdAt: '2021/03/23',
    writerName: '정우영',
  },
  {
    title: '마고 개발자의 하소연',
    category: 'VLOG 🎥',
    createdAt: '2021/03/25',
    writerName: '오준상',
  },
];

const generatedPostsMock = files
  .filter((file) => file.split('.')[1] === 'md')
  .map((file, index) => {
    const markdown = fs.readFileSync(directory + '/' + file, 'utf8');
    const html = md.makeHtml(markdown);

    return {
      id: index + 1,
      category: 'category',
      contentHTML: html,
      createdAt: '2021/00/00',
      title: 'title',
      writerName: 'name',
      thumbnailUrl: 'images/logo.svg',
      ...postOptions[index],
    };
  });

fs.writeFileSync(
  directory + '/posts.ts',
  `export type Category ='VLOG 🎥' | '전공 동아리 💻';

  export type Post = {
    id: number;
    category: Category;
    contentHTML: string;
    createdAt: string;
    title: string;
    writerName: string;
    thumbnailUrl: string;
  };

  export const posts: Post[] = ` + JSON.stringify(generatedPostsMock)
);
