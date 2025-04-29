import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { GalleryImage } from "@shared/schema";
import GalleryItem from "@/components/shared/GalleryItem";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GalleryPage = () => {
  const { data: images, isLoading, error } = useQuery<GalleryImage[]>({
    queryKey: ['/api/gallery'],
  });
  
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const openImageDialog = (image: GalleryImage) => {
    setSelectedImage(image);
    setDialogOpen(true);
  };
  
  const handlePrevious = () => {
    if (!images || !selectedImage) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setSelectedImage(images[previousIndex]);
  };
  
  const handleNext = () => {
    if (!images || !selectedImage) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Our Impact Gallery</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            See the difference we're making in communities through our various programs and initiatives.
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(12)].map((_, i) => (
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
              <GalleryItem 
                key={image.id} 
                image={image} 
                onClick={() => openImageDialog(image)}
              />
            ))}
          </div>
        )}
        
        {/* Image Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedImage?.title}</DialogTitle>
              <DialogDescription>{selectedImage?.description}</DialogDescription>
              <DialogClose className="absolute right-4 top-4 opacity-70 ring-offset-background transition-opacity hover:opacity-100">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogHeader>
            
            <div className="relative">
              <div className="overflow-hidden rounded-md">
                <img 
                  src={selectedImage?.imageUrl} 
                  alt={selectedImage?.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full bg-black/20 text-white hover:bg-black/40" 
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full bg-black/20 text-white hover:bg-black/40" 
                  onClick={handleNext}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next image</span>
                </Button>
              </div>
            </div>
            
            <div className="text-center p-4">
              <p className="text-gray-500">{selectedImage?.category}</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default GalleryPage;
