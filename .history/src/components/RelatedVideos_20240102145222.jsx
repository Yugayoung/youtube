import React from 'react';
import { useYoutubeApi } from './../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => youtube.channelImageURL(id),
  });
  return <div>{id}</div>;
}
