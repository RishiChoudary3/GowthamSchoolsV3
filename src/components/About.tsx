import React from 'react';
import { Award, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center">
          <Award className="w-8 h-8 text-purple-600 mr-3" />
          Excellence in Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow">
            <div className="aspect-square w-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-purple-200">
              <img
                src="https://i.ibb.co/zbyJNXh/IMG-3157.jpg"
                alt="M. KONDAIAH Sir"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-900 mb-2">M. KONDAIAH Sir</h3>
              <p className="text-purple-600 font-medium mb-4">M.A, B.Ed, M.Phil</p>
              <p className="text-gray-600">
                Leading with vision and dedication to transform education and shape future leaders.
              </p>
            </div>
          </div>

          <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow">
            <div className="aspect-square w-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-purple-200">
              <img
                src="https://i.ibb.co/L8hzX8w/IMG-3150.jpg"
                alt="V. PADMAJA Madam"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-900 mb-2">V. PADMAJA Madam</h3>
              <p className="text-purple-600 font-medium mb-4">M.Sc, B.Ed, M.Phil</p>
              <p className="text-gray-600">
                Committed to excellence in education and nurturing young minds for a brighter future.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-purple-800 font-medium">
            Under their expert guidance, Gowtham Schools continues to set new standards in education excellence.
          </p>
          <p className="mt-4 text-gray-600 mb-12">
            Our leadership team brings decades of combined experience in education, ensuring the highest quality of learning for every student.
          </p>

          {/* Award Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
              <div className="relative h-64 md:h-80">
                <img 
                  src="https://i.ibb.co/JtNmcsZ/Embedded-Image.jpg"
                  alt="Best Managed School Award"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-purple-900/30"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full inline-block mb-4">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">BEST MANAGED SCHOOL AWARD</h2>
                  <p className="text-xl mb-2">2019</p>
                  <p className="text-purple-100">Indian School Awards @ Delhi</p>
                  
                  <Link 
                    to="/achievements"
                    className="inline-block mt-6 bg-white text-purple-700 px-6 py-2 rounded-full font-semibold hover:bg-purple-50 transition-all transform hover:scale-105"
                  >
                    View All Achievements
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}