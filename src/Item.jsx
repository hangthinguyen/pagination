const Item = ({ title, points, author, comments, url, onClick }) => {
  return (
    <div className="p-4 bg-white rounded w-full flex flex-col gap-1">
      <span className="font-bold tracking-widest text-[#102a42]">{title}</span>

      <div className="text-[#617d98] mb-2">
        <span>
          {points} points by {author} |
        </span>

        <span>{comments} comments</span>
      </div>

      <div className="flex gap-4 text-sm">
        <a
          href={url}
          target="_blank"
          className="text-[#49a6e9] font-semibold"
          rel="noreferrer"
        >
          Read more
        </a>

        <button className="text-[#bb2525]" onClick={onClick}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Item;
