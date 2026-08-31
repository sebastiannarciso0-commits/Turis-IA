function ExploreCard({ categorias}) 
{
  return (
    <div className="relative overflow-hidden rounded-3xl group cursor-pointer">

      <img
        src={categoria.imagen}
        className="h-72 w-full object-cover duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col justify-end p-6">

        <div
          className={`${categoria.color} w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4`}
        >
          {categoria.icono}
        </div>

        <h2 className="text-white text-3xl font-bold">
          {categoria.titulo}
        </h2>

        <p className="text-gray-200 mt-2">
          {categoria.descripcion}
        </p>

      </div>

    </div>
  )
}

export default ExploreCard