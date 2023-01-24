import Button from "./Button";
import { useLocation } from "react-router-dom";

interface IHeader {
  title?: string;
  onAdd: () => void;
  showAdd: boolean;
}

const Header = ({ title, onAdd, showAdd }: IHeader) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "pink" : "purple"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

// export class Header extends Component {
//   render() {
//     return (
//       <div>Header</div>
//     )
//   }
// }

export default Header;
