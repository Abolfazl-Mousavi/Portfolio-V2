import React from "react";
import Link from "next/link";

import { resume } from "@/constants/social";
const page = () => {
  return (
    <div className="grid place-items-center">
      <Link
        className="absolute bottom-0 right-0 mx-5 my-3 px-2 py-1 bg-blue-700 underline text-white rounded-full"
        href={resume}
      >view on docs</Link>
      <iframe
        className="w-[595px] h-screen"
        src="https://docs.google.com/document/d/e/2PACX-1vTJib6seo23S2hlFZXpeQfw7Wa2TfsXNkSI9XfODd1wgZElp7haiHgt45CIrZLBXDzBIo_mQkZRUnyP/pub?embedded=true"
      ></iframe>
    </div>
  );
};

export default page;
