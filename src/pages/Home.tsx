import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Home, Info, MapPin, Star, Github, Linkedin, Mail } from 'lucide-react';
import { communityInfo, serviceProviders } from '../data/communityData';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const filteredInfo = searchQuery
    ? communityInfo.filter(info =>
        info.keywords.some(keyword => 
          keyword.includes(searchQuery.toLowerCase()) ||
          info.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          info.content.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : communityInfo;

  const filteredServices = searchQuery
    ? serviceProviders.filter(provider =>
        provider.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : serviceProviders;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="bg-blue-600 text-white py-20"
        style={{
          backgroundImage: 'url("../assets/11.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(37, 99, 235, 0.8)'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to Our Community Hub
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Find the information and services you need quickly and easily
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for information or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-shadow cursor-pointer">
            <Home className="w-8 h-8 text-blue-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">Residents</h3>
              <p className="text-gray-600">Services & Information</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-shadow cursor-pointer">
            <Info className="w-8 h-8 text-blue-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">Updates</h3>
              <p className="text-gray-600">Latest News & Notices</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-shadow cursor-pointer">
            <MapPin className="w-8 h-8 text-blue-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">Locations</h3>
              <p className="text-gray-600">Important Places</p>
            </div>
          </div>
        </div>

        {/* Community Information */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Community Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredInfo.map(info => {
            const Icon = info.icon;
            return (
              <div
                key={info.id}
                className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg cursor-pointer"
                onClick={() => navigate(`/details/${info.id}`)}
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">{info.title}</h3>
                </div>
                <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
              </div>
            );
          })}
        </div>

        {/* Local Services */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Local Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map(provider => {
            const Icon = provider.icon;
            return (
              <div key={provider.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Icon className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">{provider.name}</h3>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {provider.category}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                
                  <span className="ml-1 text-gray-700">{provider.rating}</span>
                  <span className="ml-2 text-gray-500">({provider.reviews} reviews)</span>
                </div>
                <p className="text-gray-600">📞 {provider.phone}</p>
                <span className="ml-[20px] text-gray-400 w-4">{provider.description}</span>

              </div>
            );
          })}
        </div>
      </div>

          {/* current events near you */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Current Events Near You</h2>
          <p className="text-gray-600 mb-4">
            Stay updated with the latest events happening in your community!
          </p>
          <a
            href="/events"
            className="text-blue-600 hover:text-blue-800 flex items-center justify-center"
          >
            <MapPin className="w-4 h-4 mr-2" />
            View Events
          </a>
        </div>
      </div>
   

      {/* promot your business */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Promote Your Business</h2>
          <p className="text-gray-600 mb-4">
            Want to get your business listed? Contact us for more information!
          </p>
          <a
            href="mailto:LWd0r@example.com"
            className="text-blue-600 hover:text-blue-800 flex items-center justify-center"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Us
          </a>
        </div>
      </div>
      {/* Footer Section */}

      {/* Developer Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Developer Information</h2>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">Israel B.</h3>
              <p className="text-blue-100 text-lg mb-4">Web Developer</p>
              <p className="text-blue-100 mb-6">
                Passionate about creating user-friendly and efficient web applications
                that make a difference in people's lives.
              </p>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Israel2000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors flex items-center"
              >
                <Github className="w-6 h-6 mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ib2000/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors flex items-center"
              >
                <Linkedin className="w-6 h-6 mr-2" />
                LinkedIn
              </a>
              <a
                href="mailto: webinnovativetech@gmail.com"
                className="hover:text-blue-200 transition-colors flex items-center"
              >
                <Mail className="w-6 h-6 mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;