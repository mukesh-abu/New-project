
import React, { useEffect, useRef } from 'react';

const clientList = [
  "Parceldeck",
  "Shreehari Education",
  "Radiance Technologies",
  "Maintedge Techlabs",
  "AavGO",
  "TeroTAM Technolabs",
  "Astics Techlabs",
  "Abilities India Pistons & Rings",
  "Oizom",
  "Fitcast",
  "Webosphere",
  "QLTech",
  "Kalintis",
  "Comptech Equipments",
  "Fuji Silvertech",
  "TD Engineering & Consulting"
];

const Clients = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const clientsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (subheadingRef.current) observer.observe(subheadingRef.current);
    if (clientsRef.current) observer.observe(clientsRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      if (clientsRef.current) observer.unobserve(clientsRef.current);
    };
  }, []);

  // Array of gradient backgrounds for client cards
  const gradientBgs = [
    "from-blue-50 to-blue-100 border-blue-200",
    "from-purple-50 to-purple-100 border-purple-200",
    "from-green-50 to-green-100 border-green-200",
    "from-yellow-50 to-yellow-100 border-yellow-200",
    "from-pink-50 to-pink-100 border-pink-200",
    "from-indigo-50 to-indigo-100 border-indigo-200",
    "from-red-50 to-red-100 border-red-200",
    "from-cyan-50 to-cyan-100 border-cyan-200"
  ];

  return (
    <section id="clients" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading reveal reveal-delay-100" ref={headingRef}>
            Our <span className="text-gradient">Clients</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-200" ref={subheadingRef}>
            Trusted by leading companies across various industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 reveal reveal-delay-300" ref={clientsRef}>
          {clientList.map((client, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${gradientBgs[index % gradientBgs.length]} rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border overflow-hidden transform hover:-translate-y-1`}
            >
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center mb-3 shadow-sm">
                  <span className="text-xl font-bold text-primary">{client.charAt(0)}</span>
                </div>
                <div className="text-center font-medium text-gray-700">
                  {client}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
