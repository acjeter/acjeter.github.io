export type SkillCategoryId =
  | 'programming'
  | 'systems'
  | 'hardware'
  | 'process'
  | 'tools'
  | 'methods';

export interface Skill {
  id: string;
  label: string;
  category: SkillCategoryId;
  summary: string;
}

export interface SkillCategory {
  id: SkillCategoryId;
  label: string;
  description: string;
  size?: 'standard' | 'wide';
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    label: 'Programming',
    description: 'Languages and frameworks I use across coursework, projects, and engineering tools.',
    size: 'wide',
  },
  {
    id: 'systems',
    label: 'Systems & Software',
    description: 'Systems and software concepts I have practiced through algorithms, architecture, databases, graphics, and application work.',
  },
  {
    id: 'hardware',
    label: 'Hardware & Signals',
    description: 'Circuit, signal, digital design, architecture, and lab skills I have built through ECE and CSE coursework.',
    size: 'wide',
  },
  {
    id: 'process',
    label: 'Engineering Process',
    description: 'Engineering practices I use to keep team work reliable, reviewable, and organized.',
  },
  {
    id: 'tools',
    label: 'Tools & Lab',
    description: 'Development, deployment, simulation, and measurement tools I have used in projects and labs.',
    size: 'wide',
  },
  {
    id: 'methods',
    label: 'Communication & Leadership',
    description: 'Communication, collaboration, and leadership habits I have built through outreach, work, and team projects.',
  },
];

