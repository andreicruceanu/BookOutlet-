import styles from "./styles.module.css";
import FormPersonalData from "../Components/FormPersonalData/FormPersonalData";
import Container from "./ContainerPersonalData/Container";
import Button from "../../../components/ui/Button/Button";
import useModal from "../../../hooks/useModal";
import Modal from "../../../components/modal/Modal";
import FormAddress from "../Components/FormAddress/FormAddress";
import useFetch from "../../../hooks/useFetch";
import Spinner from "../../../components/Spinner/Spinner";
function PersonalData() {
  const { isOpenModal, onOpenModal, onCloseModal } = useModal();

  const { data, isLoading, err } = useFetch("/profile");

  if (err) console.log(err);

  return (
    <div className={styles.personalDataMain}>
      {isLoading ? (
        <Container>
          <div className={styles.wrapSpinner}>
            <Spinner />
          </div>
        </Container>
      ) : (
        <>
          <Container title="Date personale">
            <FormPersonalData data={data} />
          </Container>
          <Container title="Adresele mele">
            <Button
              onClick={onOpenModal}
              type="button"
              variant="secondary"
              name="Adauga adresa"
              className="max-w-250"
            />
          </Container>
          <Modal
            isOpen={isOpenModal}
            onClose={onCloseModal}
            title="Adaugă o nouă adresă de livrare"
          >
            <FormAddress onClose={onCloseModal} />
          </Modal>
        </>
      )}
    </div>
  );
}

export default PersonalData;
