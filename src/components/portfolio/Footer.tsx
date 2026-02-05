 export function Footer() {
   return (
     <footer className="py-8 px-6 border-t border-border">
       <div className="container mx-auto">
         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-muted-foreground text-sm">
             © 2024 Hebee E. All rights reserved.
           </p>
           <p className="text-muted-foreground text-sm">
             Built with <span className="text-primary">♥</span> using React & TypeScript
           </p>
         </div>
       </div>
     </footer>
   );
 }