import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../components/Card";

export default function Home() {
  const activities = [
    {
      title: "Actividad 1",
      subtitle: "",
      status: "En curso",
      href: "/actividad1"
    },
    {
      title: "Actividad 2",
      subtitle: "",
      status: "En curso",
      href: ""
    },
    {
      title: "Actividad 3",
      subtitle: "",
      status: "En curso",
      href: ""
    }
  ];
  return (
    <div className="home">
      <Carousel>
        {activities.map((activiti) => (
          <Card {...activiti} />
        ))}
      </Carousel>
    </div>
  );
}
