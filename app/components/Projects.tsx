import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Fine-tuning de Modelos LLM",
    description:
      "Ajuste fino de modelos LLM locales con Python y Conda, publicación en GitHub y Hugging Face, uso de redes convolucionales y ETL.",
    image: "/project_img/Finetunning/1.png",
    link: "https://colab.research.google.com/drive/1yWyM0RiIIk3FcEBMaWyFcPQ6EOsFhQYk?usp=sharing",
  },
  {
    title: "Bot de Discord con sistema RAG / LLM",
    description:
      "Asistente integrado con Cohere, Annoy, Whisper, ElevenLabs y GroqCloud, operando en la nube con Render y Flask para configuración mediante OAuth.",
    image: "/project_img/Discordbot/1.png",
    link: "/proyectos/discord-bot-rag-llm",
  },
  {
    title: "Sistema de Automatización de Chatbots",
    description:
      "Creación automática de chatbots en ChatScript, integrando Vue.js, Keycloak, MongoDB, GroqCloud API, Weaviate y LangChain.",
    image: "/project_img/Chatbots/1.png",
    link: "/proyectos/chatbot-automation",
  },
  {
    title: "Sistema de Campañas Telefónicas",
    description:
      "Gestión de campañas de llamadas utilizando Vue.js, FastAPI, MongoDB y Docker en un entorno basado en Asterisk.",
    image: "/project_img/Phonecampaign/1.png",
    link: "/proyectos/phone-campaign-system",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-foreground">
        Proyectos Destacados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link href={project.link} key={index} className="group">
            <div className="bg-card rounded-lg shadow-lg overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="/proyectos"
          className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-background hover:bg-primary hover:text-white transition-colors"
        >
          Ver todos los proyectos
        </Link>
      </div>
    </section>
  );
}
