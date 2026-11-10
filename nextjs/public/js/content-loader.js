// Optional content overrides exported by the CATENO local content manager.
// Defaults remain in i18n.js and data.js if content.json is unavailable.
(async function(){
  const defaults = {
    en: {homeEyebrow:"INTERNATIONAL BUSINESS & TECHNOLOGY CONSULTING",homeTitle1:"Strategy. Technology.",homeTitle2:"Global Growth.",homeSub:"We help businesses navigate complexity, embrace technology and unlock new opportunities across international markets.",introHeading:"Your Trusted Partner for Sustainable Growth.",introCopy:"At CATENO ADVISORY, we combine strategic consulting with technological expertise to help organizations grow, innovate and thrive in an increasingly complex global landscape.",servicesHeading:"Comprehensive Expertise for a Complex World.",approachHeading:"From Strategy to Impact.",approachIntro:"A structured, collaborative journey from the first insight to meaningful, lasting implementation.",globalHeading:"Global Perspective. Local Expertise.",globalCopy:"We bring together strategic thinking and an understanding of different markets, industries and business cultures.",whyHeading:"Clarity for Complex Challenges."},
    de: {homeEyebrow:"INTERNATIONALE UNTERNEHMENS- & TECHNOLOGIEBERATUNG",homeTitle1:"Strategie. Technologie.",homeTitle2:"Globales Wachstum.",homeSub:"Wir helfen Unternehmen, Komplexität zu meistern, Technologie sinnvoll einzusetzen und neue Chancen auf internationalen Märkten zu erschließen.",introHeading:"Ihr Partner für nachhaltiges Wachstum.",introCopy:"Bei CATENO ADVISORY verbinden wir strategische Beratung mit technologischer Expertise, damit Unternehmen wachsen, innovieren und sich in einem zunehmend komplexen globalen Umfeld behaupten.",servicesHeading:"Ganzheitliche Expertise für eine komplexe Welt.",approachHeading:"Von der Strategie zur Wirkung.",approachIntro:"Ein klarer, partnerschaftlicher Weg von der ersten Analyse bis zur nachhaltigen Umsetzung.",globalHeading:"Global denken. Lokal handeln.",globalCopy:"Wir verbinden strategisches Denken mit einem Verständnis für unterschiedliche Märkte, Branchen und Geschäftskulturen.",whyHeading:"Klarheit für komplexe Herausforderungen."}
  };
  Object.assign(T.en, defaults.en); Object.assign(T.de, defaults.de);
  try {
    const response = await fetch('/api/site-content', {cache:'no-store'});
    if (response.ok) {
      const content = await response.json();
      if (content.T) for (const language of ['en','de']) if (content.T[language]) Object.assign(T[language], content.T[language]);
      if (Array.isArray(content.S)) {
        for (const edited of content.S) {
          const original = S.find(item => item[0] === edited.id);
          if (original) for (const language of ['en','de']) if (edited[language]) original[1][language] = edited[language];
        }
      }
      if (content.IND) for (const language of ['en','de']) if (Array.isArray(content.IND[language])) IND[language] = content.IND[language];
      if (content.CONFIG && content.CONFIG.email) CONFIG.email = content.CONFIG.email;
    }
  } catch (error) {
    console.info('CATENO: using built-in content (content.json not loaded).', error);
  }
  const script = document.createElement('script');
  script.src = 'js/app.js';
  document.body.appendChild(script);
})();
