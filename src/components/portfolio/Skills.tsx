 import { motion } from "framer-motion";
 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
 import { Server, Layout, Database, Cloud, Boxes, TestTube } from "lucide-react";
 
 const skills = [
   {
     icon: Server,
     title: "Java & Spring Boot",
     description:
       "Building enterprise-grade backend systems with Spring Boot, REST APIs, and microservices architecture",
   },
   {
     icon: Layout,
     title: "React & TypeScript",
     description:
       "Creating responsive, type-safe frontend applications with modern React patterns and hooks",
   },
   {
     icon: Database,
     title: "Database Design",
     description:
       "Designing and optimizing relational databases with PostgreSQL, MySQL, and Hibernate ORM",
   },
   {
     icon: Cloud,
     title: "Cloud & DevOps",
     description:
       "Deploying applications with Docker, Kubernetes, and CI/CD pipelines on AWS/Azure",
   },
   {
     icon: Boxes,
     title: "System Architecture",
     description:
       "Designing scalable, maintainable systems following SOLID principles and design patterns",
   },
   {
     icon: TestTube,
     title: "Testing & Quality",
     description:
       "Implementing comprehensive test suites with JUnit, Mockito, and integration testing",
   },
 ];
 
 const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: {
       staggerChildren: 0.1,
     },
   },
 };
 
 const itemVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: {
     opacity: 1,
     y: 0,
     transition: { duration: 0.5 },
   },
 };
 
 export function Skills() {
   return (
     <section id="skills" className="py-20 px-6">
       <div className="container mx-auto">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-12"
         >
           <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             I specialize in building full-stack web applications using modern
             technologies and best practices
           </p>
         </motion.div>
 
         <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
         >
           {skills.map((skill, index) => (
             <motion.div key={index} variants={itemVariants}>
               <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                 <CardHeader>
                   <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                     <skill.icon className="h-6 w-6 text-primary" />
                   </div>
                   <CardTitle className="text-xl">{skill.title}</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <CardDescription className="text-muted-foreground">
                     {skill.description}
                   </CardDescription>
                 </CardContent>
               </Card>
             </motion.div>
           ))}
         </motion.div>
       </div>
     </section>
   );
 }