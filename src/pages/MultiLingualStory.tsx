import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MultiLingualStory = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            External Story Generator
          </h1>
          <div className="aspect-w-16 aspect-h-9 border rounded-lg overflow-hidden">
            <iframe
              src="https://story-writer.en.softonic.com/"
              title="External Story Generator"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <Link to="/features">
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg">
                Back to Features
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MultiLingualStory;
