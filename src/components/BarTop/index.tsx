//import {MDCTopAppBar} from '@material/top-app-bar'
//import Button from '../Button'
import './_bar_top.scss'


function BarTop() {
    //const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    //const topAppBar = new MDCTopAppBar(topAppBarElement!);
    return (
        <>
            <header className="mdc-top-app-bar">
                <div className="mdc-top-app-bar__row">
                    <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                        {/*<Button></Button>*/}
                        <button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Open navigation menu">menu</button>
                        <span className="mdc-top-app-bar__title">Page title</span>
                    </section>
                    <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                        <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Favorite">favorite</button>
                        <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Search">search</button>
                        <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Options">more_vert</button>
                    </section>
                </div>
            </header>
            {/*<main className="mdc-top-app-bar--fixed-adjust">App content</main>*/}
        </>
    )
}

export default BarTop
