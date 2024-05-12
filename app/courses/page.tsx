import CourseItem from "../components/CoursePage/CourseItem";
import FilterByCategory from "../components/CoursePage/FilterByCategory";
import FilterByType from "../components/CoursePage/FilterByType";
import SearcCourse from "../components/CoursePage/SearchCourse";
import HeroArea from "../components/HeroArea";

export default function Courses() {
  return (
    <>
      <HeroArea
        title="Courses"
        description="Here at Flowbite we focus on markets where technology, innovation, and
  capital can unlock long-term value and drive economic growth."
      />
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="basis-3/12 pr-10">
            <div className="py-16">
              <SearcCourse />
              <FilterByCategory />
              <FilterByType />
            </div>
          </div>
          <div className="basis-9/12">
            <div className="py-16 flex flex-wrap">
              <CourseItem />
              <CourseItem />
              <CourseItem />
              <CourseItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
