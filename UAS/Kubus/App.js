    // src/App.js
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

    // Import komponen-komponen yang telah kita buat
    import HeadTitle from "./component/HeadTitle";
    import HeadNav from "./component/HeadNav";
    import Home from "./component/Home"; // Ini akan menjadi halaman utama (Home)
    import Pendaftaran from "./component/Pendaftaran"; // Komponen baru
    import Informasi from "./component/Informasi";     // Komponen baru
    import KontakKami from "./component/KontakKami";   // Komponen baru
    import Footer from "./component/Footer";

    import './App.css';

    export default function App() {
      return (
        <Router> {/* Bungkus seluruh aplikasi dengan Router */}
          <div className="container" role="main" aria-label="Form perhitungan luas permukaan limas segi empat">
            <HeadTitle />
            <HeadNav /> {/* Navigasi akan tetap terlihat di semua halaman */}

            {/* Definisi Routes */}
            <Routes>
              <Route path="/" element={<Home />} /> {/* Halaman utama */}
              <Route path="/pendaftaran" element={<Pendaftaran />} />
              <Route path="/informasi" element={<Informasi />} />
              <Route path="/kontak-kami" element={<KontakKami />} />
              {/* Anda bisa menambahkan Route untuk halaman 404 jika diperlukan */}
              {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
            </Routes>

            <Footer /> {/* Footer akan tetap terlihat di semua halaman */}
          </div>
        </Router>
      );
    }
    