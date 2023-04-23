import LargeHeading from "@/components/ui/LargeHeading";
import { FC } from "react";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
  return <LargeHeading className="flex items-center justify-center pt-36">Not Found</LargeHeading>;
};

export default NotFound;
