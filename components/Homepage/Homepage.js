import css from './Homepage.module.scss'
import Link from 'next/link'


export default function Homepage({ speed, factor, url, ...props }) {
    return(
        <div className={css.homepageMain}>
            <div className={css.aboutMe}>
                <Link className={css.link} href="/aboutme">About Me</Link>
            </div>
            <div className={css.work}>                
                <Link className={css.link} href="/work">Work</Link>
            </div>
            <div className={css.projects}>
                <Link className={css.link} href="/projects">Projects</Link>
            </div>
            <div className={css.contact}>
                <Link className={css.link} href="/contact">Contact</Link>
            </div>
        </div>
    )
}
