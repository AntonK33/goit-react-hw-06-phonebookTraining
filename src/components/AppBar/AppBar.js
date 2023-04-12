import { StatusFilter } from "components/StatusFilter/StatusFilter";
import { TaskCounter } from "components/TaskCounter/TaskCounter";
import css from "./AppBar.module.css";
import { Button } from "components/Button/Button";
import { useDispatch } from "react-redux";
import { deleteCompletedTask } from "redux/actions";
export const AppBar = () => {
  const dispatch = useDispatch();
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <Button onClick={()=>dispatch(deleteCompletedTask())}>Delete completed</Button>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};