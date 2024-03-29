import styled from 'styled-components';

export const HeaderWrap = styled.div`
  padding: 80px 15px 45px;
  text-align: center;
  margin-bottom: 35px;
`;

export const GuideTitle = styled.h1`
  font-weight: 700;
  font-size: 46px;
  margin: 12px 0;
`;

export const GuideSubtitle = styled.p`
  margin: auto;
  margin-bottom: 0;
  font-size: 16px;
  color: #444;
  width: 50%;
`;

export const GuideMeta = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
  color: #757575;
  font-size: 13px;
  font-weight: 400;
`;

export const GuideDate = styled.span`
  margin-left: 7px;
  margin-right: 7px;
`;

export const GuideAuthor = styled.a`
  margin-right: 7px;
  font-weight: 500;
  color: #101010;
  
  &:hover {
    color: #101010;
  }
`;

export const AuthorImage = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 100%;
  margin-right: 10px;
`;

export const BlockImage = styled.img`
  margin: auto;
  margin-bottom: 10px;
  object-fit: contain;
  height: 250px;
  display: block;
`;

export const EditGuide = styled.a`
  margin-left: 7px;
`;

export const ActionItems = styled.div``;