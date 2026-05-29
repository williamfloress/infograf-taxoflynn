import './QuadrantCard.css';
import ArchitectureDiagram from './ArchitectureDiagram';

function QuadrantCard({ data, onClick }) {
  const { id, title, subtitle, color, description, example } = data;

  return (
    <div 
      className={`quadrant-card ${id}`}
      style={{ '--card-color': color }}
      onClick={onClick}
    >
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-subtitle">{subtitle}</h3>
      </div>
      
      <div className="card-body">
        <ArchitectureDiagram type={id} color={color} />
      </div>

      <div className="card-footer">
        <p className="card-desc">{description}</p>
        <div className="card-example">
          <div className="example-icon" style={{ backgroundColor: color }}>
            {/* Aquí luego añadiremos un icono dinámico según el ejemplo */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
              <rect x="9" y="9" width="6" height="6"></rect>
              <line x1="9" y1="1" x2="9" y2="4"></line>
              <line x1="15" y1="1" x2="15" y2="4"></line>
              <line x1="9" y1="20" x2="9" y2="23"></line>
              <line x1="15" y1="20" x2="15" y2="23"></line>
              <line x1="20" y1="9" x2="23" y2="9"></line>
              <line x1="20" y1="14" x2="23" y2="14"></line>
              <line x1="1" y1="9" x2="4" y2="9"></line>
              <line x1="1" y1="14" x2="4" y2="14"></line>
            </svg>
          </div>
          <span className="example-text">{example}</span>
        </div>
      </div>
    </div>
  );
}

export default QuadrantCard;
