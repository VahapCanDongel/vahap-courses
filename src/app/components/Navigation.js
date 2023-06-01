export default function Navigation() {
  return (
    <div className="w-full h-[9vh] flex justify-evenly items-center p-4 bg-white">
      <div>
        <div className="text-[12px] text-right">Courses</div>
        <div className="font-bold text-[25px] ">Vahap Can Dongel</div>
      </div>

      <div className="flex justify-center items-center gap-8">
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
    </div>
  );
}
