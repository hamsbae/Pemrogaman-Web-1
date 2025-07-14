import logoImage from './../images-removebg-preview.png'; // Path disesuaikan

export default function HeadTitle() {
  return (
    <div className="header">
      <div className="judul-website" aria-label="Judul website">
        Pemrogaman Web 1
      </div>
      <div className="logo-circle" aria-label="Logo berbentuk lingkaran">
        <img src={logoImage} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
      </div>
    </div>
  );
}
