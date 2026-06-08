import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavlink = ({path,children}) => {
 const pathName=usePathname()

console.log(pathName,path)

 
 
  return (
    <Link className={`font-semibold hover:text-blue-500 transition-colors duration-300 ${pathName===path && 'text-blue-500 border-b border-b-blue-500'}`} href={path}>
      {children}
    </Link>
  );
};2

export default MyNavlink;