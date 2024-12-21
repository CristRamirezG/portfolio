export default function Skills() {
  const skills = [
    {
      category: "Lenguajes de Programación",
      items: [
        "Python",
        "JavaScript/TypeScript",
        "PHP",
        "C",
        "C++",
        "C#",
        "Java",
        "Dart",
        "SQL",
        "HTML",
        "CSS (Tailwind, CSS Modules)",
      ],
    },
    {
      category: "Desarrollo Backend",
      items: ["FastAPI", "Spring Boot", "MySQL", "Oracle", "MongoDB"],
    },
    {
      category: "Desarrollo Frontend",
      items: ["Vue.js", "Next.js", "Flask", "Laravel"],
    },
    {
      category: "Inteligencia Artificial",
      items: [
        "LangChain",
        "TensorFlow",
        "PyTorch",
        "Fine-tuning de LLMs",
        "GroqCloud API",
        "ElevenLabs API",
        "Cohere API",
        "Annoy",
        "Weaviate",
      ],
    },
    {
      category: "Análisis de Datos",
      items: ["Power BI", "Excel (avanzado)", "python", "SQL"],
    },
    {
      category: "Sistemas y Despliegue",
      items: ["Docker", "Render", "Vercel", "Keycloak", "OAuth"],
    },
  ];

  return (
    <section id="skills" className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-foreground">
        Habilidades Técnicas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillCategory, index) => (
          <div
            key={index}
            className="bg-card rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              {skillCategory.category}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {skillCategory.items.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-foreground">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
