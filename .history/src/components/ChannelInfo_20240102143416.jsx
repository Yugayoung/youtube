import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: url,
  } = useQuery(['channel', id], () => youtube.channelImageURL(id));
  return <div>{name}</div>;
}
