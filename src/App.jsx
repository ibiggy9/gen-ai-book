import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight, Search, Menu, ArrowLeft, ArrowRight, X } from 'lucide-react';
import DetailedVisualizer from './components/DetailedVisualizer';
import AIVisualizationGrid from './components/AIVisualizationGrid';
import {pageContent, bookContent} from './components/BookContent';

export default function App() {
  const [activeSection, setActiveSection] = useState('000');
  const [expandedSections, setExpandedSections] = useState({
    'generative-ai-101': true,
    'fundamentals': true,
    'mcp': true,
    'agents': true
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(window.innerWidth < 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const contentRef = useRef(null);
  const mainContainerRef = useRef(null);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Prevent wheel events from affecting parent containers
  useEffect(() => {
    const handleWheel = (e) => {
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        e.preventDefault();
        // If wheel event is outside content area, redirect to content area
        if (contentRef.current) {
          const scrollAmount = e.deltaY;
          contentRef.current.scrollTop += scrollAmount;
        }
        return false;
      }
    };
    
    // Add event listener to main container
    const currentMainContainer = mainContainerRef.current;
    if (currentMainContainer) {
      currentMainContainer.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (currentMainContainer) {
        currentMainContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);
  
  // Handle sidebar navigation and expanded states
  useEffect(() => {
    // Set default expanded state for parts and chapters based on the active section
    if (activeSection) {
      // Find which chapter contains the active section
      let foundChapter = '';
      let foundPart = '';
      
      Object.entries(bookContent).forEach(([key, content]) => {
        if (content.sections.some(section => section.id === activeSection)) {
          foundChapter = key;
        }
      });
      
      // Find which part contains the active chapter
      Object.entries(bookContent).forEach(([key]) => {
        if (key.startsWith('part-') && foundChapter) {
          const chapters = getChaptersForPart(key);
          if (chapters.includes(foundChapter)) {
            foundPart = key;
          }
        }
      });
      
      // Auto-expand the part and chapter that contains the active section
      if (foundChapter) {
        setExpandedSections(prev => ({
          ...prev,
          [foundChapter]: true
        }));
      }
      
      if (foundPart) {
        setExpandedSections(prev => ({
          ...prev,
          [foundPart]: true
        }));
      }

      // Scroll to the top of the content area when section changes
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
      
      // Auto-collapse sidebar on mobile when navigating between sections
      if (isMobile) {
        setSidebarCollapsed(true);
      }
    }
  }, [activeSection, isMobile]);
  
  // Helper function to get chapters that belong to a specific part
  const getChaptersForPart = (partId) => {
    switch(partId) {
      case 'part-1':
        return ['generative-ai-101', 'core-concepts'];
      case 'part-2':
        return ['neural-networks', 'transformers', 'llms'];
      case 'part-3':
        return ['ai-agents', 'agent-thinking', 'generative-agents'];
      case 'part-4':
        return ['agent-frameworks', 'multi-agent', 'mcp', 'adk', 'first-agent'];
      case 'part-5':
        return ['future-trends', 'responsible-ai', 'conclusion'];
      default:
        return [];
    }
  };

  // Get a sorted list of sidebar items
  const getSidebarItems = () => {
    const parts = Object.entries(bookContent)
      .filter(([key]) => key.startsWith('part-'))
      .sort(([keyA], [keyB]) => {
        const numA = parseInt(keyA.split('-')[1]);
        const numB = parseInt(keyB.split('-')[1]);
        return numA - numB;
      });
      
    const result = [];
    
    // Add parts and their chapters in order
    parts.forEach(([partId, part]) => {
      result.push({ id: partId, ...part, type: 'part' });
      
      // If part is expanded, add its chapters
      if (expandedSections[partId]) {
        const chaptersForPart = getChaptersForPart(partId);
        
        chaptersForPart.forEach(chapterId => {
          const chapter = bookContent[chapterId];
          if (chapter) {
            result.push({ id: chapterId, ...chapter, type: 'chapter' });
            
            // If chapter is expanded, add its sections
            if (expandedSections[chapterId]) {
              chapter.sections.forEach(section => {
                result.push({ ...section, type: 'section', chapterId });
              });
            }
          }
        });
      }
    });
    
    return result;
  };

  // Style objects for different item types
  const itemStyles = {
    part: "font-bold text-white text-base my-2",
    chapter: "font-medium text-gray-300 text-sm",
    section: "text-gray-400 text-sm"
  };
  
  // Padding for different item types
  const itemPadding = {
    part: "px-2",
    chapter: "px-4",
    section: "px-8"
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setSearchQuery('');
    }
  };


  // Get the current page content
  const currentPage = pageContent[activeSection] || pageContent['000'];

  // Function to navigate to the next section
  const goToNextSection = () => {
    // Find all section IDs and sort them
    const allSectionIds = [];
    Object.values(bookContent).forEach(chapter => {
      if (chapter.sections) {
        chapter.sections.forEach(section => {
          allSectionIds.push(section.id);
        });
      }
    });
    
    // Sort section IDs numerically
    allSectionIds.sort((a, b) => parseInt(a) - parseInt(b));
    
    // Find the current section index
    const currentIndex = allSectionIds.findIndex(id => id === activeSection);
    
    // If not the last section, go to the next one
    if (currentIndex < allSectionIds.length - 1) {
      setActiveSection(allSectionIds[currentIndex + 1]);
      // Auto-expand the relevant chapter
      updateExpandedSections(allSectionIds[currentIndex + 1]);
    }
  };
  
  // Function to navigate to the previous section
  const goToPreviousSection = () => {
    // Find all section IDs and sort them
    const allSectionIds = [];
    Object.values(bookContent).forEach(chapter => {
      if (chapter.sections) {
        chapter.sections.forEach(section => {
          allSectionIds.push(section.id);
        });
      }
    });
    
    // Sort section IDs numerically
    allSectionIds.sort((a, b) => parseInt(a) - parseInt(b));
    
    // Find the current section index
    const currentIndex = allSectionIds.findIndex(id => id === activeSection);
    
    // If not the first section, go to the previous one
    if (currentIndex > 0) {
      setActiveSection(allSectionIds[currentIndex - 1]);
      // Auto-expand the relevant chapter
      updateExpandedSections(allSectionIds[currentIndex - 1]);
    }
  };
  
  // Helper function to update expanded sections based on active section
  const updateExpandedSections = (sectionId) => {
    let foundChapter = '';
    let foundPart = '';
    
    Object.entries(bookContent).forEach(([key, content]) => {
      if (content.sections && content.sections.some(section => section.id === sectionId)) {
        foundChapter = key;
      }
    });
    
    // Find which part contains the active chapter
    Object.entries(bookContent).forEach(([key]) => {
      if (key.startsWith('part-') && foundChapter) {
        const chapters = getChaptersForPart(key);
        if (chapters.includes(foundChapter)) {
          foundPart = key;
        }
      }
    });
    
    // Auto-expand the part and chapter that contains the active section
    if (foundChapter) {
      setExpandedSections(prev => ({
        ...prev,
        [foundChapter]: true
      }));
    }
    
    if (foundPart) {
      setExpandedSections(prev => ({
        ...prev,
        [foundPart]: true
      }));
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-content dark-theme">
      {/* Mobile Overlay for sidebar when open */}
      {!sidebarCollapsed && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 z-40"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={`bg-sidebar border-r border-subtle flex flex-col h-full max-h-screen overflow-hidden ${
        sidebarCollapsed ? 'w-0 lg:w-16' : 'w-[85%] lg:w-80'
      } transition-all duration-300 ${
        sidebarCollapsed && !isMobile ? 'hidden lg:flex' : ''
      } ${sidebarCollapsed && isMobile ? 'hidden' : 'fixed lg:relative z-45'}`}>
        {/* Top bar icons */}
        <div className={`${sidebarCollapsed ? 'flex-col' : 'flex-row'} flex items-center p-5 border-b border-subtle ${!sidebarCollapsed && 'justify-between'} flex-shrink-0`}>
          <div className="flex items-center">
            <button
              className="p-2 rounded-md hover:bg-gray-800 flex justify-center"
              onClick={toggleSidebar}
            >
              {sidebarCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
            </button>
          </div>
          <div className={`${sidebarCollapsed ? 'mt-2' : ''} flex ${sidebarCollapsed ? 'flex-col' : 'flex-row'} ${!sidebarCollapsed && 'space-x-2'} ${sidebarCollapsed && 'space-y-2'}`}>
            <button
              className="p-2 rounded-md hover:bg-gray-800 flex justify-center"
              onClick={toggleSearch}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search input */}
        {showSearch && !sidebarCollapsed && (
          <div className="px-2 py-3 border-b border-subtle flex-shrink-0">
            <input
              type="text"
              placeholder="Search chapters..."
              className="w-full px-3 py-2 bg-gray-800 rounded text-white text-sm focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}

        {/* Navigation menu - make it scrollable */}
        <div className="flex-grow overflow-y-auto">
          {!sidebarCollapsed ? (
            /* Full sidebar view */
            <div className="py-2 pb-28 lg:pb-6">
              {getSidebarItems().filter(item => 
                !searchQuery.trim() || 
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (item.id && item.id.includes(searchQuery))
              ).map((item) => {
                if (item.type === 'part') {
                  // Render part header
                  return (
                    <div key={item.id} className="mt-4 first:mt-0">
                      <button
                        className={`w-full flex items-center justify-between py-2 text-left hover:bg-gray-800 ${itemPadding[item.type]}`}
                        onClick={() => toggleSection(item.id)}
                      >
                        <span className={itemStyles[item.type]}>{item.title}</span>
                        {expandedSections[item.id] ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  );
                } else if (item.type === 'chapter') {
                  // Render chapter header
                  return (
                    <div key={item.id} className="mt-1">
                      <button
                        className={`w-full flex items-center justify-between py-1.5 text-left hover:bg-gray-800 ${itemPadding[item.type]}`}
                        onClick={() => toggleSection(item.id)}
                      >
                        <span className={itemStyles[item.type]}>{item.title}</span>
                        {expandedSections[item.id] ? (
                          <ChevronDown className="w-3 h-3" />
                        ) : (
                          <ChevronRight className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                  );
                } else if (item.type === 'section') {
                  // Render section item
                  return (
                    <button
                      key={item.id}
                      className={`flex items-center w-full py-1 text-left hover:bg-gray-800 ${
                        activeSection === item.id ? 'text-blue-400' : 'text-gray-400'
                      } ${itemPadding[item.type]}`}
                      onClick={() => {
                        setActiveSection(item.id);
                        if (isMobile) {
                          setSidebarCollapsed(true);
                        }
                      }}
                    >
                      <span className="text-xs font-mono mr-1 w-6">{item.id}</span>
                      <span className="text-sm">{item.title}</span>
                    </button>
                  );
                }
                return null;
              })}
            </div>
          ) : (
            /* Collapsed sidebar view */
            <div className="flex flex-col items-center py-4 pb-56 lg:pb-6 overflow-y-auto">
              {/* Collapsed sidebar with no indicators */}
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div ref={mainContainerRef} className="flex-1 flex flex-col overflow-hidden relative">
        {/* Mobile menu button - always visible on mobile */}
        <div className="lg:hidden fixed top-5 left-4 z-50">
          <button
            className="p-3 rounded-md bg-indigo-700 hover:bg-indigo-600 shadow-lg"
            onClick={toggleSidebar}
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
        
        {/* Book title */}
        <div className="absolute top-0 left-0 right-0 py-5 px-4 text-center bg-content z-10">
          <h1 className="text-2xl lg:text-4xl font-bold pl-10 lg:pl-0">GenAI 101 - The Book</h1>
          <p className="text-sm lg:text-base">By Ian Bigford</p>
        </div>
        
        {/* Content area with consistent width */}
        <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full overflow-hidden mt-24 px-4 lg:px-10">
        
          {/* Content container - Dynamically render current page content */}
          <div ref={contentRef} className="flex-1 py-4 overflow-y-scroll overflow-x-hidden h-full min-h-0 px-1 pb-48 lg:pb-6">
            {/* Detailed visualization for specific sections */}
            {(activeSection === '007' || activeSection === '008' || activeSection === '009' || activeSection === '011' || activeSection === '012' || activeSection === '013' || 
              activeSection === '014' || activeSection === '015' || activeSection === '016' || activeSection === '017' ||
              activeSection === '038' || activeSection === '039' || activeSection === '040') && 
              <motion.div
                key={`visualizer-${activeSection}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full overflow-x-hidden"
              >
                <DetailedVisualizer activeSection={activeSection} />
              </motion.div>
            }
            
            {/* AI Visualization Grid */}
            {activeSection === '000' && 
              <motion.div
                key="visualization-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full overflow-x-hidden"
              >
                <AIVisualizationGrid />
              </motion.div>
            }
            
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full overflow-x-hidden"
            >
              {currentPage.content}
            </motion.div>
            
            {/* Desktop Navigation buttons */}
            <div className="hidden lg:flex justify-between items-center mt-10 pb-6">
              <button
                onClick={goToPreviousSection}
                className="flex items-center px-3 py-2 lg:px-4 lg:py-2 bg-indigo-800 rounded-lg text-white hover:bg-indigo-700 transition-colors text-sm lg:text-base"
              >
                <ArrowLeft className="w-4 h-4 mr-1 lg:mr-2" />
                <span className="inline">Previous</span>
              </button>
              
              <button
                onClick={goToNextSection}
                className="flex items-center px-3 py-2 lg:px-4 lg:py-2 bg-indigo-800 rounded-lg text-white hover:bg-indigo-700 transition-colors text-sm lg:text-base"
              >
                <span className="inline">Next</span>
                <ArrowRight className="w-4 h-4 ml-1 lg:ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile-only fixed navigation bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gray-900 border-t border-gray-800 z-50">
        <button
          onClick={goToPreviousSection}
          className="flex-1 mr-2 flex items-center justify-center px-4 py-3 bg-indigo-800 rounded-lg text-white hover:bg-indigo-700 transition-colors text-base font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Previous</span>
        </button>
        
        <button
          onClick={goToNextSection}
          className="flex-1 ml-2 flex items-center justify-center px-4 py-3 bg-indigo-800 rounded-lg text-white hover:bg-indigo-700 transition-colors text-base font-medium"
        >
          <span>Next</span>
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}