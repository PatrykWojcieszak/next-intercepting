export default function Page({ params }: { params: { photo: string } }) {
  return <div className="text-white">intercepted route: {params.photo}</div>;
}
