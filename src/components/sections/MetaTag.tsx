import React, { useEffect } from 'react';

interface MetaTagProps {
  title: string;
}

const MetaTag: React.FC<MetaTagProps> = ({ title }) => {
  useEffect(() => {
    const metaTag = document.createElement('meta');
    metaTag.name = 'title';
    metaTag.content = title;
    document.head.appendChild(metaTag);

    return () => {
      document.head.removeChild(metaTag);
    };
  }, [title]);

  return null;
};

export default MetaTag;
