



const weightVariants = {
  initial: { opacity: 0, height: 0 },
  animate: (i) => ({
    opacity: 1,
    height: i.height,
    transition: {
      height: { duration: 1, delay: i.delay },
      opacity: { duration: 0.3, delay: i.delay }
    }
  })
};

const pathVariants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: i => ({
    pathLength: 1,
    opacity: 0.7,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0, delay: 0.3 + i * 0.05 },
      opacity: { duration: 0.3, delay: 0.3 + i * 0.05 }
    }
  })
};

function Document({ x, y, id, terms, isHighlighted, delay }) {
  const width = 140;
  const height = 140;
  
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Document background */}
      <motion.rect
        x={-width/2}
        y={-height/2}
        width={width}
        height={height}
        rx={8}
        fill={isHighlighted ? "#1A2234" : "#1F2937"}
        stroke={isHighlighted ? "#4F46E5" : "#374151"}
        strokeWidth={isHighlighted ? 2 : 1.5}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.5, delay: delay }}
        className={isHighlighted ? "filter drop-shadow-md" : ""}
      />
      
      {/* Document ID */}
      <motion.text
        y={-height/2 + 25}
        textAnchor="middle"
        className="fill-current text-gray-200 text-base font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        Document {id}
      </motion.text>
      
      {/* Document terms - simplified and more readable */}
      {terms.map((term, idx) => (
        <motion.text
          key={`term-${idx}`}
          y={-height/6 + idx * 30}
          textAnchor="middle"
          className={`fill-current ${term.highlight ? "text-indigo-300 font-bold" : "text-gray-300"} ${term.highlight ? "text-base" : "text-sm"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.3 + idx * 0.1 }}
        >
          {term.text} {term.count && `(×${term.count})`}
        </motion.text>
      ))}
    </g>
  );
}

function TfIdfCalculation({ x, y, term, tf, idf, tfidf, delay }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Background */}
      <motion.rect
        x={-180}
        y={-50}
        width={360}
        height={100}
        rx={8}
        fill="#1A2234"
        stroke="#4F46E5"
        strokeWidth={1.5}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.5, delay: delay }}
      />
      
      {/* Formula */}
      <motion.text
        y={-15}
        textAnchor="middle"
        className="fill-current text-white text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        TF-IDF("{term}") = TF × IDF
      </motion.text>
      
      <motion.text
        y={25}
        textAnchor="middle"
        className="fill-current text-indigo-300 text-xl font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
      >
        {tf} × {idf.toFixed(2)} = {tfidf.toFixed(2)}
      </motion.text>
    </g>
  );
}

function TermWeightChart({ x, y, terms, weights, delay }) {
  const barWidth = 60;
  const maxHeight = 120;
  const spacing = 100;
  
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Title */}
      <motion.text
        textAnchor="middle"
        className="fill-current text-white text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        Term Weights (TF-IDF)
      </motion.text>
      
      {/* Chart */}
      {terms.map((term, i) => {
        const barHeight = (weights[i] / Math.max(...weights)) * maxHeight;
        
        return (
          <g key={`bar-${i}`} transform={`translate(${i * spacing - ((terms.length - 1) * spacing / 2)}, 40)`}>
            <motion.rect
              x={-barWidth/2}
              y={0}
              width={barWidth}
              rx={6}
              fill={`hsl(${210 + i * 30}, 70%, 60%)`}
              custom={{ height: barHeight, delay: delay + 0.3 + i * 0.1 }}
              initial="initial"
              animate="animate"
              variants={weightVariants}
            />
            
            <motion.text
              y={-15}
              textAnchor="middle"
              className="fill-current text-gray-200 text-base font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.2 + i * 0.1 }}
            >
              {term}
            </motion.text>
            
            <motion.text
              y={barHeight + 20}
              textAnchor="middle"
              className="fill-current text-indigo-300 text-base font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.4 + i * 0.1 }}
            >
              {weights[i].toFixed(2)}
            </motion.text>
          </g>
        );
      })}
    </g>
  );
}

export default function TfIdfSVG() {
  // Sample data
  const documents = [
    { 
      id: 1, 
      terms: [
        { text: "machine", count: 3, highlight: true },
        { text: "learning", count: 2, highlight: false },
        { text: "algorithm", count: 1, highlight: false }
      ], 
      isHighlighted: true,
      delay: 0.1
    },
    { 
      id: 2, 
      terms: [
        { text: "machine", count: 1, highlight: true },
        { text: "data", count: 3, highlight: false },
        { text: "science", count: 2, highlight: false }
      ], 
      isHighlighted: false,
      delay: 0.2
    },
    { 
      id: 3, 
      terms: [
        { text: "data", count: 2, highlight: false },
        { text: "analysis", count: 1, highlight: false }
      ], 
      isHighlighted: false,
      delay: 0.3
    }
  ];
  
  // TF-IDF calculation values
  const term = "machine";
  const tf = 3; // Term frequency in Doc 1
  const idf = Math.log(3/2); // log(total docs / docs with term)
  const tfidf = tf * idf;
  
  // Chart data
  const chartTerms = ["machine", "learning", "algorithm"];
  const chartWeights = [tfidf, 0.81, 0.40]; // Sample weights
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 800 600" className="overflow-visible">
        <defs>
          {/* Gradient for elements */}
          <linearGradient id="tfIdfGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Filter for glowing effects */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          {/* Arrow marker */}
          <marker 
            id="arrowhead" 
            markerWidth="6" 
            markerHeight="6"
            refX="6" 
            refY="3" 
            orient="auto"
          >
            <polygon points="0 0, 6 3, 0 6" fill="#6366F1" />
          </marker>
        </defs>
        
        {/* Title */}
        <text 
          x="400" 
          y="50" 
          textAnchor="middle" 
          className="fill-current text-gray-100 text-2xl font-bold"
        >
          Term Frequency-Inverse Document Frequency (TF-IDF)
        </text>
        
        {/* Explanatory Text */}
        <text 
          x="400"
          y="80"
          textAnchor="middle"
          className="fill-current text-gray-400 text-sm"
        >
          A statistical measure that weights how important a word is to a document in a collection
        </text>
        
        {/* Documents */}
        <Document x={200} y={170} {...documents[0]} />
        <Document x={400} y={170} {...documents[1]} />
        <Document x={600} y={170} {...documents[2]} />
        
        {/* Simplified Formulas - one on each side */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <rect x="50" y="260" width="300" height="40" rx="5" fill="#1E293B" fillOpacity="0.5" />
          <text 
            x="200" 
            y="285" 
            textAnchor="middle" 
            className="fill-current text-gray-300 text-sm font-medium"
          >
            TF = Term Count / Total Document Terms
          </text>
        </motion.g>
        
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <rect x="450" y="260" width="300" height="40" rx="5" fill="#1E293B" fillOpacity="0.5" />
          <text 
            x="600" 
            y="285" 
            textAnchor="middle" 
            className="fill-current text-gray-300 text-sm font-medium"
          >
            IDF = log(Total Docs / Docs with Term)
          </text>
        </motion.g>
        
        {/* TF-IDF Calculation */}
        <TfIdfCalculation 
          x={400} 
          y={360} 
          term={term} 
          tf={tf} 
          idf={idf} 
          tfidf={tfidf} 
          delay={0.7} 
        />
        
        {/* Term Weight Chart */}
        <TermWeightChart 
          x={400} 
          y={470} 
          terms={chartTerms} 
          weights={chartWeights} 
          delay={1.0} 
        />
        
        {/* Connection arrows - simplified and clearer */}
        <motion.path
          d="M 200 240 C 200 290, 300 300, 380 330"
          stroke="#6366F1"
          strokeWidth={2}
          fill="none"
          markerEnd="url(#arrowhead)"
          custom={1}
          initial="initial"
          animate="animate"
          variants={pathVariants}
        />
        
        <motion.path
          d="M 600 240 C 600 290, 500 300, 420 330"
          stroke="#6366F1"
          strokeWidth={2}
          fill="none"
          markerEnd="url(#arrowhead)"
          custom={2}
          initial="initial"
          animate="animate"
          variants={pathVariants}
        />
        
        <motion.path
          d="M 400 410 L 400 440"
          stroke="#6366F1"
          strokeWidth={2}
          fill="none"
          markerEnd="url(#arrowhead)"
          custom={3}
          initial="initial"
          animate="animate"
          variants={pathVariants}
        />
      </svg>
    </div>
  );
} 