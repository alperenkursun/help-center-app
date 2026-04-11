import Image from "next/image";

export default function WelcomeHero() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-10">
        <Image 
          src="/images/icon.png"
          alt="Yardım Merkezi" 
          width={70} 
          height={70} 
        />
      </div>

      <h1 className="text-[30px] leading-10 font-semibold text-white tracking-[-0.18px] mb-6">
        Yardım Merkezine Hoş Geldiniz
      </h1>
      <p className="text-[15px] leading-6 font-medium text-text-secondary max-w-195 mb-7.5">
        Sık sorulan sorulara göz atabilir, işlemlerinizle ilgili hızlıca destek alabilir ve aradığınız yanıta kolayca ulaşabilirsiniz.
      </p>
    </div>
  );
}