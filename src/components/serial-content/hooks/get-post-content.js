import { useEffect, useState } from 'react';

const useGetPostContent = (postLink) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      const response = await fetch(`/content/markdown/${postLink}.md`);
      response.text().then(content => setContent(content));
    };
    loadContent();
  }, [postLink, setContent]);

  return content;
};

export default useGetPostContent;
