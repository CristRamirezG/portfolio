// projects/D/page.jsx
import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold text-shadow mb-6">
        Bot de Discord con LLM, Text-to-Voice y Sistema RAG
      </h1>

      <section className="bg-black/60 backdrop-blur-sm rounded-lg p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">
          Sobre el Proyecto
        </h2>
        <p className="text-gray-300">
          Este bot combina transcripción de audio, generación de respuestas mediante un LLM y reproducción de audio en Discord. Su diseño modular incluye un dashboard seguro en Flask con OAuth2 para personalización, y un sistema RAG para respuestas precisas usando datos contextuales cargados por el usuario.
        </p>
      </section>

      <section className="bg-black/60 backdrop-blur-sm rounded-lg p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-semibold text-gray-100">
          Demo: Respuesta generada para "¿Qué es Tailwind? ¿Es similar a CSS?"
        </h2>

        <iframe
          width="1897"
          height="785"
          src="https://www.youtube.com/embed/2gO7aRA1WhY"
          title="Discord Bot - &quot;¿Qué es Tailwind? ¿Es similar a CSS?&quot;"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-200">
            Funcionalidades Principales:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Grabación y transcripción de audio en canales de voz usando Whisper y procesamiento en GroqCloud.
            </li>
            <li>
              Generación de respuestas mediante un modelo LLM, convertidas en audio con ElevenLabs.
            </li>
            <li>
              Soporte para múltiples modos de operación: Text-to-Text, Text-to-Voice, Voice-to-Text y Voice-to-Voice.
            </li>
            <li>
              Sistema RAG con Annoy y Cohere para mejorar la relevancia de las respuestas utilizando datos cargados.
            </li>
          </ul>
        </div>

        <div className="mt-8 ">
          <h3 className="text-xl font-medium text-gray-200 mb-4">
            Agregar el Bot a tu servidor de Discord
          </h3>
          <Link
            href="https://discord.com/oauth2/authorize?client_id=643516900965482506&permissions=3348544&scope=bot"
            className="btn inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            Agregar Bot a Discord
          </Link>
          
          <Link href="https://openai-discord-bodoque.onrender.com" className="btn inline-flex items-center bg-fuchsia-50 hover:bg-indigo-300 text-black ml-3" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
             <path d="M3 0H21C22.6569 0 24 1.34315 24 3V21C24 22.6569 22.6569 24 21 24H3C1.34315 24 0 22.6569 0 21V3C0 1.34315 1.34315 0 3 0ZM3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3ZM7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7ZM7 9C6.44772 9 6 8.55229 6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H7ZM7 17C6.44772 17 6 16.5523 6 16C6 15.4477 6.44772 15 7 15H17C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17H7Z"/>
            </svg>
            Pagina en Render
            </Link>
        </div>
      </section>
    </div>
  );
}
