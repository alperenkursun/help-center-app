export default function SkeletonCard() {
  return (
    <div className="flex flex-col items-center text-center w-full bg-card-bg border-[0.95px] border-white/5 rounded-[7.63px] p-[19.08px] gap-[19.08px] animate-pulse">
      
      <div className="w-[57.23px] h-[57.23px] rounded-full bg-white/10 shrink-0"></div>

      <div className="flex flex-col gap-2 w-full items-center">
        <div className="h-6 w-3/4 bg-white/10 rounded-md"></div>
        <div className="h-4 w-full bg-white/5 rounded-md mt-2"></div>
        <div className="h-4 w-5/6 bg-white/5 rounded-md"></div>
      </div>

      <div className="h-[30.52px] w-37.5 rounded-[98.24px] bg-white/10 mt-auto"></div>
      
    </div>
  );
}