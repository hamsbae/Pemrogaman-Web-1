import { useState } from "react";

export default function Home() {
  const [jariJari, setJariJari] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [luasPermukaan, setLuasPermukaan] = useState("");

  const hitungTabung = () => {
    const r = parseFloat(jariJari);
    const t = parseFloat(tinggi);

    if (isNaN(r) || r < 0 || isNaN(t) || t < 0) {
      setLuasPermukaan("Input tidak valid");
      return;
    }

    // Rumus Luas Permukaan Tabung: 2 * pi * r * (r + t)
    // Menggunakan Math.PI untuk nilai pi
    const lp = 2 * Math.PI * r * (r + t);

    setLuasPermukaan(lp.toFixed(2));
  };

  return (
    <section
      className="form-container"
      aria-label="Form input jari-jari dan tinggi tabung serta hasil luas permukaan"
    >
      <h3>Tabung</h3>
      <div className="form-row">
        <label htmlFor="jariJari">Jari-jari (r)</label>
        <input
          type="number"
          id="jariJari"
          name="jariJari"
          aria-required="true"
          value={jariJari}
          onChange={(e) => setJariJari(e.target.value)}
          placeholder="Masukkan jari-jari"
          min="0"
          step="any"
        />
      </div>
      <div className="form-row">
        <label htmlFor="tinggi">Tinggi (t)</label>
        <input
          type="number"
          id="tinggi"
          name="tinggi"
          aria-required="true"
          value={tinggi}
          onChange={(e) => setTinggi(e.target.value)}
          placeholder="Masukkan tinggi"
          min="0"
          step="any"
        />
      </div>
      <div className="form-row" style={{ justifyContent: "flex-start" }}>
        <label aria-hidden="true">Hitung</label>
        <button
          type="button"
          id="hitung"
          onClick={hitungTabung}
          aria-label="Tombol untuk menghitung luas permukaan tabung"
        >
          Hitung
        </button>
      </div>
      <div className="form-row">
        <label htmlFor="luasPermukaan">Luas Permukaan</label>
        <input
          type="text"
          id="luasPermukaan"
          name="luasPermukaan"
          readOnly
          value={luasPermukaan}
          aria-live="polite"
          aria-atomic="true"
        />
      </div>
    </section>
  );
}
