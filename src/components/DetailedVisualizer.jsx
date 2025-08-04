import { useState, useEffect } from 'react';
import TransformerSVG from './TransformerSVG';
import TokenizerSVG from './TokenizerSVG';
import LLMArchitectureSVG from './LLMArchitectureSVG';
import NeuralNetworkSVG from './NeuralNetworkSVG';
import LSTMSVG from './LSTMSVG';
import RNNSVG from './RNNSVG';
import MCPArchitectureSVG from './MCPArchitectureSVG';
import TextModelsSVG from './TextModelsSVG';
import TfIdfSVG from './TfIdfSVG';
import WordEmbeddingsSVG from './WordEmbeddingsSVG';

export default function DetailedVisualizer({ activeSection }) {
  const [showVisualization, setShowVisualization] = useState(false);
  const [currentVisualization, setCurrentVisualization] = useState(0);
  
  // List of visualizations with their titles
  const visualizations = [
    { component: <TransformerSVG />, title: "Transformer Architecture" },
    { component: <TokenizerSVG />, title: "Tokenization Process" },
    { component: <LLMArchitectureSVG />, title: "Large Language Models" },
    { component: <NeuralNetworkSVG />, title: "Neural Networks" },
    { component: <RNNSVG />, title: "RNN Architecture" },
    { component: <LSTMSVG />, title: "LSTM Architecture" },
    { component: <MCPArchitectureSVG />, title: "MCP Architecture" },
    { component: <TextModelsSVG />, title: "Text Models Comparison" },
    { component: <TfIdfSVG />, title: "TF-IDF Calculation" },
    { component: <WordEmbeddingsSVG />, title: "Word Embeddings" }
  ];
  
  // Map sections to specific visualizations
  const getVisualizationForSection = () => {
    // Convert section ID to number
    const sectionNum = parseInt(activeSection, 10);
    
    // Welcome page shows all visualizations in a carousel
    if (sectionNum === 0) {
      return visualizations[currentVisualization].component;
    }
    
    // Text Models comparison for article 7
    if (sectionNum === 7) {
      return <TextModelsSVG />;
    }
    
    // TF-IDF visualization for article 8
    if (sectionNum === 8) {
      return <TfIdfSVG />;
    }
    
    // Word Embeddings visualization for article 9
    if (sectionNum === 9) {
      return <WordEmbeddingsSVG />;
    }
    
    // Transformer architecture visualization
    if (sectionNum >= 14 && sectionNum <= 17) {
      return <TransformerSVG />;
    }
    
    // Tokenization process visualization
    if (sectionNum >= 6 && sectionNum <= 10 && sectionNum !== 7 && sectionNum !== 8 && sectionNum !== 9) {
      return <TokenizerSVG />;
    }
    
    // Neural Network visualization for article 11
    if (sectionNum === 11) {
      return <NeuralNetworkSVG />;
    }
    
    // RNN visualization for article 12
    if (sectionNum === 12) {
      return <RNNSVG />;
    }
    
    // LSTM visualization for article 13
    if (sectionNum === 13) {
      return <LSTMSVG />;
    }
    
    // LLM visualization
    if (sectionNum >= 18 && sectionNum <= 21) {
      return <LLMArchitectureSVG />;
    }
    
    // MCP Architecture visualization for articles 38-40
    if (sectionNum >= 38 && sectionNum <= 40) {
      return <MCPArchitectureSVG />;
    }
    
    // No specific visualization for this section
    return null;
  };
  
  // Auto-advance the carousel on the welcome page
  useEffect(() => {
    let intervalId;
    
    if (activeSection === '000' && showVisualization) {
      intervalId = setInterval(() => {
        setCurrentVisualization(prev => (prev + 1) % visualizations.length);
      }, 15000); // Change every 15 seconds
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [activeSection, showVisualization, visualizations.length]);
  
  const visualization = getVisualizationForSection();
  
  // Control whether to show the visualization
  useEffect(() => {
    if (visualization) {
      setShowVisualization(true);
    } else {
      setShowVisualization(false);
    }
  }, [activeSection, visualization]);
  
  // Show the component on the welcome page by default
  useEffect(() => {
    if (activeSection === '000') {
      setShowVisualization(true);
    }
  }, [activeSection]);
  
  // Cycle through visualizations on the welcome page
  const goToNextVisualization = () => {
    setCurrentVisualization((prev) => 
      (prev + 1) % visualizations.length
    );
  };
  
  const goToPreviousVisualization = () => {
    setCurrentVisualization((prev) => 
      prev === 0 ? visualizations.length - 1 : prev - 1
    );
  };
  
  if (!showVisualization) return null;
  
  // Get the current title
  const getTitle = () => {
    const sectionNum = parseInt(activeSection, 10);
    
    if (sectionNum === 0) {
      return visualizations[currentVisualization].title;
    }
    
    if (sectionNum >= 14 && sectionNum <= 17) return "Decoder Only Architecture";
    if (sectionNum >= 8 && sectionNum <= 10 && sectionNum !== 8 && sectionNum !== 9) return "Tokenization Process";
    if (sectionNum === 8) return "Term Frequency-Inverse Document Frequency (TF-IDF)";
    if (sectionNum === 9) return "Word Embeddings - Capturing Meaning";
    if (sectionNum === 7) return "N-Gram vs Bag of Words Models";
    if (sectionNum === 11) return "Neural Network - Trinary Classification";
    if (sectionNum === 12) return "Recurrent Neural Network";
    if (sectionNum === 13) return "LSTM Recurrent Neural Network";
    if (sectionNum >= 18 && sectionNum <= 21) return "Large Language Models";
    if (sectionNum >= 38 && sectionNum <= 40) return "Model Context Protocol (MCP) Architecture";
    return "Visualization";
  };
  
  const isWelcomePage = activeSection === '000';
  
  return (
    <div className="bg-gray-800 rounded-lg mb-6 w-full border border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-gray-200">
            {getTitle()}
          </h3>
          {isWelcomePage && (
            <span className="ml-2 text-sm text-gray-400">
              {currentVisualization + 1}/{visualizations.length}
            </span>
          )}
        </div>
        
        {isWelcomePage && (
          <div className="flex space-x-3">
            <button 
              onClick={goToPreviousVisualization}
              className="text-gray-400 hover:text-gray-200 text-sm"
            >
              Previous
            </button>
            <button 
              onClick={goToNextVisualization}
              className="text-gray-400 hover:text-gray-200 text-sm"
            >
              Next
            </button>
          </div>
        )}
      </div>
      
      {isWelcomePage && (
        <p className="text-gray-400 text-sm mb-3">
          These interactive visualizations demonstrate key concepts covered in this book. 
          Navigate through them to preview what you'll learn about.
        </p>
      )}
      
      <div className="h-[500px] w-full overflow-x-auto">
        {visualization}
      </div>
    </div>
  );
} 