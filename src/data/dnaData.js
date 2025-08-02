export const mockDNA = [
  { base: 'A', position: 1, gene: 'GENE-01' },
  { base: 'T', position: 2, gene: 'GENE-01' },
  { base: 'G', position: 3, gene: 'GENE-01' },
  { base: 'C', position: 4, gene: 'GENE-01' },
  { base: 'A', position: 5, gene: 'GENE-02' },
  { base: 'T', position: 6, gene: 'GENE-02' },
  { base: 'C', position: 7, gene: 'GENE-02' },
  { base: 'G', position: 8, gene: 'GENE-03' },
  { base: 'A', position: 9, gene: 'GENE-03' },
  { base: 'T', position: 10, gene: 'GENE-03' },
];

export const geneInfo = {
  'GENE-01': {
    name: 'GENE-01',
    function: 'Responsible for cellular energy production',
    impact: 'Mutations may affect metabolism',
    image: '🔋'
  },
  'GENE-02': {
    name: 'GENE-02',
    function: 'Controls structural integrity',
    impact: 'Mutations may cause structural deformities',
    image: '🏗️'
  },
  'GENE-03': {
    name: 'GENE-03',
    function: 'Regulates replication timing',
    impact: 'Mutations may cause replication errors',
    image: '⏱️'
  }
};