import Item from "./Item";

export const ItemsList = ({ data, onClick }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {data?.hits?.map((hit) => (
        <Item
          id={hit.objectID}
          key={hit.objectID}
          title={hit.title}
          points={hit.points}
          author={hit.author}
          comments={hit.num_commnets}
          url={hit.url}
          onClick={() => onClick(hit.objectID)}
        />
      ))}
    </div>
  );
};
