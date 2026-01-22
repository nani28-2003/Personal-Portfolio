const Navbar = () => {
  return (
    <nav className=" flex top-0 sticky z-index:999 text-center justify-between items-center h-[10vh] w-full bg-[#F1F1F1]/10 text-white p-6  font-['Neue Montreal'] ">
      <div>
        image
      </div>
      <div className=" flex gap-3 cursor-pointer text-zinc-700 ">
    {["Home","About","Skills","Projects","Dsa","Resume","Contact"].map((items,index)=>
    <a key={index}className= {`text-lg capitilize hover:bg-black hover:text-white hover:rounded-full p-2 scale-100 hover:scale-110 ${index===6 && "ml-32"}`} >{items}</a>)}</div>
    </nav>
  );
};

export default Navbar;