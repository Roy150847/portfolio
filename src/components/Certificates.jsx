import React from 'react';

const Certificates = ({ certificates }) => {
    return (
        <div className="certificates mt-10">
            <h2 className="text-5xl font-bold text-[#8e3d79] mb-6 flex justify-center align-center">Certificates</h2>
            <ul className="space-y-6">
                {certificates.map((cert, index) => (
                    <li key={index} className="p-4 bg-white rounded-lg shadow-md border-l-4 border-[#8e3d79]">
                        <img src={cert.image} alt={cert.title} className="w-full h-auto rounded-md mb-4" />
                        <h3 className="text-xl font-semibold">{cert.title}</h3>
                        <p className="text-sm text-gray-600">{cert.institution}</p>
                        <p className="text-sm text-gray-500">{cert.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Certificates;
