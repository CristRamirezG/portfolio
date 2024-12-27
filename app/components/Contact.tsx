import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "Cristobalandres1999@gmail.com" },
    { icon: Phone, label: "Teléfono", value: "+56 9 5300 5128" },
    { icon: MapPin, label: "Ubicación", value: "Santiago, Chile" },
  ];

  return (
    <section id="contact" className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-foreground">
        Contacto
      </h2>
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-muted-foreground mb-8">
          ¿Interesado en colaborar o tienes alguna pregunta?.
        </p>
        <div className="space-y-2 ">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-card rounded-lg p-4 shadow-md"
            >
              <item.icon className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">{item.label}</h3>
                <p className="text-muted-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
