 import { motion } from "framer-motion";
 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
 import { Button } from "@/components/ui/button";
 import { Badge } from "@/components/ui/badge";
 import { ExternalLink } from "lucide-react";
 
 const projects = [
   {
     title: "E-Commerce Platform",
     description:
       "A full-stack online shopping application with Spring Boot backend, React frontend, JWT authentication, and payment integration. Features include product catalog, shopping cart, order management, and admin dashboard.",
     tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Stripe"],
     image: "/placeholder.svg",
   },
   {
     title: "Task Management System",
     description:
       "A collaborative project management tool with real-time updates, role-based access control, and RESTful API. Supports team workspaces, task assignments, deadlines, and progress tracking.",
     tech: ["Spring Boot", "React", "WebSockets", "MySQL"],
     image: "/placeholder.svg",
   },
   {
     title: "API Gateway Service",
     description:
       "A microservices architecture with API gateway, service discovery, and containerized deployment. Implements rate limiting, authentication, load balancing, and circuit breaker patterns.",
     tech: ["Spring Cloud", "Docker", "Kubernetes", "Redis"],
     image: "/placeholder.svg",
   },
 ];
 
 const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: {
       staggerChildren: 0.2,
     },
   },
 };
 
 const itemVariants = {
   hidden: { opacity: 0, y: 30 },
   visible: {
     opacity: 1,
     y: 0,
     transition: { duration: 0.6 },
   },
 };
 
 export function Projects() {
   return (
     <section id="projects" className="py-20 px-6 bg-muted/30">
       <div className="container mx-auto">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-12"
         >
           <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Here are some of my recent projects showcasing my skills in full-stack
             development
           </p>
         </motion.div>
 
         <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="grid grid-cols-1 lg:grid-cols-3 gap-8"
         >
           {projects.map((project, index) => (
             <motion.div key={index} variants={itemVariants}>
               <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden group">
                 <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                   <div className="text-4xl font-bold text-primary/30 group-hover:scale-110 transition-transform duration-300">
                     {project.title.split(" ")[0]}
                   </div>
                 </div>
                 <CardHeader>
                   <CardTitle className="text-xl">{project.title}</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                   <CardDescription className="text-muted-foreground line-clamp-3">
                     {project.description}
                   </CardDescription>
                   <div className="flex flex-wrap gap-2">
                     {project.tech.map((tech, i) => (
                       <Badge
                         key={i}
                         variant="secondary"
                         className="bg-primary/10 text-primary border-0"
                       >
                         {tech}
                       </Badge>
                     ))}
                   </div>
                   <Button variant="outline" className="w-full gap-2 group-hover:border-primary group-hover:text-primary">
                     <ExternalLink className="h-4 w-4" />
                     Read Case Study
                   </Button>
                 </CardContent>
               </Card>
             </motion.div>
           ))}
         </motion.div>
       </div>
     </section>
   );
 }