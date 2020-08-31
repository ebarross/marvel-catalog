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

    let first;
    let last;

    // check if page is the first, the last or neither to show page indexes
    if (page === 1) {
      first = 1;
      last = PAGES_TO_SHOW;
    } else if (page === pages) {
      first = pages - PAGES_TO_SHOW + 1;
      last = pages;
    } else {
      const offset = Math.floor((PAGES_TO_SHOW - 1) / 2);

      if (page === 2) {
        first = 1;
        last = page + offset + 1;
      } else {
        first = page - offset;
        last = page + offset;
      }
    }

    for (let i = first; i <= last; i += 1) {
      pageList.push(
        <Page key={i} active={page === i} onClick={() => jump(i)}>
          {i}
        </Page>
      );
    }

    if (page === 1) {
      pageList.push(<Page>...</Page>);
      pageList.push(
        <Page key={pages} active={page === pages} onClick={() => jump(pages)}>
          {pages}
        </Page>
      );
    } else if (page === pages) {
      pageList.unshift(<Page>...</Page>);
      pageList.unshift(
        <Page key={1} active={page === 1} onClick={() => jump(1)}>
          {1}
        </Page>
      );
    }

    return pageList;
  };

  return (
    <Container>
      <Content>
        <Button onClick={previous} disabled={page === 1}>
          <BiChevronLeft />
          Previous
        </Button>
        <Pages>{renderPages()}</Pages>
        <Button onClick={next} disabled={page === pages}>
          Next
          <BiChevronRight />
        </Button>
      </Content>
    </Container>
  );
};

export default Pagination;
