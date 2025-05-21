import React from "react";
import "./ForTeams.css";

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Unlimited public questions & answers",
      "Community support",
      "Limited team collaboration",
    ],
  },
  {
    name: "Business",
    price: "$6/user/month",
    features: [
      "Private team spaces",
      "Advanced collaboration tools",
      "Integrations with Slack, GitHub, etc.",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: [
      "All Business features",
      "Single Sign-On (SSO)",
      "Dedicated account manager",
      "Custom integrations & SLAs",
    ],
  },
];

const ForTeams = () => {
  return (
    <div className="forTeams-container">
      <h1 className="title">Stack Overflow for Teams</h1>
      <p className="subtitle">
        Empower your team with the best knowledge sharing platform.
      </p>
      
      <div className="plans-grid">
        {plans.map(({ name, price, features }) => (
          <div key={name} className="plan-card">
            <h2 className="plan-name">{name}</h2>
            <p className="plan-price">{price}</p>
            <ul className="plan-features">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
           <a
  href={
    price === "Free"
      ? "https://stackoverflow.com/teams/create/free"
      : "https://stackoverflow.co/teams/contact/"
  }
  target="_blank"
  rel="noopener noreferrer"
  className="cta-btn"
>
  {price === "Free" ? "Get Started" : "Contact Sales"}
</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForTeams;
