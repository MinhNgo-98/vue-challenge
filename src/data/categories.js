const categories = [
  {
    id: 1,
    name: "Allgemeine Pflege",
    description: "Dienstleistungen für die allgemeine Betreuung von Patienten, um deren Lebensqualität zu verbessern. Dazu gehören grundlegende Unterstützung bei alltäglichen Aktivitäten sowie die Sicherstellung von Wohlbefinden und Sicherheit.",
    price: null,
    available: true,
    children: [
      {
        id: 2,
        name: "Pflege älterer Menschen",
        description: "Pflegedienste, die speziell auf die Bedürfnisse älterer Menschen zugeschnitten sind. Hierzu zählen Unterstützung im Haushalt, medizinische Versorgung und soziale Betreuung, um die Selbstständigkeit zu fördern.",
        price: null,
        available: true,
        children: [
          {
            id: 3,
            name: "Häusliche Pflege",
            description: "Individuelle Betreuung und Pflege in den eigenen vier Wänden. Dies umfasst Hilfe bei der Körperpflege, der Zubereitung von Mahlzeiten und die Unterstützung bei medizinischen Anforderungen wie Medikamenteneinnahme.",
            price: 150,
            available: true,
            children: []
          },
          {
            id: 4,
            name: "Stationäre Pflege",
            description: "Pflegedienstleistungen, die in spezialisierten Einrichtungen angeboten werden. Diese umfassen eine Rund-um-die-Uhr-Betreuung, medizinische Versorgung sowie therapeutische Angebote, um das Wohlbefinden zu fördern.",
            price: 200,
            available: false,
            children: []
          }
        ]
      },
      {
        id: 5,
        name: "Pflege bei chronischen Erkrankungen",
        description: "Langfristige Betreuung und Unterstützung für Patienten, die an chronischen Krankheiten leiden. Ziel ist es, die Lebensqualität zu erhalten und eine kontinuierliche medizinische Versorgung sicherzustellen.",
        price: 180,
        available: true,
        children: []
      }
    ]
  },
  {
    id: 6,
    name: "Ärztliche Beratungen",
    description: "Beratungsgespräche mit qualifizierten Fachärzten für unterschiedliche medizinische Fragestellungen. Hierbei werden Diagnosen gestellt, Behandlungsmöglichkeiten besprochen und präventive Maßnahmen empfohlen.",
    price: null,
    available: true,
    children: [
      {
        id: 7,
        name: "Allgemeinmediziner",
        description: "Umfassende Beratung zu allgemeinen Gesundheitsfragen, wie etwa Vorsorgeuntersuchungen oder akuten Beschwerden. Der Allgemeinmediziner dient als erster Ansprechpartner für gesundheitliche Anliegen.",
        price: 50,
        available: true,
        children: []
      },
      {
        id: 8,
        name: "Kardiologe",
        description: "Spezialisierte Beratung und Diagnose im Bereich Herz-Kreislauf-Erkrankungen. Dies umfasst Untersuchungen wie EKGs, Blutdruckmessungen und die Entwicklung von individuellen Behandlungsplänen.",
        price: 75,
        available: true,
        children: []
      },
      {
        id: 9,
        name: "Neurologe",
        description: "Diagnose und Beratung zu Erkrankungen des Nervensystems, wie etwa Migräne, Epilepsie oder andere neurologische Störungen. Es werden individuelle Behandlungsmöglichkeiten angeboten.",
        price: 80,
        available: false,
        children: []
      }
    ]
  },
  {
    id: 10,
    name: "Diagnostische Dienste",
    description: "Spezialisierte Diagnostik für Patienten, um gesundheitliche Probleme frühzeitig zu erkennen und gezielt behandeln zu können. Moderne Technologien und erfahrene Fachkräfte gewährleisten zuverlässige Ergebnisse.",
    price: null,
    available: true,
    children: [
      {
        id: 11,
        name: "Bluttests",
        description: "Umfassende Analyse von Blutproben, um wichtige gesundheitliche Parameter zu ermitteln. Dazu zählen beispielsweise Blutzuckerwerte, Cholesterin oder Blutbildanalysen.",
        price: 30,
        available: true,
        children: []
      },
      {
        id: 12,
        name: "Röntgen",
        description: "Bildgebende Diagnoseverfahren zur Erkennung von Verletzungen oder Erkrankungen im Körper. Röntgenuntersuchungen ermöglichen eine detaillierte Analyse des Knochen- und Gewebesystems.",
        price: 100,
        available: true,
        children: []
      },
      {
        id: 13,
        name: "Ultraschall",
        description: "Nicht-invasive Diagnose mittels Ultraschall zur Untersuchung von Organen und Gewebe. Die Methode ist sicher und ermöglicht eine präzise Einschätzung des Gesundheitszustandes.",
        price: 70,
        available: true,
        children: []
      }
    ]
  }
];

export default categories;
