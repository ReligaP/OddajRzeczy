import { useState } from 'react';
import Decoration from "../assets/Decoration.svg";
import browserPaginationOptions from "../database/browserPaginationOptions";

const HomeWhoWeHelp = () => {
    const [items,setItems] = useState(browserPaginationOptions.fund.items);
    const [title,setTitle] = useState(browserPaginationOptions.fund.description);
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage] = useState(3);

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = items.slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / todosPerPage); i++) {
                pageNumbers.push(i);
         }
    const handleClick = (e) => {
            setCurrentPage(Number(e.target.id));
        };
    const handleClickFund = () => {
            setItems(browserPaginationOptions.fund.items);
            setTitle(browserPaginationOptions.fund.description);
            setCurrentPage(1);
        };
    const handleClickOrg = () => {
            setItems(browserPaginationOptions.organizations.items);
            setTitle(browserPaginationOptions.organizations.description);
            setCurrentPage(1);
        };
    const handleClickLocal = () => {
            setItems(browserPaginationOptions.local.items);
            setTitle(browserPaginationOptions.local.description);
            setCurrentPage(1);
        };

    const renderTodos = currentTodos.map((item, index) => {
            return (
                    <li
                        key={index}
                        className="homeWhoWeHelpBox_li"
                    >
                        <div className="homeWhoWeHelpBox_content__items">
                            <div
                                className="content_text"
                            >
                                <p
                                    className="content_text__title"
                                >
                                    {item.title}
                                </p>
                                <p
                                    className="content_text__subtitle"
                                >
                                    {item.subtitle}
                                </p>
                            </div>
                            <p
                                className="content_text__items"
                            >
                                {item.things}
                            </p>
                        </div>
                    </li>
            )
        });
    const renderPageNumbers = pageNumbers.map(number => {
            return (
                <div
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className="homeWhoWeHelpBox_pagination"
                >
                    {number}
                </div>
            );
        });

    return(
        <section className="homeWhoWeHelpContainer">
            <div
                id="HomeWhoWeHelp"
                className="homeWhoWeHelpBox"
            >
                <div className="homeWhoWeHelpBox_title">
                    <div className="homeWhoWeHelpBox_title__content">
                        Komu pomagamy ?
                    </div>
                    <img
                        src={Decoration}
                        alt="decoration sign"
                    />
                    </div>
                <div className="homeWhoWeHelpBox_select">
                    <div
                        className="homeWhoWeHelpBox_select__box"
                        onClick={handleClickFund}
                    >
                        Fundacjom
                    </div>
                    <div
                        className="homeWhoWeHelpBox_select__box"
                        onClick={handleClickOrg}
                    >
                        <p>Organizacjom</p>
                        <p>pozarządowym</p>
                    </div>
                    <div
                        className="homeWhoWeHelpBox_select__box"
                        onClick={handleClickLocal}
                    >
                        <p>Lokalnym</p>
                        <p>zbiórkom</p>
                    </div>
                </div>
                <div className="homeWhoWeHelpBox_content">
                    <div className="homeWhoWeHelpBox_content__title">
                        {title}
                    </div>
                    {renderTodos}
                    {
                        pageNumbers.length === 1 ?
                            ""
                            :
                            <div
                                className="homeWhoWeHelpBox_content__paginationBox"
                                id="page-numbers"
                            >
                                {renderPageNumbers}
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeWhoWeHelp;


