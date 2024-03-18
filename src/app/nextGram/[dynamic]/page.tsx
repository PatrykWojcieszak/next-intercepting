import Link from "next/link";

export default function Page({ params }: { params: { dynamic: string } }) {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1 * 10);

  return (
    <section className="cards-container">
      {photos.map((id) => (
        <Link
          className="card"
          key={id}
          href={`/nextGram/${params.dynamic}/${id}`}
          passHref>
          Dynamic Link {id}
        </Link>
      ))}
    </section>
  );
}
