import CourseCard from "./components/CourseCard";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-3/4 p-4 flex flex-col items-center gap-16 sm:w-full">
        <div className="grid grid-cols-3 gap-8 sm:flex sm:flex-col sm:items-center">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
}
