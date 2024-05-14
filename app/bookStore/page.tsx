import HeroArea from "../components/HeroArea";
import BookStoreItem from "../components/BookStore/BookStoreItem";

export default function AllBooks() {
  return (
    <>
      <HeroArea
        title="Book Store"
        description="Grab your books here"
      />
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-row">
          <div className="basis-3/12 pr-10">
            <div className="py-16">
              <BookStoreItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
