import CategoryItem from "../components/CategoryPage/CategoryItem";
import CourseItem from "../components/CoursePage/CourseItem";
import FilterByCategory from "../components/CoursePage/FilterByCategory";
import FilterByType from "../components/CoursePage/FilterByType";
import SearcCourse from "../components/CoursePage/SearchCourse";
import HeroArea from "../components/HeroArea";

export default function Categories() {
  return (
    <>
      <HeroArea
        title="Categories"
        description="Embark on Your Learning Adventure"
      />
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="basis-3/12 pr-10">
            <div className="py-16">
              <SearcCourse />
              <FilterByType />
            </div>
          </div>
          <div className="basis-9/12">
            <div className="py-16 flex flex-wrap">
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
