import Image from "next/image";
import Link from "next/link";

const EventsCatPage = ({ data , pageName}) => {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      <div>
        {data.map((ev) => (
          <Link legacyBehavior key={ev.id} href={`/events/${ev.city}/${ev.id}`}
          passHref>
          <a href={`/events/${ev.city}/${ev.id}`}>
            <Image height={200} width={300} alt={ev.title} src={ev.image} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false, //ONLY RENDER THE PAGES WE SPECIFY HERE
  };
}

export async function getStaticProps(context) {
  console.log("This is the context");
  const id = context?.params.cat;
  const { allEvents } = await import("data/data.json");

  const data = allEvents.filter((ev) => ev.city === id); // THIS IS FOR GET ALL THE EVENT DEPENDING ON THE ID
  console.log("These are all the events: " + allEvents);
  console.log("This is the data:" + data);
  console.log("This is the id:" + id);
  return {
    props: { data , pageName: id},
  };
}
