import { Mail, Linkedin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-3 py-12">

        {/* Text left, image right */}
        <div className="flex items-end justify-between gap-6">

          {/* LEFT — Contact info */}
          <div>
            <h3
              className="mb-4"
              style={{
                fontFamily: "Raleway",
                fontWeight: 700,
                fontSize: "20px",
                color: "black",
              }}
            >
              Get in touch.
            </h3>

            <div className="space-y-2">
              
              {/* Email */}
              <div className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center mr-3">
                  <Mail className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
                <p
                  style={{
                    fontFamily: "Raleway",
                    fontSize: "12px",
                    color: "black",
                  }}
                >
                  <strong>Email</strong>{" "}
                  <a
                    href="mailto:marysometimes@gmail.com"
                    style={{
                      fontWeight: 300,
                      color: "black",
                      textDecoration: "underline",
                    }}
                  >
                    marysometimes@gmail.com
                  </a>
                </p>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center mr-3">
                  {/* Solid LinkedIn icon */}
                  <Linkedin
                    className="w-4 h-4 text-white fill-white"
                    aria-hidden="true"
                  />
                </div>
                <p
                  style={{
                    fontFamily: "Raleway",
                    fontSize: "12px",
                    color: "black",
                  }}
                >
                  <strong>LinkedIn</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/mariekrause/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontWeight: 300,
                      color: "black",
                      textDecoration: "underline",
                    }}
                  >
                    Marie Krause
                  </a>
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT — Logo */}
          <div className="flex-shrink-0">
            {/* Adjusted to match height of text block */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-100">
              <ImageWithFallback
                src="https://raw.githubusercontent.com/Marysometimes/portfolio-images/8bcd7af01892bad7b000e3d29a6a4c9efd441dab/MarieKrause_logo.png"
                alt="Marie Krause Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
