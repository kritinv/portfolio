const projects = [
  {
    name: "Abacus Digital",
    description:
      "I developed an automated bank transaction sorter capable of categorizing payments in bank statements into more than 50 distinct categories (such as food, entertainment, etc.) based on their descriptions. By employing various language models, including LLMs, I achieved a final classification accuracy exceeding 95% for all transactions.",
    technologiesUsed: [
      "Python",
      "Google Cloud Platform",
      "BigQuery",
      "Google Vertex",
      "BERT",
      "GPT3.5",
      "fastText",
      "Beautiful Soup",
      "Google Translate API",
      "Faiss",
    ],
    date: "June - Aug 2023",
    link: "https://www.abacusdigital.com/",
  },
  {
    name: "Kasikorn Bank",
    description:
      "I reconstructed the firm's ATM cash demand model entirely, forecasting the cash withdrawal amounts for each ATM over the next 30 days. Through this overhaul, I significantly reduced the mean average prediction error by 73%.",
    technologiesUsed: [
      "Python",
      "Tensorflow",
      "Scikit-learn",
      "lightGBM",
      "Tableau",
    ],
    date: "June - Aug 2022",
    link: "https://www.kasikornbank.com/en/personal/pages/home.aspx",
  },
  {
    name: "Springtide Equity",
    description:
      "I constructed new statistics by scraping and analyzing e-commerce data to aid the firm in filtering potential small and medium-sized enterprise (SME) acquisition targets. I identified a total of 7,500 possible acquisitions.",
    technologiesUsed: ["Python", "Pandas", "Numpy"],
    date: "Feb - May 2021",
    link: "http://www.springtideequitypartners.com/",
  },
  {
    name: "Phatra Securities",
    description:
      "I constructed rebalancing indices for the Stock Exchange of Thailand within the newly developed quantitative research department.",
    technologiesUsed: ["Python", "Pandas", "Numpy"],
    date: "Feb - May 2021",
    link: "https://bank.kkpfg.com/en/aboutus/phatra-securities",
  },
];

export default projects;
