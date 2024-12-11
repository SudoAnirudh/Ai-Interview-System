import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import { PlayCircle, Clock } from "lucide-react";

// Import Ace themes and modes
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const CodingTest: React.FC = () => {
  const [testStarted, setTestStarted] = useState(false);
  const [timer, setTimer] = useState(0); // Timer in seconds
  const [code, setCode] = useState("// Start coding here...");

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (testStarted) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval); // Cleanup interval on component unmount or test stop
    };
  }, [testStarted]);

  const handleStartTest = () => {
    setTestStarted(true);
    setTimer(0); // Reset timer when test starts
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Timer: {formatTime(timer)}
        </h1>
        {!testStarted && (
          <button
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            onClick={handleStartTest}
          >
            <PlayCircle className="w-4 h-4 mr-2 inline-block" />
            Start Coding Test
          </button>
        )}
      </div>

      {/* Code Editor */}
      {testStarted && (
        <AceEditor
          mode="javascript"
          theme="monokai"
          value={code}
          onChange={(newCode) => setCode(newCode)}
          name="code-editor"
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="500px"
          fontSize={14}
          showPrintMargin={false}
        />
      )}
    </div>
  );
};

export default CodingTest;
