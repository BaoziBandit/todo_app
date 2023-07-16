import style from './Container.module.css';

const Container = (props) => {
  return <section className={style.container}>{props.children}</section>;
}

export default Container