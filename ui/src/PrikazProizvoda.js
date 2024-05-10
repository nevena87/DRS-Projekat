import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PotvrdaKupovine from './PotvrdaKupovine';

const PrikazProizvoda = ({ proizvod, kartica, isAdmin }) => {

    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const stilKartice = {
        width: '18rem',
        fontFamily: 'Calibri',
    };

    const stilSlike = {
        width: '100%',
        height: '80%'
    };

    const stilDugmeta = {
        color:'black',
        border: '0.5px inset #3d2b1f',
        fontFamily: 'Calibri',
    };

    return (
        <div className="card" style={stilKartice}>
            <img src={proizvod.slika} className="card-img-top" alt={proizvod.naziv} style={stilSlike} />
            <div className="card-body" style={{ marginTop: '50px' }}>
                <h4 className="card-title">{proizvod.naziv}</h4>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Cena: {proizvod.cena} {proizvod.valuta}</li>
                <li className="list-group-item">Količina: {proizvod.kolicina}</li>
                <li className="list-group-item">
                    <button className="btn btn-outline-success" onClick={handleOpenModal} style={stilDugmeta} disabled={isAdmin ? true : false}>Naruči</button>
                </li>
                <PotvrdaKupovine showModal={showModal} handleCloseModal={handleCloseModal} nazivProizvoda={proizvod.naziv} cenaProizvoda={proizvod.cena} valutaProizvoda={proizvod.valuta} kartica={kartica}/>
            </ul>
        </div>
    );
};

export default PrikazProizvoda;