import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const cases = [
    {
      id: 1,
      title: "UX Unite // Job Board",
      description:
        "Redesigning the UX job search experience on UX Unite with a value add",
      image:
        "https://raw.githubusercontent.com/Marysometimes/portfolio-images/dc4be683c381bd0ddb560d81b9d54bd28c24e89c/Case_UXUnite.jpg",
      path: "/case-1",
    },
    {
      id: 2,
      title: "DFDS // Navigation",
      description: "Optimizing navigation by basing on user mental models",
      image:
        "https://raw.githubusercontent.com/Marysometimes/portfolio-images/dc4be683c381bd0ddb560d81b9d54bd28c24e89c/Case_DFDS.jpg",
      path: "/case-2",
    },
    {
      id: 3,
      title: "DSB // Seat Booking",
      description:
        "Pragmatic optimization based on user prefs, saving cost on development",
      image:
        "https://raw.githubusercontent.com/Marysometimes/portfolio-images/dc4be683c381bd0ddb560d81b9d54bd28c24e89c/Case_DSB2.jpg",
      path: "/case-3",
    },
    {
      id: 4,
      title: "DSB // Service Order Form",
      description: "Surprising user test of DSB handicap Order Form",
      image:
        "https://raw.githubusercontent.com/Marysometimes/portfolio-images/dc4be683c381bd0ddb560d81b9d54bd28c24e89c/Case_DSB1.jpg",
      path: "/case-4",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-3 py-20">
        <div className="max-w-6xl">
          <p
            style={{
              fontFamily: "Raleway",
              fontWeight: 300,
              fontSize: "32px",
              lineHeight: "1.5",
              color: "#000",
            }}
          >
            Product- & Service Designer crafting data informed experiences that
            bridge digital and physical touchpoints.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-7xl mx-auto px-3 pt-8 pb-24">
        <h2
          className="mb-6"
          style={{
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "20px",
          }}
        >
          Cases.
        </h2>

        <div className="grid md:grid-cols-2 gap-x-4 gap-y-12">
          {cases.map((caseItem) => (
            <Link
              key={caseItem.id}
              to={caseItem.path}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] mb-4 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3
                className="mb-2 group-hover:text-gray-600 transition-colors"
                style={{
                  fontFamily: "Raleway",
                  fontWeight: 700,
                  fontSize: "12px",
                }}
              >
                {caseItem.title}
              </h3>

              <p
                className="text-gray-600 mb-3"
                style={{
                  fontFamily: "Raleway",
                  fontWeight: 300,
                  fontSize: "12px",
                }}
              >
                {caseItem.description}
              </p>

              <div className="flex items-center gap-2 text-gray-900">
                <span
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: 300,
                    fontSize: "12px",
                  }}
                >
                  View case study
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
