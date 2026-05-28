const projectsData = [
  {
    id: 1,
    title: 'HBP100',
    description:
      'Most privacy tools are bloated, slow, or ironically send your data to the cloud to analyze it. I built hbp100 to fix that. It runs completely locally in RAM, weighs only 322KB, and strips out 40+ types of sensitive data in 0.77 milliseconds before passing the text to an AI. It even handles messy text and typos without losing the original context.',
    tech: ['Python', 'FastAPI', 'NumPy', 'Scikit-Learn', 'Regex', 'JSONL'],
    github: 'https://github.com/Erox-02/humming-bird-',
    liveDemo: null,
  },
  {
    id: 2,
    title: 'Z-Engine',
    description:
      'I built this after watching my system idle at 7.7GB out of 8GB of RAM with just a single Chrome tab open. Z-Engine uses an agentic reasoning loop to scan live system telemetry, build a targeted optimization strategy, make the AI critique its own plan for stability risks, and generate transparent PowerShell scripts. It autonomously brought my idle RAM down to 3.4GB on an i3 laptop.',
    tech: ['Python', 'PySide6', 'psutil', 'ASI-1 API', 'PowerShell'],
    github: 'https://github.com/Erox-02/Z-Engine',
    liveDemo: null,
  },
  {
    id: 3,
    title: 'TuneX',
    description:
      'The desktop foundation for some robotics workflows I am building. Instead of guessing PID controller values or constantly flashing microcontrollers, TuneX lets you simulate first-order systems locally. It maps live response graphs, calculates performance metrics (overshoot, settling time, rise time), and tracks tuning history inside a clean engineering UI so you don’t break hardware in production.',
    tech: ['PlatformIO', 'Python', 'PySide6', 'PyQtGraph', 'NumPy', 'LLM'],
    github: 'https://github.com/Erox-02/Tunex_V0',
    liveDemo: null,
  },
];

export default projectsData;
