const clientBaseUrl = process.env.NEXT_PUBLIC_CLIENT_BASE_URL;

const mailerEmail = "abid.saeed.ali92@gmail.com";
const mailerPassword = "gbog ifdh syzw gijz";
const formSpreeId = "xyyrygjz";
const initialFreeCredits = 5;

const secretAccessToken = "nMoO0lEQs3bfd2FSl324aDpLLsfSdk39ZO3X43e3dLkiQs25A4";
const refreshToken = "lMBO0lEQs3b2d2FSl324ampTLsfSdk3KZO3Xr3e3WLkiQs25c3";

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
  initialFreeCredits,
  secretAccessToken,
  refreshToken,
};

export default config;
