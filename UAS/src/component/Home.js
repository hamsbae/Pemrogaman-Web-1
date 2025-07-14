import { useState } from "react";

export default function Home() {
  const [sisi, setSisi] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [luas, setLuas] = useState("");

  const hitungLuas = () => {
    const S = parseFloat(sisi);
    const T_limas = parseFloat(tinggi);

    if (isNaN(S) || isNaN(T_limas) || S < 0 || T_limas < 0) {
        setLuas("Input tidak valid");
        return;
    }

    const T_sisip = Math.sqrt(Math.pow((1 / 2) * S, 2) + Math.pow(T_limas, 2));
    const LP = Math.pow(S, 2) + 4 * (0.5 * S * T_sisip);

    setLuas(LP.toFixed(2));
  };

      return (
        <section className="form-container" aria-label="Form input panjang sisi dan tinggi limas serta hasil luas permukaan">
          <h3>Limas Segi Empat</h3>
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
          <div className="form-row">
            <label htmlFor="tinggi">Tinggi Limas</label>
            <input
              type="number"
              id="tinggi"
              name="tinggi"
              aria-required="true"
              value={tinggi}
              onChange={(e) => setTinggi(e.target.value)}
              placeholder="Masukkan tinggi limas"
              min="0"
              step="any"
            />
          </div>
          <div className="form-row" style={{ justifyContent: "flex-start" }}>
            <label aria-hidden="true">Hitung</label>
            <button type="button" id="hitung" onClick={hitungLuas} aria-label="Tombol untuk menghitung luas permukaan limas">
              Hitung
            </button>
          </div>
          <div className="form-row">
            <label htmlFor="luas">Luas Permukaan</label>
            <input type="text" id="luas" name="luas" readOnly value={luas} aria-live="polite" aria-atomic="true" />
          </div>
        </section>
      );
    }
    