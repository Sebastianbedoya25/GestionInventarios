import Link from "next/link";

const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      
      <div className="text-center">
        <div>
          <h1 className="text-4xl font-bold pb-8">Sistema de gestión de inventarios</h1>
        </div>
        <button className="text-2xl text-white bg-green-500 hover:bg-gray-100 hover:text-green-500 px-4 py-2 rounded">
          <Link href={'/form'}>Iniciar sesión</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
