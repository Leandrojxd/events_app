import Image from "next/image";
import Link from "next/link";
const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Events Page</h1>
      <div>
        {data.map((ev) => (
          <Link legacyBehavior key={ev.id} href={`/events/${ev.id}`} passHref>
            <a href={`/events/${ev.id}`}>
              <Image height={200} width={300} alt={ev.title} src={ev.image} />
              <h2>{ev.title}</h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
