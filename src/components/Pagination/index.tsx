import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Button, Container, Content, Page, Pages } from './styles';

const PAGES_TO_SHOW = 5;

type Props = {
  page: number;
  pages: number;
  next: () => void;
  previous: () => void;
  jump: (page: number) => void;
};

const Pagination: React.FC<Props> = ({ page, pages, next, previous, jump }) => {
  const renderPages = (): React.ReactElement[] => {
    const pageList: React.ReactElement[] = [];

    for (let i = 1; i <= PAGES_TO_SHOW; i += 1) {
      pageList.push(
        <Page key={i} active={page === i} onClick={() => jump(i)}>
          {i}
        </Page>
      );
    }

    pageList.push(
      <Page key={pages} active={page === pages} onClick={() => jump(pages)}>
        {pages}
      </Page>
    );

    return pageList;
  };

  return (
    <Container>
      <Content>
        {page > 1 && (
          <Button onClick={previous}>
            <BiChevronLeft />
            Previous
          </Button>
        )}
        <Pages>{renderPages()}</Pages>
        <Button onClick={next}>
          Next
          <BiChevronRight />
        </Button>
      </Content>
    </Container>
  );
};

export default Pagination;
