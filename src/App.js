import React from 'react';

export default function SeedRisingInvestments() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-gray-900 shadow-lg border-b border-blue-100">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <img 
                        src="/imgs/logo2.png" 
                        alt="Financial Advisor" 
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Seeds Rising Investments</h1>
                <p className="text-white font-medium text-lg">Investing in the seed for tomorrow</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <span className="bg-gradient-to-r from-green-400 to-green-800 text-white px-6 py-3 rounded-full text-md font-bold border-2 border-green-400 shadow-lg ">
                ✓ AMFI REGISTERED
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Your Trusted Financial Partner</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Navigate your financial journey with confidence. We provide comprehensive investment solutions, 
            insurance planning, and wealth management services tailored to your unique goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Professional Services</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Mutual Funds */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Mutual Fund Distribution</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">SIP (Systematic Investment Plans)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Lumpsum Investments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Portfolio Review & Rebalancing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Goal-based Investment Planning</span>
                </div>
              </div>
            </div>

            {/* Goal Planning */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Goal-Based Planning</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Child Education Planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Marriage & Wedding Planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Home Purchase Planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Dream Vacation Planning</span>
                </div>
              </div>
            </div>

            {/* Retirement Planning */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Retirement & Tax Planning</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">National Pension Scheme (NPS)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Tax Saving Investments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Retirement Corpus Planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">ELSS Tax Saver Funds</span>
                </div>
              </div>
            </div>

            {/* Insurance */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 col-span-1 md:col-span-2 xl:col-span-3">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Insurance</h3>
              </div>

              {/* Main Insurance Image */}
              <div className="mt-8 mb-12 flex justify-center">
                  <img 
                    src="/imgs/health.jpeg" 
                    alt="Comprehensive Health Insurance Coverage" 
                    className="w-90 h-40 object-cover object-center rounded-lg shadow-md"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
              </div>
              
              {/* Four major categories in horizontal layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-6">
                
                {/* Health Plans */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Health Insurance</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">Individual</p>
                    <p className="text-gray-600">Family Floater</p>
                    <p className="text-gray-600">Senior Citizen Plans</p>
                    <p className="text-gray-600">Critical Illness</p>
                    <p className="text-gray-600">Top-up</p>
                    <p className="text-gray-600">Outpatient care</p>
                  </div>
                </div>

                {/* Travel */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Travel Insurance</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">Domestic Travel</p>
                    <p className="text-gray-600">International Travel</p>
                    <p className="text-gray-600">Student Travel Protect</p>
                    <p className="text-gray-600">Corporate Travel Protect</p>
                  </div>
                </div>

                {/* Group Insurance */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197v0M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Group Insurance</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">Group Health</p>
                    <p className="text-gray-600">Group Personal Accident</p>
                    <p className="text-gray-600">Corporate Medical</p>
                  </div>
                </div>

                {/* Accident */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Accident Insurance</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">Individual Accident Care</p>
                    <p className="text-gray-600">Family Accident Care</p>
                  </div>
                </div>

              </div>

              {/* Life Insurance Companies */}
              <div className="mb-12">
                <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Life Insurance Companies</h4>
                <div className="flex justify-center">
                  <img 
                    src="/imgs/life_logo.jpeg" 
                    alt="Life Insurance Companies" 
                    className="w-120 h-60 object-cover object-center rounded-lg shadow-md"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                </div>
              </div>

              {/* Health Insurance Companies */}
              <div className="mb-1">
                <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Non-Life Insurance Companies</h4>
                <div className="flex justify-center">
                  <img 
                    src="/imgs/health_logo.jpeg" 
                    alt="Non-Life Insurance Companies" 
                    className="w-120 h-60 object-cover object-center rounded-lg shadow-md"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me & Contact Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">

            {/* About Me */}
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About Your Advisor</h2>
                <div className="w-16 h-1 bg-green-600 mx-auto"></div>
              </div>

              <div className="flex flex-col items-center mb-10">
                <div className="relative mb-8">
                  <div className="w-40 h-40 bg-gradient-to-br from-green-100 to-green-200 rounded-full p-2 shadow-lg">
                    <div className="w-full h-full bg-white rounded-full overflow-hidden border-4 border-green-500 shadow-md">
                      <img 
                        src="/imgs/profile.jpeg" 
                        alt="Financial Advisor" 
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>

                <div className="text-center space-y-6 max-w-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I am a AMFI-registered Mutual Fund Distributor 
                    with over a decade of experience in wealth management and comprehensive financial planning.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    My expertise lies in creating personalized investment strategies that align 
                    with your unique financial goals, risk tolerance, and life stage requirements, 
                    ensuring sustainable wealth creation and financial security.
                  </p>
                </div>
              </div>

            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                <div className="w-16 h-1 bg-green-600 mx-auto mb-4"></div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-2">Phone Numbers</h4>
                    <p className="text-gray-600 text-lg mb-1">+91 8454918888</p>
                    <p className="text-gray-600 text-lg">+91 9869050297</p>
                    <p className="text-gray-600 text-lg">+91 9969198787</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-2">Email Addresses</h4>
                    <p className="text-gray-600 text-lg mb-1">jayant.tambve@gmail.com</p>
                    <p className="text-gray-600 text-lg">star.riajtambve@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-2">Office Address</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      D-3 Jai Durga Housing Society,<br/>
                      Near Ganesh Mandir, Kajupada, Kurla (W),<br/>
                      Mumbai, Maharashtra 400072
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Open your mutual funds account today.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors duration-300 shadow-lg" href="http://p.njw.bz/33542">
              Click here: http://p.njw.bz/33542
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                        src="/imgs/logo2.png" 
                        alt="Financial Advisor" 
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
              </div>
              <h3 className="text-2xl font-bold text-white-400">Seeds Rising Investments</h3>
            </div>
            <p className="text-gray-300 mb-6 text-lg">Investing in the seed for tomorrow</p>

            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400 mb-3">
                © 2025 Seeds Rising Investments. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 max-w-4xl mx-auto leading-relaxed">
                Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully. 
                Past performance is not indicative of future results. Consult your financial advisor before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

