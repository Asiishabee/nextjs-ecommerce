import Link from "next/link"
import { RootStateOrAny, useSelector } from "react-redux";


const Navbar = () => {
  const state = useSelector((state:RootStateOrAny) => state.handleCart)
  return (
    <>
      <nav className=" shadow-lg w-full bg-blue-600">
        <div className=" p-4">
          <div className="flex justify-between">
           <Link  href="/" ><a className="flex items-center py-4 px-2">
              <span className="text-lg font-semibold text-white">
                MyShop
              </span>
            </a></Link>
            <div>
              <div className="hidden items-center space-x-1 md:flex">
              <Link  href="/" ><a href="" className="py-4 px-2 text-white  ">
                  Home
                </a></Link>
                <Link  href="/AllProducts" ><a
                  href=""
                  className="py-4 px-2 font-semibold text-white transition duration-300 hover:text-blue-500"
                >
                  Products
                </a></Link>
                <Link href="/contact" ><a
                  href=""
                  className="py-4 px-2 font-semibold text-white transition duration-300 hover:text-blue-500"
                >
                  Contact Us
                </a></Link>
              </div>
            </div>

            <div className="hidden items-center space-x-3 md:flex ">
            <Link href="/login" ><a
                href=""
                className="rounded py-2 px-2 font-medium text-white transition duration-300 hover:bg-blue-500 hover:text-white"
              >
                Log In
              </a></Link>
              <Link href="/signup" ><a
                href=""
                className="rounded py-2 px-2 font-medium  transition duration-300 text-white hover:text-white"
              >
                Sign Up
              </a></Link>
              <Link href="/cart" ><a
                href=""
                className="rounded py-2 px-2 font-medium  transition duration-300 text-white hover:text-white"
              >
                Cart({state.length}) 
              </a></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
