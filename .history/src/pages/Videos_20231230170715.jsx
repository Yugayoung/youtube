import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoding,
    error,
    data: videos,
  } = useQuery(['videos', keyword], async () => {
    return fetch();
  });
  return <div>Videos {keyword ? `🔍 ${keyword}` : '🔥'}</div>;
}
