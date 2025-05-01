import React from 'react';

const SectionContainer = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div>{children}</div>
  </section>
);

export default SectionContainer;
