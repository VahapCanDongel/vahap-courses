export default function CourseCard() {
  return (
    <div className="flex gap-16 my-8 text-white">
      <img
        src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/cybersecurity.png"
        className="w-[400px] h-[300px] rounded-sm"
      />

      <div className="flex flex-col justify-between">
        <div className="font-semibold text-[25px]">Cybersecurity</div>
        <p className="w-[400px]">
          In our increasingly connected world, cybersecurity is more than just a
          buzzword—it's an essential skillset. Our Cybersecurity Essentials
          course equips you with the knowledge and tools needed to navigate the
          digital landscape safely.
        </p>

        <div className="bg-blue-400 rounded-sm p-4 text-center w-[200px] text-white cursor-pointer hover:shadow-blue-500 hover:transition-all hover:shadow-lg">
          View Course
        </div>
      </div>
    </div>
  );
}
