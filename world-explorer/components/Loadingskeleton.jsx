export default function LoadingSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-white dark:bg-slate-900 rounded-3xl overflow-hidden"
        >
          <div className="h-52 bg-slate-300 dark:bg-slate-700"></div>

          <div className="p-6 space-y-4">
            <div className="h-6 bg-slate-300 dark:bg-slate-700 rounded"></div>
            <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded"></div>
            <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}