import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/109532151_955931264866319_1511382525090232806_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=-yWHA2Cq5l0AX9U3qTT&_nc_ht=scontent-gru1-1.xx&oh=db640ba7f375b61e8311974a9d0927f4&oe=5F55B8B4" alt="Jose Ricardo"/>
            <div>
                <strong>José Ricardo</strong>
                <span>Quimica</span>
            </div>
        </header>

        <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br/><br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>

        <footer>
            <p>
                Preço/Hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="WhatsApp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;