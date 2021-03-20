import { useMemo } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

import { css } from '@emotion/react';

import * as S from './style';

export function NavigationBar() {
  const { pathname } = useRouter();

  const PageButtons = useMemo(() => {
    const pages = [
      { link: '/', text: 'Home' },
      { link: '/search', text: 'Search' },
      { link: '/post', text: 'Post' },
    ];

    return pages.map(({ link, text }) => (
      <S.ButtonWrapper
        key={link}
        css={
          pathname === link &&
          css`
            background-color: #c7c7f9;
          `
        }
      >
        <Link href={link}>{text}</Link>
      </S.ButtonWrapper>
    ));
  }, [pathname]);

  return <S.NavigationBarWrapper>{PageButtons}</S.NavigationBarWrapper>;
}
