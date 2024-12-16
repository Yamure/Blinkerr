const LoadingState = () => (
  <div className="min-h-screen grainy bg-[#FAFAF9] relative flex items-center justify-center">
    <div className="space-y-4 text-center">
      <div className="animate-spin w-8 h-8 border-2 border-zinc-300 border-t-zinc-600 rounded-full mx-auto" />
      <p className="text-sm text-zinc-600 font-mono">Loading resources...</p>
    </div>
  </div>
);

export default LoadingState;
