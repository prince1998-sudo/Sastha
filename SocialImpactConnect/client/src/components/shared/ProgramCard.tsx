import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Program } from "@shared/schema";

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const tagColorClass = {
    blue: "bg-blue-100 text-primary-600",
    green: "bg-green-100 text-secondary-500",
    amber: "bg-amber-100 text-amber-500",
    red: "bg-red-100 text-red-600"
  }[program.tagColor] || "bg-gray-100 text-gray-800";

  return (
    <Card className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="overflow-hidden h-48">
        <img 
          src={program.imageUrl} 
          alt={program.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className={`inline-block px-3 py-1 text-sm font-medium ${tagColorClass} rounded-full mb-4`}>
          {program.category}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{program.shortDescription}</p>
        <Link href={`/programs/${program.slug}`}>
          <a className={`text-${program.tagColor === 'blue' ? 'primary-600 hover:text-primary-700' : program.tagColor === 'green' ? 'secondary-500 hover:text-green-700' : program.tagColor === 'amber' ? 'amber-500 hover:text-amber-700' : 'red-600 hover:text-red-700'} font-medium flex items-center`}>
            Learn More
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </a>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
