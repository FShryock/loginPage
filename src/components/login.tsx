
export default function Login() {
    return (
        <div className="form">
            <h2>Sign in</h2>
            <div className="input-box">
                <input type="text"  required= {true}/>
                <span>Username</span>
                <i></i>
            </div>
            <div className="input-box">
                <input type="password" required={true} />
                <span>Password</span>
                <i></i>
            </div>
            <div className="links">
                <a href="#">Forgot Password</a>
                <a href="#">Signup</a>
            </div>
            <input type="submit" value={"Login"}/>
        </div>
    );
}