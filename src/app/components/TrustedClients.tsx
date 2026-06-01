import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../contexts/LanguageContext';
import { TechnicalLabel } from './TechnicalLabel';

const clientSegments = [
  { segment: 'Practeex', detail: '' },
  { segment: 'ACES', detail: '' },
  { segment: 'Karma Com Solidarité', detail: '' },
  { segment: 'Université de Bordeaux', detail: '' },
];

export function TrustedClients() {
  const { t } = useTranslation();

  return (
    <section
      className="py-24 md:py-32 bg-bg-base border-t border-border-0 relative overflow-hidden"
      aria-label="Trusted clients"
    >
      <div className="max-w-[1184px] mx-auto px-8 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          {/* <TechnicalLabel sectionId="CLIENTS_DB_01" /> */}
          <h1 className="heading-1 text-text-primary mt-4 text-center">
            {t.trustedClients.title}
          </h1>
        </motion.div>

        {/* Segment cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {clientSegments.map((client, index) => (
            <motion.div
              key={client.segment}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="card-surface h-[120px] w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1rem)] lg:w-[180px] flex flex-col items-center justify-center bg-surface-0 hover:border-border-1 group transition-all"
            >
              <div className="text-center px-4">
                <div className="font-body font-medium uppercase text-[12px] leading-tight text-text-primary tracking-[0.05em] group-hover:text-accent-primary transition-colors">
                  {client.segment}
                </div>
                {client.detail && (
                  <div className="font-body text-[10px] font-medium uppercase tracking-widest mt-1 text-text-muted">
                    {client.detail}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* NDA Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-text-muted">
            CERTAINES RÉFÉRENCES SOUS NDA
          </p>
        </motion.div>

        {/* Short testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 max-w-[800px] mx-auto"
        >
          <div className="bg-surface-0 border border-border-0 p-10 rounded-[24px] text-center">
            <p className="font-body text-[18px] md:text-[22px] text-accent-primary mb-4 leading-snug tracking-wide" style={{ fontWeight: 300 }}>
              "Résultats visibles dès la 2e itération : moins de friction, plus d'activation."
            </p>
            <p className="font-body text-[11px] uppercase tracking-[0.2em] text-text-primary font-medium">
              CEO, Hub LMS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}