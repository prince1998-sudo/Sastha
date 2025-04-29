import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { GalleryImage } from "@shared/schema";
import GalleryItem from "@/components/shared/GalleryItem";
import { Button } from "@/components/ui/button";

const GalleryPreview = () => {
  const { data: images, isLoading, error } = useQuery<GalleryImage[]>({
    queryKey: ['/api/gallery/featured'],
  });

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Impact Gallery</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            See the difference we're making in communities through our various programs and initiatives.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-64 animate-pulse"></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            Failed to load gallery images. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images?.map(image => (
              <GalleryItem key={image.id} image={image} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/gallery">
            <Button variant="outline" className="inline-flex items-center border-primary-600 text-primary-600 hover:bg-primary-50">
              View Full Gallery
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