export const skills: Skill[] = [
  { id: 'programming-fundamentals', label: 'Programming Fundamentals', category: 'programming', summary: 'I use core programming concepts like variables, control flow, functions, data mutation, testing, and debugging.' },
  { id: 'c', label: 'C', category: 'programming', summary: 'I use C for systems programming, memory-focused coursework, and machine-level reasoning.' },
  { id: 'cpp', label: 'C++', category: 'programming', summary: 'I use C++ for data structures, performance-aware implementation, and graphics work.' },
  { id: 'java', label: 'Java', category: 'programming', summary: 'I use Java for object-oriented design, interfaces, collections, and testing.' },
  { id: 'python', label: 'Python', category: 'programming', summary: 'I use Python for automation, assemblers, machine learning experiments, and project tooling.' },
  { id: 'arm', label: 'ARM', category: 'programming', summary: 'I use ARM and assembly concepts to connect software behavior to computer organization.' },
  { id: 'typescript', label: 'TypeScript', category: 'programming', summary: 'I use TypeScript to keep React interfaces and portfolio code easier to reason about.' },
  { id: 'javascript', label: 'JavaScript', category: 'programming', summary: 'I use JavaScript for interactive browser behavior and frontend application logic.' },
  { id: 'swiftui', label: 'SwiftUI', category: 'programming', summary: 'I learned declarative iOS interface development through UCSD Extension coursework.' },
  { id: 'uikit', label: 'UIKit', category: 'programming', summary: 'I learned UIKit fundamentals for iOS layouts, controls, and app structure.' },
  { id: 'react', label: 'React', category: 'programming', summary: 'I use React to build component-based portfolio and course/project interfaces.' },
  { id: 'tailwind', label: 'Tailwind CSS', category: 'programming', summary: 'I use Tailwind CSS to apply responsive styling with a consistent design language.' },
  { id: 'systemverilog', label: 'SystemVerilog', category: 'hardware', summary: 'I use SystemVerilog for RTL design, simulation, and processor project implementation.' },
  { id: 'matlab', label: 'MATLAB', category: 'programming', summary: 'I use MATLAB for numerical work and engineering computation in ECE coursework.' },
  { id: 'algorithms', label: 'Algorithms', category: 'systems', summary: 'I have practiced complexity analysis, graph algorithms, recurrence reasoning, and optimization.' },
  { id: 'data-structures', label: 'Data Structures', category: 'systems', summary: 'I have implemented and analyzed Java and C++ structures, ADTs, trees, hashing, and queues.' },
  { id: 'probability', label: 'Probability', category: 'systems', summary: 'I use probability axioms, conditional probability, random variables, and distributions to reason about engineering uncertainty.' },
  { id: 'statistics', label: 'Statistics', category: 'systems', summary: 'I use estimation, sampling distributions, and hypothesis testing to interpret engineering data.' },
  { id: 'computer-architecture', label: 'Computer Architecture', category: 'hardware', summary: 'I have studied processor organization, memory hierarchy, ISA design, and datapaths.' },
  { id: 'databases', label: 'Databases', category: 'systems', summary: 'I have worked with relational data modeling and database system principles.' },
  { id: 'graphics', label: 'Computer Graphics', category: 'systems', summary: 'I have built graphics foundations through rendering, OpenGL concepts, and ray tracing.' },
  { id: 'circuit-theory', label: 'Circuit Theory', category: 'hardware', summary: 'I use Kirchhoff laws, Thevenin/Norton equivalents, transient response, and circuit analysis.' },
  { id: 'signals-systems', label: 'Signals and Systems', category: 'hardware', summary: 'I analyze signals and systems in both continuous and discrete time.' },
  { id: 'continuous-time', label: 'Continuous-Time Analysis', category: 'hardware', summary: 'I work with continuous-time behavior, transforms, convolution, and frequency response.' },
  { id: 'discrete-time', label: 'Discrete-Time Analysis', category: 'hardware', summary: 'I work with discrete-time behavior, z-transforms, sampling, and aliasing.' },
  { id: 'fourier-laplace-z', label: 'Fourier/Laplace/Z-Transforms', category: 'hardware', summary: 'I use transform methods to reason about circuits, signals, and systems in the frequency domain.' },
  { id: 'analog-design', label: 'Analog Design', category: 'hardware', summary: 'I have built analog circuit intuition through device behavior and small/large signal analysis.' },
  { id: 'digital-logic', label: 'Digital Logic', category: 'hardware', summary: 'I design with Boolean logic, finite state machines, combinational modules, and sequential systems.' },
  { id: 'rtl-design', label: 'RTL Design', category: 'hardware', summary: 'I build hardware modules and verify behavior through simulation workflows.' },
  { id: 'electronic-lab-debugging', label: 'Electronic Lab Debugging', category: 'hardware', summary: 'I debug circuits and signals using bench equipment and measurement practice.' },
  { id: 'agile', label: 'Agile/Scrum', category: 'process', summary: 'I have worked with team planning, iterations, issue tracking, and sprint discipline.' },
  { id: 'git', label: 'Git', category: 'process', summary: 'I use Git for branching, reviewable history, collaboration, and source control.' },
  { id: 'gitlab', label: 'GitLab', category: 'tools', summary: 'I have used GitLab for team repositories and project workflow coordination.' },
  { id: 'ci-cd', label: 'CI/CD', category: 'process', summary: 'I understand automated build and deployment workflows from project experience.' },
  { id: 'code-review', label: 'Code Review', category: 'process', summary: 'I value readable changes, maintainable implementation, and concrete feedback.' },
  { id: 'documentation', label: 'Documentation', category: 'process', summary: 'I write course sites, project notes, and implementation records so work is easier to reuse.' },
  { id: 'research-writing', label: 'Research Writing', category: 'methods', summary: 'I use argumentation, revision, critical reading, and sourced communication in writing-heavy coursework.' },
  { id: 'debugging', label: 'Debugging', category: 'process', summary: 'I trace defects across software, hardware, lab, and support contexts.' },
  { id: 'jekyll', label: 'Jekyll', category: 'tools', summary: 'I use Jekyll for static course-site development and documentation publishing.' },
  { id: 'quartus', label: 'Quartus Prime', category: 'tools', summary: 'I use Quartus Prime for FPGA and RTL design workflows in digital systems projects.' },
  { id: 'modelsim', label: 'ModelSim', category: 'tools', summary: 'I use ModelSim to simulate and verify SystemVerilog designs.' },
  { id: 'ltspice', label: 'LTspice', category: 'tools', summary: 'I use LTspice for circuit simulation and analysis support.' },
  { id: 'oscilloscope', label: 'Oscilloscope', category: 'tools', summary: 'I use oscilloscopes for signal measurement and lab debugging.' },
  { id: 'function-generator', label: 'Function Generator', category: 'tools', summary: 'I use function generators to create lab signals for circuit experiments.' },
  { id: 'multimeter', label: 'Digital/Analog Multimeter', category: 'tools', summary: 'I use multimeters for electrical measurement and troubleshooting.' },
  { id: 'problem-solving', label: 'Collaborative Problem Solving', category: 'methods', summary: 'I work through ambiguity with teammates, students, and stakeholders.' },
  { id: 'leadership', label: 'Dynamic Leadership', category: 'methods', summary: 'I have led outreach, workplace shifts, and cross-functional coordination.' },
  { id: 'adaptability', label: 'Adaptability', category: 'methods', summary: 'I move between software, hardware, service, and teaching contexts as the work requires.' },
  { id: 'unity', label: 'Unity', category: 'tools', summary: 'I used Unity for HoloLens application work and mixed-reality project development.' },
  { id: 'machine-learning', label: 'Machine Learning', category: 'systems', summary: 'I trained an applied model for the HoloLens ASL translator project.' },
  { id: 'cloudflare', label: 'Cloudflare', category: 'tools', summary: 'I use Cloudflare for portfolio deployment and web infrastructure support.' },
  { id: 'github-pages', label: 'GitHub Pages', category: 'tools', summary: 'I use GitHub Pages for static deployment of portfolio and documentation sites.' },
];

export const getSkillsByIds = (skillIds: string[]): Skill[] => {
  const skillById = new Map(skills.map((skill) => [skill.id, skill]));

  return skillIds
    .map((skillId) => skillById.get(skillId))
    .filter((skill): skill is Skill => Boolean(skill));
};
