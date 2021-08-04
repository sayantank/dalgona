import Image from "next/image";

export default function Hero() {
  return (
    <div className="aspect-w-16 aspect-h-9 w-full sm:h-80vh overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        layout="responsive"
        width={16}
        height={9}
        objectFit="cover"
      />
    </div>
  );
}
