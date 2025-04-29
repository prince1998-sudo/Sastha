import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Program } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const SingleProgramPage = () => {
  // Get slug from URL
  const [, params] = useRoute("/programs/:slug");
  const slug = params?.slug;
  
  // Fetch program data
  const { data: program, isLoading, error } = useQuery<Program>({
    queryKey: ['/api/programs', slug],
    queryFn: async () => {
      const res = await fetch(`/api/programs/${slug}`);
      if (!res.ok) throw new Error('Failed to fetch program');
      return res.json();
    },
    enabled: !!slug,
  });
  
  if (isLoading) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
            <div className="h-64 bg-gray-200 rounded mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (error || !program) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Program Not Found</h1>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn't find the program you're looking for.
          </p>
          <Link href="/programs">
            <Button>View All Programs</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Tag color class
  const tagColorClass = {
    blue: "bg-blue-100 text-primary-600",
    green: "bg-green-100 text-secondary-500",
    amber: "bg-amber-100 text-amber-500",
    red: "bg-red-100 text-red-600"
  }[program.tagColor] || "bg-gray-100 text-gray-800";
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/programs">
          <a className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to all programs
          </a>
        </Link>
        
        <div className={`inline-block px-3 py-1 text-sm font-medium ${tagColorClass} rounded-full mb-4`}>
          {program.category}
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {program.title}
        </h1>
        
        <div className="mb-8">
          <img 
            src={program.imageUrl} 
            alt={program.title} 
            className="w-full h-auto rounded-lg shadow-md" 
          />
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-4 text-lg">
            {program.shortDescription}
          </p>
          
          {program.fullDescription.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/donate">
            <Button 
              size="lg" 
              className="w-full sm:w-auto"
            >
              Support This Program
            </Button>
          </Link>
          <Link href="/volunteer">
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto"
            >
              Volunteer for This Program
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProgramPage;
