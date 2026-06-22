export interface Course {
  code: string;
  title: string;
  summary: string;
  skillIds: string[];
  catalogEra?: string;
  sourceUrl?: string;
  note?: string;
}

export interface Quarter {
  term: string;
  year: string;
  courses: Course[];
}

const catalog = {
  cse2023: 'https://catalog.ucsd.edu/archive/2023-24/courses/CSE.html',
  cse2025: 'https://catalog.ucsd.edu/courses/CSE.html',
  ece2025: 'https://catalog.ucsd.edu/courses/ECE.html',
  ethn2025: 'https://catalog.ucsd.edu/courses/ETHN.html',
  math2025: 'https://catalog.ucsd.edu/courses/MATH.html',
  mus2025: 'https://catalog.ucsd.edu/courses/MUS.html',
  phys2025: 'https://catalog.ucsd.edu/courses/PHYS.html',
  poli2025: 'https://catalog.ucsd.edu/courses/POLI.html',
  cat2025: 'https://catalog.ucsd.edu/courses/CAT.html',
  mgt2025: 'https://catalog.ucsd.edu/courses/MGT.html',
};

const sourceReviewNeeded = 'Catalog description source review needed before publishing.';

export const quarters: Quarter[] = [
  {
    term: 'Fall',
    year: '2022',
    courses: [
      {
        code: 'CSE 8A',
        title: 'Introduction to Programming 1',
        summary: 'Introductory course for students interested in computer science and programming. Basics of programming including variables, conditionals, loops, functions/methods. Structured data storage such as arrays/lists and dictionaries, including data mutation. Hands-on experience with designing, writing, hand-tracing, compiling or interpreting, executing, testing, and debugging programs. Students solve relevant computational problems using a high-level programming language.',
        skillIds: ['programming-fundamentals', 'debugging', 'problem-solving'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'MATH 3C',
        title: 'Precalculus',
        summary: 'Functions and their graphs. Linear and polynomial functions, zeroes, inverse functions, exponential and logarithmic, trigonometric functions and their inverses. Emphasis on understanding algebraic, numerical, and graphical.',
        skillIds: ['problem-solving'],
        sourceUrl: catalog.math2025,
      },
      {
        code: 'POLI 12D',
        title: 'Introduction to Political Science: International Relations',
        summary: 'The issues of war/peace, nationalism/internationalism, and economic growth/redistribution will be examined in both historical and theoretical perspectives.',
        skillIds: ['research-writing'],
        sourceUrl: catalog.poli2025,
      },
      {
        code: 'CAT 1',
        title: 'Culture, Art, and Technology 1',
        summary: 'Lower-division composition course teaching critical reading and drafting by examining how culture, art, and technology have intersected in the past.',
        skillIds: ['research-writing'],
        sourceUrl: catalog.cat2025,
      },
    ],
  },
  {
    term: 'Winter',
    year: '2023',
    courses: [
      {
        code: 'CSE 8B',
        title: 'Introduction to Programming 2',
        summary: 'Introductory programming using an object-oriented approach with the Java programming language. Builds on basic programming constructs introduced in CSE 8A to introduce class design and use, interfaces, basic class hierarchies, recursion, event-based programming, error reporting with exceptions, and file I/O. Basics of command-line navigation for file management and running programs. Development, testing, and debugging of more complex programs.',
        skillIds: ['java', 'debugging', 'documentation'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'CSE 20',
        title: 'Discrete Mathematics',
        summary: 'This course will introduce the ways logic is used in computer science: for reasoning, as a language for specifications, and as operations in computation. Concepts include sets, relations, functions, equivalence relations, partial orders, number systems, and proof methods (especially induction and recursion). Propositional and predicate logic will be introduced and applied to various computer science domains such as circuit design, databases, cryptography, and program correctness.',
        skillIds: ['algorithms', 'problem-solving'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'MATH 10A',
        title: 'Calculus 1',
        summary: 'Differential calculus of functions of one variable, with applications. Functions, graphs, continuity, limits, derivatives, tangent lines, optimization problems.',
        skillIds: ['problem-solving'],
        sourceUrl: catalog.math2025,
      },
      {
        code: 'CAT 2',
        title: 'Culture, Art, and Technology 2',
        summary: 'Lower-division writing-intensive course foregrounding argumentation, revision, and writing as process by examining case studies of culture, art, and technology interacting in the present moment.',
        skillIds: ['research-writing'],
        sourceUrl: catalog.cat2025,
      },
    ],
  },
  {
    term: 'Spring',
    year: '2023',
    courses: [
      {
        code: 'CSE 12',
        title: 'Basic Data Structures and Object-Oriented Design',
        summary: 'Use and implementation of basic data structures including linked lists, stacks, and queues. Use of advanced structures such as binary trees and hash tables. Object-oriented design including interfaces, polymorphism, encapsulation, abstract data types, pre-/post-conditions. Recursion. Uses Java and Java Collections.',
        skillIds: ['java', 'data-structures', 'debugging'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'CSE 15L',
        title: 'Software Tools and Techniques Lab',
        summary: 'Hands-on exploration of software development tools and techniques. Investigation of the scientific process as applied to software development and debugging. Emphasis is on weekly hands-on laboratory experiences, development of laboratory notebooking techniques as applied to software design.',
        skillIds: ['git', 'debugging', 'documentation'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'CAT 3',
        title: 'Culture, Art, and Technology 3',
        summary: 'Lower-division writing- and research-intensive course focusing on collaboration, research, and art-making by speculating on how the relationships between culture, art, and technology will be transformed in the future.',
        skillIds: ['research-writing', 'problem-solving'],
        sourceUrl: catalog.cat2025,
      },
    ],
  },
  {
    term: 'Summer Session I',
    year: '2023',
    courses: [
      {
        code: 'MATH 20A',
        title: 'Calculus for Science and Engineering 1',
        summary: 'Foundations of differential and integral calculus of one variable. Functions, graphs, continuity, limits, derivative, tangent line. Applications with algebraic, exponential, logarithmic, and trigonometric functions. Introduction to the integral.',
        skillIds: ['problem-solving'],
        sourceUrl: catalog.math2025,
      },
    ],
  },
  {
    term: 'Fall',
    year: '2023',
    courses: [
      {
        code: 'CSE 30',
        title: 'Computer Organization and Systems Programming',
        summary: 'Introduction to organization of modern digital computers-understanding the various components of a computer and their interrelationships. Study of a specific architecture/machine with emphasis on systems programming in C and Assembly languages in a UNIX environment.',
        skillIds: ['c', 'arm', 'computer-architecture', 'debugging'],
        catalogEra: '2023-24 catalog',
        sourceUrl: catalog.cse2023,
        note: 'This reflects the pre-CSE 29 structure, when CSE 30 still included systems programming.',
      },
      {
        code: 'MATH 18 [W]',
        title: 'Linear Algebra',
        summary: 'Matrix algebra, Gaussian elimination, determinants. Linear and affine subspaces, bases of Euclidean spaces. Eigenvalues and eigenvectors, quadratic forms, orthogonal matrices, diagonalization of symmetric matrices. Applications. Computing symbolic and graphical solutions using MATLAB.',
        skillIds: ['matlab', 'problem-solving'],
        sourceUrl: catalog.math2025,
      },
    ],
  },
  {
    term: 'Winter',
    year: '2024',
    courses: [
      {
        code: 'MATH 20B',
        title: 'Calculus for Science and Engineering 2',
        summary: 'Integral calculus of one variable and its applications, with exponential, logarithmic, hyperbolic, and trigonometric functions. Methods of integration. Infinite series. Polar coordinates in the plane and complex exponentials.',
        skillIds: ['problem-solving'],
        sourceUrl: catalog.math2025,
      },
      {
        code: 'PHYS 2A',
        title: 'Physics: Mechanics',
        summary: 'A calculus-based science-engineering general physics course covering vectors, motion in one and two dimensions, Newton’s first and second laws, work and energy, conservation of energy, linear momentum, collisions, rotational kinematics, rotational dynamics, equilibrium of rigid bodies, oscillations, gravitation.',
        skillIds: ['problem-solving'],
        sourceUrl: catalog.phys2025,
      },
      {
        code: 'MGT 16',
        title: 'Personal Ethics at Work',
        summary: 'Course examines the ethical foundation for choices individuals make every day both in the workplace and in their private lives, the connection between economic and ethical obligations with examples related to privacy, reporting, whistle-blowing, workplace relationships, confidentiality, and intellectual property.',
        skillIds: ['leadership'],
        sourceUrl: catalog.mgt2025,
      },
      {
        code: 'HILD 2B',
        title: 'United States History: 19th Century',
        summary: sourceReviewNeeded,
        skillIds: ['research-writing'],
        note: 'Needs an archived or current catalog source before this description should be shown as final.',
      },
    ],
  },
  {
    term: 'Spring',
    year: '2024',
    courses: [
      {
        code: 'CSE 30',
        title: 'Computer Organization and Systems Programming',
        summary: 'Introduction to organization of modern digital computers-understanding the various components of a computer and their interrelationships. Study of a specific architecture/machine with emphasis on systems programming in C and Assembly languages in a UNIX environment.',
        skillIds: ['c', 'arm', 'computer-architecture', 'debugging'],
        catalogEra: '2023-24 catalog',
        sourceUrl: catalog.cse2023,
        note: 'Taken under the old CSE 30 structure before systems programming moved into CSE 29.',
      },
      {
        code: 'CSE 198',
        title: 'Direct Group Study: IEEE-Eta Kappa Nu Outreach',
        summary: 'Directed group study on a topic or in a field not included in the regular department curriculum by special arrangement with a faculty member.',
        skillIds: ['leadership', 'documentation'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'MATH 20C',
        title: 'Calculus and Analytic Geometry for Science and Engineering 3',
        summary: 'Vector geometry, vector functions and their derivatives. Partial differentiation. Maxima and minima. Double integration.',
        skillIds: ['problem-solving'],
        sourceUrl: catalog.math2025,
      },
      {
        code: 'HIUS 144',
        title: 'Topics in U.S. History: Welfare Policy and Welfare Right',
        summary: sourceReviewNeeded,
        skillIds: ['research-writing'],
        note: 'Needs a topic-specific catalog or syllabus source before this description should be shown as final.',
      },
    ],
  },
  {
    term: 'Summer Session I',
    year: '2024',
    courses: [
      {
        code: 'PHYS 2C',
        title: 'Physics: Fluids, Waves, Thermodynamics, and Optics',
        summary: 'Continuation of PHYS 2B covering fluid mechanics, waves in elastic media, sound waves, temperature, heat and the first law of thermodynamics, kinetic theory of gases, entropy and the second law of thermodynamics, Maxwell’s equations, electromagnetic waves, geometric optics, interference and diffraction.',
        skillIds: ['problem-solving'],
        sourceUrl: catalog.phys2025,
      },
      {
        code: 'MATH 18',
        title: 'Linear Algebra',
        summary: 'Matrix algebra, Gaussian elimination, determinants. Linear and affine subspaces, bases of Euclidean spaces. Eigenvalues and eigenvectors, quadratic forms, orthogonal matrices, diagonalization of symmetric matrices. Applications. Computing symbolic and graphical solutions using MATLAB.',
        skillIds: ['matlab', 'problem-solving'],
        sourceUrl: catalog.math2025,
      },
    ],
  },
  {
    term: 'Summer Session II',
    year: '2024',
    courses: [
      {
        code: 'CSE 21',
        title: 'Mathematics for Algorithms and Systems',
        summary: 'This course will cover mathematical concepts used to model and analyze algorithms and computer systems. Topics include counting techniques (inclusion-exclusion; recursive counting; permutations and combinations), data representations, analysis of algorithms (order notation; time complexities; loop invariants), recurrence relations, graphs and trees (data structure representations; basic graph algorithms; special classes of graphs), and basic probability and its applications.',
        skillIds: ['algorithms', 'data-structures', 'problem-solving'],
        sourceUrl: catalog.cse2025,
      },
    ],
  },
  {
    term: 'Fall',
    year: '2024',
    courses: [
      {
        code: 'CSE 100R',
        title: 'Advanced Data Structures',
        summary: 'High-performance data structures and supporting algorithms. Use and implementation of data structures like (un)balanced trees, graphs, priority queues, and hash tables. Also memory management, pointers, recursion. Theoretical and practical performance analysis, both average case and amortized. Uses C++ and STL.',
        skillIds: ['cpp', 'data-structures', 'algorithms'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'CSE 198',
        title: 'Direct Group Study: IEEE-Eta Kappa Nu Outreach',
        summary: 'Directed group study on a topic or in a field not included in the regular department curriculum by special arrangement with a faculty member.',
        skillIds: ['leadership', 'documentation'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'PHYS 2B',
        title: 'Physics: Electricity and Magnetism',
        summary: 'Continuation of PHYS 2A covering charge and matter, the electric field, Gauss’s law, electric potential, capacitors and dielectrics, current and resistance, electromotive force and circuits, the magnetic field, Ampere’s law, Faraday’s law, inductance, electromagnetic oscillations, alternating currents and Maxwell’s equations.',
        skillIds: ['circuit-theory', 'problem-solving'],
        sourceUrl: catalog.phys2025,
      },
      {
        code: 'ETHN 112A',
        title: 'History of Native American and Indigenous Peoples in the U.S. I',
        summary: 'This course examines the histories of Native American, Pacific Islander, and other indigenous populations in the United States, with specific emphasis on precolonial and postcontact interaction and knowledge systems of indigenous groups from the 1400s to mid-nineteenth century.',
        skillIds: ['research-writing'],
        sourceUrl: catalog.ethn2025,
      },
    ],
  },
  {
    term: 'Winter',
    year: '2025',
    courses: [
      {
        code: 'CSE 101',
        title: 'Design and Analysis of Algorithms',
        summary: 'Design and analysis of efficient algorithms with emphasis of nonnumerical algorithms such as sorting, searching, pattern matching, and graph and network algorithms. Measuring complexity of algorithms, time and storage. NP-complete problems.',
        skillIds: ['algorithms', 'data-structures', 'problem-solving'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'CSE 167',
        title: 'Computer Graphics',
        summary: 'Representation and manipulation of pictorial data. Two-dimensional and three-dimensional transformations, curves, surfaces. Projection, illumination, and shading models. Raster and vector graphic I/O devices; retained-mode and immediate-mode graphics software systems and applications.',
        skillIds: ['cpp', 'graphics'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'CSE 198',
        title: 'Direct Group Study: IEEE-Eta Kappa Nu Outreach',
        summary: 'Directed group study on a topic or in a field not included in the regular department curriculum by special arrangement with a faculty member.',
        skillIds: ['leadership', 'documentation'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'MATH 171A',
        title: 'Introduction to Numerical Optimization: Linear Programming',
        summary: 'Linear optimization and applications. Linear programming, the simplex method, duality. Selected topics from integer programming, network flows, transportation problems, inventory problems, and other applications. Three lectures, one recitation. Knowledge of programming recommended.',
        skillIds: ['algorithms', 'problem-solving'],
        sourceUrl: catalog.math2025,
      },
      {
        code: 'ETHN 112B',
        title: 'History of Native American and Indigenous Peoples in the U.S. II',
        summary: 'This course examines the history of Native American, Pacific Islander, and other indigenous populations in the United States, with specific emphasis on and analyses of postcontact interactions, federal laws and policies, and decolonial efforts among American Indians, Pacific Islanders, other tribal communities, and indigenous peoples/nations in the United States from the late nineteenth century to the present.',
        skillIds: ['research-writing'],
        sourceUrl: catalog.ethn2025,
      },
    ],
  },
  {
    term: 'Spring',
    year: '2025',
    courses: [
      {
        code: 'ECE 35',
        title: 'Introduction to Analog Design',
        summary: 'Fundamental circuit theory concepts, Kirchhoff’s voltage and current laws, Thevenin’s and Norton’s theorems, loop and node analysis, time-varying signals, transient first order circuits, steady-state sinusoidal response.',
        skillIds: ['circuit-theory', 'analog-design', 'ltspice'],
        sourceUrl: catalog.ece2025,
      },
      {
        code: 'CSE 140',
        title: 'Components and Design Techniques for Digital Systems',
        summary: 'Design of Boolean logic and finite state machines; two-level, multilevel combinational logic design, combinational modules and modular networks, Mealy and Moore machines, analysis and synthesis of canonical forms, sequential modules.',
        skillIds: ['digital-logic', 'rtl-design'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'CSE 140L',
        title: 'Digital Systems Laboratory',
        summary: 'Implementation with computer-aided design tools for combinational logic minimization and state machine synthesis. Hardware construction of a small digital system.',
        skillIds: ['digital-logic', 'systemverilog', 'rtl-design', 'quartus', 'modelsim'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'CSE 198',
        title: 'Direct Group Study: IEEE-Eta Kappa Nu Outreach',
        summary: 'Directed group study on a topic or in a field not included in the regular department curriculum by special arrangement with a faculty member.',
        skillIds: ['leadership', 'documentation'],
        sourceUrl: catalog.cse2025,
      },
    ],
  },
  {
    term: 'Summer Session I',
    year: '2025',
    courses: [
      {
        code: 'CSE 141',
        title: 'Computer Architecture',
        summary: 'Introduction to computer architecture. Computer system design. Processor design. Control design. Memory systems.',
        skillIds: ['computer-architecture', 'rtl-design'],
        sourceUrl: catalog.cse2025,
      },
    ],
  },
  {
    term: 'Summer Session II',
    year: '2025',
    courses: [
      {
        code: 'MUS 1A',
        title: 'Fundamentals of Music A',
        summary: 'This course, first in a three-quarter sequence, is primarily intended for students without previous musical experience. It introduces music notation and basic music theory topics such as intervals, scales, keys, and chords, as well as basic rhythm skills.',
        skillIds: ['adaptability'],
        sourceUrl: catalog.mus2025,
      },
    ],
  },
  {
    term: 'Special Summer Session',
    year: '2025',
    courses: [
      {
        code: 'ECE 45',
        title: 'Circuits and Systems',
        summary: 'Steady-state circuit analysis, first and second order systems, Fourier Series and Transforms, time domain analysis, convolution, transient response, Laplace Transform, and filter design.',
        skillIds: ['circuit-theory', 'signals-systems', 'fourier-laplace-z', 'matlab', 'ltspice'],
        sourceUrl: catalog.ece2025,
      },
      {
        code: 'ECE 111',
        title: 'Advanced Digital Design Project',
        summary: 'Advanced topics in digital circuits and systems. Use of computers and design automation tools. Hazard elimination, synchronous/asynchronous FSM synthesis, synchronization and arbitration, pipelining and timing issues. Problem sets and design exercises. A large-scale design project. Simulation and/or rapid prototyping.',
        skillIds: ['digital-logic', 'systemverilog', 'rtl-design', 'quartus', 'modelsim'],
        sourceUrl: catalog.ece2025,
      },
      {
        code: 'MATH 255',
        title: 'SD City College: Differential Equations',
        summary: sourceReviewNeeded,
        skillIds: ['matlab', 'problem-solving'],
        note: 'Needs an SD City College catalog source before this description should be shown as final.',
      },
    ],
  },
  {
    term: 'Fall',
    year: '2025',
    courses: [
      {
        code: 'CSE 110',
        title: 'Software Engineering',
        summary: 'Introduction to software development and engineering methods, including specification, design, implementation, testing, and process. An emphasis on team development, agile methods, and use of tools such as IDE’s, version control, and test harnesses.',
        skillIds: ['typescript', 'react', 'agile', 'git', 'code-review', 'documentation'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'CSE 118',
        title: 'Ubiquitous Computing',
        summary: 'Explores emerging opportunities enabled by cheap sensors and networked computing devices. Small research projects will be conducted in teams, culminating in project presentations at the end of the term. Section will cover material relevant to the project, such as research methods, software engineering, teamwork, and project management.',
        skillIds: ['python', 'unity', 'machine-learning', 'gitlab', 'agile'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'CSE 132A',
        title: 'Database System Principles',
        summary: 'Basic concepts of databases, including data modeling, relational databases, query languages, optimization, dependencies, schema design, and concurrency control. Exposure to one or several commercial database systems. Advanced topics such as deductive and object-oriented databases, time allowing.',
        skillIds: ['databases', 'problem-solving', 'documentation'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'CSE 141L',
        title: 'Project in Computer Architecture',
        summary: 'Hands-on computer architecture project aiming to familiarize students with instruction set architecture, and design of process. Control and memory systems.',
        skillIds: ['systemverilog', 'python', 'computer-architecture', 'rtl-design', 'quartus', 'modelsim'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'CSE 198',
        title: 'Direct Group Study: IEEE-Eta Kappa Nu Outreach',
        summary: 'Directed group study on a topic or in a field not included in the regular department curriculum by special arrangement with a faculty member.',
        skillIds: ['leadership', 'documentation', 'jekyll'],
        sourceUrl: catalog.cse2025,
      },
    ],
  },
  {
    term: 'Winter',
    year: '2026',
    courses: [
      {
        code: 'ECE 65',
        title: 'Components and Circuits Laboratory',
        summary: 'Introduction to linear and nonlinear components and circuits. Topics will include two terminal devices, bipolar and field-effect transistors, and large and small signal analysis of diode and transistor circuits.',
        skillIds: ['circuit-theory', 'analog-design', 'electronic-lab-debugging', 'oscilloscope', 'function-generator', 'multimeter'],
        sourceUrl: catalog.ece2025,
      },
      {
        code: 'ECE 101',
        title: 'Linear Systems Fundamentals',
        summary: 'Complex variables. Singularities and residues. Signal and system analysis in continuous and discrete time. Fourier series and transforms. Laplace and z-transforms. Linear Time Invariant Systems. Impulse response, frequency response, and transfer functions. Poles and zeros. Stability. Convolution. Sampling. Aliasing.',
        skillIds: ['signals-systems', 'continuous-time', 'discrete-time', 'fourier-laplace-z', 'matlab'],
        sourceUrl: catalog.ece2025,
      },
      {
        code: 'CSE 198',
        title: 'Direct Group Study: IEEE-Eta Kappa Nu Outreach',
        summary: 'Directed group study on a topic or in a field not included in the regular department curriculum by special arrangement with a faculty member.',
        skillIds: ['leadership', 'documentation', 'jekyll'],
        sourceUrl: catalog.cse2025,
      },
    ],
  },
  {
    term: 'Spring',
    year: '2026',
    courses: [
      {
        code: 'CSE 120',
        title: 'Operating Systems Principles',
        summary: 'Introduces operating systems concepts, including processes, synchronization, scheduling, memory management, virtual memory, file systems, and protection. May be coscheduled with CSE 220.',
        skillIds: ['operating-systems', 'synchronization', 'memory-management', 'file-systems', 'problem-solving'],
        sourceUrl: catalog.cse2025,
      },
      {
        code: 'ECE 109',
        title: 'Engineering Probability and Statistics',
        summary: 'Axioms of probability, conditional probability, theorem of total probability, random variables, densities, expected values, characteristic functions, transformation of random variables, central limit theorem. Random number generation, engineering reliability, elements of estimation, random sampling, sampling distributions, tests for hypothesis.',
        skillIds: ['probability', 'statistics', 'problem-solving'],
        sourceUrl: catalog.ece2025,
      },
      {
        code: 'MGT 172',
        title: 'Business Project Management',
        summary: 'Addresses effective practices for management of business projects. Includes both project management processes—scheduling, milestone setting, resource allocation, budgeting, risk mitigation—and human capital management—communication, teamwork, leadership. Also considers requirements for effectively working across functional and organizational boundaries.',
        skillIds: ['leadership', 'problem-solving'],
        sourceUrl: catalog.mgt2025,
      },
      {
        code: 'CAT 125',
        title: 'Public Rhetoric and Practical Communication',
        summary: 'Upper-division composition course in public rhetoric and practical communication, including oral presentation, writing in print formats, and digital content creation. This course also focuses on how writing can support and extend experiential learning before, during, or after students complete their experiential learning requirement.',
        skillIds: ['research-writing', 'documentation'],
        sourceUrl: catalog.cat2025,
      },
      {
        code: 'TDAC 1',
        title: 'Introduction to Acting I',
        summary: sourceReviewNeeded,
        skillIds: ['adaptability'],
        sourceUrl: undefined,
      },
    ],
  },
];

export const academicSkillIds = Array.from(
  new Set(quarters.flatMap((quarter) => quarter.courses.flatMap((course) => course.skillIds))),
);
