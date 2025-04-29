import { GalleryImage } from "@shared/schema";

interface GalleryItemProps {
  image: GalleryImage;
  onClick?: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onClick }) => {
  return (
    <div 
      className="relative group overflow-hidden rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <img 
        src={image.imageUrl} 
        alt={image.title} 
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white text-center font-medium px-4">{image.description}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
