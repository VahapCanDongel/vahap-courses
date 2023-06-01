export default function Navigation() {
  return (
    <div className="w-full h-[9vh] flex justify-evenly items-center p-4 bg-white sm:justify-between">
      <div>
        <div className="text-[12px] text-right">Courses</div>
        <div className="font-bold text-[25px] ">Vahap Can Dongel</div>
      </div>

      <div className="flex justify-center items-center gap-8 sm:hidden">
        <input
          type="search"
          placeholder="Search a course"
          className="p-4 focus:outline-none border w-[250px]"
        />
        <ul className="flex gap-6 justify-center items-center font-semibold cursor-pointer  ">
          <li>
            <a href="https://www.vahapcandongel.co.uk/">Portfolio</a>
          </li>
          <li className="bg-blue-400 p-2 rounded-sm w-[80px] text-center text-white">
            Blog
          </li>
        </ul>
      </div>

      <div className="hidden sm:flex">
        <svg width={46} height={46} className="fill-black" viewBox="0 0 24 24">
          <path d="M20.05 11H3.95a.95.95 0 0 0-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 0 0 .95-.95v-.1a.95.95 0 0 0-.95-.95Z" />
          <path d="M20.05 16H3.95a.95.95 0 0 0-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 0 0 .95-.95v-.1a.95.95 0 0 0-.95-.95Z" />
          <path d="M20.05 6H3.95a.95.95 0 0 0-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 0 0 .95-.95v-.1a.95.95 0 0 0-.95-.95Z" />
        </svg>
      </div>
    </div>
  );
}
