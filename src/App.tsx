import React, { useState } from 'react';
import HomePage from './components/HomePage';
import CodingChallenge from './components/CodingChallenge';
import BehavioralAssessment from './components/BehavioralAssessment';
import Results from './components/Results';
import { Code2, MessageSquare, Award, Home } from 'lucide-react';

type InterviewStage = 'home' | 'coding' | 'behavioral' | 'results';

function App() {
  const [stage, setStage] = useState<InterviewStage>('home');

  const stages = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'coding', label: 'Coding Challenge', icon: Code2 },
    { id: 'behavioral', label: 'Behavioral Questions', icon: MessageSquare },
    { id: 'results', label: 'Results', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => setStage('home')}>
              <Code2 className="w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AI Interview Platform</span>
            </div>
            
            <div className="flex items-center space-x-4">
              {stages.map((s, index) => {
                const Icon = s.icon;
                return (
                  <React.Fragment key={s.id}>
                    {index > 0 && (
                      <div className="h-1 w-8 bg-gray-200">
                        <div
                          className={`h-1 ${
                            stages.findIndex(x => x.id === stage) >= index
                              ? 'bg-indigo-600'
                              : 'bg-gray-200'
                          }`}
                        />
                      </div>
                    )}
                    <button
                      className={`flex items-center px-3 py-2 rounded-md ${
                        stage === s.id
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setStage(s.id as InterviewStage)}
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      <span className="hidden sm:inline">{s.label}</span>
                    </button>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <main>
        {stage === 'home' && <HomePage onNavigate={(newStage) => setStage(newStage)} />}
        {stage === 'coding' && <CodingChallenge />}
        {stage === 'behavioral' && <BehavioralAssessment />}
        {stage === 'results' && <Results />}
      </main>
    </div>
  );
}

export default App;