import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import { FiCodesandbox, FiHome } from "react-icons/fi";
import { timelines } from "./timelines";
import "react-vertical-timeline-component/style.min.css";
import "./App.css";

const TimeLineElement = ({ title, location, description, date, id }) => (
  <VerticalTimelineElement
    key={id}
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
    date={date}
    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    icon={<FiCodesandbox />}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{location}</h4>
    <p>{description}</p>
  </VerticalTimelineElement>
);

function App() {
  return (
    <div className="App">
      <VerticalTimeline>
        {timelines.map(el => (
          <TimeLineElement
            title={el.title}
            location={el.location}
            description={el.description}
            date={el.date}
            id={el.id}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default App;
