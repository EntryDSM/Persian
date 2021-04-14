const fs = require('fs');
const md = require('markdown-js');

const directory = process.cwd() + '/mocks';

const files = fs.readdirSync(directory);

const postOptions = [
  {
    title: 'Github 꾸미기',
    category: 'VLOG 🎥',
    createdAt: '2021/03/21',
    writerName: '이우찬',
    description: '',
    thumbnailUrl:
      'https://images.velog.io/images/_uchanlee/post/ac0cef98-abc0-4390-adeb-66fa9c8eee14/image.png',
  },
  {
    title: '조직관리',
    category: '전공 동아리 💻',
    createdAt: '2021/03/22',
    writerName: 'DMS',
    description: '',
    thumbnailUrl:
      'https://user-images.githubusercontent.com/48552260/111930694-d97a6180-8afc-11eb-89ef-bf3d0b94fb8e.png',
  },
  {
    title: '우당탕탕 쿠버네티스 도전기',
    category: 'VLOG 🎥',
    createdAt: '2021/03/23',
    writerName: '정우영',
    description: '',
    thumbnailUrl:
      'https://images.velog.io/images/o-ozogie/post/4fb742bc-850e-4358-bda3-48ce758eca48/jeong-woo-yeong-certified-kubernetes-administrator-cka-certificate.png',
  },
  {
    title: '마고 개발자의 하소연',
    category: 'VLOG 🎥',
    createdAt: '2021/03/25',
    writerName: '오준상',
    description: '',
    thumbnailUrl:
      'https://images.velog.io/images/pandati0710/post/b7d9255c-788f-4a8f-843d-af09922afc85/image.png',
  },
  {
    title: 'INIT 서비스를 만들게 되기까지',
    category: 'VLOG 🎥',
    createdAt: '2021/04/01',
    writerName: 'EntryDSM - 이우찬',
    description: '',
    thumbnailUrl: 'https://init.entrydsm.hs.kr/images/introduction.png',
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
      description: '',
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
    description: string,
    thumbnailUrl: string;
  };

  export const posts: Post[] = ` + JSON.stringify(generatedPostsMock)
);
