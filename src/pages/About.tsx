import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const experience = [
    {
      title: "Service Designer (project role)",
      company: "UX Unite",
      period: "Mar 2025 – Jul 2025",
      description:
        "End-to-end discovery and design of UX Unite's 'Job Board'. Used quantitative and qualitative research, surveys, prototyping, user interviews and usability testing to improve the job-search experience.",
    },
    {
      title: "UX & Design Team Lead & Manager",
      company: "DFDS",
      period: "Nov 2021 – Mar 2025",
      description:
        "Team Lead of the Experience Design Team with line-management responsibility for 10+ people. Raised UX maturity (level 4) through UX strategy, DesignOps/ResearchOps and initiatives such as a Customer Journey Community of Practice and cross organization service blueprint template, user panel, insight pipeline from customer support, UX story points, updated toolbox, and a new design system. Facilitated workshops, conducted user interviews and problem framing in complex environments, aligning with disparate stakeholders.",
    },
    {
      title: "Product Owner (parallel role / project role)",
      company: "DFDS",
      period: "Jan 2022 – Dec 2022",
      description:
        "Product Owner on a B2B project. Drove project in a complex operational environment and translated user needs and business requirements into digital solutions. Led the work on new navigation and design that improved usability and conversion.",
    },
    {
      title: "UX Designer",
      company: "DFDS",
      period: "Sep 2019 – Nov 2021",
      description:
        "UX Designer in an agile scrum team. Responsible for UX design (user research, IA, digital design, prototyping, usability testing) of components consumed by teams across DFDS.",
    },
    {
      title: "UX Designer",
      company: "DSB",
      period: "May 2018 – Sep 2019",
      description:
        "UX Designer at DSB, a large politically governed organisation. Worked in a central UX team using SAFe (agile). Started an accessibility Community of Practice, and contributed to establishing DSB's first design system.",
    },
    {
      title: "Graphic Designer, Art Director, UX Designer",
      company: "hi-lo",
      period: "Mar 2011 – Mar 2021",
      description:
        "Freelance graphic designer, Art Director and UX Consultant on projects across print and digital. Primary focus on art direction for magazines, visual identities, book illustration, and UX fesign for websites.",
    },
  ];

  const education = [
    {
      degree: "Master's in Digital Design & Communication",
      institution: "IT University of Copenhagen (ITU)",
      specialization: "Specialisation in Service Design",
      year: "2015 – 2017",
    },
    {
      degree: "Bachelor's in Communication & Digital Media",
      institution: "Aalborg University - Copenhagen (AAU-CPH)",
      specialization: "Specialisation in Information Science",
      year: "2011 – 2015",
    },
    {
      degree: "Bachelor's in Graphic Communication",
      institution: "Danish School of Media and Journalism (DMJX)",
      specialization: "Specialisation in Graphic Design",
      year: "2004 – 2007",
    },
  ];

  const skills = [
    "User research (interviews, observation, usability testing etc.)",
    "Analysis",
    "Workshop design & facilitation",
    "Service Blueprints",
    "Customer Journey Mapping",
    "Information architecture (Content- and domain modelling)",
    "Business analysis in large organisations",
    "Pixel perfect digital design",
    "Prototyping (Figma, Sketch, Adobe XD etc)",
    "DesignOps",
    "ResearchOps",
    "Governance",
    "Presentation & storytelling",
    "Cross-disciplinary agile collaboration",
    "Communication & stakeholder management",
  ];

  const swissArmyTop =
    "https://raw.githubusercontent.com/Marysometimes/portfolio-images/8bcd7af01892bad7b000e3d29a6a4c9efd441dab/MarieKrause_logo.png";

  return (
    <div className="min-h-screen">
      {/* Header - Bio and Image */}
      <section className="max-w-7xl mx-auto px-5 md:px-3 py-20">
        <div className="md:grid md:grid-cols-4 md:gap-12 md:items-center">
          {/* Text */}
          <div className="order-1 md:order-2 md:col-span-3">
            <p
              className="mb-6 leading-relaxed"
              style={{
                fontFamily: "Raleway",
                fontWeight: 700,
                fontSize: "20px",
                color: "#000",
              }}
            >
              I’m a product & service designer with a swiss-army-knife skillset;
              Broad, deep, and built to tackle complexity across touchpoints
              and channels.
            </p>
            <p
              className="mb-6 leading-relaxed"
              style={{
                fontFamily: "Raleway",
                fontWeight: 300,
                fontSize: "16px",
                color: "#000",
              }}
            >
              I combine strategic framing with qualitative and quantitative user
              research and data-informed design to shape intuitive, coherent
              experiences that create real value for users and organisations.
            </p>
          </div>

          {/* Image */}
          <div className="order-2 md:order-1 md:col-span-1 mt-10 md:mt-0 flex justify-center md:justify-start">
            <div className="aspect-square bg-gray-100 rounded-full overflow-hidden w-40 md:w-full">
              <ImageWithFallback
                src={swissArmyTop}
                alt="Marie Krause logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-3">
          <h2
            className="mb-6"
            style={{ fontFamily: "Raleway", fontWeight: 700, fontSize: "20px" }}
          >
            Experience.
          </h2>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="grid grid-cols-4 gap-6">
                <div className="col-span-1">
                  <p
                    className="text-gray-500 whitespace-pre-line md:whitespace-normal"
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: 300,
                      fontSize: "12px",
                    }}
                  >
                    {window.innerWidth < 768
                      ? job.period.replace("–", "–\n")
                      : job.period}
                  </p>
                </div>
                <div className="col-span-3">
                  <h3
                    className="mb-1"
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: 700,
                      fontSize: "12px",
                    }}
                  >
                    {job.title}
                  </h3>
                  <p
                    className="text-gray-600 mb-3"
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: 300,
                      fontSize: "12px",
                    }}
                  >
                    {job.company}
                  </p>
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: 300,
                      fontSize: "12px",
                    }}
                  >
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-3">
          <h2
            className="mb-6"
            style={{ fontFamily: "Raleway", fontWeight: 700, fontSize: "20px" }}
          >
            Education.
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="grid grid-cols-4 gap-6">
                <div className="col-span-1">
                  <p
                    className="text-gray-500"
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: 300,
                      fontSize: "12px",
                    }}
                  >
                    {edu.year}
                  </p>
                </div>
                <div className="col-span-3">
                  <h3
                    className="mb-1"
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: 700,
                      fontSize: "12px",
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    className="text-gray-600 mb-1"
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: 300,
                      fontSize: "12px",
                    }}
                  >
                    {edu.institution}
                  </p>
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: 300,
                      fontSize: "12px",
                    }}
                  >
                    {edu.specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-3">
          <h2
            className="mb-6"
            style={{
              fontFamily: "Raleway",
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            Skills.
          </h2>
          {/* vigtig ændring her: list-inside fjernet, margin venstre i stedet */}
          <ul className="space-y-3 list-disc ml-6">
            {skills.map((skill, index) => (
              <li
                key={index}
                style={{
                  fontFamily: "Raleway",
                  fontWeight: 300,
                  fontSize: "16px",
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
