import { useEffect, useState } from 'react';

const useGetPostContent = (postLink) => {
  const [isContentLoading, setIsContentLoading] = useState(true);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/portfolio/content/markdown/${postLink}.md`)
      .then(response => {
        response.text().then(content => {
          setContent(content);
          setIsContentLoading(false);
        });
      })
      .catch(() => setIsContentLoading(false));
  }, [postLink, setContent, setIsContentLoading]);

  return {
    content,
    isContentLoading,
  };
};

export default useGetPostContent;
