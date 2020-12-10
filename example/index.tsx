import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useHideAndSeekMenu } from '../src/index';

const App: React.FC = () => {
    const navRef = React.useRef(null);
    useHideAndSeekMenu({
        ref: navRef,
    });

    return (
        <div className="main">
            <nav ref={navRef} className="navigation">
                <ul className="navigation-items">
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                </ul>
            </nav>
            <section className="section">
                <h2>Some Content</h2>
                <p>
                    Scroll down to see the menu disappear. Scroll up to see the
                    menu appear.
                </p>
            </section>
            <section className="section">
                <h2>Some More Content</h2>
                <p>
                    Scroll down to see the menu disappear. Scroll up to see the
                    menu appear.
                </p>
            </section>
            <section className="section">
                <h2>Even More Content</h2>
                <p>
                    Scroll down to see the menu disappear. Scroll up to see the
                    menu appear.
                </p>
            </section>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
