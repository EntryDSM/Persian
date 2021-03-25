import styled from '@emotion/styled';

export const BannerSection = styled.section`
  width: 100%;
  height: fit-content;
  position: relative;
`;

type BannerImageProps = {
  src: string;
};

export const BannerImage = styled.div<BannerImageProps>`
  width: 100%;
  padding-top: 39%;
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
  padding: 1px 4px;
  width: 50px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #000000;
`;
