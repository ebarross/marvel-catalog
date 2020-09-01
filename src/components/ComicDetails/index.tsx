/* eslint-disable react/no-danger */
import React from 'react';
import moment from 'moment';
import { Comic } from '../../interfaces/comic';
import {
  Column,
  Container,
  Content,
  Creators,
  Description,
  Details,
  Image,
  SaleDate,
  Section,
  Title,
} from './styles';

type Props = {
  data: Comic;
};

const ComicDetails: React.FC<Props> = ({ data }) => {
  const { title, description, image, saleDate, creators } = data;

  const formatDate = (): string => {
    return moment(saleDate).format('MMMM DD, YYYY');
  };

  const renderCreators = (): React.ReactElement[] => {
    return creators.map((a) => (
      <li key={a.name}>
        {a.name} ({a.role})
      </li>
    ));
  };

  return (
    <Container>
      <Content>
        <Column>
          <Image>
            <img src={image} alt="Comic" />
          </Image>
        </Column>
        <Details>
          <Section>
            <Title>
              <p>{title}</p>
            </Title>
          </Section>
          {description && (
            <Section>
              <Description>
                <p className="section-title">Description:</p>
                <p dangerouslySetInnerHTML={{ __html: description }} />
              </Description>
            </Section>
          )}
          <Section>
            {creators.length > 0 && (
              <Creators>
                <p className="section-title">Creators:</p>
                <ul>{renderCreators()}</ul>
              </Creators>
            )}
            <SaleDate>
              <p className="section-title">Sale date:</p>
              <p>{formatDate()}</p>
            </SaleDate>
          </Section>
        </Details>
      </Content>
    </Container>
  );
};

export default ComicDetails;
