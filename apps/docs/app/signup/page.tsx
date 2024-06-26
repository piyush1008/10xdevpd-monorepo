import { Button } from "@repo/ui/button";
import InputBox from "@repo/ui/input-box";
import Signup from "@repo/ui/signup";

export default  function signup(){
    return <div className="flex flex-row">
        <div>
            <InputBox />
        </div>
        <div>
            <Button  children="signup" appName={"mapp"} />
        </div>
        
    </div>
}