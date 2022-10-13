import css from "./About.module.css"

const About = () => {
    return (
        <div className={css.Img}>
            <section className={css.section}>
                <h6 className={css.title_01__subTitle}>Всем привет!</h6>
                <h2 className={css.title_01__title}>Это мой проект для изучения React</h2>
                <div className={css.mainText}>
                    Лучший способом понять
                </div>
            </section>
        </div>
    )
}

export default About