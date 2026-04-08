
import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
} from 'lucide-react';

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  // Define the consistent gradient colors for decorative elements
  const darkBlue = "#1e3a8a"; // Dark Blue
  const tealMain = "#28AFA3"; // Teal

  // Color for contact info text (solid dark blue)
  const contactTextColor = "text-[#1e3a8a]";

  // Gradient style for section dividers - fully visible from left to right
  const gradientLineStyle = {
    height: '2px',
    background: `linear-gradient(90deg, ${darkBlue} 0%, ${tealMain} 100%)`,
    width: '100%',
    marginBottom: '0.75rem',
  };

  return (
    <div className="min-h-screen py-8 md:py-12 px-4 print:p-0 bg-gray-100 print:bg-white flex flex-col items-center">
      {/* Action Bar */}
      <div className="w-full max-w-[850px] mb-6 flex justify-end gap-4 no-print">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-[#28AFA3] text-white px-6 py-2 rounded-md hover:bg-[#1f8a81] transition-all shadow-md font-medium active:scale-95"
        >

        </button>
      </div>

      {/* Resume Container */}
      <div className="w-full max-w-[850px] bg-white shadow-2xl print-shadow-none min-h-[100vh] print:min-h-0 p-8 md:p-10 text-black relative overflow-hidden print:text-[12.5px]">

        {/* Top Gradient Border */}
        <div
          className="absolute top-0 left-0 w-full h-[6px]"
          style={{ background: `linear-gradient(90deg, ${darkBlue} 0%, ${tealMain} 100%)` }}
        ></div>

        {/* Header Section - Matched to image layout */}
        <header className="text-center pt-2">
          <h1 className="text-5xl font-extrabold tracking-tight text-black mb-4">Karishma Saxena</h1>

          {/* Title Strip with Gradient - Matches Hitesh Arora layout */}
          <div className="w-full mb-4">
            <div
              className="py-1.5 px-6 shadow-sm flex justify-center items-center"
              style={{ background: `linear-gradient(90deg, ${darkBlue} 0%, ${tealMain} 100%)` }}
            >
              <span className="text-white font-bold text-xl uppercase tracking-widest">
                AI / Machine Learning Engineer
              </span>
            </div>
          </div>

          {/* Contact Details - Single line with Solid Dark Blue Text */}
          <div className="flex justify-center items-center gap-6 text-[13px] font-bold mb-3 whitespace-nowrap">
            <div className="flex items-center gap-1.5">
              <Phone size={14} style={{ color: darkBlue }} />
              <span className={contactTextColor}>+91-7522896206</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={14} style={{ color: darkBlue }} />
              <a href="mailto:saxenakarishma13@gmail.com" className={`hover:underline ${contactTextColor}`}>saxenakarishma13@gmail.com</a>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} style={{ color: darkBlue }} />
              <span className={contactTextColor}>Bangalore, India</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Linkedin size={14} style={{ color: darkBlue }} />
              <a
                href="https://www.linkedin.com/in/karishma-saxena-a49134261/"
                target="_blank"
                rel="noreferrer"
                className={`hover:underline ${contactTextColor}`}
              >
                linkedin.com/in/karishma-saxena
              </a>
            </div>
          </div>

          {/* Divider line below contact info */}
          <div style={gradientLineStyle}></div>
        </header>

        {/* Summary Section - Reduced to 3 lines */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-tight text-black mb-1">Summary</h2>
          <div style={gradientLineStyle}></div>
          <p className="text-[14px] leading-relaxed text-black text-justify font-medium">
            Dedicated AI/ML Engineer specializing in NLP, Classification, and Deep Learning models with a solid Computer Science foundation. Proficient in data preprocessing and visualization using Python-based tools to build impactful products. Experienced Frontend Developer adept at integrating and presenting complex machine learning outputs for seamless real-world applications.
          </p>
        </section>

        {/* Key Skills Section - Bullet separated text style from PDF */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-tight text-black mb-1">Key Skills</h2>
          <div style={gradientLineStyle}></div>
          <div className="text-[13.5px] leading-relaxed font-bold text-center px-4 text-black">
            • Machine Learning Methodologies • Supervised & Unsupervised Learning • Text Classification • Data Mining & Analytics
            • Predictive & Statistical Modelling • Natural Language Processing (NLP) • Deep Learning Fundamentals
            • Data Analysis & Visualization • Feature Engineering • Model Evaluation • Python Programming • Applied AI & ML Workflows
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-tight text-black mb-1">Technical Skills</h2>
          <div style={gradientLineStyle}></div>
          <div className="text-[14px] space-y-2 text-black font-medium">
            <p><strong className="font-extrabold text-black">Languages:</strong> Python, JavaScript, SQL</p>
            <p><strong className="font-extrabold text-black">Packages / Libraries:</strong> Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn, OpenCV, TensorFlow, NLTK, Spacy</p>
            <p><strong className="font-extrabold text-black">Machine / Deep Learning:</strong> Linear Regression, Logistic Regression, Decision Tree, Support Vector Machine (SVM), K-Means Clustering, CNN, RNN (basic)</p>
            <p><strong className="font-extrabold text-black">Natural Language Processing:</strong> Text Classification, Tokenization, Lemmatization, NLP Preprocessing, Sentiment Analysis</p>
            <p><strong className="font-extrabold text-black">Database:</strong> PostgreSQL, SQL Server</p>
            <p><strong className="font-extrabold text-black">Statistics / ML:</strong> Regression Techniques, Exploratory Data Analysis (EDA), Hypothesis Testing</p>
            <p><strong className="font-extrabold text-black">Frontend & ML Visualization:</strong> React, HTML5, CSS3, REST API Integration</p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-tight text-black mb-1">Professional Experience</h2>
          <div style={gradientLineStyle}></div>

          <div className="mb-6">
            <div className="flex justify-between items-baseline font-extrabold text-[15px] text-black">
              <span>Frontend Developer (Data & AI-Integrated Applications)</span>
              <span className="text-xs uppercase font-bold text-black">Jan 2025 – Nov 2025</span>
            </div>
            <div className="flex justify-between items-baseline mb-2 italic text-[14px] font-extrabold text-black">
              <span>Ravana Logistics & Technologies Pvt. Ltd.</span>
              <span className="font-bold text-black">Bangalore, India</span>
            </div>
            <ul className="list-disc ml-5 text-[13.5px] space-y-1.5 leading-snug text-black text-justify pr-2 font-medium">
              <li>Developed scalable React-based dashboards for logistics platforms handling structured and API-driven datasets.</li>
              <li>Implemented filtering, pagination, and role-based views to support operational and analytical workflows.</li>
              <li>Collaborated with backend teams to integrate REST APIs and display data insights effectively.</li>
              <li>Optimized UI performance for data-heavy applications, improving responsiveness and usability.</li>
            </ul>
          </div>

          <div className="mb-2">
            <div className="flex justify-between items-baseline font-extrabold text-[15px] text-black">
              <span>Frontend Developer – AI Product Interface</span>
              <span className="text-xs uppercase font-bold text-black">Jan 2024 – Aug 2024</span>
            </div>
            <div className="flex justify-between items-baseline mb-2 italic text-[14px] font-extrabold text-black">
              <span>Legals Log Technologies</span>
              <span className="font-bold text-black">Remote / Bangalore</span>
            </div>
            <ul className="list-disc ml-5 text-[13.5px] space-y-1.5 leading-snug text-black text-justify pr-2 font-medium">
              <li>Designed and implemented frontend interfaces for an AI-powered legal assistance platform.</li>
              <li>Integrated AI-generated outputs into workflows such as case tracking and document-related views.</li>
              <li>Focused on clean UI, usability, and structured presentation of AI-driven data.</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-tight text-black mb-1">Projects</h2>
          <div style={gradientLineStyle}></div>

          <div className="space-y-4">
            <div>
              <p className="font-extrabold text-[15px] mb-1 text-black flex items-center justify-between">
                <span>Stock Portfolio Management & Prediction (ML)</span>
                <span className="text-[11px] font-extrabold text-black">Python, Pandas, Scikit-Learn</span>
              </p>
              <ul className="list-disc ml-5 text-[13.5px] space-y-1 text-black font-medium">
                <li>Performed data preprocessing and applied regression techniques to analyze stock trends.</li>
                <li>Visualized financial insights using Matplotlib and Seaborn for interactive dashboards.</li>
              </ul>
            </div>

            <div>
              <p className="font-extrabold text-[15px] mb-1 text-black flex items-center justify-between">
                <span>Text Classification System (NLP)</span>
                <span className="text-[11px] font-extrabold text-black">NLTK, Python</span>
              </p>
              <ul className="list-disc ml-5 text-[13.5px] space-y-1 text-black font-medium">
                <li>Implemented NLP preprocessing (tokenization, lemmatization) and built classification models for automated text tagging.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-tight text-black mb-1 text-black">Education</h2>
          <div style={gradientLineStyle}></div>

          <div className="space-y-4">
            <div className="flex justify-between items-baseline font-extrabold text-[15px] text-black">
              <div className="flex flex-col">
                <span>Bachelor of Technology in CSE (Artificial Intelligence)</span>
                <span className="font-extrabold italic text-sm text-black">Teerthanker Mahaveer University</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs uppercase font-bold text-black">Graduated 2025</span>
                <span className="font-extrabold text-black">CGPA: 8.3 / 10</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline text-[15px] text-black">
              <div className="flex flex-col">
                <span className="font-extrabold">Senior Secondary (Class XII)</span>
                <span className="italic text-sm text-black font-bold">DON & Donna Convent School</span>
              </div>
              <span className="font-extrabold">CGPA: 7.2</span>
            </div>

            <div className="flex justify-between items-baseline text-[15px] text-black">
              <div className="flex flex-col">
                <span className="font-extrabold">Secondary (Class X)</span>
                <span className="italic text-sm text-black font-bold">DON & Donna Convent School</span>
              </div>
              <span className="font-extrabold">CGPA: 6.8</span>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-tight text-black mb-1">
            Certifications
          </h2>
          <div style={gradientLineStyle}></div>

          <p className="text-[14px] font-bold text-black">
            AMCAT Certified – Data Processing Specialist
            <span className="font-medium text-black"> (April 2025)</span>
          </p>
        </section>

        {/* Final Footer Line */}
        <div
          className="h-[6px] w-full mt-10"
          style={{ background: `linear-gradient(90deg, ${darkBlue} 0%, ${tealMain} 100%)` }}
        ></div>
      </div>

      <footer className="w-full max-w-[850px] mt-6 text-center text-black font-bold text-xs no-print pb-8">
        <p>&copy; 2025 Karishma Saxena. Professional Resume Portfolio.</p>
        <p>Built with React & Tailwind CSS for Karishma Saxena.</p>
      </footer>
    </div>
  );
};

export default App;
