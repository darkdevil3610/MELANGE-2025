"use client";
import React from "react";
import DeptHero from "@/components/DeptHero";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";


const ComputerEngineering = () => {
  const eventsData = [
    {
      eventname: "Treasure hunt",
      description: "A Team consists of 4 Members  , Reg fee-100(25/person) First Prize - Fullkuzhimandi , Second Prize - rs 400",
      date: "Feb 20, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://forms.gle/bMnkvqxnshDmQcaj9",

    },
    {
      eventname: "Quiz",
      description: "A Team consists of 2 Members ,Reg fee - 40(20/person) , First - full kuzhimanthi , Second- gifthamper ",
      date: "Feb 20, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://forms.gle/UqdnQP7RZ2xqdGF5A",
    },
    {
      eventname: "Code debugging ",
      description: "Single Person Reg Fee - 20 , First prize - 500 , second prize - Gifthamper",
      date: "Feb 20, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://forms.gle/SueGfse9rdkWCsyY9",
    },
    {
      eventname: "Mobile game",
      description: "A Team Consists of 4 Members , Reg Fee 40(10/person) , Prize - Surprise ",
      date: "Feb 20, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://forms.gle/p93A1RhGbRShxv2r7" ,
    },
    {
      eventname: "Logical Game Zone",
      description: "Live Registration on 20th Feb",
      date: "Feb 20, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://goutham2056.github.io/hack/",
    },
    {
      eventname: "Ring Throw",
      description: "Live Registration on 20th Feb",
      date: "Feb 20, 2025",
      imageUrl: "/900.jpg",
      registerUrl: "https://goutham2056.github.io/hack/",
    },
   
  ];

  return (
    <div className="min-h-screen">
      <DeptHero
        title="Computer Application"
        imageSrc="/cyber.jpg"
        imageAlt="Computer Cover Image"
        description="Welcome to the Computer Application department. Explore our events here."
      />
      {/* Events Subheading */}
      <section className="py-6 sm:py-8 mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Events
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {eventsData.map((event, index) => (
              <motion.div
                key={index}
                className="w-full max-w-sm mx-auto" // Added max-w-sm and mx-auto
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  viewport: { once: true }
                }}
              >
                <EventCard
                  eventname={event.eventname}
                  description={event.description}
                  date={event.date}
                  imageUrl={event.imageUrl}
                  registerUrl={event.registerUrl}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ComputerEngineering;
