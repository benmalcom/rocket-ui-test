import React from 'react';
import Routes from '../routes'
import Navigation from "../components/Navigation";

const menu = Navigation();

const Layout = () => <div>
    <main className="layout">
        <nav>
            {menu}
        </nav>
        <section>
            <Routes/>
        </section>
    </main>
</div>;

export default Layout;
