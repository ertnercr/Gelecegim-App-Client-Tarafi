import React, { useState } from "react";
import { Container } from "./ComponentCss/FilterMenuCss";
import SelectValidation from "./SelectValidation";
import IlcelerVd from "./IlcelerVd";
const FilterForm = ({ onFilter }) => {
  const [selectedIl, setSelectedIl] = useState("");
  const [selectedIlce, setSelectedIlce] = useState("");
  const [selectedKategori, setSelectedKategori] = useState("");
  const [selectedaltKategori, setSelectedaltKategori] = useState("");
  const [taksitlimi, setTaksitlimi] = useState(false);
  const [sertifikalimi, setSertifikalimi] = useState(false);
  const [minUcret, setMinUcret] = useState("");
  const [maxUcret, setMaxUcret] = useState("");
  const filterData = new FormData();

  const handleFilter = (e) => {
    e.preventDefault();

    filterData.append("selectedIl", selectedIl);
    filterData.append("selectedIlce", selectedIlce);
    filterData.append("selectedKategori", selectedKategori);
    filterData.append("selectedaltKategori", selectedaltKategori);
    filterData.append("taksitlimi", taksitlimi);
    filterData.append("sertifikalimi", sertifikalimi);
    filterData.append("minUcret", minUcret);
    filterData.append("maxUcret", maxUcret);
  };

  return (
    <Container>
      <form onSubmit={handleFilter}>
        <div className="il-div">
          <label>
            City:
            <SelectValidation
              value={selectedIl}
              getir="Iller"
              onChange={(o) => setSelectedIl(o)}
            />
          </label>
        </div>
        <div className="ilce-div">
          <label>
            Ilce:
            <IlcelerVd
              value={selectedIlce}
              il={selectedIl}
              getir="Ilceler"
              onChange={(o) => setSelectedIlce(o)}
            />
          </label>
        </div>

        <div className="mainKategori-div">
          <label>
            Kategori:
            <input
              type="text"
              value={selectedKategori}
              onChange={(e) => setSelectedKategori(e.target.value)}
            />
          </label>
        </div>
        <div className="altKategori-div">
          <label>
            altKategori:
            <input
              type="text"
              value={selectedaltKategori}
              onChange={(e) => setSelectedaltKategori(e.target.value)}
            />
          </label>
        </div>
        <div className="taksit-div">
          <label>
            Taksit Available:
            <input
              type="checkbox"
              checked={taksitlimi}
              onChange={() => setTaksitlimi(!taksitlimi)}
            />
          </label>
        </div>
        <div className="sertifika-div">
          <label>
            sertifaklimi Course:
            <input
              type="checkbox"
              checked={sertifikalimi}
              onChange={() => setSertifikalimi(!sertifikalimi)}
            />
          </label>
        </div>
        <div className="minucret-div">
          <label>
            Min Ucret:
            <input
              type="number"
              value={minUcret}
              onChange={(e) => setMinUcret(e.target.value)}
            />
          </label>
        </div>
        <div className="maxucret-div">
          <label>
            Max Ucret:
            <input
              type="number"
              value={maxUcret}
              onChange={(e) => setMaxUcret(e.target.value)}
            />
          </label>
        </div>
        <div className="button-div">
          <button className="button" type="submit">
            Filter
          </button>
        </div>
      </form>
    </Container>
  );
};

export default FilterForm;
