import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import * as S from './style';

const pages = [
  { link: '/', text: 'Home' },
  { link: '/search', text: 'Search' },
  { link: '/post', text: 'Post' },
];

export function NavigationBar() {
  const { pathname } = useRouter();

  const pageButtons = useMemo(() => {
    return pages.map(({ link, text }) => (
      <S.ButtonWrapper
        key={link}
        active={'/' + pathname.split('/')[1] === link}
      >
        <Link href={link}>{text}</Link>
      </S.ButtonWrapper>
    ));
  }, [pathname]);

  return <S.NavigationBarWrapper>{pageButtons}</S.NavigationBarWrapper>;
}
