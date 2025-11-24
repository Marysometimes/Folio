import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";

interface CaseStudyProps {
  title: string;
  heroImage?: string;
  finishedProductImage: string;
  background: string;
  process: {
    phase: string;
    description: string;
    image?: string;
  }[];
  currentCaseId: number;
  detailImages?: string[];
}

export function CaseStudy({
  title,
  finishedProductImage,
  background,
  process,
  currentCaseId,
  detailImages,
}: CaseStudyProps) {
  const allCases = [
    {
      id: 1,
      title: "UX Unite // Job Board",
      path: "/case-1",
      image:
        "https://raw.githubusercontent.com/Marysometimes/portfolio-images/dc4be683c381bd0ddb560d81b9d54bd28c24e89c/Case_UXUnite.jpg",
    },
    {
      id: 2,
      title: "DFDS // Navigation",
      path: "/case-2",
      image:
        "https://raw.githubusercontent.com/Marysometimes/portfolio-images/dc4be683c381bd0ddb560d81b9d54bd28c24e89c/Case_DFDS.jpg",
    },
    {
      id: 3,
      title: "DSB // Seat Booking",
      path: "/case-3",
      image:
        "https://raw.githubusercontent.com/Marysometimes/portfolio-images/dc4be683c381bd0ddb560d81b9d54bd28c24e89c/Case_DSB2.jpg",
    },
    {
      id: 4,
      title: "DSB // Service Order Form",
      path: "/case-4",
      image:
        "https://raw.githubusercontent.com/Marysometimes/portfolio-images/dc4be683c381bd0ddb560d81b9d54bd28c24e89c/Case_DSB1.jpg",
    },
  ];

  const otherCases = allCases.filter((c) => c.id !== currentCaseId);

  const secondaryImages =
    detailImages && detailImages.length > 0
      ? detailImages.slice(0, 2).length === 2
        ? detailImages.slice(0, 2)
        : [...detailImages.slice(0, 2), finishedProductImage].slice(0, 2)
      : [finishedProductImage, finishedProductImage];

  return (
    <div className="min-h-screen">
      {/* H1 TITLE — mindre spacing til billedet */}
      <section className="max-w-7xl mx-auto px-3 pb-6 pt-10">
        <h1
          style={{
            fontFamily: "Raleway",
            fontWeight: 300,
            fontSize: "32px",
            color: "#000",
          }}
        >
          {title}
        </h1>
      </section>

      {/* MAIN IMAGE (no aspect ratio → høje billeder ok) */}
      <section className="max-w-7xl mx-auto px-3 pb-12">
        <div className="w-full bg-gray-100 overflow-hidden rounded">
          <ImageWithFallback
            src={finishedProductImage}
            alt="Finished product"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* TWO IMAGES IN A ROW */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {secondaryImages.map((img, idx) => (
            <div key={idx} className="w-full bg-gray-100 overflow-hidden rounded">
              <ImageWithFallback
                src={img}
                alt={`Detail ${idx + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* BACKGROUND — spacing matcher footer */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-3">
          <h2
            className="mb-4"
            style={{
              fontFamily: "Raleway",
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            Background
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <p
              className="text-gray-600 leading-relaxed"
              style={{ fontFamily: "Raleway", fontWeight: 300, fontSize: "16px" }}
            >
              {background}
            </p>
            <p
              className="text-gray-600 leading-relaxed"
              style={{ fontFamily: "Raleway", fontWeight: 300, fontSize: "16px" }}
            >
              {background}
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-3 py-14">
        <h2
          className="mb-6"
          style={{
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "20px",
          }}
        >
          Process
        </h2>

        <div className="flex flex-col gap-10">
          {process.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              {step.image && (
                <div className="w-full md:w-1/3 bg-gray-100 overflow-hidden rounded">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.phase}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              <div className="flex-1">
                <div
                  className="text-gray-400 mb-2"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: 300,
                    fontSize: "32px",
                    color: "#6D2F13",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  {step.phase}
                </h3>
                <p
                  className="text-gray-600"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: 300,
                    fontSize: "16px",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OTHER CASES */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-3">
          <h2
            className="mb-6"
            style={{
              fontFamily: "Raleway",
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            Other cases
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {otherCases.map((caseItem) => (
              <Link
                key={caseItem.id}
                to={caseItem.path}
                className="group cursor-pointer"
                onClick={() => {
                  // Sørger for at man altid lander øverst på den nye case
                  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                }}
              >
                <div className="aspect-[4/3] mb-4 overflow-hidden bg-gray-100 rounded">
                  <ImageWithFallback
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3
                  className="group-hover:text-gray-600 transition-colors"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: 700,
                    fontSize: "12px",
                  }}
                >
                  {caseItem.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
