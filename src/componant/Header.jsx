

function Header(){
    return(
        <div class="p-4 fixed left-0 bg-white dark:bg-black z-50 right-0">

            <header className=" flex justify-between dark: text-white items-center "></header>

            {/* Left Side */}
            <div>
                <img src={logo} className="h-6 w-6" alt="" />
            </div>
           
        </div>
    )
}

export default Header;