import Image from "next/image";

function SpecialCard(props: any) {
  return (
    <div className="flex flex-col p-4 w-full border rounded-3xl">
      <div className="flex object-cover m-auto rounded-2xl overflow-hidden motion-safe:hover:scale-110">
        <Image src={props.image} alt={props.alt} width={300} height={244} />
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold tracking-wider m-2">{props.title}</h1>
        <p className="tracking-normal font-thin text-sm mb-4">{props.note}</p>
        <div className="flex flex-row flex-wrap justify-around mb-2">
          {props.children}
        </div>
      </div>
      {/* each div is going to house an image, a title for the project, short note on it and tech stack used. */}
    </div>
  );
}

export default SpecialCard;
