import css from './Footer.module.css';


function Footer() {


    return (
        <header className={css.footer}>
            <div>
                <p className={css.para}>Footer</p>
                <p className={css.para}> All rights reserved</p>
                <p className={css.para}> Services and Help</p>
            </div>
        </header>
    );
}

export default Footer;
