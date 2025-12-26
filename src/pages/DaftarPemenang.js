import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal';
import '../App.css';

// DATA PEMENANG
const allPemenang = [
  { id: 1, no: 1, nik: '54274', nama: 'Andi Saputra', departement: 'Engineering' },
  { id: 2, no: 2, nik: '54275', nama: 'Budi Hartono', departement: 'Finance' },
  { id: 3, no: 3, nik: '54276', nama: 'Citra Kirana', departement: 'HR & GA' },
  { id: 4, no: 4, nik: '54277', nama: 'Dewi Lestari', departement: 'Marketing' },
  { id: 5, no: 5, nik: '54278', nama: 'Eko Prasetyo', departement: 'Operations' },
  { id: 6, no: 6, nik: '54279', nama: 'Fajar Nugraha', departement: 'IT Support' },
  { id: 7, no: 7, nik: '54280', nama: 'Gita Gutawa', departement: 'Procurement' },
  { id: 8, no: 8, nik: '54281', nama: 'Hadi Wibowo', departement: 'Legal' },
  { id: 9, no: 9, nik: '54282', nama: 'Indah Permata', departement: 'HSE' },
  { id: 10, no: 10, nik: '54283', nama: 'Joko Anwar', departement: 'Engineering' },
  { id: 11, no: 11, nik: '54284', nama: 'Kartika Sari', departement: 'Finance' },
  { id: 12, no: 12, nik: '54285', nama: 'Lukman Hakim', departement: 'HR & GA' },
  { id: 13, no: 13, nik: '54286', nama: 'Mawar Eva', departement: 'Marketing' },
];

const DaftarPemenang = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0); 
  
  const itemsPerPage = 10; 

  const filteredData = allPemenang.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.nama.toLowerCase().includes(term) ||
      item.nik.includes(term) ||
      item.departement.toLowerCase().includes(term)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (newDirection, newPage) => {
    setDirection(newDirection);
    setCurrentPage(newPage);
  };

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 300 : -300, opacity: 0 })
  };

  return (
    <motion.div 
      className="page-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        
        {/* JUDUL */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Reveal width="100%">
             <h1 className="section-title">Daftar Pemenang</h1>
          </Reveal>
          <Reveal width="100%" delay={0.1}>
             <p className="section-subtitle">Daftar peserta terbaik periode ini.</p>
          </Reveal>
        </div>

        {/* SEARCH BAR */}
        <Reveal delay={0.2} width="100%">
          <div className="search-container" style={{maxWidth: '500px', margin: '0 auto 2rem auto'}}>
            <input 
              type="text" 
              className="search-input"
              placeholder="🔍 Cari Nama / NIK..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </Reveal>

        {/* LIST AREA */}
        <div style={{ overflowX: 'hidden', minHeight: '400px' }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 }}}
            >
              
              {/* DESKTOP TABLE (Layar Besar) */}
              <div className="desktop-view">
                <div className="table-wrapper glass-panel">
                  <table className="modern-table">
                    <thead>
                      <tr>
                        <th width="80px">No</th> {/* GANTI JUDUL KOLOM */}
                        <th>NIK</th>
                        <th>Nama Lengkap</th>
                        <th>Departemen</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.length > 0 ? (
                        currentItems.map((item, index) => (
                          <motion.tr 
                            key={item.id}
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.05 }}
                            whileHover={{ backgroundColor: "rgba(45, 212, 191, 0.1)" }}
                          >
                            {/* HANYA ANGKA */}
                            <td style={{fontWeight:'bold', color:'var(--primary)'}}>{item.no}</td>
                            <td style={{fontFamily:'monospace'}}>{item.nik}</td>
                            <td style={{fontWeight:'600'}}>{item.nama}</td>
                            <td><span className="dept-badge">{item.departement}</span></td>
                          </motion.tr>
                        ))
                      ) : (
                        <tr><td colSpan="4" style={{textAlign:'center', padding:'20px'}}>Data tidak ditemukan</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* MOBILE CARDS (Layar HP) */}
              <div className="mobile-view">
                {currentItems.length > 0 ? (
                  currentItems.map((item, index) => (
                    <motion.div 
                      key={item.id}
                      className="winner-card-mobile card-pulse"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="card-header-mobile">
                        {/* LINGKARAN NOMOR (Tanpa Pagar) */}
                        <div className="rank-circle">{item.no}</div>
                        <div className="card-info">
                          <h4>{item.nama}</h4>
                          <span className="nik-label">{item.nik}</span>
                        </div>
                      </div>
                      <div className="card-footer-mobile">
                        <span className="dept-badge">{item.departement}</span>
                      </div>
                    </motion.div>
                  ))
                ) : (
                   <div style={{textAlign:'center', color:'#aaa', padding:'20px'}}>Data tidak ditemukan</div>
                )}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* PAGINATION (Memanjang) */}
        {filteredData.length > itemsPerPage && (
          <Reveal delay={0.3} width="100%">
            <div className="pagination-wrapper">
              
              <button 
                onClick={() => paginate(-1, currentPage - 1)} 
                disabled={currentPage === 1} 
                className="pagination-btn arrow-btn wide-btn" // Tambah class wide-btn
              >
                ← Sebelumnya
              </button>
              
              <span className="page-info-text">
                 Hal. {currentPage} / {totalPages}
              </span>

              <button 
                onClick={() => paginate(1, currentPage + 1)} 
                disabled={currentPage === totalPages} 
                className="pagination-btn arrow-btn wide-btn" // Tambah class wide-btn
              >
                Selanjutnya →
              </button>
              
            </div>
          </Reveal>
        )}

      </div>
    </motion.div>
  );
};

export default DaftarPemenang;