//import logo from "./logo.svg";
import "./App.css";
import { theme, ThemeProvider } from "@chakra-ui/react";
// import CourseEnrollmentForm from "./components/CourseEnrollmentForm";
// import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
// import RegisterationForm from "./components/RegisterationForm";
// import YoutubeForm from "./components/YoutubeForm";
// import YoutubeFormWithYup from "./components/YoutubeFormWithYup";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <YoutubeForm /> */}
        {/* <YoutubeFormWithYup /> */}
        {/* <FormikContainer /> */}
        <LoginForm />
        {/* <RegisterationForm /> */}
        {/* <CourseEnrollmentForm /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
