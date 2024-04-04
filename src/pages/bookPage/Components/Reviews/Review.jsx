import dayjs from "dayjs";
import styles from "./styles.module.css";
import BookStar from "../../../../components/bookStar/BookStar";
import { BiLike } from "react-icons/bi";
import { TbMessagePlus } from "react-icons/tb";
import { FaRegComments } from "react-icons/fa";

const Review = ({ comment }) => {
  console.log(comment);
  return (
    <div className={styles.comment} key={comment._id}>
      <div className={styles.commentWrap}>
        <div className={styles.commentHeaderWrap}>
          <span className={styles.avatar}>
            <b className={styles.avatarName}>{comment?.userName.slice(0, 1)}</b>
          </span>
          <div className={styles.commnetUserWrap}>
            <p>
              {comment?.userName}
              <span className={styles.commentDate}>
                {dayjs(comment.createdAt).format("DD-MM-YYYY")}
              </span>
            </p>
            <BookStar rating={comment?.rating} />
          </div>
        </div>
        <div className={styles.commentDetails}>
          <h6>{comment?.title}</h6>
          <p>{comment?.text}</p>
        </div>
        <div className={styles.commentReactions}>
          <div className={styles.commentReactionsWrap}>
            <BiLike />
            <p className={styles.commentReactionsText}>2</p>
          </div>
          <div className={styles.commentReactionsWrap}>
            <TbMessagePlus />
            <p className={styles.commentReactionsText}>Raspunde</p>
          </div>
          <div className={styles.commentReactionsWrap}>
            <FaRegComments />
            <p className={styles.commentReactionsText}>Comentarii(0)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
