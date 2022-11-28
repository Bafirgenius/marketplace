// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import SignInForm from "../../component/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
    // useEffect(() => {
    //     async function getResult() {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(
    //                 response.user
    //             );
    //         }
    //     }
    //     getResult();
    // }, []);
    return (
        <div className="authentication-container">
            <SignInForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
            <SignUpForm />
        </div>
    );
};

export default Authentication;
