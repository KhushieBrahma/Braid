interface EquipmentPageProps {
  params: Promise<{
    value: string;
  }>;
}

export default async function EquipmentDetailPage({
  params,
}: EquipmentPageProps) {
  const { value } = await params;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Equipment: {decodeURIComponent(value)}
      </h1>

      <p className="mt-4 text-gray-600">
        Equipment details page will be implemented by Person 3.
      </p>
    </main>
  );
}