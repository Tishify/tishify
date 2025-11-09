import React from 'react';
import { Link } from 'react-router-dom';
import './ChatbotDetails.css';

function ChatbotDetails() {
  return (
    <main className="chatbot-details">
      <section className="chatbot-details__hero">
        <div className="chatbot-details__intro">
          <h1>Chatbot Solutions for Modern Brands</h1>
          <p>
            We build conversational experiences that automate support, guide purchases, and keep your audience engaged around the clock.
          </p>
          <Link to="/" className="chatbot-details__back">← Back to overview</Link>
        </div>
        <div className="chatbot-details__media" aria-hidden="true">
          <div className="chatbot-details__media-circle" />
          <div className="chatbot-details__media-card">
            <span className="chatbot-details__media-label">24/7</span>
            <p>Automated customer care</p>
          </div>
        </div>
      </section>

      <section className="chatbot-details__section">
        <h2>What We Build</h2>
        <div className="chatbot-details__grid">
          <article className="chatbot-details__card">
            <h3>Customer Support Bots</h3>
            <p>
              Resolve common issues instantly, route complex tickets to live agents, and collect satisfaction scores without adding headcount.
            </p>
          </article>
          <article className="chatbot-details__card">
            <h3>Commerce Assistants</h3>
            <p>
              Showcase products, answer pre-sale questions, manage carts, and process payments right inside the chat experience.
            </p>
          </article>
          <article className="chatbot-details__card">
            <h3>Community & Event Flows</h3>
            <p>
              Onboard attendees, deliver reminders, moderate submissions, and keep communities active with personalized nudges.
            </p>
          </article>
        </div>
      </section>

      <section className="chatbot-details__section chatbot-details__section--alt">
        <h2>Our Process</h2>
        <ol className="chatbot-details__steps">
          <li>
            <strong>Discovery:</strong> Understand your audience, workflows, and success metrics.
          </li>
          <li>
            <strong>Conversation Design:</strong> Map user journeys, tone of voice, and escalation rules.
          </li>
          <li>
            <strong>Development & Integrations:</strong> Build secure flows, connect APIs, and configure analytics.
          </li>
          <li>
            <strong>Launch & Optimization:</strong> Train your team, release the bot, and iterate with data-driven improvements.
          </li>
        </ol>
      </section>

      <section className="chatbot-details__section">
        <h2>Impact Highlights</h2>
        <ul className="chatbot-details__highlights">
          <li>
            <strong>Logistics Assistant:</strong> Cut response time by 68% with proactive shipment updates and self-service troubleshooting.
          </li>
          <li>
            <strong>Retail Concierge:</strong> Increased conversion by 23% through guided discovery and smart upsell prompts.
          </li>
          <li>
            <strong>Community Manager:</strong> Automated onboarding for 4,000+ members with event reminders and moderated submissions.
          </li>
        </ul>
      </section>

      <section className="chatbot-details__cta">
        <h2>Ready to launch your bot?</h2>
        <p>
          Tell us about your goals and we’ll outline the roadmap, integrations, and success metrics to get started.
        </p>
        <a className="chatbot-details__cta-button" href="mailto:company@tishify.online">
          Schedule a discovery call
        </a>
      </section>
    </main>
  );
}

export default ChatbotDetails;
