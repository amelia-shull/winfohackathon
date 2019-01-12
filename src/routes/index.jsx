import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import { Search } from "views/Search.jsx";
import { Quiz } from "views/Quiz.jsx";

var indexRoutes = [
  { path: "/search", name: "Search", component: Search },
  { path: "/quiz", name: "Quiz", component: Quiz },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;
