import Typed from "react-typed";

export default function Navbar() {
    return(
        <div
        className="nav"
        style={{ backgroundColor: "gainsboro", display: "flex" , flexDirection:'row' , width:'100%' , justifyContent:'space-between'}}
      >
        <div className="name" style={{flex:'1' , justifyContent:'flex-start' , display:'flex'}}>
          <Typed
            strings={[
              '<span style="color:black">Jahmel</span> <span style="color:white">Raymond</span>',
            ]}
            typeSpeed={100}
            style={{
              color: "black",
              fontSize: 
              fontWeight: "500",
            
            }}
          />
        </div>
          <div className="links" style={{ flex:'1' , display:'flex' , justifyContent:'flex-end'}}>
            <ul style={{listStyle:'none' , display:'flex', wordSpacing:'5px'}}>
                <li>About</li>
                <li style={{wordSpacing:'0px'}}>Work History</li>
                <li>Skills</li>
                <li>Projects</li>
                {/* <li onClick={() => nav('https://github.com/jahmelraymond' , {replace : true})}><AiFillGithub /></li>
                <li  onClick={() => nav('www.linkedin.com/in/jahmel-raymond-a2b0182a8' , {replace : true})}><AiFillLinkedin /> </li> */}
                <li><a href="https://github.com/jahmelraymond"><AiFillGithub /></a></li>
                <li ><a style={{color:'royalblue'}} href="https://www.linkedin.com/in/jahmel-raymond-a2b0182a8"><AiFillLinkedin /></a></li>
            </ul>
          </div>
      </div>
    )
}