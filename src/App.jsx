import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('inicio')
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <div className="herbario-container">
      {/* Encabezado */}
      <header className="herbario-header">
        <div className="logo-area">
          <span className="badge-lab">Laboratorio Botánico</span>
          <h1>Herbario Químico Artesanal</h1>
          <p className="subtitle">Extracción consciente, ciencia botánica y alquimia natural</p>
        </div>
        <nav className="herbario-nav">
          <button 
            className={activeTab === 'inicio' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setActiveTab('inicio')}
          >
            Inicio
          </button>
          <button 
            className={activeTab === 'catalogo' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setActiveTab('catalogo')}
          >
            Preparados & Extractos
          </button>
          <button 
            className={activeTab === 'proceso' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setActiveTab('proceso')}
          >
            El Método
          </button>
          <button 
            className={activeTab === 'contacto' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => setActiveTab('contacto')}
          >
            Contacto & Pedidos
          </button>
        </nav>
      </header>

      {/* Contenido Dinámico */}
      <main className="herbario-main">
        {activeTab === 'inicio' && (
          <section className="seccion-hero">
            <div className="hero-text">
              <h2>Donde la naturaleza se encuentra con la precisión analítica</h2>
              <p>
                Desarrollamos extractos botánicos, tinturas madres y aceites esenciales bajo estrictos estándares 
                de laboratorio artesanal. Rescatamos el conocimiento ancestral de las plantas combinándolo con 
                técnicas de separación y concentración química limpia.
              </p>
              <div className="hero-actions">
                <button className="btn-primary" onClick={() => setActiveTab('catalogo')}>
                  Ver Preparados
                </button>
                <button className="btn-secondary" onClick={() => setActiveTab('proceso')}>
                  Conocer el Proceso
                </button>
              </div>
            </div>
            <div className="hero-card">
              <div className="card-tag">Lote N° 01/2026</div>
              <h3>Tintura Madre de Jarilla & Retama</h3>
              <p>Maceración hidroalcohólica controlada de flora nativa de San Luis, con perfil terpenoide analizado.</p>
              <span className="status-badge">Disponible en frasco gotero ámbar</span>
            </div>
          </section>
        )}

        {activeTab === 'catalogo' && (
          <section className="seccion-catalogo">
            <h2>Catálogo de Preparados Químico-Botánicos</h2>
            <p className="section-desc">Cada formulación es elaborada en pequeños lotes para garantizar su pureza y concentración de principios activos.</p>
            
            <div className="grid-productos">
              <div className="producto-card">
                <span className="categoria">Extracto Líquido</span>
                <h3>Tintura Madre de Melisa & Menta</h3>
                <p>Concentrado fitoterapéutico indicado para el equilibrio del sistema nervioso y digestivo.</p>
                <span className="spec">Vehículo: Alcohol de cereal bidestilado 45%</span>
              </div>

              <div className="producto-card">
                <span className="categoria">Oleolato Artesanal</span>
                <h3>Macerado Oleoso de Caléndula & Hipérico</h3>
                <p>Extracción lipofílica de propiedades regenerativas para el cuidado y restauración dérmica.</p>
                <span className="spec">Vehículo: Aceite de Oliva Extra Virgen prensado en frío</span>
              </div>

              <div className="producto-card">
                <span className="categoria">Solución Concentrada</span>
                <h3>Hidrolato Puro de Romero</h3>
                <p>Agua floral obtenida por destilación de arrastre de vapor de hojas seleccionadas.</p>
                <span className="spec">Vehículo: Vapor de agua condensado sin aditivos</span>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'proceso' && (
          <section className="seccion-proceso">
            <h2>Nuestro Método Artesanal & Científico</h2>
            <div className="steps-container">
              <div className="step-box">
                <span className="step-number">01</span>
                <h3>Selección & Recolección</h3>
                <p>Identificación botánica rigurosa y cosecha respetuosa de los ciclos naturales de la planta.</p>
              </div>
              <div className="step-box">
                <span className="step-number">02</span>
                <h3>Maceración & Extracción</h3>
                <p>Uso de solventes puros medidos con precisión gravimétrica para aislar los principios activos deseados.</p>
              </div>
              <div className="step-box">
                <span className="step-number">03</span>
                <h3>Filtrado & Envasado</h3>
                <p>Procesos de filtración fina y envasado en vidrio ámbar esterilizado para proteger el producto de la fotodegradación.</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'contacto' && (
          <section className="seccion-contacto">
            <h2>Contacto Directo con el Laboratorio</h2>
            <p>¿Tenés dudas sobre formulaciones personalizadas o querés realizar un pedido de lote?</p>
            
            {enviado ? (
              <div className="mensaje-exito">
                <h3>¡Consulta recibida con éxito!</h3>
                <p>Nos pondremos en contacto a la brevedad en tu casilla de correo.</p>
                <button className="btn-primary" onClick={() => setEnviado(false)}>Enviar otra consulta</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contacto-form">
                <div className="form-group">
                  <label>Nombre</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.nombre} 
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="form-group">
                  <label>Correo Electrónico</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
                <div className="form-group">
                  <label>Mensaje / Consulta de Preparado</label>
                  <textarea 
                    rows="4" 
                    required 
                    value={formData.mensaje} 
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    placeholder="Describí tu consulta botánica o pedido..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">Enviar Mensaje</button>
              </form>
            )}
          </section>
        )}
      </main>

      {/* Pie de página */}
      <footer className="herbario-footer">
        <p>&copy; 2026 Herbario Químico Artesanal — Ciencia, Naturaleza y Precisión.</p>
      </footer>
    </div>
  )
}

export default App