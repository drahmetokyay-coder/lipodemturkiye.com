import { SITE_URL } from "./organization";

export interface QuizSchemaInput {
  name: string;
  description: string;
  urlPath: string;
  numberOfQuestions: number;
  scaleReference?: { name: string; citation?: string };
  about?: { name: string; code?: string };
}

export function generateQuizSchema(input: QuizSchemaInput) {
  const url = `${SITE_URL}${input.urlPath}`;
  return {
    "@type": "Quiz",
    name: input.name,
    description: input.description,
    url,
    inLanguage: "tr-TR",
    educationalLevel: "Patient education",
    numberOfQuestions: input.numberOfQuestions,
    about: input.about
      ? {
          "@type": "MedicalCondition",
          name: input.about.name,
          ...(input.about.code ? { code: { "@type": "MedicalCode", code: input.about.code, codingSystem: "ICD-10" } } : {}),
        }
      : { "@type": "MedicalCondition", name: "Lipödem" },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
    ...(input.scaleReference
      ? {
          isBasedOn: {
            "@type": "CreativeWork",
            name: input.scaleReference.name,
            ...(input.scaleReference.citation ? { citation: input.scaleReference.citation } : {}),
          },
        }
      : {}),
  };
}
