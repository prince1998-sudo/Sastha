import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Program } from "@shared/schema";
import ProgramCard from "@/components/shared/ProgramCard";
import { Button } from "@/components/ui/button";

const ProgramsOverview = () => {
  const { data: programs, isLoading, error } = useQuery<Program[]>({
    queryKey: ['/api/programs/featured'],
  });

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Programs</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We focus on four key areas to make a lasting impact in communities, providing support where it's needed most.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm h-96 animate-pulse">
                <div className="w-full h-48 bg-gray-200 rounded-t-lg"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-6"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            Failed to load programs. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs?.map(program => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/programs">
            <Button variant="outline" className="inline-flex items-center border-primary-600 text-primary-600 hover:bg-primary-50">
              View All Programs
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

export default ProgramsOverview;
