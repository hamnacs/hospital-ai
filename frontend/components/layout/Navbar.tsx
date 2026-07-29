export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <h1 className="text-xl font-semibold text-gray-800">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-700">👤 Hamna</span>

        <button className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600">
          Logout
        </button>
      </div>
    </header>
  );
}