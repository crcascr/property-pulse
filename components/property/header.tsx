import Image from "next/image";

interface Props {
  image: string | undefined;
}

export const PropertyHeader = ({ image }: Props) => {
  if (!image) return null;
  return (
    <section className="container-xl m-auto">
      <div className="grid grid-cols-1">
        <Image
          src={`/images/properties/${image}`}
          alt="Property"
          className="object-cover h-[400px] w-full"
          width={0}
          height={0}
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
};
