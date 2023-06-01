export default function Navigation() {
  return (
    <div className="w-full h-[13vh] flex justify-evenly items-center p-4">
      <div className="font-bold text-[25px] text-white">Vahap Can Dongel</div>

      <ul className="flex gap-6 justify-center items-center font-semibold cursor-pointer  text-white">
        <li>
          <a href="https://www.vahapcandongel.co.uk/">Portfolio</a>
        </li>
        <li className="bg-blue-400 p-2 rounded-sm w-[80px] text-center">
          Blog
        </li>
      </ul>
    </div>
  );
}
