// src/pages/ReferencesPage.js
import React from 'react';
import Section from '../components/Section';

export default function ReferencesPage() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Section title="References and Further Reading">
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Below is a curated list of references, studies, and resources cited throughout the WildWatt site. These sources provide further detail on best practices, monitoring techniques, and case studies that illustrate the intersection of renewable energy and conservation.
        </p>
        <ul style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
          <li><a href="https://www.ers.usda.gov/" target="_blank" rel="noopener noreferrer">USDA Economic Research Service (Cropland data)</a></li>
          <li><a href="https://www.fws.gov/" target="_blank" rel="noopener noreferrer">U.S. Fish and Wildlife Service (Wildlife planning guidelines)</a></li>
          <li><a href="https://windexchange.energy.gov/" target="_blank" rel="noopener noreferrer">DOE Wind Exchange (Wind-wildlife best practices)</a></li>
          <li><a href="https://www.nrel.gov/" target="_blank" rel="noopener noreferrer">National Renewable Energy Laboratory (NREL)</a></li>
          <li><a href="https://www.eesi.org/" target="_blank" rel="noopener noreferrer">Environmental and Energy Study Institute (EESI)</a></li>
          <li><a href="https://cbey.yale.edu/" target="_blank" rel="noopener noreferrer">Yale Center for Business and the Environment (Pollinator-friendly solar)</a></li>
          <li><a href="https://smartenergydecisions.com/" target="_blank" rel="noopener noreferrer">Smart Energy Decisions (Raptor partnerships)</a></li>
          <li><a href="https://www.briwildlife.org/" target="_blank" rel="noopener noreferrer">Biodiversity Research Institute (Bat mitigation)</a></li>
          <li><a href="https://www.peregrinefund.org/" target="_blank" rel="noopener noreferrer">Peregrine Fund (IdentiFlight & eagle protection)</a></li>
          <li><a href="https://group.vattenfall.com/" target="_blank" rel="noopener noreferrer">Vattenfall (Painted turbine blade study)</a></li>
          <li><a href="https://www.nordicenergy.org/" target="_blank" rel="noopener noreferrer">Nordic Energy Research (Cumulative impact planning)</a></li>
          <li><a href="https://besjournals.onlinelibrary.wiley.com/" target="_blank" rel="noopener noreferrer">British Ecological Society Journals (Bat cut-in speed studies)</a></li>
          <li><a href="https://audubon.org/" target="_blank" rel="noopener noreferrer">Audubon Society (Monitoring and solar partnerships)</a></li>
        </ul>
      </Section>
    </div>
  );
}

