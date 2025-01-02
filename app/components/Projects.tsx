import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description: string;
  images: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Bot de Discord con LLM, Text-to-Voice y Sistema RAG",
    description:
      "2024: Asistente virtual con en Cohere, Annoy, Whisper, ElevenLabs y GroqCloud. Configurado en Render utilizando Flask con integración OAuth para Funciones de administración.",
    images: ["/project_img/Discordbot/1.png", "/project_img/Discordbot/2.png"],
    link: "/projects/Discord_Bot",
  },
  {
    title: "Sistema de Automatización de Chatbots",
    description:
      "2024: Creación automática de chatbots en ChatScript Utilizando Modelos LLM. Integración de Vue.js, Keycloak, MongoDB, GroqCloud API, Weaviate y LangChain, optimizando memoria y concurrencia.",
    images: [
      "/project_img/Chatbots/1.png",
      "/project_img/Chatbots/2.png",
      "/project_img/Chatbots/3.png",
    ],
    link: "/projects/Chatbots",
  },
  {
    title: "Fine-tuning de Modelos LLM",
    description:
      "2024: Proyecto en el cual desarrolle un modelo de fine-tuning basado en mistralai/Mistral-7B-Instruct-v0.2, diseñado para responder de manera efectiva a todo tipo de consultas relacionadas con Drácula, la obra clásica de Bram Stoker publicada en 1897.",
    images: ["/project_img/Finetunning/1.png"],
    link: "https://github.com/CristRamirezG/Finetunning-Mistral7B-qlora-dracula-bram-stoker-1897",
  },
  {
    title:
      "Modelo Predictivo para entrega de pedidos (Random Forest, KNN, Gradient Boosting, Linear SVC, Decision Tree, XGBoost y LightGBM)",
    description:
      "2023: modelo predictivo para estimar el tiempo total necesario para completar pedidos, utilizando datos históricos de órdenes, información de productos, detalles de los shoppers y características de las sucursales, evaluando el rendimiento de diferentes modelos de aprendizaje automático y optimizando la selección de modelos.",
    images: [
      "/project_img/PredictiveModel/1.png",
      "/project_img/PredictiveModel/2.png",
    ],
    link: "https://github.com/CristRamirezG/Modelo-Predictivo-Tiempo-de-entrega-de-pedidos",
  },
  {
    title: "Clasificador de objetos con CNN y Transfer Learning",
    description:
      "2023: Desarrollé un sistema de clasificación de imágenes con CNNs y modelos preentrenados como DenseNet169, ResNet50 y MobileNetV2, aplicando ajuste fino, data augmentation y balanceo de datos. Las imágenes fueron procesadas con ETL (recorte, normalización, eliminación de duplicados) y las etiquetas con codificación one-hot. Se evaluaron con métricas como precisión y F1-score, destacando DenseNet169 y ResNet50, y optimicé los pipelines de entrenamiento con TensorFlow/Keras y early stopping.",
    images: ["/project_img/CNN/1.png"],
    link: "https://github.com/CristRamirezG/Clasificador-de-objetos-con-CNN-y-Modelos-Preentrenados",
  },
  {
    title: "Sistema de Campañas Telefónicas",
    description:
      "2023: Desarrollo de un sistema para gestionar campañas de llamadas telefónicas. Utilización de Vue.js, FastAPI, MongoDB y Docker en un entorno basado en Asterisk.",
    images: [
      "/project_img/Phonecampaign/1.png",
      "/project_img/Phonecampaign/2.png",
      "/project_img/Phonecampaign/3.png",
    ],
    link: "/",
  },
  {
    title: "Gestor de Inventario (Jupiter Pizzería)",
    description:
      "2022: Sistema integral para gestión de inventarios desarrollado con Laravel bajo el modelo MVC. Incluye frontend, backend y base de datos MySQL, optimizando la administración de recursos.",
    images: [
      "/project_img/Jupiter/1.png",
      "/project_img/Jupiter/2.png",
      "/project_img/Jupiter/3.png",
    ],
    link: "/",
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
          href="/"
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
  const [direction, setDirection] = useState(0);

  const handleNextImage = () => {
    setDirection(1);
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length
    );
  };

  const handlePrevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextImage();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <Link href={project.link} passHref legacyBehavior>
      <a className="block bg-card rounded-lg bg-neutral-950 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-opacity-75">
        <div className="relative h-48">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentImageIndex}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </AnimatePresence>
          {project.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handlePrevImage();
                }}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleNextImage();
                }}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-primary mb-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
      </a>
    </Link>
  );
}
