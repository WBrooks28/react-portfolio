import React from "react";
import TableTopImg from '../../assets/tabletop-img.PNG';
import BookSearchImg from '../../assets/book-search-img.PNG';
import CodConnectImg from '../../assets/cod-connect-img.png';
import BudgetImg from '../../assets/budget-img.PNG';
import PasswordImg from '../../assets/password-img.PNG';
import TaskImg from '../../assets/task-img.PNG';

function Projects() {
    return (
        <section className="row justify-content-around">
            <div className="card m-1">
                <h3>Tabletop Group Finder</h3>
                <img src={TableTopImg} alt=''></img>
                <a href="https://github.com/WBrooks28/tabletop-group-finder" target='_blank' rel="noopener noreferrer">Repo</a>
                <a href="https://young-cove-50346.herokuapp.com/" target='_blank' rel="noopener noreferrer">Deployment</a>
            </div>

            <div className="card m-1">
                <h3>Book Search Engine</h3>
                <img src={BookSearchImg} alt=''></img>
                <a href="https://github.com/WBrooks28/book-search-engine" target='_blank' rel="noopener noreferrer">Repo</a>
                <a href="https://infinite-tor-41384.herokuapp.com/" target='_blank' rel="noopener noreferrer">Deployment</a>
            </div>

            <div className="card m-1">
                <h3>CoD Connect</h3>
                <img src={CodConnectImg} alt=''></img>
                <a href="https://github.com/benjamind10/gaming-blog" target='_blank' rel="noopener noreferrer">Repo</a>
                <a href="https://rocky-sierra-14761.herokuapp.com/" target='_blank' rel="noopener noreferrer">Deployment</a>
            </div>

            <div className="card m-1">
                <h3>Budget Tracker</h3>
                <img src={BudgetImg} alt=''></img>
                <a href="https://github.com/WBrooks28/budget-tracker" target='_blank' rel="noopener noreferrer">Repo</a>
                <a href="https://safe-escarpment-45241.herokuapp.com/" target='_blank' rel="noopener noreferrer">Deployment</a>
            </div>

            <div className="card m-1">
                <h3>Password Generator</h3>
                <img src={PasswordImg} alt=''></img>
                <a href="https://github.com/WBrooks28/password-generator" target='_blank' rel="noopener noreferrer">Repo</a>
                <a href="https://wbrooks28.github.io/password-generator/" target='_blank' rel="noopener noreferrer">Deployment</a>
            </div>

            <div className="card m-1">
                <h3>Taskinator</h3>
                <img src={TaskImg} alt=''></img>
                <a href="https://github.com/WBrooks28/taskinator" target='_blank' rel="noopener noreferrer">Repo</a>
                <a href="https://wbrooks28.github.io/taskinator/" target='_blank' rel="noopener noreferrer">Deployment</a>
            </div>
        </section>
    )
}

export default Projects;