function Card(props) {
  return (
    <div className="flex flex-col text-white md:flex-row md:justify-between">
      {props.children}
      <div className="md:flex md:flex-col md:my-auto md:justify-items-end md:w-1/4">
        <p className="mt-6 text-sm md:mt-1 md:text-xl md:tracking-wider lg:text-2xl">
          {props.year}
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-wider mb-8 md:mb-0 md:text-3xl lg:text-4xl">
          {props.companyName}
        </h1>
      </div>
      <p className="text-xs leading-6 md:w-5/12 md:my-auto md:text-lg lg:text-xl">
        {props.personalNote}
      </p>
    </div>
  );
}

export default Card;
