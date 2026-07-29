const menuItems = [
  "Dashboard",
  "Patients",
  "Doctors",
  "Appointments",
  "AI Receptionist",
  "Settings",
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 border-r bg-white p-6 shadow-sm">
      <h2 className="mb-8 text-2xl font-bold text-blue-600">
        🏥 Hospital AI
      </h2>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <a
            key={item}
            href="#"
            className="rounded-lg px-4 py-3 text-gray-700 transition hover:bg-blue-100 hover:text-blue-600"
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
}