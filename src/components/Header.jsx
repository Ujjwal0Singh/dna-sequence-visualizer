export default function Header() {
  return (
    <header className="py-6 text-center bg-gray-900 border-b border-cyan-400/20">
      <div className="inline-block px-8 py-4 rounded-xl bg-gray-900/90 backdrop-blur-sm border border-cyan-400/20">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
          DNA Sequence Explorer
        </h1>
        <p className="text-cyan-200">
          Interactive exploration of synthetic DNA sequences
        </p>
      </div>
    </header>
  );
}