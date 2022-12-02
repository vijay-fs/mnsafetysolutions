import { Link, useLocation } from "react-router-dom";

export default function ProductCard(props) {
  let { pathname } = useLocation();
  pathname = `/${props.catKey}/${props.id}`;
  return (
    <Link to={pathname}>
      <div className="my-8 md:my-4 mx-auto md:mx-4 w-80 flex justify-center">
        <div
          className="w-screen mx-auto h-full mx-auto rounded-tl-[34px] rounded-br-[34px]
         md:h-full md:w-full md:rounded-tl-[40px] md:rounded-br-[40px] overflow-hidden shadow-2xl hover:-translate-y-1 hover:scale-80 duration-300 bg-white"
        >
          <div className="flex justify-center p-10 md:p-8 md:h-60">
            <img
              className="bg-origin-content content-center"
              src={props.img}
              alt={props.id}
            />
          </div>
          <div className="h-full px-6 md:h-40 md:mt-2 md:py-2 md:px-4">
            <h3 className="font-semibold  py-1 text-lg md:font-bold md:text-xl text-slate-700">
              {props.id}
            </h3>
            <h4 className="font-semibold py-2 text-md md:font-semibold md:mb-2 text-slate-700">
              {props.title}
            </h4>
            <p className="truncate font-regular text-sm md:font-regular md:mb-2">
              {props.description}
            </p>
          </div>
          <div className="mt-4 md:mt-1">
            <button className="font-semibold text-md w-full h-16 md:w-full md:h-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-xl text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more...
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
