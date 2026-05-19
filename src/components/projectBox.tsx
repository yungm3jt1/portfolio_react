import { forwardRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type ProjectBoxProps = {
  title: string;
  description: string;
  images: string[];
  github?: string;
  website?: string;
  className?: string;
};

const ProjectBox = forwardRef<HTMLDivElement, ProjectBoxProps>(
  ({ title, description, images, github, website, className = "" }, ref) => {
    const [currentImage, setCurrentImage] = useState(0);

    const prevImage = () => {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
      <div ref={ref} className={`mt-8 flex justify-around w-full max-w-4xl px-4 ${className}`}>
        <div className="relative w-full overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(168,85,247,0.05)] hover:shadow-[0_0_50px_rgba(168,85,247,0.2)] hover:border-purple-500/50 hover:bg-white/[0.05] transition-all duration-500 group flex flex-col md:flex-row">
          <div className="relative h-64 md:h-auto w-full md:w-1/2 overflow-hidden bg-black/50">
            {images.length > 0 ? (
              <img
                src={images[currentImage]}
                alt={`${title} preview ${currentImage + 1}`}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-slate-500">No image</div>
            )}

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/90 transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/90 transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          <div className="p-8 flex flex-col justify-center w-full md:w-1/2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">{title}</h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {description}
            </p>
            <div className="flex items-center gap-4 mt-auto">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-purple-600 text-white transition-colors text-sm font-medium"
                >
                  <FaGithub size={18} />
                  <span>Code</span>
                </a>
              )}
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-purple-600 text-white transition-colors text-sm font-medium"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default ProjectBox;
