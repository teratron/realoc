import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/Main'

const title: string = 'Template'

function Template() {
    return (
        <>
            <Header title={title}/>
            <Main>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>

                <form className="mt-5 mb-4 app-content">
                    <h2>Form</h2>
                    <div className="app-card">
                        <div className="form-tab mb-2">
                            <input
                                id="form-tab-1-1"
                                name="formTab1"
                                value="1"
                                type="radio"
                                defaultChecked={true}/>
                            <label htmlFor="form-tab-1-1">Tab 1</label>
                            <input
                                id="form-tab-1-2"
                                name="formTab1"
                                value="2"
                                type="radio"/>
                            <label htmlFor="form-tab-1-2">Tab 2</label>
                        </div>
                        <div className="form-tab">
                            <input
                                id="form-tab-2-1"
                                name="formTab2"
                                value="1"
                                type="radio"
                                defaultChecked={true}/>
                            <label htmlFor="form-tab-2-1">Tab 1</label>
                            <input
                                id="form-tab-2-2"
                                name="formTab2"
                                value="2"
                                type="radio"/>
                            <label htmlFor="form-tab-2-2">Tab 2</label>
                            <input
                                id="form-tab-2-3"
                                name="formTab2"
                                value="3"
                                type="radio"/>
                            <label htmlFor="form-tab-2-3">Tab 3</label>
                        </div>
                    </div>
                </form>
                <h2 className="">Button</h2>
                <div className="app-content mb-4">
                    <button type="button" className="btn">Default</button>
                    <button type="button" className="btn btn-primary">Button</button>
                    <button type="button" className="btn btn-primary">Primary</button>
                    <button type="button" className="btn btn-secondary">Secondary</button>
                    <button type="button" className="btn btn-success">Success</button>
                    <button type="button" className="btn btn-danger">Danger</button>
                    <button type="button" className="btn btn-warning">Warning</button>
                    <button type="button" className="btn btn-info">Info</button>
                    <button type="button" className="btn btn-light">Light</button>
                    <button type="button" className="btn btn-dark">Dark</button>
                    <button type="button" className="btn btn-link">Link</button>
                </div>
            </Main>
            <Footer/>
        </>
    )
}

export default Template
