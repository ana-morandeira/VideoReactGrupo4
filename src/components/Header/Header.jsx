import image from "./logoVideoclub.png"

function Header() {
    return (
        <header className="bg-blue-600">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <span className="logoImage inline-flex items-center gap-2">
                    <img
                        src={image}
                        alt="Logo"
                        className="w-[50px] h-[50px] inline-block"
                    />
                    <p className="text-white font-semibold text-lg">
                        React Project
                    </p>
                </span>

                <span className="text-white text-base">
                    Cards with Props
                </span>

                <span className="text-white text-sm">
                    Academic Practice
                </span>
            </div>
        </header>
    )
}

export default Header;