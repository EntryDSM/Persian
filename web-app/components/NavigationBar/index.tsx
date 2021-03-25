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

  const pageButtons = useMemo(
    () => (
      <S.NavigationBarWrapper>
        {pages.map(({ link, text }) => {
          const isCurrentPage = '/' + pathname.split('/')[1] === link;

          return (
            <S.ButtonWrapper key={link} active={isCurrentPage}>
              <Link href={link}>
                <a aria-current={isCurrentPage ? 'page' : 'false'}>{text}</a>
              </Link>
            </S.ButtonWrapper>
          );
        })}
      </S.NavigationBarWrapper>
    ),
    [pathname]
  );

  return pageButtons;
}
