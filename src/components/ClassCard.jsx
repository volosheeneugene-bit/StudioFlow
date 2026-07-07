function ClassCard({ title, day, time, description }) {
    return (
      <div className="bg-gray-900 p-6 rounded-xl border-l-4 border-amber-500 hover:bg-gray-800 transition">
        <h4 className="text-xl font-bold text-white">{title}</h4>
        <p className="text-amber-500 font-bold">{day} {time}</p>
        <p className="text-gray-400 text-sm mt-2">{description}</p>
      </div>
    );
  }
  
  export default ClassCard;