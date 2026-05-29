import './InfoModal.css';

export default function InfoModal({ quadrant, onClose }) {
  if (!quadrant) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2 style={{color: quadrant.color}}>{quadrant.title}</h2>
          <h3>{quadrant.subtitle}</h3>
        </div>

        <div className="modal-body">
          <div className="info-section">
            <h4>Traducción</h4>
            <p>{quadrant.extendedInfo.translation}</p>
          </div>

          <div className="info-section">
            <h4>Descripción Detallada</h4>
            <p>{quadrant.extendedInfo.details}</p>
          </div>

          <div className="info-section example-section">
            <h4>Ejemplos Reales</h4>
            <p>{quadrant.extendedInfo.examples}</p>
          </div>

          {quadrant.extendedInfo.subcategories && quadrant.extendedInfo.subcategories.length > 0 && (
            <div className="info-section subcategories">
              <h4>Subcategorías / Modelos Derivados</h4>
              <ul>
                {quadrant.extendedInfo.subcategories.map((sub, idx) => (
                  <li key={idx}>
                    <strong>{sub.name}:</strong> {sub.desc}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
