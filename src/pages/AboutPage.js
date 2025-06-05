// src/pages/AboutPage.js
import React from 'react';
import Section from '../components/Section';
import ecobenefits from './eco-benefits.png';
import costbenefits from './cost-benefits.png';

export default function AboutPage() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Section title="Our Mission">
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          WildWatt is on a mission to ensure renewable energy and wildlife thrive together. We face twin crises: climate change and biodiversity loss. Clean energy must expand rapidly to cut carbon emissions, but it can and must be deployed in ways that support nature rather than displace it. Our goal is simple yet ambitious: enhance biodiversity at solar and wind energy sites across the United States, proving that we don’t have to choose between a green grid and a thriving environment.
</p>
</Section>
<Section title="Why now?">
<p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
Solar and wind installations are growing exponentially. In 2020, solar power made up 43% of new U.S. electricity capacity, and utility-scale solar alone is projected to cover about 3 million acres of land by 2030. Wind energy is also booming – but if poorly planned, these projects can encroach on critical habitats. A recent analysis found that 9% of wind farms and 7% of solar farms worldwide have been built in Key Biodiversity Areas, places vital for wildlife. Meanwhile, pollinators and other species are in steep decline, threatening ecosystem health and agriculture. We founded WildWatt to turn this challenge into an opportunity: every solar field or wind farm can double as a sanctuary for native plants and animals.        
</p>
<img src={ecobenefits} alt="eco-benefits" style={{ maxHeight: '500px', width: 'auto', display: 'block', margin: '0 auto'}} />
<p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
Research shows that establishing native prairie vegetation under solar panels can triple plant diversity and quadruple pollinator abundance in a few years– boosting ecosystem health on-site. At wind facilities, simple innovations like painting one turbine blade black have cut bird collisions by 70% in studies, and smart sensor systems can reduce eagle fatalities by over 80%. WildWatt disseminates these solutions and helps implement them on the ground.
</p>
<img src={costbenefits} alt="cost-benefits" style={{ maxHeight: '400px', width: 'auto', display: 'block', margin: '0 auto'}} />
</Section>
<Section title="What Drives Us:">
<p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
We believe renewable energy sites can be more than power producers – they can be refuges for wildlife and pollinators, corridors for native species, and demonstrations of sustainable land stewardship. By rethinking land management under and around the infrastructure, solar fields can restore soils and support bees and butterflies, while wind farms can coexist with birds, bats, and thriving natural vegetation. The statistics are on our side: planting native ground cover under solar arrays not only benefits wildlife, but also reduces maintenance costs and can even improve panel performance. In short, what’s good for nature is good for business and communities – a true win-win.
</p>
<p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
WildWatt is more than an organization – it’s a movement uniting clean energy and conservation. Explore our site to learn more about how we help site owners, conservationists, and communities work together, discover best practices for wildlife-friendly solar and wind, and find out how you can get involved to make every watt a “WildWatt”!
</p>
      </Section>
      {/*<Section title="Biodiversity-Friendly Sites">
        <div style={{ height: '16rem', backgroundColor: '#f0fdf4', border: '1px solid #c6f6d5', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
          <span style={{ color: '#68d391' }}>[Map Placeholder]</span>
        </div>
        <ul style={{ paddingLeft: '1.25rem', fontSize: '1.1rem' }}>
          <li>Friendship Solar Farm – West Friendship, MD</li>
          <li>Clear View Farm – Howard County, MD</li>
          <li>Prairie Ronde Solar – Louisiana</li>
        </ul>
      </Section>*/}
    </div>
  );
}

