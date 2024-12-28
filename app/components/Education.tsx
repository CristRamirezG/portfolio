export default function Education() {
  const education = [
    {
      year: "2018 - 2024",
      degree:
        "Licenciatura en ciencias de la ingeniería y Ingeniería civil en computación mención informática (en curso)",
      institution: "Universidad tecnológica metropolitana (UTEM)",
    },
  ];

  return (
    <section id="education" className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-foreground">
        Educación
      </h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0 w-32">
              <span className="text-lg font-semibold text-primary">
                {edu.year}
              </span>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-foreground">
                {edu.degree}
              </h3>
              <p className="mt-2 text-muted-foreground">{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
