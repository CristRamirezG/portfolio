import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  images: string[];
  link: string;
};


const projects: Project [] = [
  {
    title: "Fine-tuning de Modelos LLM",
    description:
      "2022-2024: Ajuste fino de modelos de lenguaje locales con Python y Conda, publicado en GitHub y Hugging Face. Implementación de redes convolucionales y procesos ETL para mejorar capacidades predictivas y de clasificación.",
    images: ["/project_img/Finetunning/1.png"],
    link: "https://colab.research.google.com/drive/1yWyM0RiIIk3FcEBMaWyFcPQ6EOsFhQYk?usp=sharing",
  },
  {
    title: "Bot de Discord con sistema RAG / LLM",
    description:
      "2024: Asistente virtual basado en Cohere, Annoy, Whisper, ElevenLabs y GroqCloud. Configurado en Render utilizando Flask con integración OAuth para funcionalidades avanzadas en la nube.",
    images: ["/project_img/Discordbot/1.png","/project_img/Discordbot/2.png"],
    link: "/proyectos/discord-bot-rag-llm",
  },
  {
    title: "Sistema de Automatización de Chatbots",
    description:
      "2024: Creación automática de chatbots en ChatScript. Integración de Vue.js, Keycloak, MongoDB, GroqCloud API, Weaviate y LangChain, optimizando memoria y concurrencia.",
    images: ["/project_img/Chatbots/1.png"],
    link: "/proyectos/chatbot-automation",
  },
  {
    title: "Sistema de Campañas Telefónicas",
    description:
      "2023: Desarrollo de un sistema para gestionar campañas de llamadas telefónicas. Utilización de Vue.js, FastAPI, MongoDB y Docker en un entorno robusto basado en Asterisk.",
    images: ["/project_img/Phonecampaign/1.png","/project_img/Phonecampaign/2.png", "/project_img/Phonecampaign/3.png"],
    link: "/proyectos/phone-campaign-system",
  },
  {
    title: "Gestor de Inventario (Jupiter Pizzería)",
    description:
      "2022: Sistema integral para gestión de inventarios desarrollado con Laravel bajo el modelo MVC. Incluye frontend, backend y base de datos MySQL, optimizando la administración de recursos.",
    images: ["/project_img/Jupiter/1.png","/project_img/Jupiter/2.png","/project_img/Jupiter/3.png"],
    link: "/proyectos/inventory-manager",
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
          <ProjectCard key={index} project={project} />
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

function ProjectCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-card rounded-lg shadow-lg overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
      <div className="relative h-48">
        <Image
          src={project.images[currentImageIndex]}
          alt={`${project.title} - Image ${currentImageIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <button
          onClick={handlePrevImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={handleNextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full"
        >
          ▶
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
      </div>
    </div>
  );
}