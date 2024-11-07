// src/components/JsonLdScript.tsx
import React from 'react';
import categories from '../assets/categories.json';

const JsonLdScript: React.FC = () => {
  const generateJsonLd = () => {
    const jsonLdData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": categories.map((category, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": category.name,
        "item": {
          "@type": "CreativeWork",
          "name": category.name,
          "about": category.detailLines.map(detail => ({
            "@type": "Text",
            "text": detail.join(", ")
          })),
          "image": category.backgroundImage
        }
      }))
    };
    return JSON.stringify(jsonLdData);
  };

  return (
    <script type="application/ld+json">
      {generateJsonLd()}
    </script>
  );
};

export default JsonLdScript;
