import { Link, Outlet } from "react-router-dom";
import LinksStyle from "./LinksC";
const Links = () => {
  return (
    <>
      <nav style={LinksStyle.div}>
        <Link to="question1">Question1</Link>
        <Link to="question2">Question2</Link>
        <Link to="question3">Question3</Link>
        <Link to="question4">Question4</Link>
        <Link to="question5">Question5</Link>
        <Link to="question6">Question6</Link>
        <Link to="question7">Question7</Link>
        <Link to="question8">Question8</Link>
        <Link to="question9">Question9</Link>
        <Link to="question10">Question10</Link>
        <Link to="question11">Question11</Link>
        <Link to="question12">Question12</Link>
        <Link to="question13">Question13</Link>
        <Link to="question14">Question14</Link>
        <Link to="question15">Question15</Link>
        <Link to="question16">Question16</Link>
        <Link to="question17">Question17</Link>
        <Link to="question18">Question18</Link>
        <Link to="question19">Question19</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Links;
