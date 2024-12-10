import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Clipboard,
} from "lucide-react";

// Interfaz para las propiedades del componente Hero
interface HeroProps {
  copyToClipboard: (value: string, label: string) => void; // Función para copiar al portapapeles
  copiedField: string; // Campo que se ha copiado
}

const contactInfo = [
  { icon: Mail, label: "Email", value: "Cristobalandres1999@gmail.com" },
  { icon: Phone, label: "Teléfono", value: "+56 9 5300 5128" },
  { icon: MapPin, label: "Ubicación", value: "Santiago, Chile" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", url: "https://github.com/CristRamirezG" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/CristRamirez",
  },
  { icon: Twitter, label: "Twitter", url: "https://twitter.com/Elbowed056" },
];

export default function Hero({ copyToClipboard, copiedField }: HeroProps) {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12">
      <div className="relative w-64 h-64 flex-shrink-0 overflow-hidden rounded-full shadow-xl">
        <Image
          src="/profile_pic/profile2.png"
          alt="Foto de perfil de Cristóbal Andrés Ramírez González"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="flex-grow space-y-6 text-center md:text-left">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Cristóbal Andrés Ramírez González
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mt-2">
          Ingeniero Civil en Computación mención Informática | Licenciado en ciencias de la ingeniería | Desarrollador
            Web | Analista de datos.
          </p>
        </div>
        <p className="text-lg text-foreground">
          Desarrollador con experiencia en implementación de sistemas basados en
          Inteligencia Artificial, automatización de procesos, desarrollo web y
          diseño de soluciones de software a medida. Especializado en el uso de
          modelos de lenguaje natural (LLMs), gestión de backend y frontend en múltiples frameworks.
          Además, cuento con experiencia en herramientas de Machine Learning
          para data science, procesamiento de datos y deep learning, incluyendo
          el uso de redes neuronales, modelos preentrenados y técnicas avanzadas
          para clasificación y análisis predictivo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-card rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-foreground">{item.value}</span>
              </div>
              <button
                onClick={() => copyToClipboard(item.value, item.label)}
                className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                aria-label={`Copiar ${item.label}`}
              >
                {copiedField === item.label ? (
                  <span className="text-green-500 text-sm">Copiado!</span>
                ) : (
                  <Clipboard className="w-5 h-5 text-primary" />
                )}
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:justify-start space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
