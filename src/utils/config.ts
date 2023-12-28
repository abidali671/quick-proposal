const clientBaseUrl = process.env.NEXT_PUBLIC_CLIENT_BASE_URL;

const mailerEmail = "abid.saeed.ali92@gmail.com";
const mailerPassword = "zyti mjqw kshi cwkp";
const formSpreeId = "xyyrygjz";

const benefitsList = [
  {
    label: "Propel to Perfection",
    content: "From Proposal Procrastination to Project Perfection",
  },
  {
    label: "Stand Out from the Crowd",
    content: "Proposals that Impress Every Time",
  },
  {
    label: "Time Warp Wednesdays",
    content: "Reclaim Hours for What You Do Best",
  },
  {
    label: "Client Magnet",
    content: "Proposals that Convert with Unstoppable Charm",
  },
  {
    label: "Freelancer Freedom",
    content: "More Wins, Less Hustle with Quick Proposal",
  },
];

const featuresList = [
  {
    label: "AI Powerhouse",
    content: "Writing Assistant for Supercharged Proposals",
  },
  {
    label: "Template Turbocharge",
    content: "Jump start Proposals with Customization",
  },
  {
    label: "Proposal Vault",
    content:
      "Reclaim Hours for What You Do BesSave Time and Shine with Reusable Masters",
  },
  {
    label: "Effortless Efficiency",
    content: "Write Less, Win More with Quick Proposal",
  },
  {
    label: "Smart & Savvy",
    content: "Craft Proposals Tailored to Every Opportunity",
  },
];

const config = {
  mailerEmail,
  mailerPassword,
  clientBaseUrl,
  benefitsList,
  featuresList,
  formSpreeId,
};

export default config;
