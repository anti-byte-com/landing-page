import React from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import Card from '@/components/shared/Card';
import { contactInfo } from '@/data/about-us';

const AboutUsContact: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Contact Header */}
      <SectionHeader label="// CONTATO" title="Vamos Conversar?" />

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email */}
        <Card className="p-6 text-center hover:bg-surface-container-low/50 transition-colors">
          <div className="space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-on-surface">
              Email
            </h3>
            <p className="text-sm text-on-surface-variant/80">
              {contactInfo.email}
            </p>
          </div>
        </Card>

        {/* Location */}
        <Card className="p-6 text-center hover:bg-surface-container-low/50 transition-colors">
          <div className="space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10">
              <svg
                className="w-6 h-6 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20a1 1 0 01-1.414 0l-4.243-4.243a1 1 0 011.414-1.414l4.243 4.243zm0 0l5.657-5.657"
                />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-on-surface">
              Localização
            </h3>
            <p className="text-sm text-on-surface-variant/80">
              {contactInfo.location}
            </p>
          </div>
        </Card>

        {/* Timezone */}
        <Card className="p-6 text-center hover:bg-surface-container-low/50 transition-colors">
          <div className="space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-tertiary/10">
              <svg
                className="w-6 h-6 text-tertiary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-on-surface">
              Timezone
            </h3>
            <p className="text-sm text-on-surface-variant/80">
              {contactInfo.timezone}
            </p>
          </div>
        </Card>
      </div>

      {/* CTA */}
      <div className="text-center p-8 bg-surface-container-lowest rounded-xl">
        <h3 className="font-display font-bold text-xl text-on-surface mb-2">
          Pronto para começar?
        </h3>
        <p className="text-sm text-on-surface-variant/80 mb-4">
          Vamos construir algo incrível juntos.
        </p>
        <a
          href={`mailto:${contactInfo.email}`}
          className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/80 rounded-lg font-semibold text-on-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          Entre em Contato →
        </a>
      </div>
    </div>
  );
};

export default AboutUsContact;
