import Image from "next/image";
import wondersImages from "../wonders";

export default async function PhotoPage({ params }) {
  const { id } = await params;
  const photo = wondersImages.find((p) => p.id === id);
  if (!photo) {
    return <h1>Photo not found</h1>;
  }
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square "
        />

        <div className="bg-white py-4">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}
