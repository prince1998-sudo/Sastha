import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="bg-primary-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Join Us in Making a Difference</h2>
        <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto mb-10">
          Your support, whether through donations, volunteering, or spreading awareness, helps us reach more communities in need.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/donate">
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-gray-100"
            >
              Donate Now
            </Button>
          </Link>
          <Link href="/volunteer">
            <Button 
              size="lg"
              className="rounded-md bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-600"
            >
              Become a Volunteer
            </Button>
          </Link>
          <Link href="/partner">
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-md bg-transparent border border-white px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-white hover:bg-opacity-10"
            >
              Partner With Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
