const LoadingState = () => (
  <div className="grainy relative flex min-h-screen items-center justify-center bg-[#FAFAF9]">
    <div className="space-y-4 text-center">
      <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-600" />
      <p className="font-mono text-sm text-zinc-600">Loading resources...</p>
    </div>
  </div>
);

export default LoadingState;
