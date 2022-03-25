import React from "react";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { LeftArrow, RightArrow } from "./arrows";

import ActionAreaCard from "../CoursesCards";

// import "./globalStyles.css";

import usePreventBodyScroll from "./usePreventBodyScroll";

// NOTE: for arrows on bottom
import "./arrowsOnBottomOrTop.css";
// NOTE: for hide scrollbar
import "./hideScrollbar.css";
// import "./firstItemMargin.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "subject";
const dummyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ex lorem. Proin id iaculis velit, sit amet condimentum lacus. Nam a urna sed ante gravida malesuada ac at lorem.";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () => [
  {
    subjectName: "Chemistry",
    firstImg: "/images/chemistry 1.png",
    secondImg: "/images/chemistry 2.png",
    subjectText: `${dummyText}`,
    itemId: getId(1),},
  
  {subjectName: "Physics",
    firstImg: "/images/physics 1.png",
    secondImg: "/images/physics 2.png",
    subjectText: `${dummyText}`,
    itemId: getId(2),},
  
  {subjectName: "Biology",
    firstImg: "/images/biology 1.png",
    secondImg: "/images/biology 2.png",
    subjectText: `${dummyText}`,
    itemId: getId(3),},
  
  {subjectName: "English",
    firstImg: "/images/english 1.png",
    secondImg: "/images/english 2.png",
    subjectText: `${dummyText}`,
    itemId: getId(4),},
  
  {subjectName: "Machine Learning",
    firstImg: "/images/machine 1.png",
    secondImg: "/images/machine 2.png",
    subjectText: `${dummyText}`,
    itemId: getId(5),},
  
  {subjectName: "Science",
    firstImg: "/images/science 1.png",
    secondImg: "/images/science 2.png",
    subjectText: `${dummyText}`,
    itemId: getId(6),},
  
  // {subjectName: "Data Structure",
  //   firstImg: "/images/data structure 1.png",
  //   secondImg: "/images/data sturcture 2.png",
  //   subjectText: `${dummyText}`,
  //   itemId: getId(7),},
  
  {subjectName: "C++",
    firstImg: "/images/c++ 1.png",
    secondImg: "/images/c++ 2.png",
    subjectText: `${dummyText}`,
    itemId: getId(8),},

  // {subjectName: "Machine Learning",
  //   firstImg: "/images/machine 1.png",
  //   secondImg: "/images/machine 2.png",
  //   subjectText: `${dummyText}`,
  //   itemId: getId(9),},
];

function ScrollableCourses() {
  const [items] = React.useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
      <div
        onMouseEnter={disableScroll}
        onMouseLeave={enableScroll}
        className="scrollableSubjectsMain"
      >
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          onWheel={onWheel}
        >
          {items.map(
            ({ subjectName, firstImg, secondImg, subjectText, itemId }) => (
              <ActionAreaCard
                firstImg={firstImg}
                secondImg={secondImg}
                subjectName={subjectName}
                subjectText={subjectText}
                itemId={itemId} // NOTE: itemId is required for track items
              />
            )
          )}
        </ScrollMenu>
      </div>
    </>
  );
}
export default ScrollableCourses;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
