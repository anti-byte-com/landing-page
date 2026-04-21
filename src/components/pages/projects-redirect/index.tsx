import React from 'react';
import { useEffect } from 'react';

const ProjectsRedirect: React.FC = () => {
  useEffect(() => {
    // Redireciona para /projects/current após 0.5 segundos usando meta refresh
    const metaRefresh = document.createElement('meta');
    metaRefresh.setAttribute('http-equiv', 'refresh');
    metaRefresh.setAttribute('content', '0.5; url=/projects/current');
    document.head.appendChild(metaRefresh);

    return () => {
      document.head.removeChild(metaRefresh);
    };
  }, []);

  return null;
};

export default ProjectsRedirect;
