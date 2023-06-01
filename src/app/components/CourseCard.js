export default function CourseCard() {
  return (
    <div className="flex my-8 flex-col bg-white w-[400px] rounded-md border max-h-[460px] hover:shadow-2xl cursor-pointer transition">
      <img
        src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/cybersecurity.png"
        className="w-[400px] h-[200px] rounded-sm rounded-tr-md rounded-tl-md "
      />

      <div className="flex flex-col justify-between  p-4 gap-5">
        <div>
          <div className="font-semibold text-[25px]">Cybersecurity</div>
          <div className="text-[14px]">
            BTEC Level 3 National Extended Diploma
          </div>
        </div>
        <p className="">
          In our increasingly connected world, cybersecurity is more than just a
          buzzword—it's an essential skillset.
        </p>
      </div>
    </div>
  );
}
