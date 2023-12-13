import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa6";

const SurahDetailComponent = () => {
  const { nomor } = useParams();
  const [surat, setSurat] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://quran-api.santrikoding.com/api/surah/${nomor}`
        );
        const data = await response.json();
        setSurat(data);
        console.log(data.ayat);
      } catch (error) {
        console.error("Error fetching surah detail:", error);
      }
    };

    fetchData();
  }, [nomor]);

  if (!surat) {
    return null; // or some loading indicator
  }

  return (
    <div className="element_detail_surah">
      {surat.ayat.map((ayat) => (
        <div className="card_element_detail_surah" key={ayat.id}>
          <h3>{ayat.nama_latin}</h3>
          <Row className="d-flex justify-content-between">
            <Col xs="1">
              <div className="element_nomer">
                <p>{ayat.nomor}</p>
              </div>
            </Col>
            <Col xs="10">
              <div className="element_ayat">
                <div className="float-end">{ayat.ar}</div>
              </div>
            </Col>
          </Row>
          <div>{ayat.idn}</div>
        </div>
      ))}
    </div>
  );
};

export default SurahDetailComponent;
