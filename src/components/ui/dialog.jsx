import { X } from 'lucide-react';

export function Dialog({ 
  children, 
  open, 
  onOpenChange,
  className 
}) {
  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={() => onOpenChange(false)}
    >
      <div 
        className={`relative bg-gray-800 border border-neon-blue rounded-lg p-6 max-w-md w-full mx-4 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogContent({ children, className }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function DialogHeader({ children, className }) {
  return (
    <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`}>
      {children}
    </div>
  );
}

export function DialogTitle({ children, className }) {
  return (
    <h3 className={`text-lg font-semibold leading-none tracking-tight text-neon-blue ${className}`}>
      {children}
    </h3>
  );
}

export function DialogClose({ className }) {
  return (
    <button
      className={`absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none ${className}`}
    >
      <X className="h-5 w-5 text-blue-400 hover:text-white" />
      <span className="sr-only">Close</span>
    </button>
  );
}

export function DialogButton({ 
  children, 
  onClick, 
  variant = 'default',
  className 
}) {
  const baseClasses = "inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50";
  
  const variantClasses = {
    default: "bg-neon-blue text-white-900 hover:bg-neon-blue/90",
    secondary: "bg-gray-700 text-white hover:bg-gray-600",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}