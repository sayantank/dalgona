import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full md:min-h-80vh flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        layout="intrinsic"
        width={3200}
        height={1800}
      />
    </div>
  );
}
