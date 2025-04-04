export default function Hero() {
    return (
      <section className="bg-blue-50 py-20 mt-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Encontre os melhores freelancers ou ofereça seus serviços</h2>
          <p className="text-lg mb-8">Conecte-se com profissionais próximos a você e realize seus projetos com facilidade.</p>
          <div className="space-x-4">
            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Sou Freelancer</a>
            <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-blue-100">Preciso de um Serviço</a>
          </div>
        </div>
      </section>
    );
  }