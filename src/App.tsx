import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/components/pages/home';
import About from '@/components/pages/about';
import Blog from '@/components/pages/blog';
import CurrentProjects from '@/components/pages/current-projects';
import ProjectDetail from '@/components/pages/project-detail';
import EntreiComprei from '@/components/pages/entrei-comprei';
import ProjectsRedirect from '@/components/pages/projects-redirect';
import ArchivedCaseStudies from '@/components/pages/archived-case-studies';
import Privacy from '@/components/pages/privacy';
import Terms from '@/components/pages/terms';
import Cookies from '@/components/pages/cookies';
import Resources from '@/components/pages/resources';
import OurApproach from '@/components/pages/our-approach';
import Contact from '@/components/pages/contact';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<ProjectsRedirect />} />
        <Route path="/projects/current" element={<CurrentProjects />} />
        <Route
          path="/projects/current/entrei-comprei"
          element={<EntreiComprei />}
        />
        <Route path="/projects/current/:slug" element={<ProjectDetail />} />
        <Route path="/cases/archived" element={<ArchivedCaseStudies />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/our-approach" element={<OurApproach />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
