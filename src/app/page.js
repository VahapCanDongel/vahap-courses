import CourseCard from "./components/CourseCard";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-3/4 p-4 flex flex-col items-center gap-16">
        <div className="grid grid-cols-3 gap-8">
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
