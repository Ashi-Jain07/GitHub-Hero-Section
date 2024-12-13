function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-lg font-bold">GitHub Clone</div>
            <div className="space-x-4">
                <a href="#features" className="text-xl hover:bg-white hover:text-black p-1 px-1.5 rounded-sm">Features</a>
                <a href="#pricing" className="text-xl hover:bg-white hover:text-black p-1 px-1.5 rounded-sm">Pricing</a>
                <a href="#contact" className="text-xl hover:bg-white hover:text-black p-1 px-1.5 rounded-sm">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;