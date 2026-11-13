import Image from "next/image";
import icon from "../../../public/wz-icon.png";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas">
      <Image
        src={icon}
        width={80}
        height={80}
        alt="Loading"
        className="animate-pulse"
      />
    </div>
  );
};

export default Loading;
