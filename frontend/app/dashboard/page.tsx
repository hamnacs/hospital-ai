import DashboardLayout from "@/components/layout/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h2 className="text-3xl font-bold text-gray-800">
        Welcome to Hospital AI 👋
      </h2>

      <p className="mt-4 text-gray-600">
        This is your hospital dashboard.
      </p>
    </DashboardLayout>
  );
}