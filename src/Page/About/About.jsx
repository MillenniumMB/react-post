import css from "./About.module.css"

const About = () => {
    return (
        <div className={css.Img}>
            <section className={css.section}>
                <h6 className={css.title_}>Всем привет!</h6>
                <h2 className={css.title_sub}>Это мой проект для изучения React</h2>
                <div className={css.mainText}>
                    Лучший способ понять язык, это пилить проекты!
                </div>
            </section>
        </div>
    )
}

export default About