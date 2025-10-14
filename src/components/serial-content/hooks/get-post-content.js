import { useEffect, useState } from 'react';

const useGetPostContent = (postLink) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/content/markdown/${postLink}.md`)
      .then(response => {
        response.text().then(content => setContent(content));
      });
  }, [postLink, setContent]);

  return content;
};

export default useGetPostContent;
