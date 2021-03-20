import styled from '@emotion/styled';

export const BannerSection = styled.section`
  width: 100vw;
  height: 39vw;
  margin-bottom: 9px;
  position: relative;
`;

type BannerImageProps = {
  src: string;
};

export const BannerImage = styled.div<BannerImageProps>`
  width: 100vw;
  height: 39vw;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center, center;
  background-size: cover;
`;

export const Indicator = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #ffffff;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
  padding: 1px 3.5px;
`;
