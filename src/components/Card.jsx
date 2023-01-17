export const Card = ({ img, title, author }) => {
  return (
    <div className="card ">
      <img className=" w-full h-32 sm:h-48 object-cover" src={img} alt />
      <div className=" m-4">
        <span className="font-bold">{title}</span>
        <span className="block text-gray-500 text-sm ">{author}</span>
      </div>
      {/* Badge */}
      <div className="badge ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 w-5 inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        25 mins
      </div>
    </div>
  );
};
