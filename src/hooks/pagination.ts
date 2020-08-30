import { useState } from 'react';

const PAGE_SIZE = 10;

export interface Pagination {
  page: number;
  pages: number;
  total: number;
  next: () => void;
  previous: () => void;
  jump: (page: number) => void;
  onTotalChange: (total: number) => void;
}

export const usePagination = (): Pagination => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [total, setTotal] = useState(0);

  const next = () => setPage((oldValue) => oldValue + 1);

  const previous = () => setPage((oldValue) => oldValue - 1);

  const jump = (p: number) => setPage(p);

  const onTotalChange = (value: number) => {
    setTotal(value);
    setPages(Math.floor(value / PAGE_SIZE));
  };

  return {
    page,
    pages,
    total,
    next,
    previous,
    jump,
    onTotalChange,
  };
};
