 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { FileText, FolderOpen } from "lucide-react";
 
 export function Hero() {
   return (
     <section
       id="home"
       className="min-h-screen flex items-center justify-center pt-20 px-6"
     >
       <div className="container mx-auto">
         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
           {/* Text Content */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             className="flex-1 text-center lg:text-left"
           >
             <p className="text-primary font-medium mb-4">Hello, I'm</p>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
               Hebee E
             </h1>
             <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6">
               Full Stack Developer
             </h2>
             <p className="text-muted-foreground text-lg max-w-xl mb-8">
               Building robust, scalable web applications with clean architecture
               and modern technologies. Specializing in Java, Spring Boot, and
               React to deliver enterprise-grade solutions.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <Button size="lg" className="gap-2">
                 <FileText className="h-5 w-5" />
                 View Resume
               </Button>
               <Button size="lg" variant="outline" className="gap-2" asChild>
                 <a href="#projects">
                   <FolderOpen className="h-5 w-5" />
                   View Projects
                 </a>
               </Button>
             </div>
           </motion.div>
 
           {/* Profile Image */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex-1 flex justify-center"
           >
             <div className="relative">
               <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                 <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-6xl md:text-7xl font-bold text-primary-foreground">
                   HE
                 </div>
               </div>
               {/* Decorative elements */}
               <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
               <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/60 rounded-full animate-pulse delay-300" />
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 }