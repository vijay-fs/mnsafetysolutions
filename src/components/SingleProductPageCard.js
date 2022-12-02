export default function SingleProductPageCard(props) {
  return (
    <div className="md:pb-10 px-10 pb-10 md:pb-0 md:px-0 md:pt-20 md:grid md:grid-cols-2 md:mx-6 h-full rounded-t-[20px] rounded-b-[20px] shadow-2xl md:rounded-t-[32px] md:rounded-b-[32px] overflow-hidden bg-white">
      <div className="p-10 md:p-0 md:mx-auto md:my-auto">
        <img className="md:px-40 md:pb-20" src={props.img} alt={props.id} />
      </div>
      <div className="px-8 md:mx-auto md:my-auto md:pr-40">
        <h2 className="text-slate-700 text-2xl font-bold md:font-bold md:text-4xl md:mb-4 pt-4 md:pt-0">
          {props.id}
        </h2>
        <h3 className="text-slate-700 text-md font-semibold md:font-semibold md:text-2xl md:mb-4 py-4 md:py-2">
          {props.title}
        </h3>
        <p className="text-justify text-sm leading-6 pb-8">
          {props.description}
        </p>
      </div>
    </div>
  );
}
