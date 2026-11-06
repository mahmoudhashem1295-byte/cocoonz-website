export default function Home() {
  return (
    <main className="min-h-screen bg-[#080e1a] text-white">
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="bg-black/60 p-10 rounded-2xl text-center">
          <h1 className="text-7xl font-bold text-[#e8b575]">
            COCOONZ
          </h1>

          <p className="mt-4 text-2xl">
            Your Comfort Is Here
          </p>

          <button className="mt-8 bg-[#e8b575] text-black px-8 py-3 rounded-lg font-semibold">
            Explore Collection
          </button>
        </div>
      </section>
    </main>
  );
}
