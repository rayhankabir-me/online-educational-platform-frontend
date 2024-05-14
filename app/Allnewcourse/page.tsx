


import HeroArea from "../components/HeroArea";
import AllnewCourse from "../components/NewCourse/AllnewCourse";



export default function Allnewcourse() {
  return (
    <>
      <HeroArea
        title="Teach with Us: Apply to be an Instructor"
        description="Apply to become an instructor on our platform! We're looking for passionate individuals like you to teach and inspire learners worldwide. Show us what you know, and help shape the future of online education. Apply now and start making a difference!."
      />
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="basis-3/12 pr-10">
            <div className="py-16">
              <AllnewCourse />
              
            </div>
          </div>
          <div className="basis-9/12">
          {/* <div className="py-16 flex flex-wrap">
             <SlidePicture />
             
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
