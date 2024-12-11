import React from 'react';
import { Code2, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  onClick: () => void;
}

function FeatureCard({ title, description, icon: Icon, onClick }: FeatureCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="flex items-center text-indigo-600 hover:text-indigo-700">
        Get Started <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
}

interface HomePageProps {
  onNavigate: (stage: 'coding' | 'behavioral') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-12 h-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to AI Interview Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prepare for your next tech interview with our AI-powered platform.
            Practice coding challenges and behavioral questions in a realistic environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FeatureCard
            title="Coding Challenge"
            description="Solve real coding problems with our interactive editor. Get instant feedback and improve your problem-solving skills."
            icon={Code2}
            onClick={() => onNavigate('coding')}
          />
          <FeatureCard
            title="Behavioral Interview"
            description="Practice common behavioral questions and receive AI-powered feedback on your responses."
            icon={MessageSquare}
            onClick={() => onNavigate('behavioral')}
          />
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-xl font-semibold text-indigo-600 mb-2">1. Choose Your Path</div>
              <p className="text-gray-600">Select between coding challenges or behavioral questions based on your preparation needs.</p>
            </div>
            <div>
              <div className="text-xl font-semibold text-indigo-600 mb-2">2. Practice & Learn</div>
              <p className="text-gray-600">Complete challenges and receive instant feedback to improve your skills.</p>
            </div>
            <div>
              <div className="text-xl font-semibold text-indigo-600 mb-2">3. Track Progress</div>
              <p className="text-gray-600">Monitor your improvement and identify areas for further development.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}