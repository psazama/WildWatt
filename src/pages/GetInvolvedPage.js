// src/pages/GetInvolvedPage.js
import React from 'react';
import Section from '../components/Section';

export default function GetInvolvedPage() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Section title="Get Involved">
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          The transition to wildlife-friendly clean energy needs your help! Whether you’re a renewable energy developer, a landowner with a solar or wind site, a conservation expert, or a concerned citizen, there are many ways to get involved with WildWatt and support our mission. We invite you to take action and become part of the WildWatt community.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          <strong>Submit a Site for Biodiversity Boost</strong>
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          Do you know of a solar farm or wind farm that could be enhanced for wildlife? Are you developing a new project and want to design it right from the start? Submit a site to WildWatt for evaluation and engagement. Using our simple form below, you can provide basic details about the location and size of the renewable energy site and what opportunities or challenges you see.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          Our team will review your submission and follow up to discuss how we might help — whether it’s conducting a habitat assessment, connecting you with native landscaping resources, or launching a full WildWatt partnership to transform the site. We welcome submissions from project owners, operators, or even third parties (for example, “I live near a solar farm that’s just gravel underneath – can we help turn it into a pollinator garden?”).
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Every site is a chance to create a success story, so don’t hesitate to reach out. Together, we can turn blank turf or bare ground into flourishing habitat.
        </p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} action="https://formsubmit.co/43dd222f25c4158c2f9944acf99cd6af" method="POST">
          <input type="hidden" name="_captcha" value="true" />
          <input
            type="text"
            name="site"
            placeholder="Site Name / Location"
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '0.5rem',
            }}
          />
          <textarea
            placeholder="Why is this site a good candidate for habitat creation?"
            rows={4}
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '0.5rem',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#facc15',
              border: 'none',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      </Section>
    </div>
  );
}

