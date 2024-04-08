import PropTypes from "prop-types";
import styles from "./index.module.css";
import { Country } from "../Country/index";

export const Card = () => {
  return (
    <div className={styles.card}>
      <Country
        info={{
          imgUrl: "https://www.civillink.net/sozai/kokki100/pics2654.gif",
          name: "アメリカ",
        }}
      />
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: null,
};
