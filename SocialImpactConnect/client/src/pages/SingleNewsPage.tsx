import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Article } from "@shared/schema";
import { formatDate } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2 } from "lucide-react";

const SingleNewsPage = () => {
  // Get slug from URL
  const [, params] = useRoute("/news/:slug");
  const slug = params?.slug;
  
  // Fetch article data
  const { data: article, isLoading, error } = useQuery<Article>({
    queryKey: ['/api/articles', slug],
    queryFn: async () => {
      const res = await fetch(`/api/articles/${slug}`);
      if (!res.ok) throw new Error('Failed to fetch article');
      return res.json();
    },
    enabled: !!slug,
  });
  
  if (isLoading) {
    return (
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-6"></div>
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
  
  if (error || !article) {
    return (
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn't find the article you're looking for.
          </p>
          <Link href="/news">
            <Button>View All News</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Tag color class
  const tagColorClass = {
    Education: "bg-blue-100 text-primary-600",
    Agriculture: "bg-green-100 text-secondary-500",
    "Disaster Relief": "bg-amber-100 text-amber-500",
    Medical: "bg-red-100 text-red-600"
  }[article.category] || "bg-gray-100 text-gray-800";
  
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/news">
          <a className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to all news
          </a>
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        
        <div className="flex items-center mb-8">
          <span className="text-gray-500">{formatDate(article.publishDate)}</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className={`${tagColorClass} px-2 py-0.5 rounded-full text-sm`}>
            {article.category}
          </span>
          <button className="ml-auto text-gray-500 hover:text-primary-600 flex items-center" aria-label="Share">
            <Share2 className="h-4 w-4 mr-1" />
            <span>Share</span>
          </button>
        </div>
        
        <div className="mb-8">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-auto rounded-lg shadow-md" 
          />
        </div>
        
        <div className="prose prose-lg max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Our Work</h3>
          <p className="text-gray-600 mb-6">
            Help us continue making a difference in communities through our various programs and initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/donate">
              <Button className="w-full sm:w-auto">
                Donate Now
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button variant="outline" className="w-full sm:w-auto">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsPage;
