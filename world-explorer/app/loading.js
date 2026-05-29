export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="w-16 h-16 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"></div>

        <p className="text-xl font-semibold text-slate-600 dark:text-slate-300">
          Loading...
        </p>
      </div>
    </div>
  );
}