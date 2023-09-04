import React, { useState } from 'react';
import Modal from './Modal';
import '../App.css';
import './modal.css';
import { NavLink } from 'react-router-dom';
import { JS_ROUTE } from '../utils/consts';

const Inception = () => {
    const [modalActive, setModalActive] = useState(false)
    const [selectedContent, setSelectedContent] = useState(null);

    const openModal = (content) => {
        setSelectedContent(content);
        setModalActive(true);
    };
    return (
        <div className='inception'>
            <button className='open-btn' onClick={() => openModal(<img src='./assets/images/yandex.png' alt='Школьное фото'></img>)}>
                Школьное фото
            </button>
            <button className='open-btn' onClick={() => openModal(<a><p>Моя история знакомства с программированием уходит своими корнями в далекий 2010 год. Тогда я был молодым школьником, и мир компьютерных игр, в частности, CS 1.6, был нашей страстью. Но помимо бесконечных баталий в виртуальных аренах, среди нас стало модным иметь собственный веб-сайт для каждой команды.</p>

                                                                    <p>Именно тогда я впервые познакомился с конструктором сайтов ucoz. Это был мой первый шаг в мир веб-разработки, и тогда я не мог даже представить, насколько это изменит мою жизнь. Все, начиная от дизайна и заканчивая кодом, было чем-то удивительным и загадочным.</p>

                                                                    <p>С годами, наступившими после моих школьных лет, я понял, что веб-разработка действительно заинтересовала меня. Когда пришло время выбирать направление для учебы в университете, мой выбор был очевиден - я хотел заниматься программированием.</p>

                                                                    <p>Университетские годы были наполнены знаниями, испытаниями и множеством новых навыков. Я углубился в мир веб-разработки и начал изучать не только основы, но и более сложные технологии. В этом процессе я нашел свое призвание и страсть.</p>

                                                                    <p>Сейчас, спустя годы, я продолжаю увлеченно заниматься веб-разработкой. Каждый новый проект, каждая новая задача - это возможность для меня учиться и расти в этой увлекательной области. И хотя технологии меняются, а проекты становятся все более сложными, моя страсть к программированию остается неизменной.</p>
            </a>)}>
                История о программировании
            </button>
            <button className='open-btn' onClick={() => openModal(<a href="https://github.com/OmgDie/yandex-test">Ссылка на исходники</a>)}>
                Исходники
            </button>
            <button className='open-btn' onClick={() => openModal(<video controls width="400" src='./assets/videos/css.mp4' />)}>
                Css фишка
            </button>
            <button className='open-btn'>
                <NavLink to={JS_ROUTE}>
                    Активность JavaScript
                </NavLink>
            </button>
            <Modal active={modalActive} setActive={setModalActive}>
                {selectedContent}
            </Modal>
        </div>
    );
};

export default Inception;