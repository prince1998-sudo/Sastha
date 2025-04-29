import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-primary-600">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg" 
          alt="Volunteers helping during community event" 
          className="w-full h-full object-cover opacity-20" 
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Making a Difference Together
          </h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-8">
            Supporting students, farmers, and communities in need through education, agriculture, disaster relief, and medical assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/donate">
              <Button 
                size="lg" 
                className="rounded-md bg-amber-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-amber-600"
              >
                Donate Now
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-primary-600 shadow-sm hover:bg-gray-100"
              >
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
