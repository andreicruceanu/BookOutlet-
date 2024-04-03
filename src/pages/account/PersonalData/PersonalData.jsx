import styles from "./styles.module.css";
import FormPersonalData from "../Components/FormPersonalData/FormPersonalData";
import Container from "./ContainerPersonalData/Container";
import Button from "../../../components/ui/Button/Button";

function PersonalData() {
  return (
    <div className={styles.personalDataMain}>
      <Container title="Date personale">
        <FormPersonalData />
      </Container>
      <Container title="Adresele mele">
        <Button
          type="button"
          variant="secondary"
          name="Adauga adresa"
          className="max-w-250"
        />
      </Container>
    </div>
  );
}

export default PersonalData;
