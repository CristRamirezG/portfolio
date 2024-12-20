import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">
      {/* Título del proyecto */}
      <h1 className="text-5xl font-bold text-center text-shadow mb-10">
        Sistema Integral de Creación de Chatbots
      </h1>

      {/* Proyecto Académico */}
      <section className="bg-zinc-950 rounded-lg p-6 shadow-lg space-y-4">
        <h2 className="text-3xl font-semibold text-white">
          Proyecto Académico
        </h2>
        <p className="text-gray-300">
          Este proyecto fue desarrollado como parte de un trabajo de título en
          la Universidad Tecnológica Metropolitana (UTEM). Fue realizado por
          Cristobal Ramirez y Victor Toro, bajo la guía experta del Dr. Oscar
          Magna. Representa un avance significativo en la investigación aplicada
          de inteligencia artificial, enfocándose en soluciones prácticas y
          efectivas para la creación de chatbots personalizados.
        </p>
        <p className="text-gray-300">
          El trabajo incluyó un análisis detallado de tecnologías modernas y la
          implementación de soluciones innovadoras, convirtiéndose en un valioso
          aporte tanto para el ámbito académico como para el sector industrial.
        </p>
      </section>

      {/* Introducción */}
      <section className="bg-zinc-950 rounded-lg p-6 shadow-lg space-y-4">
        <h2 className="text-3xl font-semibold text-white">Introducción</h2>
        <p className="text-gray-300">
          Este sistema fue desarrollado con un enfoque híbrido que combina
          modelos de lenguaje grandes (LLM) con sistemas de generación aumentada
          por recuperación (RAG) y técnicas avanzadas de ChatScript. Utilizando
          el stack de desarrollo especificado por Alloxentric, que incluye
          Vue.js, FastAPI, MongoDB y Weaviate, se diseñó un sistema integral que
          facilita la creación de bots altamente personalizados. Este sistema es
          capaz de adaptarse a múltiples entornos y satisfacer las demandas
          específicas de Alloxentric, optimizando la interacción entre usuarios
          y tecnología mediante respuestas precisas y contextualmente
          relevantes.
        </p>
      </section>

      {/* Servicio de LLM */}
      <section className="bg-zinc-950 rounded-lg p-6 shadow-lg space-y-4">
        <h2 className="text-3xl font-semibold text-white">Servicio de LLM</h2>
        <p className="text-gray-300">
          El sistema LLM se implementó utilizando GroqCloud, una solución
          avanzada para inferencia que ofrece modelos preentrenados listos para
          su uso. Estos modelos fueron integrados cuidadosamente para garantizar
          una experiencia fluida y respuestas de alta calidad. Además, se
          adaptaron plantillas de bots en ChatScript previamente desarrolladas
          por el equipo de Alloxentric. Estas modificaciones permiten ajustar
          cada bot al contexto específico y a las necesidades únicas del usuario
          final, manteniendo una configuración flexible pero estandarizada.
        </p>
      </section>

      {/* Sistema RAG */}
      <section className="bg-zinc-950 rounded-lg p-6 shadow-lg space-y-4">
        <h2 className="text-3xl font-semibold text-white">Sistema RAG</h2>
        <p className="text-gray-300">
          Para poblar el sistema RAG, se emplearon archivos de ChatScript
          proporcionados por Alloxentric. Estos pasaron por un meticuloso
          proceso de ETL (Extract, Transform, Load), en el cual los datos fueron
          enriquecidos con metadatos que facilitan su recuperación y análisis.
          Esto asegura que el sistema no solo recupere los archivos relevantes,
          sino que también proporcione un contexto adicional que enriquece la
          interpretación de la información.
        </p>
        <p className="text-gray-300">
          Este enfoque innovador permite responder de manera eficiente a
          consultas relacionadas con los archivos seleccionados, preservando la
          estructura original y garantizando la seguridad de los datos
          sensibles. El uso de bases de datos vectoriales, como Weaviate,
          optimiza aún más la recuperación de información en el sistema.
        </p>
      </section>

      {/* Tecnologías Utilizadas */}
      <section className="bg-zinc-950 rounded-lg p-6 shadow-lg space-y-4">
        <h2 className="text-3xl font-semibold text-white">
          Tecnologías Utilizadas
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-700 rounded p-4">
            <h3 className="text-2xl font-bold text-white">Frontend</h3>
            <p className="text-gray-300">
              Desarrollado con Vue.js y Vuetify para crear interfaces modernas,
              intuitivas y altamente responsivas.
            </p>
          </div>
          <div className="bg-gray-700 rounded p-4">
            <h3 className="text-2xl font-bold text-white">Backend</h3>
            <p className="text-gray-300">
              Construido sobre FastAPI, una herramienta robusta que permite
              manejar APIs de manera eficiente, con soporte para procesamiento
              en tiempo real.
            </p>
          </div>
          <div className="bg-gray-700 rounded p-4">
            <h3 className="text-2xl font-bold text-white">Base de Datos</h3>
            <p className="text-gray-300">
              MongoDB para el almacenamiento escalable de datos y Weaviate para
              la gestión eficiente de datos vectoriales relacionados con la
              recuperación de información.
            </p>
          </div>
          <div className="bg-gray-700 rounded p-4">
            <h3 className="text-2xl font-bold text-white">Procesamiento</h3>
            <p className="text-gray-300">
              Integración con GroqCloud y modelos avanzados de LLM que
              garantizan respuestas contextuales y relevantes.
            </p>
          </div>
        </div>
      </section>

      {/* Vista Demo */}
      <section className="bg-zinc-950 rounded-lg p-6 shadow-lg space-y-4">
        <h2 className="text-3xl font-semibold text-white">Demo del Sistema</h2>
        <p className="text-gray-300">
          En esta demo, se está creando un bot para un canal web con interacción
          inicial automática (<strong>Onbound</strong>), configurado en inglés. El prompt
          utilizado describe un bot diseñado para promocionar el nuevo juego de
          Valve, <strong>Deadlock</strong>, que actualmente se encuentra en beta
          cerrada a través de Steam. El bot debe ser capaz de:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Proporcionar información sobre el Discord del juego.</li>
          <li>Mostrar estadísticas de los jugadores.</li>
          <li>Indicar cómo obtener acceso a la beta cerrada.</li>
        </ul>
        <p className="text-gray-300">
          Todo esto se realiza utilizando el modelo{" "}
          <strong>Llama 3.3 70B-Versatile</strong>, proporcionado por{" "}
          <strong>GroqCloud API</strong>.
        </p>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com"
          title="Demo del Sistema Híbrido LLM y RAG"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
}
