import { koulen } from "@/fonts/font";

export default function RootLayout({ children }) {
  return (
    
      <body className="bg-[#fdfdfd] text-black overflow-y-auto overflow-x-hidden grid place-items-center">{children}</body>
    
  );
}
