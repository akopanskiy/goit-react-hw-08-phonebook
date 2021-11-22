import styles from './ViewsStyles.module.css';

const HomeView = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.homePageHead}>
        All your contacts in one place! Register and be happy :-)
      </h1>
    </div>
  );
};
export default HomeView;
