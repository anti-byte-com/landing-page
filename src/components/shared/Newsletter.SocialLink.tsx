import React from 'react';

type SocialPlatform = 'twitter' | 'github' | 'linkedin';

interface SocialLinkProps {
  platform: SocialPlatform;
}

const SocialLink: React.FC<SocialLinkProps> = ({ platform }) => {
  const iconMap: Record<SocialPlatform, React.ReactNode> = {
    twitter: <span className="text-sm font-bold text-on-surface">𝕏</span>,
    github: (
      <svg
        className="w-5 h-5 text-on-surface"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.405 1.02.006 2.047.139 3.006.405 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.312.833 1.123.833 2.246v3.095c0 .316.194.694.801.576 4.765-1.589 8.199-6.086 8.199-11.388 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    linkedin: <span className="text-sm font-bold text-on-surface">in</span>,
  };

  return (
    <a
      href="#"
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      {iconMap[platform]}
    </a>
  );
};

export default SocialLink;
