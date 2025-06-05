// src/components/Section.js
import React from 'react';

export default function Section({ title, children }) {
  return (
    <section style={{
      background: '#fff',
      borderRadius: '1rem',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)'
    }}>
      <h2 style={{
        fontSize: '1.75rem',
        fontWeight: '700',
        marginBottom: '1rem',
        color: '#2f855a'
      }}>{title}</h2>
      {children}
    </section>
  );
}

