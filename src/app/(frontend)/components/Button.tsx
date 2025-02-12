const Button = ({ title }) => {
  return (
    <button
      type="button"
      className="mt-6 px-6 py-3 bg-white text-[#E37715] font-semibold 
                   rounded-lg border-2 border-yellow-400 
                   shadow-[5px_5px_0px_0px] shadow-yellow-400 
                   transition-transform duration-300 
                   ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] 
                   hover:translate-x-1 hover:-translate-y-1 
                   cursor-pointer"
    >
      {title}
    </button>
  )
}

export default Button
