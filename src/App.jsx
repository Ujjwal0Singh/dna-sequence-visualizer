import { useState } from 'react';
import { motion } from 'framer-motion';
import { mockDNA, geneInfo } from './data/dnaData';
import { generateRandomDNA, mutateDNA } from './utils/dnaUtils';
import Header from './components/Header';
import DNAViewer from './components/DNAViewer';
import MutationSimulator from './components/MutationSimulator';
import ReplicationAnimator from './components/ReplicationAnimator';
import GeneCard from './components/GeneCard';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
  const [dnaSequence, setDnaSequence] = useState(mockDNA);
  const [selectedGene, setSelectedGene] = useState(null);
  const [highlightedGene, setHighlightedGene] = useState(null);

  const handleMutate = (mutationType) => {
    const result = mutateDNA(dnaSequence, mutationType);
    setDnaSequence(result.dna);
    return result;
  };

  const handleGenerateRandom = () => {
    setDnaSequence(generateRandomDNA(12));
  };

  const handleBaseClick = (basePair) => {
    setSelectedGene(basePair.gene);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <DNAViewer 
                dnaSequence={dnaSequence} 
                onBaseClick={handleBaseClick}
                highlightedGene={highlightedGene}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="p-4 bg-gray-800 rounded-lg border border-neon-pink">
                <h3 className="text-xl font-bold text-neon-pink mb-4">DNA Controls</h3>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      background: [
                        'linear-gradient(to right, #22d3ee, #a855f7)',
                        'linear-gradient(to right, #22d3ee, #ec4899)',
                        'linear-gradient(to right, #22d3ee, #a855f7)'
                      ],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                    onClick={handleGenerateRandom}
                    className="px-4 py-2 text-gray-900 font-bold rounded-lg shadow-lg"
                  >
                    Generate Random DNA
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setDnaSequence(mockDNA)}
                    className="px-4 py-2 bg-gray-700 font-bold rounded hover:bg-gray-600"
                  >
                    Reset to Original
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <MutationSimulator onMutate={handleMutate} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <ReplicationAnimator dnaSequence={dnaSequence} />
            </motion.div>
          </div>
        </div>
      </div>
      
      {selectedGene && (
        <GeneCard 
          gene={selectedGene} 
          geneInfo={geneInfo}
          onClose={() => setSelectedGene(null)}
        />
      )}
    </div>
  );
}
