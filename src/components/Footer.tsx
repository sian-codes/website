const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
            <p className="text-sm">
            &copy; {new Date().getFullYear()} SNK - All rights reserved.
            </p>
            <p className="text-xs mt-2">
            Built with ❤️ using React, TypeScript and Tailwind CSS.
            </p>
        </div>
        </footer>
    );
}

export default Footer;
