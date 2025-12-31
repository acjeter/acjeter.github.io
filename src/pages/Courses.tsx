/*
 * Copyright (c) 2025 Andrew Jeter. All Rights Reserved.
 *
 * This file contains personal academic information and is proprietary.
 * Unauthorized copying, modification, distribution, or use of this file,
 * via any medium, is strictly prohibited.
 */

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';

interface Course {
    id: string;
    title: string;
}

interface Quarter {
    term: string;
    year: string;
    courses: Course[];
}

const quarters: Quarter[] = [
    {
        term: 'Fall',
        year: '2022',
        courses: [
            { id: 'CSE 8A', title: 'Introduction to Programming 1' },
            { id: 'MATH 3C', title: "Precalculus" },
            { id: 'POLI 12D', title: 'Introduction to Political Science: International Relations' },
            { id: 'CAT 1', title: "Culture, Art, & Technology 1" }
        ]
    },
    {
        term: 'Winter',
        year: '2023',
        courses: [
            { id: 'CSE 8B', title: 'Introduction to Programming 2' },
            { id: 'CSE 20', title: 'Discrete Mathematics' },
            { id: 'MATH 10A', title: "Calculus 1" },
            { id: 'CAT 2', title: "Culture, Art, & Technology 2" }
        ]
    },
    {
        term: 'Spring',
        year: '2023',
        courses: [
            { id: 'CSE 12', title: 'Basic Data Structures & Object-Oriented Design' },
            { id: 'CSE 15L', title: 'Software Tools & Techniques Lab' },
            { id: 'CAT 3', title: "Culture, Art, & Technology 3" }
        ]
    },
    {
        term: 'Summer Session I',
        year: '2023',
        courses: [
            { id: 'MATH 20A', title: "Calculus for Science and Engineering 1" }
        ]
    },
    {
        term: 'Fall',
        year: '2023',
        courses: [
            { id: 'CSE 30', title: 'Computer Organization & Systems Programming' },
            { id: 'MATH 18 [W]', title: 'Linear Algebra' }
        ]
    },
    {
        term: 'Winter',
        year: '2024',
        courses: [
            { id: 'MATH 20B', title: 'Calculus for Science and Engineering 2' },
            { id: 'PHYS 2A', title: 'Physics- Mechanics' },
            { id: 'MGT 16', title: 'Personal Ethics at Work' },
            { id: 'HILD 2B', title: 'United States History: 19th Century' },
        ]
    },
    {
        term: 'Spring',
        year: '2024',
        courses: [
            { id: 'CSE 30', title: 'Computer Organization & Systems Programming' },
            { id: 'CSE 198', title: 'Direct Group Study: IEEE-Eta Kappa Nu Outreach' },
            { id: 'MATH 20C', title: 'Calculus and Analytic Geometryfor Science and Engineering 3' },
            { id: 'HIUS 144', title: 'Topics in U.S. History: Welfare Policy & Welfare Right' }
        ]
    },
    {
        term: 'Summer Session I',
        year: '2024',
        courses: [
            { id: 'PHYS 2C', title: "Physics- Fluids, Waves, Thermodynamics, and Optics" },
            { id: 'MATH 18', title: "Linear Algebra" }
        ]
    },
    {
        term: 'Summer Session II',
        year: '2024',
        courses: [
            { id: 'CSE 21', title: 'Mathematics for Algorithms and Systems' }
        ]
    },
    {
        term: 'Fall',
        year: '2024',
        courses: [
            { id: 'CSE 100R', title: 'Advanced Data Structures' },
            { id: 'CSE 198', title: 'Direct Group Study: IEEE-Eta Kappa Nu Outreach' },
            { id: 'PHYS 2B', title: 'Physics- Electricity and Magnetism' },
            { id: 'ETHN 112A', title: 'History of Native American & Indigenous Peoples in the U.S. I' }
        ]
    },
    {
        term: 'Winter',
        year: '2025',
        courses: [
            { id: 'CSE 101', title: 'Design & Analysis of Algorithms' },
            { id: 'CSE 167', title: 'Computer Graphics' },
            { id: 'CSE 198', title: 'Direct Group Study: IEEE-Eta Kappa Nu Outreach' },
            { id: 'MATH 171A', title: 'Introduction to Numerical Optimization: Linear Programming' },
            { id: 'ETHN 112B', title: 'History of Native American & Indigenous Peoples in the U.S. II' }
        ]
    },
    {
        term: 'Spring',
        year: '2025',
        courses: [
            { id: 'ECE 35', title: 'Introduction to Analog Design' },
            { id: 'CSE 140', title: 'Components and Design Techniques for Digital Systems' },
            { id: 'CSE 140L', title: 'Digital Systems Laboratory' },
            { id: 'CSE 198', title: 'Direct Group Study: IEEE-Eta Kappa Nu Outreach' }
        ]
    },
    {
        term: 'Summer Session I',
        year: '2025',
        courses: [
            { id: 'CSE 141', title: 'Computer Architecture' }
        ]
    },
    {
        term: 'Summer Session II',
        year: '2025',
        courses: [
            { id: 'MUS 1A', title: 'Fundamentals of Music A' }
        ]
    },
    {
        term: 'Special Summer Session',
        year: '2025',
        courses: [
            { id: 'ECE 45', title: 'Circuits and Systems' },
            { id: 'ECE 111', title: 'Advanced Digital Design Project' },
            { id: 'MATH 255', title: 'SD City College: Differential Equations' }
        ]
    },
    { term: 'Fall', year: '2025', courses: [] },
];

const Courses: React.FC = () => {
    useEffect(() => {
        document.title = 'Courses – Andrew Jeter';
    }, []);
    return (
        <div className="min-h-screen bg-sand text-desert-dark p-10 relative">
            <BackButton />
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl font-bold mb-12 text-terracotta text-center"
            >
                Academic Journey
            </motion.h2>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-ucsd-blue/20 hidden md:block"></div>

                {quarters.map((quarter, index) => (
                    <motion.div
                        key={`${quarter.term}-${quarter.year}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Content Side */}
                        <div className="w-full md:w-5/12">
                            <div className="bg-white/40 border border-ucsd-blue/10 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <h3 className="text-xl font-bold text-ucsd-blue mb-2">
                                    {quarter.term} {quarter.year}
                                </h3>
                                {quarter.courses.length > 0 ? (
                                    <ul className="space-y-2">
                                        {quarter.courses.map((course) => (
                                            <li key={course.id} className="text-sm text-desert-dark/90">
                                                <span className="font-semibold text-terracotta">{course.id}:</span> {course.title}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-sm text-desert-dark/50 italic">Courses to be added</p>
                                )}
                            </div>
                        </div>

                        {/* Center Dot */}
                        <div className="w-2/12 flex justify-center my-4 md:my-0 relative z-10">
                            <div className="w-4 h-4 bg-terracotta rounded-full border-4 border-sand shadow-sm"></div>
                        </div>

                        {/* Empty Side for Layout Balance */}
                        <div className="w-full md:w-5/12"></div>
                    </motion.div>
                ))}
            </div>

            {/* <div className="text-center mt-12">
                <a href="/" className="text-ucsd-blue hover:text-terracotta transition-colors underline decoration-dotted">
                    Back to Home
                </a>
            </div> */}
        </div>
    );
};

export default Courses;
