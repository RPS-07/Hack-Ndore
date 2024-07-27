import signupImg from "../assets/Logo/newlogo.png"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Experience a new level of efficiency and transparency in managing your municipal taxes and fees."
      description1="Build skills for today, tomorrow, and beyond."
      description2=" Citizens can download tax statements, receipts, and other certificates from their login, with the ability to identify multiple owned properties"
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup