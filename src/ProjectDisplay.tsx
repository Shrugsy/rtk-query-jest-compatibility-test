/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { Button } from '@mui/material';

import { useGetProjectsQuery } from './service/api';

export function ProjectDisplay() {
  const { data, isFetching, isError, isSuccess, refetch } = useGetProjectsQuery();

  return (
    <>
      <div>
        <p>
          {isFetching
            ? 'Fetching projects...'
            : isError
            ? 'Error fetching projects!'
            : isSuccess
            ? 'Successfully fetched projects!'
            : ''}
        </p>
      </div>
      <div
        css={css`
          opacity: ${isFetching ? 0.5 : 1};
        `}
      >
        Projects: {JSON.stringify(data)}
      </div>
      <Button variant="contained" color="primary" onClick={refetch}>
        Re-fetch projects
      </Button>
    </>
  );
}
