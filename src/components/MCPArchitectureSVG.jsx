import { useEffect, useRef } from 'react';

export default function MCPArchitectureSVG() {
  const svgRef = useRef(null);
  
  useEffect(() => {
    // Animation logic
    const animateElements = () => {
      if (!svgRef.current) return;
      
      const svg = svgRef.current;
      
      // Get all the elements we want to animate
      const hostNode = svg.querySelector('#hostNode');
      const clientNodes = svg.querySelectorAll('.client-node');
      const serverNodes = svg.querySelectorAll('.server-node');
      const resourceNodes = svg.querySelectorAll('.resource-node');
      const llmNode = svg.querySelector('#llmNode');
      const hostToClientPaths = svg.querySelectorAll('.host-client-path');
      const clientToServerPaths = svg.querySelectorAll('.client-server-path');
      const serverToResourcePaths = svg.querySelectorAll('.server-resource-path');
      const hostToLLMPath = svg.querySelector('.host-llm-path');
      const primitives = svg.querySelectorAll('.mcp-primitive');
      
      // Reset animations
      const resetElements = () => {
        [hostNode, llmNode, ...clientNodes, ...serverNodes, ...resourceNodes, ...primitives].forEach(el => {
          if (el) el.style.opacity = '0';
        });
        
        [...hostToClientPaths, ...clientToServerPaths, ...serverToResourcePaths].forEach(path => {
          if (path) {
            path.style.opacity = '0';
            path.style.strokeDashoffset = path.getTotalLength();
          }
        });
        
        if (hostToLLMPath) {
          hostToLLMPath.style.opacity = '0';
          hostToLLMPath.style.strokeDashoffset = hostToLLMPath.getTotalLength();
        }
      };
      
      resetElements();
      
      // Animation sequence
      setTimeout(() => {
        // First, show the host
        if (hostNode) hostNode.style.opacity = '1';
        
        // Then show the clients
        setTimeout(() => {
          clientNodes.forEach((node, i) => {
            setTimeout(() => {
              node.style.opacity = '1';
              // Show path from host to this client
              if (hostToClientPaths[i]) {
                hostToClientPaths[i].style.opacity = '1';
                hostToClientPaths[i].style.transition = 'stroke-dashoffset 1s ease-in-out, opacity 0.5s ease-in-out';
                hostToClientPaths[i].style.strokeDashoffset = '0';
              }
            }, i * 200);
          });
          
          // Then show the LLM
          setTimeout(() => {
            if (llmNode) llmNode.style.opacity = '1';
            if (hostToLLMPath) {
              hostToLLMPath.style.opacity = '1';
              hostToLLMPath.style.transition = 'stroke-dashoffset 1.5s ease-in-out, opacity 0.5s ease-in-out';
              hostToLLMPath.style.strokeDashoffset = '0';
            }
            
            // Then show the server nodes
            setTimeout(() => {
              serverNodes.forEach((node, i) => {
                setTimeout(() => {
                  node.style.opacity = '1';
                  // Show path from client to this server
                  if (clientToServerPaths[i]) {
                    clientToServerPaths[i].style.opacity = '1';
                    clientToServerPaths[i].style.transition = 'stroke-dashoffset 1s ease-in-out, opacity 0.5s ease-in-out';
                    clientToServerPaths[i].style.strokeDashoffset = '0';
                  }
                }, i * 200);
              });
              
              // Then show resource nodes
              setTimeout(() => {
                resourceNodes.forEach((node, i) => {
                  setTimeout(() => {
                    node.style.opacity = '1';
                    // Show path from server to resource
                    if (serverToResourcePaths[i]) {
                      serverToResourcePaths[i].style.opacity = '1';
                      serverToResourcePaths[i].style.transition = 'stroke-dashoffset 0.5s ease-in-out, opacity 0.5s ease-in-out';
                      serverToResourcePaths[i].style.strokeDashoffset = '0';
                    }
                  }, i * 200);
                });
                
                // Finally show the primitives
                setTimeout(() => {
                  primitives.forEach((primitive, i) => {
                    setTimeout(() => {
                      primitive.style.opacity = '1';
                    }, i * 200);
                  });
                  
                  // Restart the animation after a delay
                  setTimeout(() => {
                    resetElements();
                    animateElements();
                  }, 5000);
                }, 800);
              }, 800);
            }, 500);
          }, 600);
        }, 400);
      }, 500);
    };
    
    // Start animation
    animateElements();
    
    return () => {
      // Cleanup animation timers if needed
    };
  }, []);
  
  return (
    <svg 
      ref={svgRef}
      width="100%" 
      height="100%" 
      viewBox="0 0 800 600" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ background: 'transparent' }}
    >
      <defs>
        {/* Gradients for nodes */}
        <linearGradient id="hostGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
        </linearGradient>
        
        <linearGradient id="clientGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6366F1" stopOpacity="0.3" />
        </linearGradient>
        
        <linearGradient id="serverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
        </linearGradient>
        
        <linearGradient id="resourceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0.3" />
        </linearGradient>
        
        <linearGradient id="llmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#DB2777" stopOpacity="0.3" />
        </linearGradient>
        
        {/* Active gradients */}
        <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#DB2777" stopOpacity="0.3" />
        </linearGradient>
        
        {/* Filter for glowing effects */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* Arrow marker */}
        <marker id="arrowhead" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
          <polygon points="0 0, 5 2.5, 0 5" fill="#6366F1" />
        </marker>
        
        {/* Dotted Arrow marker */}
        <marker id="dottedarrowhead" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
          <polygon points="0 0, 5 2.5, 0 5" fill="#8B5CF6" />
        </marker>
        
        {/* Server Tool marker */}
        <marker id="toolarrowhead" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
          <polygon points="0 0, 5 2.5, 0 5" fill="#10B981" />
        </marker>
        
        {/* Resource marker */}
        <marker id="resourcearrowhead" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
          <polygon points="0 0, 5 2.5, 0 5" fill="#F59E0B" />
        </marker>
      </defs>
      
      {/* Title */}
      <text x="400" y="30" textAnchor="middle" fontFamily="Arial" fontSize="22" fontWeight="bold" fill="#F9FAFB">
        Model Context Protocol (MCP) Architecture
      </text>
      
      {/* Subtitle */}
      <text x="400" y="55" textAnchor="middle" fontFamily="Arial" fontSize="13" fill="#9CA3AF">
        A standardized protocol for AI applications to connect with data sources and tools
      </text>
      
      {/* Host Application container */}
      <rect x="120" y="80" width="560" height="140" rx="10" fill="#1A2234" stroke="#374151" strokeWidth="1.5" fillOpacity="0.6" />
      <text x="190" y="100" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#F9FAFB">Host Application Process</text>
      
      {/* Host Node */}
      <g id="hostNode" style={{ opacity: 0, transition: 'opacity 0.5s ease' }}>
        <circle cx="180" cy="130" r="20" fill="url(#hostGradient)" />
        <text x="180" y="135" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#FFFFFF">Host</text>
      </g>
      
      {/* Client Nodes */}
      <g className="client-node" style={{ opacity: 0, transition: 'opacity 0.5s ease' }}>
        <circle cx="290" cy="130" r="18" fill="url(#clientGradient)" />
        <text x="290" y="135" textAnchor="middle" fontFamily="Arial" fontSize="11" fill="#FFFFFF">Client 1</text>
      </g>
      
      <g className="client-node" style={{ opacity: 0, transition: 'opacity 0.5s ease' }}>
        <circle cx="400" cy="130" r="18" fill="url(#clientGradient)" />
        <text x="400" y="135" textAnchor="middle" fontFamily="Arial" fontSize="11" fill="#FFFFFF">Client 2</text>
      </g>
      
      <g className="client-node" style={{ opacity: 0, transition: 'opacity 0.5s ease' }}>
        <circle cx="510" cy="130" r="18" fill="url(#clientGradient)" />
        <text x="510" y="135" textAnchor="middle" fontFamily="Arial" fontSize="11" fill="#FFFFFF">Client 3</text>
      </g>
      
      {/* Connections from Host to Clients */}
      <path 
        className="host-client-path"
        d="M 200 130 L 272 130" 
        stroke="#6366F1" 
        strokeWidth="1.5" 
        fill="none" 
        markerEnd="url(#arrowhead)" 
        style={{ 
          opacity: 0,
          strokeDasharray: 72,
          strokeDashoffset: 72,
        }}
      />
      
      <path 
        className="host-client-path"
        d="M 200 130 L 382 130" 
        stroke="#6366F1" 
        strokeWidth="1.5" 
        fill="none" 
        markerEnd="url(#arrowhead)" 
        style={{ 
          opacity: 0,
          strokeDasharray: 182,
          strokeDashoffset: 182,
        }}
      />
      
      <path 
        className="host-client-path"
        d="M 200 130 L 492 130" 
        stroke="#6366F1" 
        strokeWidth="1.5" 
        fill="none" 
        markerEnd="url(#arrowhead)" 
        style={{ 
          opacity: 0,
          strokeDasharray: 292,
          strokeDashoffset: 292,
        }}
      />
      
      {/* LLM Integration */}
      <g id="llmNode" style={{ opacity: 0, transition: 'opacity 0.5s ease' }}>
        <ellipse cx="625" cy="130" r="30" fill="url(#llmGradient)" filter="url(#glow)" />
        <text x="625" y="135" textAnchor="middle" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="#FFFFFF">LLM</text>
      </g>
      
      {/* Connection between Host and LLM */}
      <path 
        className="host-llm-path"
        d="M 200 130 Q 400 90 595 130" 
        stroke="#EC4899" 
        strokeWidth="1.5" 
        fill="none" 
        strokeDasharray="4,2"
        style={{ 
          opacity: 0,
          strokeDasharray: 420,
          strokeDashoffset: 420,
        }}
      />
      
      {/* Local Machine container */}
      <rect x="100" y="250" width="350" height="160" rx="10" fill="#1F2937" stroke="#374151" strokeWidth="1.5" fillOpacity="0.6" />
      <text x="140" y="270" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#F9FAFB">Local Machine</text>
      
      {/* Local Servers */}
      <g className="server-node" style={{ opacity: 0, transition: 'opacity 0.5s ease' }}>
        <rect x="130" y="290" width="90" height="50" rx="5" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" fillOpacity="0.6" />
        <circle cx="175" cy="315" r="16" fill="url(#serverGradient)" />
        <text x="175" y="320" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#FFFFFF">Server 1</text>
        <text x="175" y="355" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#9CA3AF">Files &amp; Git</text>
      </g>
      
      <g className="server-node" style={{ opacity: 0, transition: 'opacity 0.5s ease' }}>
        <rect x="290" y="290" width="90" height="50" rx="5" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" fillOpacity="0.6" />
        <circle cx="335" cy="315" r="16" fill="url(#serverGradient)" />
        <text x="335" y="320" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#FFFFFF">Server 2</text>
        <text x="335" y="355" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#9CA3AF">Database</text>
      </g>
      
      {/* Internet container */}
      <rect x="520" y="250" width="180" height="160" rx="10" fill="#1F2937" stroke="#374151" strokeWidth="1.5" fillOpacity="0.6" />
      <text x="570" y="270" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#F9FAFB">Internet</text>
      
      {/* Remote Server */}
      <g className="server-node" style={{ opacity: 0, transition: 'opacity 0.5s ease' }}>
        <rect x="565" y="290" width="90" height="50" rx="5" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" fillOpacity="0.6" />
        <circle cx="610" cy="315" r="16" fill="url(#serverGradient)" />
        <text x="610" y="320" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#FFFFFF">Server 3</text>
        <text x="610" y="355" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#9CA3AF">External APIs</text>
      </g>
      
      {/* Connections from Clients to Servers */}
      <path 
        className="client-server-path"
        d="M 290 148 L 290 180 Q 290 190 280 190 L 175 190 Q 165 190 165 200 L 165 290" 
        stroke="#8B5CF6" 
        strokeWidth="1.5" 
        fill="none" 
        markerEnd="url(#dottedarrowhead)"
        style={{ 
          opacity: 0,
          strokeDasharray: 290,
          strokeDashoffset: 290,
        }}
      />
      
      <path 
        className="client-server-path"
        d="M 400 148 L 400 180 Q 400 190 390 190 L 335 190 Q 325 190 325 200 L 325 290" 
        stroke="#8B5CF6" 
        strokeWidth="1.5" 
        fill="none" 
        markerEnd="url(#dottedarrowhead)"
        style={{ 
          opacity: 0,
          strokeDasharray: 290,
          strokeDashoffset: 290,
        }}
      />
      
      <path 
        className="client-server-path"
        d="M 510 148 L 510 180 Q 510 190 520 190 L 610 190 Q 620 190 610 200 L 610 290" 
        stroke="#8B5CF6" 
        strokeWidth="1.5" 
        fill="none" 
        markerEnd="url(#dottedarrowhead)"
        style={{ 
          opacity: 0,
          strokeDasharray: 290,
          strokeDashoffset: 290,
        }}
      />
      
      {/* Local Resources */}
      <g className="resource-node" style={{ opacity: 0, transition: 'opacity 0.5s ease' }}>
        <circle cx="175" cy="380" r="15" fill="url(#resourceGradient)" />
        <text x="175" y="385" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#FFFFFF">Resource</text>
        <text x="175" y="400" textAnchor="middle" fontFamily="Arial" fontSize="8" fill="#9CA3AF">A</text>
      </g>
      
      <g className="resource-node" style={{ opacity: 0, transition: 'opacity 0.5s ease' }}>
        <circle cx="335" cy="380" r="15" fill="url(#resourceGradient)" />
        <text x="335" y="385" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#FFFFFF">Resource</text>
        <text x="335" y="400" textAnchor="middle" fontFamily="Arial" fontSize="8" fill="#9CA3AF">B</text>
      </g>
      
      {/* Remote Resource */}
      <g className="resource-node" style={{ opacity: 0, transition: 'opacity 0.5s ease' }}>
        <circle cx="610" cy="380" r="15" fill="url(#resourceGradient)" />
        <text x="610" y="385" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#FFFFFF">Resource</text>
        <text x="610" y="400" textAnchor="middle" fontFamily="Arial" fontSize="8" fill="#9CA3AF">C</text>
      </g>
      
      {/* Connections from Servers to Resources */}
      <path 
        className="server-resource-path"
        d="M 175 340 L 175 365" 
        stroke="#F59E0B" 
        strokeWidth="1.5" 
        fill="none" 
        markerEnd="url(#resourcearrowhead)"
        style={{ 
          opacity: 0,
          strokeDasharray: 35,
          strokeDashoffset: 35,
        }}
      />
      
      <path 
        className="server-resource-path"
        d="M 335 340 L 335 365" 
        stroke="#F59E0B" 
        strokeWidth="1.5" 
        fill="none" 
        markerEnd="url(#resourcearrowhead)"
        style={{ 
          opacity: 0,
          strokeDasharray: 35,
          strokeDashoffset: 35,
        }}
      />
      
      <path 
        className="server-resource-path"
        d="M 610 340 L 610 365" 
        stroke="#F59E0B" 
        strokeWidth="1.5" 
        fill="none" 
        markerEnd="url(#resourcearrowhead)"
        style={{ 
          opacity: 0,
          strokeDasharray: 35,
          strokeDashoffset: 35,
        }}
      />
      
      {/* The three MCP Primitives */}
      <rect x="100" y="440" width="600" height="100" rx="4" fill="#1E293B" fillOpacity="0.5" />
      
      {/* Tools */}
      <g className="mcp-primitive" style={{ opacity: 0, transition: 'opacity 0.5s ease' }}>
        <rect x="120" y="450" width="170" height="60" rx="4" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1" />
        <text x="205" y="475" textAnchor="middle" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#F9FAFB">Tools</text>
        <text x="205" y="500" textAnchor="middle" fontFamily="Arial" fontSize="11" fill="#9CA3AF">Model-controlled functions</text>
      </g>
      
      {/* Resources */}
      <g className="mcp-primitive" style={{ opacity: 0, transition: 'opacity 0.5s ease' }}>
        <rect x="315" y="450" width="170" height="60" rx="4" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="1" />
        <text x="400" y="475" textAnchor="middle" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#F9FAFB">Resources</text>
        <text x="400" y="500" textAnchor="middle" fontFamily="Arial" fontSize="11" fill="#9CA3AF">Application-controlled data</text>
      </g>
      
      {/* Prompts */}
      <g className="mcp-primitive" style={{ opacity: 0, transition: 'opacity 0.5s ease' }}>
        <rect x="510" y="450" width="170" height="60" rx="4" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="1" />
        <text x="595" y="475" textAnchor="middle" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#F9FAFB">Prompts</text>
        <text x="595" y="500" textAnchor="middle" fontFamily="Arial" fontSize="11" fill="#9CA3AF">User-controlled templates</text>
      </g>
      
      {/* Legend */}
      <g transform="translate(125, 550)">
        <circle cx="15" cy="0" r="8" fill="url(#hostGradient)" />
        <text x="30" y="4" fontFamily="Arial" fontSize="12" fill="#F9FAFB">Host</text>
        
        <circle cx="95" cy="0" r="8" fill="url(#clientGradient)" />
        <text x="110" y="4" fontFamily="Arial" fontSize="12" fill="#F9FAFB">Client</text>
        
        <circle cx="175" cy="0" r="8" fill="url(#serverGradient)" />
        <text x="190" y="4" fontFamily="Arial" fontSize="12" fill="#F9FAFB">Server</text>
        
        <circle cx="255" cy="0" r="8" fill="url(#resourceGradient)" />
        <text x="270" y="4" fontFamily="Arial" fontSize="12" fill="#F9FAFB">Resource</text>
        
        <circle cx="355" cy="0" r="8" fill="url(#llmGradient)" />
        <text x="370" y="4" fontFamily="Arial" fontSize="12" fill="#F9FAFB">LLM</text>
      </g>
    </svg>
  );
} 