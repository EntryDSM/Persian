import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { IconContext } from 'react-icons';
import { MdHome, MdSearch } from 'react-icons/md';

import * as S from './style';

const pages = [
  { link: '/', text: 'Home' },
  { link: '/search', text: 'Search' },
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
                <a aria-current={isCurrentPage ? 'page' : 'false'}>
                  <div>
                    <IconContext.Provider
                      value={{
                        size: '20px',
                        style: {
                          width: '30px',
                          height: '30px',
                          color: '#bbbbbb',
                          display: 'block',
                          margin: '0 auto',
                        },
                      }}
                    >
                      {(link === '/' && (
                        <>
                          <MdHome />
                          <MdHome />
                        </>
                      )) ||
                        (link === '/search' && (
                          <>
                            <MdSearch />
                            <MdSearch />
                          </>
                        ))}
                    </IconContext.Provider>
                  </div>
                  <span>{text}</span>
                </a>
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
