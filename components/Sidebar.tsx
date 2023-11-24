import Link from 'next/link';
import { useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiPagesLine } from "react-icons/ri";
import { FaBoxes } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

const Sidebar = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex">
            <div className={`bg-green-500 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
                <BsArrowLeftShort className={`bg-black text-white text-3xl rounded-full absolute -right-3 top-9 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
                <div className='inline-flex'>
                    <CgProfile className={`text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
                    <h1 className={`text-white origin-left font-medium text-xl ${!open && "scale-0"}`}>User.name</h1>
                </div>
                <div className='pt-64'>
                    <div className='inline-flex hover:text-white'>
                        <RiPagesLine className={`text-4xl rounded cursor-pointer block float-left mr-2`} />
                        <Link href={"/inventarios"} className={`flex flex-col items-center text-2xl inline-block font-bold hover:text-white ${!open && "scale-0"} `}>Inventarios</Link>
                    </div>
                    <div className='inline-flex hover:text-white pt-4'>
                        <FaBoxes className={`text-4xl rounded cursor-pointer block float-left mr-2`} />
                        <Link href={"/materiales"} className={`flex flex-col items-center text-2xl inline-block font-bold hover:text-white ${!open && "scale-0"} `}>Materiales</Link>
                    </div>
                    <div className='inline-flex hover:text-white pt-4'>
                        <FaUsers className={`text-4xl rounded cursor-pointer block float-left mr-2`} />
                        <Link href={"/usuarios"} className={`flex flex-col items-center text-2xl inline-block font-bold  ${!open && "scale-0"} `}>Usuarios</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Sidebar;