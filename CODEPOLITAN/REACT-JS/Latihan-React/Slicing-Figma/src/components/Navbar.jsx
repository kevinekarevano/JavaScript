const Navbar = () => {
  return (
    <div className="px-20 py-8">
      <div className="flex justify-between items-center">
        <img src="src/assets/LogoTulisan.png" alt="" />
        <ul className="flex gap-5 font-semibold text-gray-500">
            <li className="text-slate-600">Home</li>
            <li>Discover</li>
            <li>Special Deals</li>
            <li>Contact</li>
        </ul>

        <div>
            <button className="text-[#222831]">Log In</button>
            <button>Sign Up</button>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
