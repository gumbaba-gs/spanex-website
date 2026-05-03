import React, { useState, useEffect } from 'react';
import './CropSchedulesTab.css';
import {
  CROPS,
  CATEGORIES,
  APPLICATION_METHODS,
  computeTotal,
  formatAmount,
} from '../../data/cropSchedules';

const CropSchedulesTab = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCrop, setSelectedCrop] = useState(null);

  const visibleCrops =
    activeCategory === 'all'
      ? CROPS
      : CROPS.filter((c) => c.category === activeCategory);

  const filterButtons = [{ id: 'all', label: 'All Crops' }, ...CATEGORIES];

  return (
    <div className="crop-schedules">
      {/* Filter row — editorial mono filter, replaces pill tabs */}
      <div className="crop-filter-row" role="tablist" aria-label="Filter crops by category">
        {filterButtons.map((btn) => {
          const active = activeCategory === btn.id;
          const count =
            btn.id === 'all'
              ? CROPS.length
              : CROPS.filter((c) => c.category === btn.id).length;
          return (
            <button
              key={btn.id}
              type="button"
              role="tab"
              aria-selected={active}
              className={`crop-filter ${active ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(btn.id)}
            >
              <span className="crop-filter-label">{btn.label}</span>
              <span className="crop-filter-count">{String(count).padStart(2, '0')}</span>
            </button>
          );
        })}
      </div>

      {/* Specimen grid — editorial monograph cards (no emojis, hairline borders) */}
      <div className="crop-grid" role="list">
        {visibleCrops.map((crop, idx) => (
          <button
            key={crop.slug}
            type="button"
            role="listitem"
            className="crop-entry"
            onClick={() => setSelectedCrop(crop)}
          >
            <div className="crop-entry-num">
              {String(idx + 1).padStart(2, '0')}
            </div>
            <div className="crop-entry-body">
              <div className="crop-entry-name">{crop.name}</div>
              <div className="crop-entry-meta">
                <span>{crop.cycleType || '—'}</span>
                <span className="crop-entry-meta-dot" aria-hidden="true">·</span>
                <span>{crop.cycleLength}</span>
              </div>
            </div>
            <div className="crop-entry-cta" aria-hidden="true">→</div>
          </button>
        ))}
      </div>

      {selectedCrop && (
        <ScheduleModal
          crop={selectedCrop}
          onClose={() => setSelectedCrop(null)}
        />
      )}
    </div>
  );
};

const ScheduleModal = ({ crop, onClose }) => {
  const pdfUrl = `${process.env.PUBLIC_URL || ''}/schedules/${crop.slug}.pdf`;

  // Lock body scroll while modal is open + ESC to close
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="crop-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="crop-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`crop-modal-title-${crop.slug}`}
      >
        <button
          type="button"
          className="crop-modal-close"
          onClick={onClose}
          aria-label="Close schedule"
        >
          Close ×
        </button>

        <header className="crop-modal-head">
          <div className="crop-modal-doc-id">SPANEX · Application Schedule</div>
          <h3 id={`crop-modal-title-${crop.slug}`} className="crop-modal-title">
            {crop.name}
          </h3>
          <div className="crop-modal-meta">
            <span>{crop.cycleType}</span>
            <span className="crop-modal-meta-rule" aria-hidden="true" />
            <span>{crop.cycleLength}</span>
          </div>
          {crop.description && (
            <p className="crop-modal-desc">{crop.description}</p>
          )}
        </header>

        {/* Method legend */}
        <div className="crop-modal-legend" aria-label="Application methods">
          <span className="crop-modal-legend-label">Application methods</span>
          {Object.entries(APPLICATION_METHODS).map(([key, m]) => (
            <span key={key} className="crop-legend-chip">
              <span className="crop-legend-mark" style={{ background: m.color }}>
                {m.symbol}
              </span>
              <span className="crop-legend-text">{m.label}</span>
            </span>
          ))}
        </div>

        {/* Schedule table — editorial monograph */}
        <div className="crop-table-wrap">
          <table className="crop-table">
            <thead>
              <tr>
                <th className="crop-table-product-col">Product</th>
                {crop.stages.map((stage, idx) => (
                  <th key={idx} className="crop-table-stage-col">
                    <div className="crop-table-stage-name">{stage}</div>
                    <div className="crop-table-stage-week">{crop.weeks[idx]}</div>
                  </th>
                ))}
                <th className="crop-table-total-col">Total / ha</th>
              </tr>
            </thead>
            <tbody>
              {crop.products.map((product) => (
                <tr key={product.name}>
                  <th scope="row" className="crop-table-product-cell">
                    <div className="crop-table-product-name">{product.name}</div>
                    <div className="crop-table-product-desc">{product.desc}</div>
                  </th>
                  {crop.stages.map((_, idx) => {
                    const app = product.applications[idx];
                    if (!app) return <td key={idx} className="crop-table-empty">—</td>;
                    const m = APPLICATION_METHODS[app.method];
                    return (
                      <td key={idx} className="crop-table-applied">
                        <div className="crop-table-applied-content">
                          <span
                            className="crop-table-mark"
                            style={{ background: m.color }}
                            title={m.label}
                          >
                            {m.symbol}
                          </span>
                          <span className="crop-table-amount">
                            {formatAmount(app.amount, product.unit)}
                          </span>
                        </div>
                      </td>
                    );
                  })}
                  <td className="crop-table-total-cell">
                    {computeTotal(product)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {crop.notes && (
          <div className="crop-modal-notes">
            <span className="crop-modal-notes-label">Notes</span>
            <p>{crop.notes}</p>
          </div>
        )}

        {crop.notesList && crop.notesList.length > 0 && (
          <details className="crop-modal-general-notes">
            <summary>General application notes — SRT field manual</summary>
            <ul>
              {crop.notesList.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          </details>
        )}

        <div className="crop-modal-foot">
          <a
            className="crop-modal-download"
            href={pdfUrl}
            download={`${crop.slug}-schedule.pdf`}
          >
            Download PDF
            <span aria-hidden="true">↓</span>
          </a>
          <p className="crop-modal-disclaimer">
            All capsule dosages quoted per 2 hectares (one box treats 2 ha).
            Schedule based on average soil and temperature conditions —
            adjust to local field reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CropSchedulesTab;
