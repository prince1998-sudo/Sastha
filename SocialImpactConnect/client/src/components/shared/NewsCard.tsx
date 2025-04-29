import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Article } from "@shared/schema";
import { formatDate, getCategoryColor } from "@/lib/data";

interface NewsCardProps {
  article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const tagColorClass = {
    Education: "bg-blue-100 text-primary-600",
    Agriculture: "bg-green-100 text-secondary-500",
    "Disaster Relief": "bg-amber-100 text-amber-500",
    Medical: "bg-red-100 text-red-600"
  }[article.category] || "bg-gray-100 text-gray-800";

  const linkColorClass = {
    Education: "text-primary-600 hover:text-primary-700",
    Agriculture: "text-secondary-500 hover:text-green-700",
    "Disaster Relief": "text-amber-500 hover:text-amber-700",
    Medical: "text-red-600 hover:text-red-700"
  }[article.category] || "text-gray-600 hover:text-gray-800";

  return (
    <Card className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="overflow-hidden h-48">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-3">
          <span className="text-sm text-gray-500">{formatDate(article.publishDate)}</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className={`text-sm ${tagColorClass} px-2 py-0.5 rounded-full`}>{article.category}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{article.summary}</p>
        <Link href={`/news/${article.slug}`}>
          <a className={`${linkColorClass} font-medium`}>Read More</a>
        </Link>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
