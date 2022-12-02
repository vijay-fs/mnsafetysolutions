import homeBanner from "../assets/img/MNSAFETY-WEB-BANNER-1366-400.min.jpg";
export default function HomeBanner() {
  return (
    <div>
      <img
        className="w-full mt-4 md:mt-0 rounded-b-[10px] rounded-b-[10px] rounded-b-[10px] md:rounded-b-[32px]"
        src={homeBanner}
        alt="banner"
      />
    </div>
  );
}
