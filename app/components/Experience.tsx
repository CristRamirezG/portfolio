export default function Experience() {
  const experiences = [
    {
      year: "2024",
      title: "Automatización de Chatbots (Alloxentric)",
      description:
        "Sistema para la creación automática de chatbots en ChatScript, integrando Vue.js, Keycloak, MongoDB, GroqCloud API, Weaviate y LangChain para memoria y concurrencia.",
    },
    {
      year: "2023",
      title: "(Práctica Profesional) Sistema de Campañas Telefónicas (Alloxentric)",
      description:
        "Implementación inicial de un sistema para gestionar campañas de llamadas utilizando Vue.js, FastAPI, MongoDB y Docker en un entorno basado en Asterisk.",
    },
    {
      year: "2022",
      title: "(Proyecto personal) Gestor de Inventario (Jupiter Pizzería)",
      description:
        "Sistema integral de gestión de inventarios con Laravel, bajo el modelo MVC, incluyendo frontend, backend y base de datos MySQL.",
    },
  ];

  return (
    <section id="experience" className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-foreground">
        Experiencia Profesional
      </h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0 w-24">
              <span className="text-2xl font-bold text-primary">
                {exp.year}
              </span>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-foreground">
                {exp.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
