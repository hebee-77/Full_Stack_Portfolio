 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
 import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
 
 export function Contact() {
   return (
     <section id="contact" className="py-20 px-6">
       <div className="container mx-auto">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-12"
         >
           <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Have a project in mind or want to collaborate? Feel free to reach out!
           </p>
         </motion.div>
 
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
           {/* Contact Info */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="space-y-6"
           >
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                 <Mail className="h-5 w-5 text-primary" />
               </div>
               <div>
                 <p className="font-medium">Email</p>
                 <p className="text-muted-foreground">hebee@example.com</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                 <MapPin className="h-5 w-5 text-primary" />
               </div>
               <div>
                 <p className="font-medium">Location</p>
                 <p className="text-muted-foreground">San Francisco, CA</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                 <Phone className="h-5 w-5 text-primary" />
               </div>
               <div>
                 <p className="font-medium">Phone</p>
                 <p className="text-muted-foreground">+1 (555) 123-4567</p>
               </div>
             </div>
 
             {/* Social Links */}
             <div className="pt-6">
               <p className="font-medium mb-4">Connect with me</p>
               <div className="flex gap-4">
                 <Button
                   variant="outline"
                   size="icon"
                   className="hover:border-primary hover:text-primary"
                 >
                   <Github className="h-5 w-5" />
                 </Button>
                 <Button
                   variant="outline"
                   size="icon"
                   className="hover:border-primary hover:text-primary"
                 >
                   <Linkedin className="h-5 w-5" />
                 </Button>
                 <Button
                   variant="outline"
                   size="icon"
                   className="hover:border-primary hover:text-primary"
                 >
                   <Twitter className="h-5 w-5" />
                 </Button>
               </div>
             </div>
           </motion.div>
 
           {/* Contact Form */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
           >
             <Card className="bg-card/50 border-border">
               <CardHeader>
                 <CardTitle>Send a Message</CardTitle>
                 <CardDescription>
                   Fill out the form below and I'll get back to you as soon as
                   possible.
                 </CardDescription>
               </CardHeader>
               <CardContent>
                 <form className="space-y-4">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <Input placeholder="Your Name" className="bg-background" />
                     <Input
                       type="email"
                       placeholder="Your Email"
                       className="bg-background"
                     />
                   </div>
                   <Input placeholder="Subject" className="bg-background" />
                   <Textarea
                     placeholder="Your Message"
                     rows={5}
                     className="bg-background resize-none"
                   />
                   <Button type="submit" className="w-full gap-2">
                     <Send className="h-4 w-4" />
                     Send Message
                   </Button>
                 </form>
               </CardContent>
             </Card>
           </motion.div>
         </div>
       </div>
     </section>
   );
 }