import './ArchitectureDiagram.css';
import { CircuitBoard, Cpu, Database } from 'lucide-react';

// Componentes internos (Iconos)
const ControlUnit = ({ label = 'UC' }) => (
  <div className="diagram-node control-unit">
    <div className="node-label">{label}</div>
    <div className="node-icon uc-icon">
      <CircuitBoard size={24} strokeWidth={2.5} />
    </div>
  </div>
);

const ProcessingUnit = ({ label = 'UP' }) => (
  <div className="diagram-node processing-unit">
    <div className="node-label">{label}</div>
    <div className="node-icon up-icon">
      <Cpu size={24} strokeWidth={2.5} />
    </div>
  </div>
);

const DataMemory = ({ label = 'DATO' }) => (
  <div className="diagram-node data-memory">
    <div className="node-label">{label}</div>
    <div className="node-icon memory-icon">
      <Database size={28} strokeWidth={2} />
    </div>
  </div>
);

// Flujos Animados
const FlowLine = ({ label, direction = 'horizontal' }) => (
  <div className={`flow-line flow-${direction}`}>
    {label && <span className="flow-label">{label}</span>}
    <div className="flow-particle"></div>
  </div>
);

export default function ArchitectureDiagram({ type, color }) {
  // Renderizado condicional basado en el tipo
  if (type === 'sisd') {
    return (
      <div className="arch-diagram sisd" style={{'--flow-color': color}}>
        <ControlUnit />
        <FlowLine label="INSTRUCCIÓN" />
        <ProcessingUnit />
        <FlowLine label="DATO" />
        <DataMemory label="" />
      </div>
    );
  }

  if (type === 'simd') {
    return (
      <div className="arch-diagram simd" style={{'--flow-color': color}}>
        <div className="col-uc">
          <ControlUnit />
        </div>
        <div className="col-up multi-nodes">
          <span className="shared-label">INSTRUCCIÓN</span>
          <ProcessingUnit label="" />
          <ProcessingUnit label="" />
          <ProcessingUnit label="" />
          <ProcessingUnit label="" />
        </div>
        <div className="col-data multi-nodes">
           <div style={{opacity:0}}>UP</div>
           <span className="shared-label data-label">DATO</span>
           <span className="shared-label data-label">DATO</span>
           <span className="shared-label data-label">DATO</span>
           <span className="shared-label data-label">DATO</span>
        </div>
        <div className="col-mem">
           <DataMemory label="" />
        </div>
      </div>
    );
  }

  if (type === 'misd') {
    return (
      <div className="arch-diagram misd" style={{'--flow-color': color}}>
        <div className="col-uc multi-nodes">
          <ControlUnit />
          <ControlUnit label="" />
          <ControlUnit label="" />
          <ControlUnit label="" />
        </div>
        <div className="col-flow multi-nodes align-center">
           <span className="shared-label">INSTRUCCIÓN</span>
           <span className="shared-label">INSTRUCCIÓN</span>
           <span className="shared-label">INSTRUCCIÓN</span>
           <span className="shared-label">INSTRUCCIÓN</span>
        </div>
        <div className="col-up center-single">
          <ProcessingUnit />
        </div>
        <div className="col-mem center-single" style={{marginLeft: '20px'}}>
          <span className="shared-label">DATO</span>
          <DataMemory label="" />
        </div>
      </div>
    );
  }

  if (type === 'mimd') {
    return (
      <div className="arch-diagram mimd" style={{'--flow-color': color}}>
         <div className="col-uc multi-nodes">
          <ControlUnit />
          <ControlUnit label="" />
          <ControlUnit label="" />
          <ControlUnit label="" />
        </div>
        <div className="col-flow multi-nodes align-center">
           <span className="shared-label">INSTRUCCIONES</span>
           <span className="shared-label">INSTRUCCIONES</span>
           <span className="shared-label">INSTRUCCIONES</span>
           <span className="shared-label">INSTRUCCIONES</span>
        </div>
        <div className="col-up multi-nodes">
          <ProcessingUnit />
          <ProcessingUnit label="" />
          <ProcessingUnit label="" />
          <ProcessingUnit label="" />
        </div>
        <div className="col-data multi-nodes">
           <div style={{opacity:0}}>UP</div>
           <span className="shared-label data-label">DATO</span>
           <span className="shared-label data-label">DATO</span>
           <span className="shared-label data-label">DATO</span>
           <span className="shared-label data-label">DATO</span>
        </div>
        <div className="col-mem">
           <DataMemory label="" />
        </div>
      </div>
    );
  }

  return null;
}
