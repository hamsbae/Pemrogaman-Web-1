import { useState } from "react";

export default function Home() {
  const [sisi, setSisi] = useState("");
  const [luasPermukaan, setLuasPermukaan] = useState("");

  const hitungKubus = () => {
    const s = parseFloat(sisi);

    if (isNaN(s) || s < 0) {
      setLuasPermukaan("Input tidak valid");
      return;
    }

    // Rumus Luas Permukaan Kubus: 6 * s^2
    const lp = 6 * Math.pow(s, 2);

    setLuasPermukaan(lp.toFixed(2));
  };

  return (
    <section
      className="form-container"
      aria-label="Form input panjang sisi kubus serta hasil luas permukaan"
    >
      <h3>Kubus</h3>
      <div className="form-row">
        <label htmlFor="sisi">Panjang Sisi</label>
        <input
          type="number"
          id="sisi"
          name="sisi"
          aria-required="true"
          value={sisi}
          onChange={(e) => setSisi(e.target.value)}
          placeholder="Masukkan panjang sisi"
          min="0"
          step="any"
        />
      </div>
      <div className="form-row" style={{ justifyContent: "flex-start" }}>
        <label aria-hidden="true">Hitung</label>
        <button
          type="button"
          id="hitung"
          onClick={hitungKubus}
          aria-label="Tombol untuk menghitung luas permukaan kubus"
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
