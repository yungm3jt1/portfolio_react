import { forwardRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub, FaGlobeEurope } from "react-icons/fa";

type ProjectBoxProps = {
  title: string;
  description: string;
  images: string[];
  github: string;
  website?: string;
  className: string;
};

const ProjectBox = forwardRef<HTMLDivElement, ProjectBoxProps>(
  ({ title, description, images, github, website, className }, ref) => {
    const [currentImage, setCurrentImage] = useState(0);

    const prevImage = () => {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
      <div ref={ref} className={`mt-8 flex justify-around ${className}`}>
        <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-black ring ring-purple-950 shadow-xl shadow-purple-950/50">
          <div className="relative h-72 w-full">
            <img
              src={images[currentImage]}
              alt={`${title} preview ${currentImage + 1}`}
              className="h-full w-full object-cover "
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur hover:bg-black/70"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur hover:bg-black/70"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          <div className="p-6">
            <p className="text-2xl font-semibold text-slate-100">{title}</p>
            <p className="mt-3 max-w-lg text-lg text-slate-300">
              {description}
            </p>
          </div>
          <div className="flex justify-center p-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 rounded-full text-white mr-5"
            >
              <FaGithub size={28} className="hover:text-gray-500" />
            </a>

            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 rounded-full text-white"
              >
                <FaGlobeEurope size={28} className="hover:text-gray-500" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  },
);

export default ProjectBox;
