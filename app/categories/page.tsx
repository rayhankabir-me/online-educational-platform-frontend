import CategoryItem from "../components/CategoryPage/CategoryItem";
import SearchCourse from "../components/CoursePage/SearchCourse";
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
              <SearchCourse />
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
