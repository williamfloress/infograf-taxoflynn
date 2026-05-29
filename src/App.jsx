import { useState } from 'react';
import './index.css';
import QuadrantCard from './components/QuadrantCard';
import InfoModal from './components/InfoModal';

function App() {
  const [selectedQuadrant, setSelectedQuadrant] = useState(null);

  const architectures = [
    {
      id: 'sisd',
      title: 'SISD',
      subtitle: '(Single Instruction, Single Data)',
      color: 'var(--color-sisd)',
      description: 'Un solo procesador interpreta una instrucción para operar sobre un único dato almacenado.',
      example: 'Monoprocesadores tradicionales',
      extendedInfo: {
        translation: 'Un flujo de instrucciones, un flujo de datos.',
        details: 'Es el modelo secuencial tradicional, conocido como la arquitectura clásica de von Neumann. Un único procesador interpreta una única secuencia de instrucciones para operar con los datos almacenados en una única memoria.',
        examples: 'Los computadores monoprocesador antiguos y los microcontroladores básicos.',
        subcategories: []
      }
    },
    {
      id: 'simd',
      title: 'SIMD',
      subtitle: '(Single Instruction, Multiple Data)',
      color: 'var(--color-simd)',
      description: 'Una instrucción controla la ejecución simultánea de varios elementos sobre distintos conjuntos de datos.',
      example: 'Procesadores vectoriales y matriciales',
      extendedInfo: {
        translation: 'Un flujo de instrucciones, múltiples flujos de datos.',
        details: 'Una misma instrucción se aplica simultáneamente a varios elementos de datos en paralelo de forma sincronizada. Cada elemento de proceso tiene una memoria asociada (o compartida). Es altamente eficiente para cargas de trabajo que requieren cálculos repetitivos sobre grandes volúmenes de datos.',
        examples: 'Procesamiento vectorial y las Unidades de Procesamiento Gráfico (GPU), ideales para renderizado de gráficos y simulaciones científicas.',
        subcategories: []
      }
    },
    {
      id: 'misd',
      title: 'MISD',
      subtitle: '(Multiple Instruction, Single Data)',
      color: 'var(--color-misd)',
      description: 'Estructura teórica donde múltiples instrucciones operan sobre un dato; nunca ha sido implementada.',
      example: 'Teórico (Sin ejemplos reales)',
      extendedInfo: {
        translation: 'Múltiples flujos de instrucciones, un flujo de datos.',
        details: 'Se transmite una secuencia de datos a un conjunto de procesadores, cada uno de los cuales ejecuta una secuencia de instrucciones diferente. Es un modelo puramente teórico con muy pocas implementaciones comerciales.',
        examples: 'Se ha aplicado principalmente en sistemas especializados que requieren un alto nivel de redundancia y tolerancia a fallos, como los sistemas de control de vuelo espaciales.',
        subcategories: []
      }
    },
    {
      id: 'mimd',
      title: 'MIMD',
      subtitle: '(Multiple Instruction, Multiple Data)',
      color: 'var(--color-mimd)',
      description: 'Múltiples procesadores ejecutan diferentes instrucciones sobre distintos datos de forma simultánea.',
      example: 'Sistemas SMP, clústeres y arquitecturas NUMA',
      extendedInfo: {
        translation: 'Múltiples flujos de instrucciones, múltiples flujos de datos.',
        details: 'Varios procesadores de uso general ejecutan independientemente sus propios flujos de instrucciones sobre distintos flujos de datos. Es la categoría más rica y flexible, abarcando la mayor parte de la computación paralela moderna.',
        examples: 'Los microprocesadores multinúcleo actuales, los Multiprocesadores Simétricos (SMP), y grandes clústeres de servidores.',
        subcategories: [
          { name: 'Memoria Compartida', desc: 'Sistemas fuertemente acoplados (ej. SMP, arquitecturas NUMA).' },
          { name: 'Memoria Distribuida', desc: 'Sistemas débilmente acoplados (ej. Clústeres de computadoras).' },
          { name: 'SPMD (Single Program, Multiple Data)', desc: 'Submodelo frecuente donde múltiples procesadores ejecutan el mismo programa, pero lo hacen de forma asíncrona y sobre diferentes fragmentos de los datos.' }
        ]
      }
    }
  ];

  return (
    <div className="app-container">
      <header className="header">
        <h1>La Taxonomía de Flynn:</h1>
        <h2>Clasificación de Arquitecturas de Computación</h2>
        <p>
          Propuesta por Michael Flynn en 1972, esta taxonomía clasifica sistemas con 
          capacidades de procesamiento paralelo basándose en la combinación de flujos 
          de instrucciones y datos procesados simultáneamente.
        </p>
      </header>

      <main className="grid-container">
        {architectures.map(arch => (
          <QuadrantCard 
            key={arch.id} 
            data={arch} 
            onClick={() => setSelectedQuadrant(arch)}
          />
        ))}
      </main>

      <footer className="footer">
        <h3>Bibliografía Consultada</h3>
        <ul>
          <li>Stallings, W. (2006). Organización y arquitectura de computadores. 7ª Edición. Prentice Hall.</li>
          <li>Patterson, D. A. & Hennessy, J. L. (2011). Estructura y diseño de computadores. 4ª Edición. Editorial Reverté.</li>
        </ul>
        <div className="footer-credits">
          <p>Proyecto realizado por :</p>
          <p>William Flores.</p>
          <p>Universidad de Oriente, 2026</p>
        </div>
      </footer>

      <InfoModal 
        quadrant={selectedQuadrant} 
        onClose={() => setSelectedQuadrant(null)} 
      />
    </div>
  );
}

export default App;
