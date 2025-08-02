import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function GeneCard({ gene, geneInfo, onClose }) {
  if (!gene || !geneInfo[gene]) return null;

  const info = geneInfo[gene];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="w-[350px] bg-gray-800 border-neon-blue">
          <CardHeader>
            <CardTitle className="text-neon-blue flex items-center gap-2">
              <span className="text-2xl">{info.image}</span>
              {info.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-bold text-neon-pink">Function:</h4>
              <p>{info.function}</p>
            </div>
            <div>
              <h4 className="font-bold text-neon-pink">Mutation Impact:</h4>
              <p>{info.impact}</p>
            </div>
            <button
              onClick={onClose}
              className="w-full py-2 bg-neon-blue text-gray-900 font-bold rounded hover:bg-opacity-90"
            >
              Close
            </button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}