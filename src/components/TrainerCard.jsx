function TrainerCard({ name, spec, photo }) {
    return (
      <div className="text-center bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-amber-500 transition">
        <div 
          className="w-32 h-32 mx-auto rounded-full bg-gray-700 mb-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${photo || 'https://via.placeholder.com/150'})` }}
        />
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-gray-400 text-sm">{spec}</p>
      </div>
    );
  }
  
  export default TrainerCard;