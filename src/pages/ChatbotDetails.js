import React from 'react';
import { Link } from 'react-router-dom';
import './ChatbotDetails.css';

const BOT_PORTFOLIO = [
  {
    title: 'Commerce Command Hub',
    industry: 'E-commerce Operations',
    description:
      'A suite of assistant bots that keep sales managers and storefront leads in sync with the e-commerce platform—automating order status pings, price updates, and backlog follow-ups inside their daily chat tools.',
    highlights: [
      'Bi-directional sync with store inventory systems and CRM workflows',
      'Smart prompts to chase approvals or missing product data',
      'Managers report hours saved on cross-team coordination each week',
    ],
  },
  {
    title: 'Candidate Care Autopilot',
    industry: 'HR & Talent',
    description:
      'Handles candidate outreach for HR managers, triggering the right auto-response during weekends or vacancy surges while logging every touch point for follow-up when the team is back online.',
    highlights: [
      'Schedules contextual replies based on live vacancy pipelines',
      'Collects candidate intent and pushes summaries to the hiring board',
      'Cuts manual inbox triage time during peak recruiting by more than half',
    ],
  },
  {
    title: 'SecureSpeak Moderator',
    industry: 'Community & Compliance',
    description:
      'Real-time moderation for internal and public groups that flags and removes banned words, notifies moderators, and maintains an audit trail so community managers can focus on meaningful conversations.',
    highlights: [
      'Live keyword scanning with customizable dictionaries per channel',
      'Escalates incidents to responsible managers with automated workflows',
      'Keeps response times to policy violations under a minute',
    ],
  },
  {
    title: 'Smart Field Composer',
    industry: 'Data Operations',
    description:
      'Parses incoming spreadsheets and API payloads, restructures the data, and autofills the required CRM fields so managers can get clean, actionable records without touching CSVs.',
    highlights: [
      'Google Sheets and API ingestion with auto-mapping to CRM structures',
      'Detects inconsistencies before creating or updating records',
      'Cuts data entry cycles for sales ops managers from hours to minutes',
    ],
  },
  {
    title: 'ShiftSync Coordinator',
    industry: 'Team Scheduling',
    description:
      'Synchronizes manager schedules between CRM pipelines and Google Calendar, adds guardrails for shift swaps, and keeps the entire team aligned without endless chat threads.',
    highlights: [
      'Real-time calendar syncing with CRM milestones and handoffs',
      'Self-service shift adjustments with approval flows for managers',
      'Reduces double-bookings and missed handoffs across distributed teams',
    ],
  },
  {
    title: 'SaaS Stability Watchtower',
    industry: 'SaaS Reliability',
    description:
      'Monitors SaaS services, aggregates health checks, and alerts the responsible on-call teams the moment thresholds are breached so incidents are resolved before customers notice.',
    highlights: [
      'Custom health dashboards that pull from internal and third-party APIs',
      'Auto-assigns incidents to the right squad through incident workflows',
      'Drives faster MTTR and transparent incident communications',
    ],
  },
];

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
        <h2>Our Portfolio</h2>
        <p className="chatbot-details__portfolio-intro">
          A snapshot of the bots we’ve launched to automate workflows, delight users, and unlock new revenue streams.
        </p>
        <div className="chatbot-details__portfolio-grid">
          {BOT_PORTFOLIO.map(bot => (
            <article key={bot.title} className="chatbot-details__portfolio-card">
              <header className="chatbot-details__portfolio-header">
                <span className="chatbot-details__portfolio-tag">{bot.industry}</span>
                <h3>{bot.title}</h3>
              </header>
              <p className="chatbot-details__portfolio-description">{bot.description}</p>
              <ul className="chatbot-details__portfolio-highlights">
                {bot.highlights.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
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
