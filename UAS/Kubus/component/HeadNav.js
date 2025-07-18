    // src/component/HeadNav.js
    import { Link } from 'react-router-dom'; // Import Link

    export default function HeadNav() {
      return (
        <nav aria-label="Navigasi utama">
          {/* Gunakan Link untuk navigasi */}
          <Link to="/">
            <button type="button" aria-pressed="false">HOME</button>
          </Link>
          <Link to="/pendaftaran">
            <button type="button" aria-pressed="false">PENDAFTARAN</button>
          </Link>
          <Link to="/informasi">
            <button type="button" aria-pressed="false">INFORMASI</button>
          </Link>
          <Link to="/kontak-kami">
            <button type="button" aria-pressed="false">KONTAK KAMI</button>
          </Link>
        </nav>
      );
    }
    