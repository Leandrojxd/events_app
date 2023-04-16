import SingleEvent from "../single-event";

const EventPage = ({data}) => {

    return (
      <SingleEvent data={data}/>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const {allEvents} = data;
  
  const allPaths = allEvents.map((path) => {
    return {
      params:{
        cat: path.city,
        id: path.id,
      }
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context){
    console.log(context);
    const {allEvents} = await import('/data/data.json')
    const id = context.params.id;
    const eventData = allEvents.find(ev => (id === ev.id))
    
    return{
        props:{data: eventData},
    }
}