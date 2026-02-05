 import { useState, useEffect } from "react";
 import { Moon, Sun, Menu, X } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const navLinks = [
   { name: "Home", href: "#home" },
   { name: "Skills", href: "#skills" },
   { name: "Projects", href: "#projects" },
   { name: "Contact", href: "#contact" },
 ];
 
 export function Navbar() {
   const [isDark, setIsDark] = useState(true);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
 
   useEffect(() => {
     document.documentElement.classList.add("dark");
   }, []);
 
   useEffect(() => {
     const handleScroll = () => {
       setScrolled(window.scrollY > 50);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   const toggleTheme = () => {
     setIsDark(!isDark);
     document.documentElement.classList.toggle("dark");
   };
 
   return (
     <nav
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         scrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
       }`}
     >
       <div className="container mx-auto px-6 py-4">
         <div className="flex items-center justify-between">
           <a href="#home" className="text-2xl font-bold text-primary">
             Hebee<span className="text-foreground">.</span>
           </a>
 
           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center gap-8">
             {navLinks.map((link) => (
               <a
                 key={link.name}
                 href={link.href}
                 className="text-muted-foreground hover:text-primary transition-colors duration-300"
               >
                 {link.name}
               </a>
             ))}
             <Button
               variant="ghost"
               size="icon"
               onClick={toggleTheme}
               className="text-muted-foreground hover:text-primary"
             >
               {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
             </Button>
           </div>
 
           {/* Mobile Menu Button */}
           <div className="md:hidden flex items-center gap-4">
             <Button
               variant="ghost"
               size="icon"
               onClick={toggleTheme}
               className="text-muted-foreground hover:text-primary"
             >
               {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
             </Button>
             <Button
               variant="ghost"
               size="icon"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="text-muted-foreground"
             >
               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
             </Button>
           </div>
         </div>
 
         {/* Mobile Navigation */}
         {isMenuOpen && (
           <div className="md:hidden mt-4 pb-4 border-t border-border">
             <div className="flex flex-col gap-4 pt-4">
               {navLinks.map((link) => (
                 <a
                   key={link.name}
                   href={link.href}
                   onClick={() => setIsMenuOpen(false)}
                   className="text-muted-foreground hover:text-primary transition-colors duration-300"
                 >
                   {link.name}
                 </a>
               ))}
             </div>
           </div>
         )}
       </div>
     </nav>
   );
 }